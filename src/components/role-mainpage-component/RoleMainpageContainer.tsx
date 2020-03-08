import { IState } from "../../reducers"
import { RoleMainpageComponent } from './RoleMainpageComponent';
import { connect } from "react-redux";


const mapStateToProps = (state:IState) => {
  return {
    profile:state.login.profile,
    errorMessage:state.login.errorMessage
  }
}

const mapDispatchToDispatch = {
}

export default connect(mapStateToProps,mapDispatchToDispatch)(RoleMainpageComponent)