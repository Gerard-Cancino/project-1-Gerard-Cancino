import { InternalServerError } from './../../errors/InternalServerError';
import { UnauthorizedError } from './../../errors/UnauthorizedError';
import { revatureClient } from './revature-client';
import { User } from './../../models/User';


export async function revatureGetUserList():Promise<Array<User>>{
  try{
    let response = await revatureClient.get('/user');
    return response.data;
  }
  catch(e){
    if(e.status===401){
      throw new UnauthorizedError()
    }
    else {
      throw new InternalServerError();
    }
  }
}