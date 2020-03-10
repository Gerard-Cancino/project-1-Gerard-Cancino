import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { User } from '../../models/User';
import { Link, Redirect } from 'react-router-dom';

interface IRoleMainpageProps {
  profile:User,
  token:string
}

export class RoleMainpageComponent extends React.Component<IRoleMainpageProps,any>{
  render(){
    return(
      <Container>
        {this.props.token==="" && <Redirect to="/"/>}
        {this.props.profile.role.role==="admin"||this.props.profile.role.role==="finance-manager"?(
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