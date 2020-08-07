import { LogIn } from '../actions/types';
const inistialState = {
  login: ''
}


export default (state = inistialState, action) => {
  switch(action.type) {
    case LogIn:
    return  {...state , login: action.payload  }
    default:
    return state;
  }
}