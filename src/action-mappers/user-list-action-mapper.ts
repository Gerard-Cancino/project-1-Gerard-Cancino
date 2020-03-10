import { Dispatch } from 'redux';
import { revatureGetUserList } from '../remote/revature/user-list-revature'

export const userListTypes = {
  SUCCESSFUL_GET_USERLIST: "REVATURE_SUCCESSFUL_GET_USERLIST",
  AUTHORIZATION_FAILED: "REVATURE_AUTHORIZATION_FAILED",
  INTERNAL_SERVER: "REVATURE_INTERNAL_SERVER"
}

export const userListActionMapper = () => async (dispatch:Dispatch) => {
  try{
    let userList = await revatureGetUserList();
    dispatch({
      type: userListTypes.SUCCESSFUL_GET_USERLIST,
      payload:{
        userList
      }
    })
  }
  catch(e){
    if(e.status = 401){
      dispatch({
        type: userListTypes.AUTHORIZATION_FAILED,
        payload:{
          errorMessage: "User is not authorized"
        }
      })
      dispatch({
        type: userListTypes.INTERNAL_SERVER,
        payload:{
          errorMessage: "Something went wrong"
        }
      })
    }
  }
}