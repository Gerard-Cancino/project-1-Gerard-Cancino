import React from 'react';
import { Container } from 'react-bootstrap';
import { User } from '../../models/User';

interface UserListProps {
  userList:Array<User>
}

export class UserListComponent extends React.Component<UserListProps,any>{
  render(){
    return(
      <Container>
        
      </Container>
    )
  }  
}