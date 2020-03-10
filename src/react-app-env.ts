/// <reference types="react-scripts" />



const devEnvironment = {
  revatureBaseUrl:'http://localhost:2030'
}


const prodEnvironment = {
  revatureBaseUrl:'http://ec2-3-134-88-167.us-east-2.compute.amazonaws.com:2030'
}

export let environment = devEnvironment

if(process.env.REACT_APP_ENV === 'production'){
  environment = prodEnvironment
}