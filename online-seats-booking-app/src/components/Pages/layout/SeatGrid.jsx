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
    return (
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
        {options.map((option) => {
          // console.log(props.seats.at(index).status)

            if (props.seats.at(index).status == "AVAILABLE") {
              return (
                <li
                  key={option}
                  className={styles.popupRow}
                  onClick={() => onOptionClick(option, index)}
                >
                  {option}
                </li>
              );
            }
            // else if (props.seats.at(index).status == "BOOKED") {
            //   return (<li
            //     key={option}
            //     className={styles.popupRow}
            //     onClick={() => onOptionClick(option, index)}
            //   >
            //     {option}
            //   </li>);
            // }
          
        })}
      </ul>
    );
  };
  const onOptionClick = (option, index) => {
    console.log("Options Clicked !!");
    // const updatedColors = [...props.seats];
    if (option == "Book Seat") {
      // Booking Logic
      props.setBlur(true);
      if (props.giveIndexForm != undefined) {
        props.giveIndexForm(index, props.sectionKey);
      }
      setSelectedElementIndex(null);
    }
    // props.setSeats(updatedColors);
  };

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
    });
  }
  // Here setting color for Bookings Page only
  // do not display for null seats, green for available and red for booked
  else if (props.page == "booking") {
    seatStyle = (index) => ({
      "--seat-color":
        props.seats.at(index) == null
          ? "rgb(0,0,0,0)"
          : props.seats.at(index).status == "AVAILABLE"
          ? getColor("AVAILABLE")
          : getColor("BOOKED"),

      border: props.seats.at(index) == null ? "0px" : "2px solid black",
      zIndex: 10,
  
    });
  }

  const handleClick = (index) => {
    // Create a copy of the seatColors array to avoid mutation
    if (props.state == "booking" || props.page == "booking") {
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
  };

  var gridStyles = {
    gridTemplateColumns: "repeat(" + props.columns + ", 1fr)",
    gridTemplateRows: "repeat(" + props.rows + ", 1fr)",
  };

  const getColor = (status) => {
    switch (status) {
      case "AVAILABLE":
        return "lightgreen";
      case "BOOKED":
        return "lightgrey";
      case "SWAP":
        return "purple";
      case "CACLE":
        return "brown";
      default:
        return "white";
    }
  };
  // console.log(props.seats.at(0).status)
  return (
    <div>
      <div className={styles.innerGridContainer} style={gridStyles}>
        {props.seats.map((seat, index) => (
          <div div style={{ position: "relative" }}>
            <div
              key={index}
              className={`${styles.seat} ${seat != null ? styles.hoverable : ""}
              `}
              style={seatStyle(index)}
              onClick={() => handleClick(index)}
            ></div>
            {(selectedElementIndex === index && props.seats.at(index) != null) &&
              renderPopup(props.options, index)}
          </div>
        ))}
      </div>
    </div>
  );
};
