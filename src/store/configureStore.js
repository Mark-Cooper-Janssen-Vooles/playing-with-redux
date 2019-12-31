import { createStore, combineReducers } from 'redux';
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

const accessStore = () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );

  return store;
}

export default accessStore;