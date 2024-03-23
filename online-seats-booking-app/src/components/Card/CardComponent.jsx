
import { useState } from "react";

export const CardComponent = (props) => {

  const handleClick = () => {
    // let newColor = buttonColor === 'green' ? 'red' : 'green'; // Toggle color
    // setButtonColor(newColor);
    console.log("Clicked!!")
  };

  return (

    <div class="card">
      <div class="container">
        <h4><b>Office Name: {props.office}
        </b></h4>

        <p>timeSymbol : {props.day}</p>
        <p>Desk number: {props.desk}</p>
        {/* TODO: add button for booking  */}
        <div className="plus-button-wrapper">
          <button class="plus-button" onClick={handleClick}>+</button>
        </div>

      </div>
    </div>
  )

}
