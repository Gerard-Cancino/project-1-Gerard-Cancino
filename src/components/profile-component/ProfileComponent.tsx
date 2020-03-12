import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { User } from '../../models/User'

interface ProfileProps {
  profile:User
}

export class ProfileComponent extends React.Component<ProfileProps,any>{
  render(){
    return(
      <Container>
        <Row>
          <Col>ID: {this.props.profile.userId}</Col>
          <Col>Username: {this.props.profile.username}</Col>
        </Row>
        <Row>
          <Col>Email: {this.props.profile.email}</Col>
        </Row>
        <Row>
          <Col>Name: {this.props.profile.firstName} {this.props.profile.lastName}</Col>
        </Row>
        <Row>
          <Col>Role: {this.props.profile.role.role}</Col>
        </Row>
      </Container>
    )
  }
}