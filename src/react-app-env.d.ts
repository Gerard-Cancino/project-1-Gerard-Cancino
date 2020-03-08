/// <reference types="react-scripts" />



const devEnvironment = {
  revatureBaseUrl:'http://localhost:2030'
}

const prodEnvironment = {
  // this needs to change
  revatureBaseUrl:'http://revatureBaseUrl:ec2-3-134-88-167.us-east-2.compute.amazonaws.com:2030'
}

export let environment = prodEnvironment

if(process.env.REACT_APP_ENV === 'production'){
  environment = prodEnvironment
}