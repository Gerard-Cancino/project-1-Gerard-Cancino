import { IState } from "../../reducers";
import { connect } from "react-redux";
import { ProfileComponent } from "./ProfileComponent";


const mapStateToProps = (state:IState) => {
  return {
    profile:state.login.profile,
    errorMessage: state.login.errorMessage
  }
}

const mapDispatchToProps = {
  // Nothing
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileComponent);