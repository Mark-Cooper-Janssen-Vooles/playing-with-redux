import React from 'react';
import { createStore } from 'redux';
import './App.css';

//action generators - functions that return action objects 

//payload defaults to an empty value if it doesnt exist. 
//if you don't do this, then it will return undefined when it checks typeof!
const incrementCount = ({IncrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT_OK',
    incrementBy: IncrementBy
  }
};

const decrementCount = ({DecrementBy = 1} = {}) => {
  return {
    type: "DECREMENT",
    decrementBy: DecrementBy
  }
};

const resetCount = () => {
  return {
    type: "RESET"
  }
}

const setCount = ({count}) => {
  return {
    type: "SET",
    count: count
  }
}


//Reducers 

const countReducer = (state = { count: 0 }, action) => {
  // console.log('running');

  //combine current action with the existing state to work out what the current state should be.

  switch (action.type) {
    case "INCREMENT_OK": 
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default: 
      return state;
  }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  //this function gets called every single time the store changes
  console.log(store.getState()); //will print state every time it changes.
})

//to unsubscribe: the return value from subscribe will actually unsubscribe us! 

function Redux() {

  // console.log(store.getState());
  //this will return the state! 

  //i'd like to increment the count:
  //this reloads the CreateStore function.
  // store.dispatch({
  //   //full caps convention in redux for action type names
  //   type: 'INCREMENT_OK',
  //   IncrementBy: 5
  // });

  store.dispatch(incrementCount({ IncrementBy: 5 }) );

  // unsubscribe();

  // store.dispatch({
  //   type: 'DECREMENT'
  // });

  store.dispatch(decrementCount());

  // store.dispatch({
  //   type: 'DECREMENT',
  //   DecrementBy: 2
  // });

  store.dispatch(decrementCount({DecrementBy: 11}));

  store.dispatch(resetCount());

  store.dispatch(setCount({count: 101}))

  //no count added so it doesn't do anything.
  // store.dispatch({
  //   type: "SET"
  // })

  // store.dispatch(setCount());

  unsubscribe();
  return (
    <div>
      test app
    </div>
  );
}

export default Redux;
