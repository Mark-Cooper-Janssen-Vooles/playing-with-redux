import React from 'react';
import uuid from 'uuid';
import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description: description, 
      note: note,
      amount: amount,
      createdAt: createdAt
    }
  }
}

// REMOVE_EXPENSE (by ID)
const removeExpense = ({id}) => {
  return {
    type: "REMOVE_EXPENSE",
    expense: {
      id: id
    }
  }
}

// EDIT_EXPENSE
const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates
  }
};

// SET_TEXT_FILTER
const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text: {
      text: text
    }
  }
}

// SORT_BY_DATE
const sortByDate = () => {
  return {
    type: "SORT_BY_DATE"
  }
}

// SORT_BY_AMOUNT
const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT"
  }
}
// SET_START_DATE
const setStartDate = (startDate) => {
  const setDate = typeof(startDate) === 'number' ? startDate : undefined

  return {
    type: "SET_START_DATE",
    startDate: setDate
  }
}
// SET_END_DATE
const setEndDate = (endDate) => {
  const setDate = typeof(endDate) === 'number' ? endDate : undefined

  return {
    type: "SET_END_DATE",
    endDate: setDate
  }
}

// Expenses reducer: (for the expenses array)
const expenseReducerDefaultState = [];
const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      //state.push(action.expense) => push changes the original array. We want to avoid changing state / action. just want to read off of them
      // return state.concat(action.expense); 
      //concat takes the array and combines the item onto it, returning a new array. it doesn't change state.

      //andrews preferred method: 
      return [ ...state, action.expense ];

    case "REMOVE_EXPENSE":
      const id = action.expense.id;
      let filteredArray = state.filter((item) => {
        return item.id !== id 
      });
      return filteredArray;
    case "EDIT_EXPENSE":
      //find the match, correctly change it, return new array.
      return state.map((item) => {
        if(item.id === action.id) {
          //if match, return new object
          return { 
            ...item,
            ...action.updates
          }
        } else {
          return item; //aka no change
        }
      });
    default: 
      return state;
  }
}

//Filters reducer: 
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date", //or amount
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        ...action.text
      }
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      }
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      }
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      }
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      }
    default: 
      return state;
  }
};

//timestamps (counting in miliseconds)
//positive numbers go forward in time. negative go back in time.

//0 represents jan 1st 1970 at midnight (unix epoch)
// 33400, 10, -203

//get visible expenses: 
//pass in expenses and filters
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof(startDate) !== 'number' || expense.createdAt >= startDate; //only if start date is a number do we want to actually filter numbers
    const endDateMatch = typeof(endDate) !== "number" || expense.createdAt <= endDate;

    const lowerCaseDescription = expense.description.toLowerCase();
    const lowerCaseText = text.toLowerCase();
    const textMatch = lowerCaseDescription.includes(lowerCaseText);

    //figure out if expenses.description has the text variable string in it 

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === "date") {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if(sortBy === "amount") {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Store creation
const store = createStore(
  //combine reducers takes an object with key-value pairs. 
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
  //now reduce store is an object with a property of expenses! 
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: "rent", amount: 520, createdAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({ description: "coffee", amount: 2, createdAt: 1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5 }));

// store.dispatch(setTextFilter("Rent"));
// store.dispatch(setTextFilter(""));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-500));
// store.dispatch(setStartDate()); //set to undefined

// store.dispatch(setEndDate(1000));

//-----

const demoState = {
  expenses: [{
    id: "random",
    description: "Janurary rent",
    note: "This was the final payment for that address",
    amount: 540,
    createdAt: 0
  }],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};

const ExpensifyRedux = () => {
  return (
    <div>
      Expensify Redux page.
    </div>
  )
}
export default ExpensifyRedux;