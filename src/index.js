import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Redux from './Redux';
// import Destructuring from "./Destructuring";
// import ExpensifyRedux from './ExpensifyRedux';


// import configureStore from './store/configureStore';
// import { addExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
// import AppRouter from './routers/AppRouter.js';
import HigherOrderComponents from './higherordercomponents';
import * as serviceWorker from './serviceWorker';


// const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

//   console.log(visibleExpenses);
// });

// store.dispatch(addExpense({ description: "Water bill", amount: 100 }));
// store.dispatch(addExpense({ description: "Gas bill", amount: 300 }));
// store.dispatch(setTextFilter("bill"));
// store.dispatch(setTextFilter("water"));



// console.log(store.getState());

ReactDOM.render(<HigherOrderComponents />, document.getElementById('root'));


serviceWorker.unregister();
