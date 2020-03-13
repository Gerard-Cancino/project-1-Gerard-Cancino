import { reimbursementListTypes } from './../action-mappers/user-reimbursement-list-action-mapper';
import { AnyAction } from 'redux';
import { IReimbursementListState } from './index';


const initialState:IReimbursementListState={
  reimbursementList: [],
  errorMessage: "This is a test"
}

export const userReimbursementListReducer = (state=initialState,action:AnyAction) => {
  console.log('in reducer')
  switch(action.type){
    case reimbursementListTypes.SUCCESSFUL_GET_REIMBURSEMENTLIST:{
      return{
        ...state,
        reimbursementList:action.payload.reimbursementList
      }
    }
    case reimbursementListTypes.AUTHORIZATION_FAILED:{
      return {
        ...state,
        errorMessage:"User is not authorized"
      }
    }
    case reimbursementListTypes.INTERNAL_SERVER:{
      return {
        ...state,
        errorMessage:"Something went wrong"
      }
    }
    default:
      return state;
  }
}