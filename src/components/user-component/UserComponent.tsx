import React, { SyntheticEvent } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { UserFormComponent } from './user-component/UserFormComponent';
import { User } from '../../models/User';
import { admin } from '../../models/Role';

interface IUserProps {
  location:any,
  token:string,
  profile:User
}

interface IUserState {
  isUpdateFormOpen:boolean
}

export class UserComponent extends React.Component<IUserProps,IUserState>{
  constructor(props:IUserProps){
    super(props);
    this.state = {
      isUpdateFormOpen:false
    }
    this.handleIsUpdateFormOpen=this.handleIsUpdateFormOpen.bind(this)
  }
  handleIsUpdateFormOpen(e:SyntheticEvent){
    e.preventDefault();
    this.setState((prevState:any)=>({isUpdateFormOpen:!prevState.isUpdateFormOpen}))
  }
  render(){
    return(
      <Container>
        <Row>
          <Col>ID: {this.props.location.state.user.userId}</Col>
        </Row>
        <Row>
          <Col>Username: {this.props.location.state.user.username}</Col>
        </Row>
        <Row>
          <Col>Email: {this.props.location.state.user.email}</Col>
        </Row>
        <Row>
          <Col>Name: {this.props.location.state.user.firstName} {this.props.location.state.user.lastName}</Col>
        </Row>
        <Row>
          <Col>Role: {this.props.location.state.user.role.role}</Col>
        </Row>
        {this.props.profile.role.role===admin &&
          <React.Fragment>
            <Row>
              <Col>
                <Button onClick={this.handleIsUpdateFormOpen}>{this.state.isUpdateFormOpen?"Hide Update Form":"Show Update Form"}</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                {this.state.isUpdateFormOpen && <UserFormComponent token={this.props.token} user={this.props.location.state.user}/> }
              </Col>
            </Row>
          </React.Fragment>
        }
      </Container>
    )
  }
}