
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import styles from '../Pages/layout/SeatLayout.module.css'

const DateSelector = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelect = (date)=> {
    setSelectedDate(date)
    props.selectDate(date)
  }

  return (
    <div >
      <div style={{textAlign:'center  ', fontSize:'larger',    fontWeight: 'bold'}}>SELECTED DATE</div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => handleSelect(date)}
        dateFormat="dd/MM/yyyy" // Adjust the date format as needed
        placeholderText="Select a date" // Placeholder text for the input field
        className="custom-datepicker" // Optional: Add a custom class for styling
      />
    </div>
  );
};

export default DateSelector;
