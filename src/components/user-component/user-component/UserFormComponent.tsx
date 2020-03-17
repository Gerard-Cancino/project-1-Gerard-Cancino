import React, { SyntheticEvent } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { revatureUpdateUser } from '../../../remote/revature/user-list-revature';
import { User } from '../../../models/User';
import { Redirect } from 'react-router';

interface IUserFormProps {
  token:string,
  user:User
}

interface IUserFormState {
  password:string,
  password2:string,
  firstName:string,
  lastName:string,
  email:string,
  isSuccessful:boolean,
  errorMessage:string
}

export class UserFormComponent extends React.Component<IUserFormProps,IUserFormState>{
  constructor(props:any){
    super(props);
    this.state = {
      password:'',
      password2:'',
      firstName:'',
      lastName:'',
      email:'',
      isSuccessful:false,
      errorMessage:''
    }
    this.handlePassword=this.handlePassword.bind(this);
    this.handlePassword2=this.handlePassword2.bind(this);
    this.handleFirstName=this.handleFirstName.bind(this);
    this.handleLastName=this.handleLastName.bind(this);
    this.handleEmail=this.handleEmail.bind(this);
    this.submitUpdate=this.submitUpdate.bind(this);
  }
  handlePassword(e:any){this.setState({password:e.target.value})}
  handlePassword2(e:any){this.setState({password2:e.target.value})}
  handleFirstName(e:any){this.setState({firstName:e.target.value})}
  handleLastName(e:any){this.setState({lastName:e.target.value})}
  handleEmail(e:any){this.setState({email:e.target.value})}
  async submitUpdate(e:SyntheticEvent){
    e.preventDefault();
    if(this.state.password&&this.state.password!==this.state.password2){
      this.setState({errorMessage:"Password and Confirmed Password are not the same."},()=>{
        setTimeout(()=>{
          this.setState({errorMessage:''})
        },5000)
      })
    }
    else{
      try{
        await revatureUpdateUser(this.props.token,{
          password:this.state.password,
          first_name:this.state.firstName,
          last_name:this.state.lastName,
          email:this.state.email,
          id:this.props.user.userId
        });
        this.setState({isSuccessful:true});
      }
      catch(e){    
        this.setState({errorMessage:e},()=>{
          setTimeout(()=>{
            this.setState({errorMessage:''})
          },5000)
        })
      }
    }
  }
  render(){
    return(    
      <Form onSubmit={(e:SyntheticEvent)=>this.submitUpdate(e)}>
        {this.state.isSuccessful && <Redirect to={{pathname:"/users",state:{isUpdate:true}}}/> }
        {this.state.errorMessage && <Alert variant='danger'>{this.state.errorMessage}</Alert>}
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={this.handlePassword} type="password" placeholder="password" defaultValue={this.state.password}/>
        </Form.Group>
        <Form.Group controlId="formPassword2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control onChange={this.handlePassword2} type="password" placeholder="confirm password" defaultValue={this.state.password2}/>
        </Form.Group>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control onChange={this.handleFirstName} type="text" placeholder="First Name" defaultValue={this.state.firstName}/>
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={this.handleLastName} type="text" placeholder="Last Name" defaultValue={this.state.lastName}/>
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={this.handleEmail} type="email" placeholder="Email@email.com" defaultValue={this.state.email}/>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}