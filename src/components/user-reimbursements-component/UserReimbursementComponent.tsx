import React, { SyntheticEvent } from 'react';
import { Container, Row, Col, Table, Button, Form, Alert } from 'react-bootstrap';
import Reimbursement from '../../models/Reimbursement';
import { User } from '../../models/User';
import { TableRowComponent } from './table-row-component/TableRowComponent';
import { revatureCreateReimbursement } from '../../remote/revature/reimbursement-list-revature';

interface UserReimbursementProps {
  reimbursementList:Array<Reimbursement>,
  revatureGetUserReimbursementListActionMapper: (t:string,u:number) => void,
  token:string,
  profile:User,
}

interface UserReimbursementState {
  isShowCreateReimbursement:boolean,
  amount:number,
  type:number,
  description:string,
  errorMessage:string
}

export class UserReimbursementComponent extends React.Component<UserReimbursementProps,UserReimbursementState> {
  constructor(props:any){
    super(props);
    this.state = {
      isShowCreateReimbursement: false,
      amount: 0,
      type:1,
      description:'',
      errorMessage:''
    } 
    this.handlerIsShowCreateReimbursement=this.handlerIsShowCreateReimbursement.bind(this);
    this.handleType=this.handleType.bind(this);
    this.handleAmount=this.handleAmount.bind(this);
    this.handleDescription=this.handleDescription.bind(this);
    this.createReimbursement=this.createReimbursement.bind(this);
  }
  componentDidMount(){
    if(this.props.reimbursementList.length===0){
      this.props.revatureGetUserReimbursementListActionMapper(this.props.token,this.props.profile.userId);
    }
  }
  handlerIsShowCreateReimbursement (e:SyntheticEvent) {
    e.preventDefault();
    this.setState((prevState)=>({
      isShowCreateReimbursement:!prevState.isShowCreateReimbursement
    }))
  }
  handleAmount(e:any){
    e.preventDefault();
    this.setState({
      amount:e.target.value
    })
  }
  handleType(e:any){
    e.preventDefault();
    this.setState({
      type:e.target.value
    })
  }
  handleDescription(e:any){
    e.preventDefault();
    this.setState({
      description:e.target.value
    })
  }
  createReimbursement(e:SyntheticEvent){
    e.preventDefault();
    if(parseFloat(this.state.amount.toString())===parseFloat('0')){
      this.setState({errorMessage:"Amount cannot be 0"},()=>{
        setTimeout(()=>{
          this.setState({errorMessage:''})
        },5000)
      })
    }
    else{
      revatureCreateReimbursement(
        this.props.token,
        this.props.profile.userId,
        this.state.amount,
        this.state.description,
        this.state.type
      ).then(() => {
        this.props.revatureGetUserReimbursementListActionMapper(this.props.token,this.props.profile.userId);
        this.setState({isShowCreateReimbursement:false,amount:0,type:1,description:''})
      })
    }
  }
  render(){
    return(
      <Container>
        {this.state.errorMessage && <Alert variant='danger'>{this.state.errorMessage}</Alert>}
        <Row>
          <Button onClick={this.handlerIsShowCreateReimbursement}>{this.state.isShowCreateReimbursement?("Hide Reimbursement Form"):("Show Reimbursement Form")}</Button>
        </Row>
        {this.state.isShowCreateReimbursement&&
        <Form onSubmit={this.createReimbursement}>
          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" defaultValue={this.state.amount} min="0.01" step="0.01" onChange={this.handleAmount} required/>
          </Form.Group>
          <Form.Label>Type</Form.Label>
          <Form.Group>
            <Form.Control as="select" onChange={this.handleType}>
              <option value={1}>Lodging</option>
              <option value={2}>Travel</option>
              <option value={3}>Food</option>
              <option value={4}>Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Group>
            <Form.Control as="textarea" rows="3" value={this.state.description} onChange={this.handleDescription} required/>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        }
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Author</th>
                  <th>Resolver</th>
                  <th>Date Submitted</th>
                  <th>Date Resolved</th>
                  <th>Status</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {this.props.reimbursementList.map(el=><TableRowComponent key={el.reimbursementId} reimbursement={el}/>)}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}