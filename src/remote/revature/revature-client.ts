import axios from 'axios';
import { environment } from '../../react-app-env';

export const revatureClient = axios.create({
  baseURL:environment.revatureBaseUrl,
  headers:{
    'Content-Type':'application/json'
  },
  withCredentials:true
})