import React from 'react'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'

export class LoginComponent extends React.Component{
  render(){
    return(
      <Container className="p-5">
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username"/>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <p>This is a fake app</p>
          </Col>
        </Row>
      </Container>
    )
  }
}