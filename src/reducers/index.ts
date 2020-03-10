import { userListReducer } from './user-list-reducer';
import { loginReducer } from './login-reducer';
import { combineReducers } from 'redux';
import { User } from './../models/User';


export interface ILoginState{
  profile:User
  token:string
  errorMessage:string
}

export interface IUserListState{
  userList:Array<User>
  errorMessage:string
}

export interface IState{
  login:ILoginState,
  userList:IUserListState
}

export const state = combineReducers<IState>({
  login:loginReducer,
  userList:userListReducer
})