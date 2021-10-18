import React, { useState, useEffect } from "react";
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
  const [expensesYears, setExpensesYears] = useState([]);
  const [showHide, setShowHide] = useState(false);
  const [filteredYear, setFilteredYear] = useState("all");
  const [expenses, setExpenses] = useState(DUMMY_ESPENSES);

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
    addListedExpensesHandler(expenseData);
    console.log(expenseData);
  };
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear.target.value);
  };
  let DateHandler = (date) => {
    let day = date.getDate();
    let month = date.toLocaleString("default", { month: "long" });
    let year = date.getFullYear();
    let dateConcatenate = day + "-" + month + "-" + year;
    return dateConcatenate;
  };
  const addListedExpensesHandler = (expense2) => {
    setExpenses((prevExpenses) => {
      return [expense2, ...prevExpenses];
    });
  };
  var totalExpense = 0;
  const monthCount = [
    { label: "Jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  var xExpenses =
    filteredYear === "all"
      ? expenses
      : expenses.filter((filter2) => {
          if (filter2.date.getFullYear().toString() === filteredYear) {
            var month = filter2.date.getMonth();
            monthCount[month].value += filter2.amount;
            totalExpense += filter2.amount;
            return true;
          } else {
            return false;
          }
        });
  useEffect(() => {
    console.log("state changed");
    let xYears = [];
    expenses.filter((item) => {
      if (xYears.indexOf(item.date.getFullYear()) == -1) {
        xYears.push(item.date.getFullYear());
      }
    });
    setExpensesYears(xYears);
  }, [expenses]);
  return (
    <div className="main">
      <h1 className="main-heading"> EXPENSE MANAGER</h1>
      <div className="form-input">
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
                cancel
              </button>
              <button className="text-input  input" type="submit">
                add expense
              </button>
            </div>
          )}
        </form>
      </div>

      {filteredYear !== "all" && (
        <div className="chart-main">
          <div className="chartDiv-binder" key={filteredYear}>
            {monthCount.map((month, index) => {
              return (
                <div className="chart-vertical-div" key={index}>
                  <div
                    className="chart-fill"
                    style={{ height: (month.value / totalExpense) * 100 + "%" }}
                  ></div>
                  <p className="month-name">{month.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="filter-main">
        <p className="filter-text">
          <b>Filter Year </b>
        </p>
        {expensesYears.length > 0 && (
          <select
            className="select-filter-year"
            onChange={filterChangeHandler}
            value={filteredYear}
            key={""}
          >
            <option className="select-option" value={"all"}>
              all
            </option>
            {expensesYears.map((e, index) => {
              var ey = e.toString();
              return (
                <option key={index} className="select-option" value={ey}>
                  {ey}
                </option>
              );
            })}
          </select>
        )}
      </div>

      <div className="expense-list-main">
        <div>
          <table className="listed-table">
            <tbody>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
              </tr>
              {xExpenses.map((expense, index) => {
                return (
                  <tr key={index + expense.title}>
                    <td>
                      <div>{DateHandler(expense.date)}</div>
                    </td>
                    <td>
                      <div>{expense.title}</div>
                    </td>
                    <td>
                      <div>{expense.amount}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
