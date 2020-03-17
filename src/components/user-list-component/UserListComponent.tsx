import React from 'react';
import { Container, Row, Col, Table, FormControl } from 'react-bootstrap';
import { User } from '../../models/User';
import { TableRowComponent } from './table-row-component/table-row-component';

interface UserListProps {
  userList:Array<User>
  token:string
  location:any
  userListActionMapper: (token:string) => void
}

interface UserListState {
  userQueryString:string
}

export class UserListComponent extends React.Component<UserListProps,UserListState>{
  constructor(props:any){
    super(props);
    this.state = {
      userQueryString:''
    }
    this.handlerUserQueryString = this.handlerUserQueryString.bind(this);
  }
  componentDidMount(){
    if(this.props.userList.length===0||(this.props.location.state&&this.props.location.state.isUpdate)){
      this.props.userListActionMapper(this.props.token);
    }
  }
  handlerUserQueryString (e:any) {
    this.setState({userQueryString:e.target.value})
  }
  render(){
    return(
      <Container>
        <Row>
          <label htmlFor="userFilter">Search for User Filter</label>
          <FormControl placeholder="id, username, first name, last name, email" onChange={this.handlerUserQueryString}/>
        </Row>
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
                  <tr><td colSpan={5}>No Users Found</td></tr>
                ):( this.props.userList.filter((el)=>JSON.stringify(el).includes(this.state.userQueryString)).map((el:User)=>
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