import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//export a stateless functional component
//description, amount, createdAt

const ExpenseListItem = (props) => {
  return (
    <div>
      <hr></hr>
      <h4><Link to={`/edit/${props.item.id}`}>{props.item.description}</Link></h4>
      <p>${props.item.amount}</p>
      <p>Created at: {props.item.createdAt}</p> 
    </div>
  )
}

//remove button dispatches an action to remove it.
//need to import this delete function
//need to connect to the store
//need to wire up onclick

export default ExpenseListItem;