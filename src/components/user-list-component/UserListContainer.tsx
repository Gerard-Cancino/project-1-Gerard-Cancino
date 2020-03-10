import { IState } from "../../reducers"
import { UserListComponent } from "./UserListComponent"
import { connect } from "react-redux"

const mapStateToProps = (state:IState) => {
  return{
    userList:state.userList.userList
  }
}

const mapDispatchToProps = { 
}

export default connect(mapStateToProps,mapDispatchToProps)(UserListComponent);