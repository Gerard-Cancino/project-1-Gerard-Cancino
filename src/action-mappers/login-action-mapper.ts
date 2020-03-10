import { User } from './../models/User';
import { Dispatch } from 'redux';
import { revatureLogin} from '../remote/revature/login-revature';
import Role from '../models/Role';

export const loginTypes = {
  SUCCESSFUL_LOGIN: "REVATURE_SUCCESSFUL_LOGIN",
  INVALID_CREDENTIALS: "REVATURE_INVALID_CREDENTIALS",
  INTERNAL_SERVER: "REVATURE_INTERNAL_SERVER_ERROR",
  LOGOUT: "REVATURE_LOGOUT"
}

export const revatureLoginActionMapper = (username:string,password:string) => async (dispatch:Dispatch) => {
  try {
    let {token,profile} = await revatureLogin(username,password);
    dispatch({
      type: loginTypes.SUCCESSFUL_LOGIN,
      payload:{
        token,
        profile
      }
    })
  }
  catch(e){
    if(e.status === 400) {
      dispatch({
        type:loginTypes.INVALID_CREDENTIALS,
        payload:{
          errorMessage: "Invalid Credentials"
        }
      })
    }
    else{
      dispatch({
        type:loginTypes.INTERNAL_SERVER,
        payload: {
          errorMessage: "Something went wrong"
        }
      })
    }
  }
}

export const revatureLogoutActionMapper = () => (dispatch:Dispatch) => {
  dispatch({
    type: loginTypes.LOGOUT,
    payload:{
      token:'',
      profile:new User(-1,"","","","",new Role(-1,""))
    }
  })
}
