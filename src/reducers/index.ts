import { userReimbursementListReducer } from './reimbursement-list-reducer';
import { userListReducer } from './user-list-reducer';
import { loginReducer } from './login-reducer';
import { combineReducers } from 'redux';
import { User } from './../models/User';
import Reimbursement from '../models/Reimbursement';


export interface ILoginState{
  profile:User
  token:string
  errorMessage:string
}

export interface IUserListState{
  userList:Array<User>
  errorMessage:string
}

export interface IReimbursementListState{
  reimbursementList: Array<Reimbursement>
  errorMessage:string
}

export interface IState{
  login:ILoginState,
  userList:IUserListState,
  reimbursementList:IReimbursementListState
}

export const state = combineReducers<IState>({
  login:loginReducer,
  userList:userListReducer,
  reimbursementList:userReimbursementListReducer
})