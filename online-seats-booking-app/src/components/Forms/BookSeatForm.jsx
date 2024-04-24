import { InputField } from "./InputField";
import styles from "./BookSeatForm.module.css";
import { Form } from "react-router-dom";
import { useEffect, useState } from "react";
import FloorsDropDown from "../dropdown/FloorsDropDown";
import DateSelector from "../datepicker/DateSelector";
import BookingService from "../util/BookingService";
import LayoutService from "../util/LayoutService";
import { BasicTimePicker } from "../timepicker/BasicTimePicker";
import { TimePicker } from "antd";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

// Dropdown list

export const BookSeatForm = (props) => {
  // let startTimeString;

  let [reservedDuration,setReserved] = useState([]);

  const today = new Date();
  // today.setHours(10);

  //  Set 3hrs as a prior booking limit
  const [fromTime, setFromTime] = useState(
    today.getDate() == props.date.getDate() && today.getHours() > 7
      ? `${today.getHours() + 2}:00`
      : "09:00"
  );
  const [toTime, setToTime] = useState(
    today.getDate() == props.date.getDate() && today.getHours() >= 7
      ? `${Number.parseInt(fromTime.slice(0, 2)) + 1}:00`
      : "10:00"
  );
  const seatId = useState(
    props.getSection(props.selectedSeat.key).at(props.selectedSeat.index)
  ).at(0).id;

  let [formData, setFormData] = useState({
    userId: props.userId,
    seatId: seatId,
    startTime: `${LayoutService.formatDate(props.date)}T${fromTime}:00`,
    endTime: `${LayoutService.formatDate(props.date)}T${toTime}:00`,
    date: props.date,
    status: "BOOKED",
  });

  // Update formData with the latest values of fromTime and toTime
  const updateFormData = () => {
    setFormData({
      ...formData,
      startTime: `${LayoutService.formatDate(props.date)}T${fromTime}:00`,
      endTime: `${LayoutService.formatDate(props.date)}T${toTime}:00`,
    });
  };

  const handleFromTimeChange = (event) => {
    setFromTime((prevFromTime) => event.target.value);

    console.log("From Time: " + fromTime);
  };

  useEffect(() => {
    updateFormData(); // Call updateFormData on component mount
    bookingsList();
  }, []); // Empty dependency array: run only once after mount

  useEffect(() => {
    updateFormData(); // Call updateFormData whenever fromTime or toTime changes
  }, [fromTime, toTime]);

  const handleToTimeChange = (event) => {
    setToTime(event.target.value);
  };

  const handlePreventDefault = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    const startTimeString = `${LayoutService.formatDate(
      props.date
    )}T${fromTime}:00`;
    const endTimeString = `${LayoutService.formatDate(
      props.date
    )}T${toTime}:00`;
    props.setBlur(false);
    console.log("Start time : " + startTimeString);
    console.log("End time : " + endTimeString);
    // console.log("Selected Seat : "+ JSON.stringify(seat.at(0).id));

    props.updateSection(
      props.selectedSeat.key,
      props.selectedSeat.index,
      "red"
    );

    // const currentForm = JSON.parse(JSON.stringify(formData));

    // currentForm.startTime = startTimeString;
    // currentForm.endTime = endTimeString;

    console.log("FORM DATA" + JSON.stringify(formData));
    // Perform any further actions here, such as sending data to the server
    BookingService.addBooking(formData)
      .then((response) => {
        props.setBlur(false);
        console.log(response.status);
      })
      .catch((e) => console.log(e));
  };

  const handleCancel = (event) => {
    setReserved([]);
    props.setBlur(false);
  };

  //  Logic of disabling the time slots

  const availableTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  
  const bookingsList = () => {
    // get All booking using seatId
    const bookingsPresent = BookingService.getAllBookingsBySeatDate(seatId, props.date).then(
      (response) => {
      console.log("Fetched Bookings successfully !")
      const temp = [...reservedDuration]
      response.data.map(
        (booking)=>{
          var start = parseInt(booking.startTime.substring(11, 13));
          var end =  parseInt(booking.endTime.substring(11, 13));
          console.log("start: " + start)
          console.log("end: " + end )
          // for ( var i = 16; i < 18 ; i++){
          //   console.log(i)
          //   return i;
          // }
          for (let i = start; i < end; i++) {
            // console.log(i)
            temp.push(i);
          }
        }
      )
      setReserved(temp)
      console.log("RESERVED TIMESLOTS: " + reservedDuration)
    }
    ).catch(e=> console.log(e))
  }

  const isTimeDisabled = (time) => {
    console.log(reservedDuration)
    if (reservedDuration.includes(parseInt(time))){
      console.log(reservedDuration)
        return true
    }
    return false;
  };
  return (
    <div className={styles.bookingForm}>
      {today.getHours() < 22 || today.getDate() < props.date.getDate() ? (
        <>
          <h2>DURATION : </h2>
          <br></br>
          <form onSubmit={handleSubmit} className={styles.timeForm}>
            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                From:
                <input
                  type="time"
                  value={fromTime}
                  onChange={(event) => {
                    const selectedTime = event.target.value;
                    if (isTimeDisabled(selectedTime)) {
                      event.preventDefault(); // Prevent update if time is disabled
                      // Optionally, provide visual feedback here (e.g., highlighting)
                      event.preventDefault(); // Prevent update if time is invalid
                      event.target.style.backgroundColor = "#ffdddd";
                      event.target.style.border = "1px solid red";
                    } else {
                      event.target.style.backgroundColor = "";
                      event.target.style.border = "";
                      setFromTime(selectedTime); // Update state only if valid
                    }
                  }}
                  // onChange={handleFromTimeChange}
                  //  Set 3hrs as a prior booking limit
                  min={
                    today.getDate() == props.date.getDate() &&
                    today.getHours() > 7
                      ? `${today.getHours() + 2}:00`
                      : "09:00"
                  }
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
                  min={
                    today.getDate() == props.date.getDate() &&
                    today.getHours() >= 7
                      ? `${Number.parseInt(fromTime.slice(0, 2)) + 1}:00`
                      : "10:00"
                  }
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
              {/* <label className={styles.formLabel} onClick={handlePreventDefault}> */}
              {/* Date Selector */}
              {/* <DateSelector selectDate={props.selectDate}></DateSelector> */}
              {/* </label> */}
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
            <div className={styles.formRow}>
              <button className={styles.formButton} onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </>
      ) : (
        <div>
          <div className={styles.formRow}>Sorry Can't Book For Today!!</div>
          <div className={styles.formRow}>
            <button className={styles.formButton} onClick={handleCancel}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
