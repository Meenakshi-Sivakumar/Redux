// Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true. Otherwise, it returns the current state. Note that the current state and the dispatched action are passed to the reducer, so you can access the action's type directly with action.type.
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // here
    if(action.type=='LOGIN'){
      return {login:true}
    }else{
      return state
    }
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
