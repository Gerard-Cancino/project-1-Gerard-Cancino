import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Reimbursement from '../../models/Reimbursement';
import { User } from '../../models/User';
import { TableRowComponent } from './table-row-component/TableRowComponent';
import { NavLink } from 'react-router-dom';

interface UserReimbursementProps {
  reimbursementList:Array<Reimbursement>,
  revatureUserReimbursementListActionMapper: (t:string,u:number) => void,
  token:string,
  profile:User
}

export class UserReimbursementComponent extends React.Component<UserReimbursementProps,any> {
  constructor(props:any){
    super(props);
    console.log(props.profile.userId)
  }
  componentDidMount(){
    if(this.props.reimbursementList.length===0){
      this.props.revatureUserReimbursementListActionMapper(this.props.token,this.props.profile.userId);
    }
  }
  render(){
    return(
      <Container>
        <Row>
          <NavLink
          to="/reimbursement-form"
          className="btn btn-primary"
          >Create Reimbursement</NavLink>
        </Row>
        <Row>
          <Col>
            <Table>
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
                </thead>
                <tbody>
                  {this.props.reimbursementList.map(el=><TableRowComponent reimbursement={el}/>)};
                </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}