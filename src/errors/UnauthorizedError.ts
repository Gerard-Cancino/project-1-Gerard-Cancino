import { HttpError } from './HttpError';
export class UnauthorizedError extends HttpError{
  constructor(){
    super('User is not authorized',401);
  }
}