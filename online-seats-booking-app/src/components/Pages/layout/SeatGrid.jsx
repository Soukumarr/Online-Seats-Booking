import { useEffect, useState } from "react";
import styles from "./SeatLayout.module.css";
import Seat from "./Seat";
import { useRef } from "react";
import { BookSeatForm } from "../../Forms/BookSeatForm";
import BookingService from "../../util/BookingService";

export const SeatGrid = (props) => {
  // bY CHANGING ELEMENTS OF THIS ARRAY we can alter number of rows and columns
  // Later from backend we will fetch an array like below and modify our code to work for the elements inside it
  // for now we can set the lenght from props and alter the styling

  const [selectedElementIndex, setSelectedElementIndex] = useState(null);

  const renderPopup = (options, elementIndex) => {
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
        {props.page == "booking"
          ? options.map((option, index) => {
              // console.log(props.seats.at(index).status)
              // console.log("STATUS" + props.seats.at(elementIndex).status);
              if (
                props.seats.at(elementIndex).status == "AVAILABLE" ||
                props.seats.at(elementIndex).status == "EXPIRED" 
              ) {
                // console.log("AVAILABLE SEAT OPTIONS ");
                if (index == 0 || index == 3) {
                  return (
                    <li
                      key={index}
                      className={styles.popupRow}
                      onClick={() => onOptionClick(option, elementIndex)}
                    >
                      {option}
                    </li>
                  );
                }
              } else if (props.seats.at(elementIndex).status == "BOOKED") {
                // console.log("AVAILABLE SEAT OPTIONS ");
                if (index == 1 || index == 2) {
                  return (
                    <li
                      key={index}
                      className={styles.popupRow}
                      onClick={() => onOptionClick(option, elementIndex)}
                    >
                      {option}
                    </li>
                  );
                }
              }
            })
          : options.map((option, index) => {
              // console.log(props.seats.at(index).status)
              // console.log("STATUS" + props.seats.at(elementIndex).status);
              if (props.seats.at(elementIndex).status == "BOOKED") {
                if (index == 3 || index == 0 || index == 2) {
                  return (
                    <li
                      key={index}
                      className={styles.popupRow}
                      onClick={() => onOptionClick(option, index)}
                    >
                      {option}
                    </li>
                  );
                }
              } else if (props.seats.at(elementIndex).status == "CANCEL") {
                // console.log("AVAILABLE SEAT OPTIONS ");
                if (index == 3 || index == 2) {
                  return (
                    <li
                      key={index}
                      className={styles.popupRow}
                      onClick={() => onOptionClick(option, index)}
                    >
                      {option}
                    </li>
                  );
                }
              } else if (props.seats.at(elementIndex).status == "SWAP") {
                // console.log("AVAILABLE SEAT OPTIONS ");
                if (index == 1 || index == 3) {
                  return (
                    <li
                      key={index}
                      className={styles.popupRow}
                      onClick={() => onOptionClick(option, elementIndex)}
                    >
                      {option}
                    </li>
                  );
                }
              }
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
    // SET options Functionalities here
    else if (option == "Cancel Request") {
      handleCancelRequest(index);
    } else if (option == "Cancel Booking") {
      deleteBooking(index);
    } else if (option == "Swap Seat") {
      makeSwapRequest(index);
    } else if (option == "Accept Swap") {
      acceptSwapRequest(index);
    }

    // props.setSeats(updatedColors);
  };

  const handleCancelRequest = (elementIndex) => {
    // console.log("Cancel Request Generated: " + props.seats.at(elementIndex));
    var s = props.seats.at(selectedElementIndex);
    alert("Cancelling Seat :   FLOOR: "+s.floor+"   SECTION: "+ s.section +"  STATUS: "+s.status )
    BookingService.cancelRequest(props.seats.at(selectedElementIndex).bookingId)
      .then((response) => {
        console.log("Created Cancel Request Successfully");
      })
      .catch((e) => console.log(e));
      setSelectedElementIndex(null)
      props.renderSeats()
  };

  const deleteBooking = (elementIndex) => {
    console.log("Delete Booking Generated");
    //  Fetch booking Id for a seat
    // console.log(props.seats.at(selectedElementIndex));
    BookingService.deleteBooking(props.seats.at(selectedElementIndex).bookingId)
      .then((response) => {
        console.log("Deleted Booking Successfully");
        alert("Deleted Booking Successfully")
        setSelectedElementIndex(null)
      
      })
      .catch((e) => console.log(e));
      props.renderSeats()
  };

  const makeSwapRequest = (index) => {
    console.log("SWAP Request Generated");
  };

  const acceptSwapRequest = (index) => {
    console.log("ACCEPT SWAP Request Generated");
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
        props.state == "layout" && props.seats.at(index) == null
          ? getColor("white")
          : props.seats.at(index) == null
          ? "rgb(0,0,0,0)"
          : getColor(props.seats.at(index).status),

      border:
        props.state == "layout" || props.seats.at(index) != null
          ? "2px solid black"
          : "0px",

      zIndex: 10,
    });
  }
  // Here setting color for Bookings Page only
  // do not display for null seats, green for available and red for booked
  else if (props.page == "booking") {
    seatStyle = (index) => ({
      "--seat-color":
        props.state == "layout" && props.seats.at(index) == null
          ? getColor("white")
          : props.seats.at(index) == null
          ? "rgb(0,0,0,0)"
          : getColor(props.seats.at(index).status),

      border: props.seats.at(index) == null ? "0px" : "2px solid black",
      zIndex: 10,
    });
  }

  const handleClick = (index) => {
    if (props.state == "booking" || props.page == "booking") {
      handlePopupClick(index);
    }
    console.log("Seat Clicked!");
    if (props.state == "layout") {
      console.log("Layout mode: " + props.edit);
      if (props.edit) {
        var updatedSection = [...props.seats];

        if (props.seats.at(index) == null) {
          // Update Seat Color to white and include seat into layout
          // Create a seat obj and add it to the section array at index
          // also append this object to the newSeats array
          console.log("Seat Added to Layout!");
          updatedSection[index] = {
            officeId: props.officeId,
            seatIndex: index,
            section: props.sectionKey,
            status: "AVAILABLE",
            floorId: props.floor,
            available: true,
            bookingId: null,
          };
          console.log("New Seat :" + JSON.stringify(updatedSection.at(index)));
          props.addNewSeats(updatedSection.at(index));
          props.setSeats(updatedSection);
          props.updateCount(-1);
        } else if (props.seats.at(index).status == "AVAILABLE") {
          //  DELETE SEAT from the layout
          // remove the seat obj from section array
          // append the obj in the deleteSeats array
          // if obj present in newSeats just remove it from there

          updatedSection[index] = null;
          props.setSeats(updatedSection);
          props.removeSeats(props.seats.at(index));
          console.log(
            "Seat Removed from Layout! " + JSON.stringify(props.seats.at(index))
          );
          props.updateCount(1);
        }
      }
    }
  };

  var gridStyles = {
    gridTemplateColumns: "repeat(" + props.columns + ", 1fr)",
    gridTemplateRows: "repeat(" + props.rows + ", 1fr)",
  };

  const getColor = (status) => {
    switch (status) {
      case "AVAILABLE":
        return "lightgreen";
      case "EXPIRED" :
        return "pink";
      case "BOOKED":
        return "lightgrey";
      case "SWAP":
        return "purple";
      case "CANCEL":
        return "brown";
      case "USERBOOKED":
        return "red";
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
            {selectedElementIndex === index &&
              props.seats.at(index) != null &&
              renderPopup(props.options, index)}
          </div>
        ))}
      </div>
    </div>
  );
};
