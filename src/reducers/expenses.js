//expenses reducer

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

export default expensesReducer;