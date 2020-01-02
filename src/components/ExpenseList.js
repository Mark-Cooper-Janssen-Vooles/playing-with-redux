import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
  return (
    <div>
      <h1>Expense List</h1>
      {props.expenses.map((item) => {
        return (<ExpenseListItem key={item.id} item={item}/>)
      })} 
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
};
//so the props end up as props.expenses and filters.expenses

//andrew usually just puts "Connected" in front of the component.
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList); 
//essentially connect takes a function which maps the state to the props, then takes a child component to connect it to, giving access via the props

export default ConnectedExpenseList;