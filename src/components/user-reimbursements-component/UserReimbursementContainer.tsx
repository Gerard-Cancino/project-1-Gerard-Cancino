import { IState } from "../../reducers";
import { revatureUserReimbursementListActionMapper } from '../../action-mappers/user-reimbursement-list-action-mapper';
import { connect } from "react-redux";
import { UserReimbursementComponent } from "./UserReimbursementComponent";

const mapStateToProps = (state:IState) => {
  return({
    reimbursementList:state.reimbursementList.reimbursementList,
    errorMessage:state.reimbursementList.errorMessage,
    token:state.login.token,
    profile:state.login.profile
  })
}

const mapDispatchToProps = {
  revatureUserReimbursementListActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(UserReimbursementComponent);