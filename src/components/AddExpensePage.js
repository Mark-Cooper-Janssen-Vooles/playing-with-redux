import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

const AddExpensePage = (props) => {
  return (
    <div>
      <h1>Add an Expense</h1>
      <ExpenseForm onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
        //push handles redirecting
      }} />
    </div>
  )
};

export default connect()(AddExpensePage);