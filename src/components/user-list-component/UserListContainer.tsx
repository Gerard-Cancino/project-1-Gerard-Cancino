import { IState } from "../../reducers"
import { UserListComponent } from "./UserListComponent"
import { userListActionMapper } from '../../action-mappers/user-list-action-mapper';
import { connect } from "react-redux"

const mapStateToProps = (state:IState) => {
  return{
    userList:state.userList.userList,
    token:state.login.token
  }
}

const mapDispatchToProps = { 
  userListActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(UserListComponent);