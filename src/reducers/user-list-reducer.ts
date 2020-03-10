import { userListTypes } from './../action-mappers/user-list-action-mapper';
import { AnyAction } from 'redux';
import { IUserListState } from './index';


const initialState:IUserListState={
  userList: [],
  errorMessage: "This is a test"
}

export const userListReducer = (state=initialState,action:AnyAction) => {
  switch(action.type){
    case userListTypes.SUCCESSFUL_GET_USERLIST:{
      return {
        ...state,
        userList:action.payload.userList
      }
    }
    case userListTypes.AUTHORIZATION_FAILED:{
      return {
        ...state,
        errorMessage:"User is not authorized"
      }
    }
    case userListTypes.INTERNAL_SERVER:{
      return {
        ...state,
        errorMessage:"Something went wrong."
      }
    }
    default:
      return state;
  }
}