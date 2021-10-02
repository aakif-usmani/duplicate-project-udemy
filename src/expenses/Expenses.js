import React from "react";
import './Expenses.css'


const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
};
const Expenses = () => {

    
    return(
       
        <div className="Card" >
            <h1>lets start!</h1>
     <div>
       input div
     </div>
     <div>
       chart div
     </div>
     <div>
       filter div
     </div>
     <div>
       expense list div
     </div>
        </div>
      
    )
};

export default Expenses;