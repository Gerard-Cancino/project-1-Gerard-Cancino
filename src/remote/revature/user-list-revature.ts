import { InternalServerError } from './../../errors/InternalServerError';
import { UnauthorizedError } from './../../errors/UnauthorizedError';
import { revatureClient } from './revature-client';
import { User } from './../../models/User';


export async function revatureGetUserList(token:string):Promise<Array<User>>{
  try{
    let response = await revatureClient.get('/users',{
      headers:{"Authorization":`${token}`}
    });
    return response.data;
  }
  catch(e){
    if(e.status===401){
      throw new UnauthorizedError();
    }
    else {
      throw new InternalServerError();
    }
  }
}

export async function revatureUpdateUser(token:string,body:any){
  try{
    let response = await revatureClient.patch('/users',body,{
      headers:{"Authorization":token}
    });
    return response.data;
  }
  catch(e){
    if(e.status===401){
      throw new UnauthorizedError();
    }
    else{
      throw new InternalServerError();
    }
  }
}