import React, { SyntheticEvent } from 'react';
import Reimbursement from "../../../models/Reimbursement";
import { Button } from 'react-bootstrap';



interface tableRowInterface {
  reimbursement:Reimbursement,
  updateReimbursement:(e:SyntheticEvent,i:number,s:number)=> void
}

export class TableRowComponent extends React.PureComponent<tableRowInterface,any>{
  render(){
    return(
      <tr>
        <td>{this.props.reimbursement.reimbursementId}</td>
        <td>{this.props.reimbursement.author}</td>
        <td>{this.props.reimbursement.amount}</td>
        <td>{this.props.reimbursement.dateSubmitted}</td>
        <td>{this.props.reimbursement.dateResolved}</td>
        <td>{this.props.reimbursement.status}</td>
        <td>{this.props.reimbursement.description}</td>
        <td>{this.props.reimbursement.resolver}</td>
        <td>{this.props.reimbursement.type}</td>
        {this.props.reimbursement.status===1 &&
          <React.Fragment>
            <td><Button onClick={(e:SyntheticEvent)=>this.props.updateReimbursement(e,this.props.reimbursement.reimbursementId,2)} variant="success">Approve</Button></td>
            <td><Button onClick={(e:SyntheticEvent)=>this.props.updateReimbursement(e,this.props.reimbursement.reimbursementId,3)} variant="danger">Decline</Button></td>
          </React.Fragment>
        }
      </tr>
    )
  }
}