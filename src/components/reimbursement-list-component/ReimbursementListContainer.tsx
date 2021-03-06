import { IState } from "../../reducers";
import { connect } from "react-redux";
import { ReimbursementListComponent } from "./ReimbursementListComponent";

const mapStateToProps = (state:IState) => {
  return({
    token:state.login.token,
    profile:state.login.profile
  })
}

const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(ReimbursementListComponent)