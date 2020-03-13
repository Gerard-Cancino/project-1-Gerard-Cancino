import { Dispatch } from 'redux';
import { revatureGetReimbursementListByUserId } from '../remote/revature/reimbursement-list-revature';

export const reimbursementListTypes = {
  SUCCESSFUL_GET_REIMBURSEMENTLIST: "REVATURE_SUCCESSFUL_GET_REIMBURSEMENT",
  AUTHORIZATION_FAILED: "REVATURE_AUTHORIZATION_FAILED",
  INTERNAL_SERVER: "REVATURE_INTERAL_SERVER"
}

export const revatureUserReimbursementListActionMapper = (token:string,userId:number) => async (dispatch:Dispatch) => {
  console.log("in action mapper");
  try {
    let reimbursementList = await revatureGetReimbursementListByUserId(token,userId);
    dispatch({
      type: reimbursementListTypes.SUCCESSFUL_GET_REIMBURSEMENTLIST,
      payload:{
        reimbursementList
      }
    })
  }
  catch(e){
    if(e.status===401){
      dispatch({
        type: reimbursementListTypes.AUTHORIZATION_FAILED,
        payload:{
          errorMessage: "User is not authorized"
        }
      })
    }
    else{
      dispatch({
        type: reimbursementListTypes.INTERNAL_SERVER,
        payload: {
          errorMessage: "Something went wrong"
        }
      })
    }
  }
}