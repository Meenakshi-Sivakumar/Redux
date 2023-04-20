const store = Redux.createStore(
  (state = 5) => state
);

// here
const currentState = store.getState();
console.log(currentState)
