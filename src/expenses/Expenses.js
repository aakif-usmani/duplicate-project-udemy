import React, { useState } from "react";
import "./Expenses.css";

const Expenses = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showHide, setShowHide] = useState(false);

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
  setEnteredTitle("");
  setEnteredDate("");
  setEnteredAmount("");
 
  return (
    <div className="main">
      <h1> EXPENSE MANAGER</h1>
      <div className="form-input">
        {/* input div */}
        <form>
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
      <div className="chart-main">chart div</div>
      <div className="filter-main">filter year div</div>
      <div className="expense-list-main">expense list div</div>
    </div>
  );
};

export default Expenses;
