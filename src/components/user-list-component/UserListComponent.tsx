import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { User } from '../../models/User';
import { TableRowComponent } from './table-row-component/table-row-component';

interface UserListProps {
  userList:Array<User>
  token:string
  userListActionMapper: (token:string) => void
}

export class UserListComponent extends React.Component<UserListProps,any>{
  constructor(props:any){
    super(props);
    if(props.userList.length===0){
      this.props.userListActionMapper(this.props.token);
    }
  }
  render(){
    return(
      <Container>
        <Row>
          <Col className="table-responsive">
            <Table>
              <thead>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>#</th>
              </thead>
              <tbody>
                {this.props.userList.length===0?(
                  <td colSpan={5}>No Users Found</td>
                ):( this.props.userList.map((el:User)=>
                  <TableRowComponent key={el.userId} user={el} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }  
}