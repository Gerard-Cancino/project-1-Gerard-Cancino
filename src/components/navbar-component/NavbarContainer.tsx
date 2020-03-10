import { IState } from "../../reducers"
import { NavbarComponent } from "./NavbarComponent"
import { connect } from "react-redux"
import { revatureLogoutActionMapper } from '../../action-mappers/login-action-mapper'

const mapStateToProps = (state:IState) => {
  return {
    profile:state.login.profile,
  }
}

const mapDispatchToProps = {
  revatureLogoutActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(NavbarComponent);