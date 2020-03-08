import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { User } from '../../models/User';
import { Link } from 'react-router-dom';

interface IRoleMainpageProps {
  user:User
}

export class RoleMainpageComponent extends React.Component<IRoleMainpageProps,any>{
  render(){
    return(

      <Container>
        {this.props.user.role.role==="admin"||this.props.user.role.role==="finance-manager"?(
          <Row>
            <Col>
              <Link
                to="/users">Users</Link>
            </Col>
            <Col> 
              <Link
                to="/reimbursements">Reimbursements</Link>
            </Col>
          </Row>
        ):(
          <Row>
            <Col>
              <Link
                to="/reimbursements">Reimbursements</Link>
            </Col>
          </Row>
        )}
      </Container>
    )
  }
}