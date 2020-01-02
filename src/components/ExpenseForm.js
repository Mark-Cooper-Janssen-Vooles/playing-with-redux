import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

//represents the current point in time, when this code runs.
// const now = moment();

// console.log(now);
// console.log(now.format()); //get formatted date
// console.log(now.format('MMM Do YYYY')); //prints Jan 1st 2020



//form fields, validation, logic to get form to work!

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log("from constructor:")
    // console.log((props.expense.amount).toString())
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  }
  
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => {
      return ({description: description})
      });
  };
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => {
      return ({note: note});
    });
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    //uses regular expressions
    //  /^\d*(\.\d{0,2})?$/
    //.match means the entered string must match the regex's code!
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => {
        return ({amount: amount});
      });
    }
  };
  onDateChange = (createdAt) => {
    //meed to check out API
    if (createdAt) {
      this.setState(() => {
        return ({createdAt: createdAt});
      });
    }
  };
  onFocusChange = ({focused}) => {
    //checkout API in docs
    this.setState(() => {
      return (
        {calendarFocused: focused}
      )
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      //set error state equal to 'Please provide description and amount'
      this.setState(() => {
        return (
          {error: "Please provide description and amount"}
        )
      })
    } else {
      //clear the error
      this.setState(() => {
        return (
          {error: ''}
        )
      })
      this.props.onSubmit({
        //need to do some conversion for amount / createdAt
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    };
  };

  render() {
    return (
      <div>
        {this.state.error && (<p>{this.state.error}</p>)}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}  
          />
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            plaeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm;