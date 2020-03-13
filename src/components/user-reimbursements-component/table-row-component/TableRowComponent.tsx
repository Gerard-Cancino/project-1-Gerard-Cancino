import React from 'react';
import Reimbursement from "../../../models/Reimbursement";



interface tableRowInterface {
  reimbursement:Reimbursement
}

export class TableRowComponent extends React.PureComponent<tableRowInterface,any>{
  render(){
    return(        
      <tr>
        <td>{this.props.reimbursement.reimbursementId}</td>
        <td>{this.props.reimbursement.author}</td>
        <td>{this.props.reimbursement.resolver}</td>
        <td>{this.props.reimbursement.dateSubmitted}</td>
        <td>{this.props.reimbursement.dateResolved}</td>
        <td>{this.props.reimbursement.status}</td>
        <td>{this.props.reimbursement.description}</td>
        <td>{this.props.reimbursement.amount}</td>
        <td>{this.props.reimbursement.type}</td>
      </tr>
    )
  }
}