import React from 'react';
// import expensesReducer from '../reducers/expenses';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  console.log(props)
  return (
    <div>
      <ExpenseForm 
        expense={props.expense}
        onSubmit={((expense) => {
          //dispatch action to edit the expense
          props.dispatch(editExpense(props.expense.id, expense));
          //redirect to dashboard
          props.history.push('/');
          // console.log("updated", expense)
        })}
      />
      <button onClick={(e) => {
        props.dispatch(removeExpense({ id: props.match.params.id}));
        props.history.push('/');
      }}>Remove</button>
    </div>
  )
};

const mapStateToProps = (state, props) => {
  // console.log(props)
  return {
    expense: state.expenses.find((expense) => {
      console.log(expense.id);
      console.log(props.match.params.id)
      return expense.id === props.match.params.id
    })
  }
};

export default connect(mapStateToProps)(EditExpensePage);