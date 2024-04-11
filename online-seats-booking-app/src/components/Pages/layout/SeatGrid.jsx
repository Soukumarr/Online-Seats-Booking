import { useEffect, useState } from "react";
import styles from "./SeatLayout.module.css";
import Seat from "./Seat";
import { useRef } from "react";
import { BookSeatForm } from "../../Forms/BookSeatForm";

export const SeatGrid = (props) => {
  // bY CHANGING ELEMENTS OF THIS ARRAY we can alter number of rows and columns
  // Later from backend we will fetch an array like below and modify our code to work for the elements inside it
  // for now we can set the lenght from props and alter the styling

  const [selectedElementIndex, setSelectedElementIndex] = useState(null);
 
  const renderPopup = (options, index) => {
    return(
          <ul
          style={{
            position: "absolute",
            zIndex: 100,
            backgroundColor: "lightyellow",
            left: "50px",
            right: "-220%",
            top: "3rem",
            padding: 0,
          }}
        >
          {options.map((option) => (
            <li key={option} className={styles.popupRow} onClick={()=> onOptionClick(option, index)}>
              {option}
            </li>
          ))}
        </ul>
        )
  
  }
  const onOptionClick = (option, index) => {
    console.log("Options Clicked !!")
    const updatedColors = [...props.seats];
    if (option == "Book Seat") {
        // Booking Logic
        props.setBlur(true);
        if (props.giveIndexForm != undefined) {
          props.giveIndexForm(index, props.sectionKey)
        }
        setSelectedElementIndex(null)
    }
    props.setSeats(updatedColors)
  }

  const handlePopupClick = (index) => {
    if (selectedElementIndex == index) {
      setSelectedElementIndex(null);
    } else {
      setSelectedElementIndex(index);
    }
  };
  let seatStyle = (index) => ({});

  if (props.page == "layout") {
    seatStyle = (index) => ({
      "--seat-color":
        props.seats.at(index) == "white"
          ? props.state == "layout"
            ? props.seats.at(index)
            : "rgb(0,0,0,0)"
          : props.seats.at(index),
  
      border:
        (props.state == "view" || props.state == "booking") &&
        props.seats.at(index) == "white"
          ? "0px"
          : "2px solid black",
      zIndex: 10,
      // Use ternary operator for conditional styles
      // color: condition ? 'blue' : 'black',
      // You can also use if-else statements, but it's more verbose
      // color: condition ? 'blue' : condition2 ? 'green' : 'black',
    });
  }else if (props.page == "booking"){
    seatStyle = (index) => ({
      "--seat-color":
        props.seats.at(index) == "white"
          ? "rgb(0,0,0,0)"
          : props.seats.at(index),
  
      border:
        props.seats.at(index) == "white"
          ? "0px"
          : "2px solid black",
      zIndex: 10,
      // Use ternary operator for conditional styles
      // color: condition ? 'blue' : 'black',
      // You can also use if-else statements, but it's more verbose
      // color: condition ? 'blue' : condition2 ? 'green' : 'black',
    });
    
  }

  const handleClick = (index) => {
    // Create a copy of the seatColors array to avoid mutation
    if (props.state == "booking" || props.page=="booking") {
      handlePopupClick(index);
    }
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
    } 
    // Update the state with the modified array
    props.setSeats(updatedColors);
  }

  var gridStyles = {
    gridTemplateColumns: "repeat(" + props.columns + ", 1fr)",
    gridTemplateRows: "repeat(" + props.rows + ", 1fr)",
  };
  return (
    <div>
      <div className={styles.innerGridContainer} style={gridStyles}>
        {props.seats.map((color, index) => (
          <div div style={{ position: "relative" }}>
            <div
              key={index}
              className={`${styles.seat} ${
                props.seats.at(index) == "white" ? styles.hoverable : ""
              }
              `}
              style={seatStyle(index)}
              onClick={() => handleClick(index)}
            ></div>
            {selectedElementIndex === index && renderPopup(props.options, index)}
          </div>
        ))}
      </div>
    </div>
  );
};
