import { loginTypes } from './../action-mappers/login-action-mapper';
import { AnyAction } from 'redux';
import { ILoginState } from '.';
import { User } from '../models/User';
import Role from '../models/Role';


// Initial State
const initialState:ILoginState={
  profile: new User(-1,'','','','',new Role(0,'')),
  token: "",
  errorMessage:"This is a test"
}

export const loginReducer = (state=initialState,action:AnyAction) => {
  switch(action.type){
    case loginTypes.SUCCESSFUL_LOGIN:{
      return {
        ...state,
        profile:action.payload.profile,
        token:action.payload.token
      }
    }
    case loginTypes.INVALID_CREDENTIALS:{
      return {
        ...state,
        errorMessage:"Username or Password Incorrect"
      }
    }
    case loginTypes.INTERNAL_SERVER:{
      return {
        ...state,
        errorMessage:"Something went wrong. Oops!"
      }
    }
    case loginTypes.LOGOUT:{
      return {
        ...state,
        profile:action.payload.profile,
        token:action.payload.token
      }
    }
    default: 
      return state
  }
}