import { InternalServerError } from './../../errors/InternalServerError';

import { UnauthorizedError } from './../../errors/UnauthorizedError';
import { revatureClient } from './revature-client';
import Reimbursement from "../../models/Reimbursement";

export async function revatureGetReimbursementListByUserId (token:string, userId:number|undefined):Promise<Array<Reimbursement>>{
  try{
    let response = await revatureClient.get(`/reimbursements/author/userId/${userId}`,{
      headers:{"Authorization":`${token}`}
    })
    console.log(response ,'mksamlmdmal');
    return response.data;
  }
  catch(e){
    console.error(e.stack)
    if(e.status===401){
      throw new UnauthorizedError();
    }
    else{
      throw new InternalServerError();
    }
  }
}
export async function revatureGetReimbursementListByStatusId (token:string, statusId:number):Promise<Array<Reimbursement>>{
  try{
    let response = await revatureClient.get(`/reimbursements/status/${statusId}`,{
      headers:{"Authorization":`${token}`}
    })
    return response.data;
  }
  catch(e){
    console.error(e.stack)
    if(e.status===401){
      throw new UnauthorizedError();
    }
    else{
      throw new InternalServerError();
    }
  }
}
export async function revatureCreateReimbursement(token:string, userId:number,amount:number,description:string,type:number):Promise<Reimbursement>{
  try{
    console.log('DESCRIPTION:' + description)
    let response = await revatureClient.post(`/reimbursements`,{
      author_id:userId,
      amount:amount,
      description:description,
      type:type
    },{
      headers:{"Authorization":`${token}`}
    })
    return response.data;
  }
  catch(e){
    console.error(e.stack)
    if(e.state===401){
      throw new UnauthorizedError();
    }
    else{
      throw new InternalServerError();
    }
  }
}

export async function revatureUpdateReimbursement(token:string,reimbursementId:number,status_id:number){
  try{
    let response = await revatureClient.patch('/reimbursements',{
      id:reimbursementId,
      status_id:status_id
    },{
      headers:{"Authorization":token}
    })
    return response.data;
  }
  catch(e){
    if(e.state===401){
      throw new UnauthorizedError();
    }
    else{
      throw new InternalServerError();
    }
  }
}