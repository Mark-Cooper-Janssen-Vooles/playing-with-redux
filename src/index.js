import React from 'react';
import ReactDOM from 'react-dom';
//react-redux statements: 
import { Provider } from 'react-redux';


import './index.css';
// import Redux from './Redux';
// import Destructuring from "./Destructuring";
// import ExpensifyRedux from './ExpensifyRedux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// import HigherOrderComponents from './higherordercomponents';
import AppRouter from './routers/AppRouter.js';
import * as serviceWorker from './serviceWorker';


const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: "Water bill", amount: 300 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 100, createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 1950 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));


serviceWorker.unregister();
