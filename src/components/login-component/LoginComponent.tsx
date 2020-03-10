import React, { SyntheticEvent } from 'react'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'
import { Redirect } from 'react-router'

interface ILoginProps {
  errorMessage:string
  token:string
  revatureLoginActionMapper: (u:string,p:string) => void
}

interface ILoginState {
  username:string
  password:string
}

export class LoginComponent extends React.Component<ILoginProps,ILoginState> {
  constructor(props:any){
    super(props)
    this.state={
      username:'',
      password:''
    }
    this.submitLogin = this.submitLogin.bind(this);
    this.handlerUsername = this.handlerUsername.bind(this);
    this.handlerPassword = this.handlerPassword.bind(this);
  }
  submitLogin(e:SyntheticEvent){
    e.preventDefault();
    this.props.revatureLoginActionMapper(this.state.username,this.state.password);
    this.setState({password:''})
  }
  handlerUsername(e:any){ 
    this.setState({username:e.currentTarget.value})
  }
  handlerPassword(e:any){
    this.setState({password:e.currentTarget.value})
  }
  render(){
    return(
      this.props.token?(
        <Redirect to="/mainpage" />
      ):(
        <Container className="p-5">
          <Row>
            <Col>
              <Form onSubmit={this.submitLogin}>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control onChange={this.handlerUsername} type="text" placeholder="Enter Username"/>
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={this.handlerPassword} type="password" placeholder="Password" />
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
    )
  }
}