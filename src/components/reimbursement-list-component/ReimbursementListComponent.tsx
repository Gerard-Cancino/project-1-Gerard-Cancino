import React, { SyntheticEvent } from 'react';
import { Container, Row, Form, Button, Col, Table } from 'react-bootstrap';
import Reimbursement from '../../models/Reimbursement';
import { revatureGetReimbursementListByUserId, revatureGetReimbursementListByStatusId, revatureUpdateReimbursement } from '../../remote/revature/reimbursement-list-revature';
import { TableRowComponent } from './table-row-component/TableRowComponent';
import { User } from '../../models/User';

interface ReimbursementListProps {
  userId:number,
  token:string,
  profile:User
}

interface ReimbursementListState {
  userId:number|undefined,
  statusId:number,
  reimbursementList:Array<Reimbursement>;
  stateOfLoad:string;
}

const stateOfLoad = {
  "SEARCHING":"Searching",
  "NO_RESULT":"No Results Found",
  "FOUND_RESULT":"Found Results"
}

export class ReimbursementListComponent extends React.Component<ReimbursementListProps,ReimbursementListState>{
  constructor(props:any){
    super(props);
    if(props.location.state && props.location.state.userId){
      this.state = {
        reimbursementList: [],
        userId:props.location.state.userId,
        statusId:1,
        stateOfLoad:stateOfLoad.FOUND_RESULT
      }
    }
    else{
      this.state = {
        reimbursementList: [],
        userId:undefined,
        statusId:1,
        stateOfLoad:stateOfLoad.FOUND_RESULT
      }
    }
    this.handlerUserId=this.handlerUserId.bind(this);
    this.handlerStatusId=this.handlerStatusId.bind(this);
    this.eventGetRLByUserId=this.eventGetRLByUserId.bind(this);
    this.eventGetRLByStatusId=this.eventGetRLByStatusId.bind(this);
    this.getReimbursementListByUserId=this.getReimbursementListByUserId.bind(this);
    this.getReimbursementListByStatusId=this.getReimbursementListByStatusId.bind(this);
    this.updateReimbursement=this.updateReimbursement.bind(this);
  }
  componentDidMount(){
    if(this.state.userId){
      this.getReimbursementListByUserId();
    }
  }
  eventGetRLByUserId(e:any){
    e.preventDefault();
    this.getReimbursementListByUserId();
  }
  eventGetRLByStatusId(e:any){
    e.preventDefault();
    this.getReimbursementListByStatusId();
  }
  async getReimbursementListByUserId(){
    this.setState({stateOfLoad:stateOfLoad.SEARCHING})
    //let res = await revatureGetReimbursementListByUserId(this.props.token, this.state.userId);
    try{
      const res = await revatureGetReimbursementListByUserId(this.props.token,this.state.userId);
      if(res.length===0){
        this.setState({
          reimbursementList:res,
          stateOfLoad:stateOfLoad.NO_RESULT
        })
      }
      else{
        this.setState({
          reimbursementList:res,
          stateOfLoad:stateOfLoad.FOUND_RESULT
        })
      }
    }
    catch(e){
      console.error(e)
    }
  }
  async getReimbursementListByStatusId(){
    this.setState({stateOfLoad:stateOfLoad.SEARCHING})
    try{
      const res = await revatureGetReimbursementListByStatusId(this.props.token,this.state.statusId);
      if(res.length===0){
        this.setState({
          reimbursementList:res,
          stateOfLoad:stateOfLoad.NO_RESULT
        })
      }
      else{
        this.setState({
          reimbursementList:res,
          stateOfLoad:stateOfLoad.FOUND_RESULT
        })
      }
    }
    catch(e){
      console.error(e);
    }
  }
  async updateReimbursement(e:SyntheticEvent,reimbursementId:number,status_id:number){
    e.preventDefault();
    try{
      await revatureUpdateReimbursement(this.props.token,reimbursementId,status_id,this.props.profile.userId);
      this.setState({statusId:status_id},()=>{
        this.getReimbursementListByStatusId();
        this.setState({statusId:1});
      })
    }
    catch(e){
      console.error(e);
    }
  }
  handlerUserId(e:any){
    console.log(e.target.value)
    this.setState({userId:e.target.value})
  }
  handlerStatusId(e:any){
    this.setState({statusId:e.target.value})
  }
  render(){
    return(
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.eventGetRLByUserId}>
              <Form.Group controlId="searchUserById">
                <Form.Label>Search By User ID</Form.Label>
                <Form.Control type="number" placeholder="User ID" defaultValue={this.state.userId} onChange={this.handlerUserId} required/> 
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col> 
            <Form onSubmit={this.eventGetRLByStatusId}>
              <Form.Group controlId="searchReimbursementStatus">
                <Form.Label>Search By Reimbursement Status</Form.Label>
                <Form.Control as="select" onChange={this.handlerStatusId}>
                  <option value={1}>Pending</option>
                  <option value={2}>Approved</option>
                  <option value={3}>Denied</option>  
                </Form.Control> 
              </Form.Group>
              <input className="btn btn-primary" type="submit" value="submit"/>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table responsive>
              <thead>
                <th>ID</th>
                <th>Author</th>
                <th>Amount</th>
                <th>Date Submitted</th>
                <th>Date Resolved</th>
                <th>Status</th>
                <th>Description</th>
                <th>Resolver</th>
                <th>Type</th>
                <th></th>
                <th></th>
              </thead>
              <tbody>
                {this.state.stateOfLoad===stateOfLoad.SEARCHING &&
                  <tr><td colSpan={11}>Searching</td></tr>}
                {this.state.stateOfLoad===stateOfLoad.NO_RESULT &&
                  <tr><td colSpan={11}>No Results Found</td></tr>}
                {this.state.stateOfLoad===stateOfLoad.FOUND_RESULT && this.state.reimbursementList.length!==0 &&
                  this.state.reimbursementList.map(el=>
                    <TableRowComponent key={el.reimbursementId} reimbursement={el} updateReimbursement={this.updateReimbursement}/>
                  )
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}