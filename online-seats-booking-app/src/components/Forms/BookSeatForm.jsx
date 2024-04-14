import { InputField } from "./InputField";
import styles from "./BookSeatForm.module.css";
import { Form } from "react-router-dom";
import { useState } from "react";
import FloorsDropDown from "../dropdown/FloorsDropDown";
import DateSelector from "../datepicker/DateSelector";
import BookingService from "../util/BookingService";
import LayoutService from "../util/LayoutService";

// Dropdown list

export const BookSeatForm = (props) => {
  const [fromTime, setFromTime] = useState("09:00");
  const [toTime, setToTime] = useState("21:00");
  const seatId = useState(props.getSection(props.selectedSeat.key).at(props.selectedSeat.index)).at(0).id

  const [formData, setFormData] = useState({
    userId: props.userId,
    seatId: seatId,
    startTime: `${LayoutService.formatDate(props.date)}T${fromTime}:00`,
    endTime: `${LayoutService.formatDate(props.date)}T${toTime}:00`,
    date: props.date,
    status: "BOOKED",
  });

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

    const startTimeString = `${LayoutService.formatDate(props.date)}T${fromTime}:00`;
    const endTimeString = `${LayoutService.formatDate(props.date)}T${toTime}:00`;
    props.setBlur(false);
    // console.log("Selected Seat : "+ JSON.stringify(seat.at(0).id));
    props.updateSection(
      props.selectedSeat.key,
      props.selectedSeat.index,
      "red"
    );
    event.preventDefault();
    setFormData({
      userId: props.userId,
      seatId: seatId,
      startTime: startTimeString,
      endTime: endTimeString,
      date: props.date,
      status: "BOOKED",
    });
    // console.log("FORM DATA" + JSON.stringify(formData));
    // Perform any further actions here, such as sending data to the server
    BookingService.addBooking(formData)
      .then((response) => {
        props.setBlur(false);
        console.log(response.status);
      })
      .catch((e) => console.log(e));
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
          {/* <label className={styles.formLabel} onClick={handlePreventDefault}>
            <FloorsDropDown
              menuItems={props.items}
              buttonText={"FLOORS"}
              className={styles.longButton}
              style={styles.longButton}
              setFloor={props.setFloor}
            ></FloorsDropDown>
          </label> */}
          <label className={styles.formLabel} onClick={handlePreventDefault}>
            {/* Date Selector */}
            <DateSelector selectDate={props.selectDate}></DateSelector>
          </label>
        </div>
        <div className={styles.formRow}>
          <button
            type="submit"
            className={styles.formButton}
            onClick={props.handleBook}
          >
            Book
          </button>
        </div>
      </form>
    </div>
  );
};
