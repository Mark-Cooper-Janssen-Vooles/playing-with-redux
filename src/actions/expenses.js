import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
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
export const removeExpense = ({id}) => {
  console.log("removed expense");
  return {
    type: "REMOVE_EXPENSE",
    expense: {
      id: id
    }
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates
  }
};