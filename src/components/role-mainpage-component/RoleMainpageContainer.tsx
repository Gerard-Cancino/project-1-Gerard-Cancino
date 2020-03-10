import { IState } from "../../reducers"
import { RoleMainpageComponent } from './RoleMainpageComponent';
import { connect } from "react-redux";


const mapStateToProps = (state:IState) => {
  console.log(state)
  return {
    profile:state.login.profile,
    token:state.login.token
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(RoleMainpageComponent)