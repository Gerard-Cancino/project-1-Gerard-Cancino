import { InternalServerError } from './../../errors/InternalServerError';
import { BadCredentialsError } from './../../errors/BadCredentialsError';
import { revatureClient } from './revature-client';


export async function revatureLogin(username:string,password:string):Promise<any> {
  let credentials = {
    username,
    password
  }
  try{
    let response = await revatureClient.post('/login',credentials);
    if(response.status===400){
      throw new BadCredentialsError();
    }
    return response.data
  }
  catch (e) {
    if(e.status===400){
      throw e;
    }
    else {
      throw new InternalServerError()
    }
  }
}