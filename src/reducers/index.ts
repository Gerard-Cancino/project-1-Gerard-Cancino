import { loginReducer } from './login-reducer';
import { combineReducers } from 'redux';
import { User } from './../models/User';


export interface ILoginState{
  profile:User
  token:String
  errorMessage:String
}

export interface IState{
  login:ILoginState
}

export const state = combineReducers<IState>({
  login:loginReducer
})