import React, { useState } from "react";
import "./Expenses.css";

const Expenses = () => {
  const DUMMY_ESPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showHide, setShowHide] = useState(false);
  const [filteredYear, setFilteredYear] = useState("2021");
  const [listedExpenses,setListedExpenses] = useState(DUMMY_ESPENSES)

  const showHideForm = () => {
    setShowHide(!showHide);
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
    console.log(expenseData);
  };
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const mapfunction =(expense) => {return(
    <div>
        <div className="listed-date" >{expense.date.getDay()}</div>
        <div className="listed-title">{expense.title}</div>
        <div className="listed-amount">{expense.amount}</div>
   </div>
  )}
  // const listedItems = (DUMMY_ESPENSES) => {
  //   const listItem = DUMMY_ESPENSES.title.map("")
  // }
  return (
    <div className="main">
      <h1> EXPENSE MANAGER</h1>
      <div className="form-input">
        {/* input div */}
        <form onSubmit={submitHandler}>
          {showHide === false ? (
            <div>
              <button
                className="exppense-open-form input"
                type="submit"
                onClick={showHideForm}
              >
                add new expense
              </button>
            </div>
          ) : (
            <div>
              <label>Title</label>
              <input
                className="text-input  input"
                type="text"
                placeholder="Enter Title "
                value={enteredTitle}
                onChange={titleChangeHandler}
              ></input>
              <label>Amount</label>
              <input
                className="number-input  input"
                type="number"
                min="1.00"
                step="1.00"
                placeholder="Enter Amount"
                value={enteredAmount}
                onChange={amountChangeHandler}
              ></input>
              <label>Date</label>
              <input
                className="date-input  input"
                type="date"
                placeholder="date"
                value={enteredDate}
                onChange={dateChangeHandler}
              ></input>
              <br />
              <button className="input" onClick={showHideForm}>
                cencel
              </button>
              <button className="text-input  input" type="submit">
                add expense
              </button>
            </div>
          )}
        </form>
      </div>

      <div className="chart-main">
        <p>chart div</p>
      </div>

      <div className="filter-main">
        <p className="filter-text">
          <b>Filter Year </b>
        </p>
        <select
          className="select-filter-year"
          onChange={filterChangeHandler}
          value={filteredYear}
        >
          <option className="select-option" value="2020">
            2020
          </option>
          <option className="select-option" value="2021">
            2021
          </option>
          <option className="select-option" value="2022">
            2022
          </option>
          <option className="select-option" value="2023">
            2023
          </option>
          <option className="select-option" value="2024">
            2024
          </option>
        </select>
      </div>
      <div className="expense-list-main">
        <p>expense list div</p>
      
        {
        DUMMY_ESPENSES.map((expense,index) => {return(
          <div>
              <div className="listed-date" >{expense.date.getDay()}</div>
              <div className="listed-title">{expense.title}</div>
              <div className="listed-amount">{expense.amount}</div>
         </div>
        )}
          /////
         
      
        
        ////
        )
        
        
        
        };
        </div>
        
        
      </div>
    
  );
};

export default Expenses;
