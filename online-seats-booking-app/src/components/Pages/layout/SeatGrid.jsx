import { useEffect, useState } from "react";
import styles from "./SeatLayout.module.css";
import Seat from "./Seat";
import { useRef } from "react";

export const SeatGrid = (props) => {
  // bY CHANGING ELEMENTS OF THIS ARRAY we can alter number of rows and columns
  // Later from backend we will fetch an array like below and modify our code to work for the elements inside it
  // for now we can set the lenght from props and alter the styling

  const seatStyle = (index) => ({
    "--seat-color":
        (props.seats.at(index) =="white")?
            (props.state == "layout")? props.seats.at(index): "rgb(0,0,0,0)"
            :props.seats.at(index),
    border:
      (props.state == "view" || props.state == "booking") &&
      props.seats.at(index) == "white"
        ? "0px"
        : "2px solid black",
    // Use ternary operator for conditional styles
    // color: condition ? 'blue' : 'black',
    // You can also use if-else statements, but it's more verbose
    // color: condition ? 'blue' : condition2 ? 'green' : 'black',
  });

  const handleClick = (index) => {
    // Create a copy of the seatColors array to avoid mutation
    console.log("Seat Clicked!");
    const updatedColors = [...props.seats];
    if (props.state == "layout") {
      console.log("Layout mode");
      if (props.edit) {
        if (updatedColors[index] == "white") {
          updatedColors[index] = "lightgreen";

          props.onSelect(-1);
        } else if (updatedColors[index] == "lightgreen") {
          updatedColors[index] = "white";
          props.onSelect(1);
        }
      }
    } else if (props.state == "booking") {
      console.log("Bookings Mode");
      if (updatedColors[index] == "lightgreen") {
        updatedColors[index] = "red";
      } else if (updatedColors[index] == "red") {
        updatedColors[index] = "lightgreen";
      }
    }

    // Update the state with the modified array
    props.setSeats(updatedColors);
  };

  var gridStyles = {
    gridTemplateColumns: "repeat(" + props.columns + ", 1fr)",
    gridTemplateRows: "repeat(" + props.rows + ", 1fr)",
  };
  return (
    <div>
      <div className={styles.innerGridContainer} style={gridStyles}>
        {props.seats.map((color, index) => (
          <div
            key={index}
            className={`${styles.seat} ${
              props.seats.at(index) == "white" ? styles.hoverable : ""
            }`}
            style={seatStyle(index)}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
