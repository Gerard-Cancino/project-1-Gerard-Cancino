import {HttpError} from './HttpError';

export class UnauthorizedError extends HttpError{
  constructor(){
    super(401,'User is not authorized');
  }
}