import React from 'react';
import { User } from '../../../models/User';
import { NavLink } from 'react-router-dom';

interface TableRowProps {
  user:User
}

export class TableRowComponent extends React.PureComponent<TableRowProps,any>{
  render(){
    return(
      <tr>
        <td>{this.props.user.userId}</td>
        <td>{this.props.user.firstName}</td>
        <td>{this.props.user.lastName}</td>
        <td>{this.props.user.email}</td>
        <td>
          <NavLink
            className="btn btn-info"
            to={`/users/${this.props.user.userId}`}>
            Reimbursements
          </NavLink>
        </td>
      </tr>
    )
  }
}