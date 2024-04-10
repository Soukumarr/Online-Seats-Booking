import { InputField } from "./InputField";
import styles from "./BookSeatForm.module.css";
import { Form } from "react-router-dom";
import { useState } from "react";
import FloorsDropDown from "../dropdown/FloorsDropDown";
import DateSelector from "../datepicker/DateSelector";

// Dropdown list
const items = [
  { label: "Floor 1", onClick: () => console.log("Option 1 clicked") },
  { label: "Floor 2", onClick: () => console.log("Option 2 clicked") },
  { label: "Floor 3", onClick: () => console.log("Option 3 clicked") },
];

export const BookSeatForm = (props) => {
  const [fromTime, setFromTime] = useState("09:00");
  const [toTime, setToTime] = useState("21:00");

  const handleFromTimeChange = (event) => {
    setFromTime(event.target.value);
  };

  const handleToTimeChange = (event) => {
    setToTime(event.target.value);
  };

  const handlePreventDefault = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    props.setBlur(false)
    console.log(props.selectedSeat)
    props.updateSection(props.selectedSeat.key, props.selectedSeat.index, "red")
    event.preventDefault();
    console.log("From:", fromTime, "To:", toTime);
    // You can perform any further actions here, such as sending data to the server
  };

  return (
    <div className={styles.bookingForm}>
      <h2>DURATION : </h2>
      <br></br>
      <form onSubmit={handleSubmit} className={styles.timeForm}>
        <div className={styles.formRow}>
          <label className={styles.formLabel}>
            From:
            <input
              type="time"
              value={fromTime}
              onChange={handleFromTimeChange}
              min="09:00"
              max="21:00"
              required
              className={styles.formInput}
            />
          </label>
        </div>
        <div className={styles.formRow}>
          <label className={styles.formLabel}>
            To:
            <input
              type="time"
              value={toTime}
              onChange={handleToTimeChange}
              min="09:00"
              max="21:00"
              required
              className={styles.formInput}
            />
          </label>
          <label className={styles.formLabel} onClick={handlePreventDefault}>
            <FloorsDropDown
              menuItems={items}
              buttonText={"FLOORS"}
              className={styles.longButton}
              style={styles.longButton}
            ></FloorsDropDown>
          </label>
          <label className={styles.formLabel} onClick={handlePreventDefault}>
            {/* Date Selector */}
            <DateSelector></DateSelector>
          </label>
        </div>
        <div className={styles.formRow}>
          <button type="submit" className={styles.formButton} onClick={props.handleBook}>
            Book
          </button>
        </div>
      </form>
    </div>
  );
};
