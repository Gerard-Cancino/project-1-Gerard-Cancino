import { IState } from "../../reducers";
import { connect } from "react-redux";
import { revatureLoginActionMapper } from '../../action-mappers/login-action-mapper';
import { LoginComponent } from "./LoginComponent";

const mapStateToProps = (state:IState) => {
  return { 
    token:state.login.token,
    errorMessage:state.login.errorMessage
  }
}

const mapDispatchToProps = {
  revatureLoginActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent)