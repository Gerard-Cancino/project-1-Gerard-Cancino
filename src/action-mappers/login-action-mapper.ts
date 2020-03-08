import { Dispatch } from 'redux';


export const loginTypes = {
  SUCCESSFUL_LOGIN: "REVATURE_SUCCESSFUL_LOGIN",
  INVALID_CREDENTIALS: "REVATURE_INVALID_CREDENTIALS",
  INTERNAL_SERVER: "REVATURE_INTERNAL_SERVER_ERROR"
}

export const revatureLoginActionMapper = (username:string,password:string) => async (dispatch:Dispatch) => {
  try {
    // Add the async function for remote
    let profile = undefined;
    let token = undefined;
    dispatch({
      type: loginTypes.SUCCESSFUL_LOGIN,
      payload:{
        profile,
        token
      }
    })
  }
  catch(e){
    if(e.state === 400) {
      dispatch({
        type:loginTypes.INVALID_CREDENTIALS
      })
    }
    else{
      dispatch({
        type:loginTypes.INTERNAL_SERVER
      })
    }
  }
}