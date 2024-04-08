
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import styles from '../Pages/layout/SeatLayout.module.css'

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div >
      <div style={{textAlign:'center  ', fontSize:'larger',    fontWeight: 'bold'}}>SELECTED DATE</div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy" // Adjust the date format as needed
        placeholderText="Select a date" // Placeholder text for the input field
        className="custom-datepicker" // Optional: Add a custom class for styling
      />
    </div>
  );
};

export default DateSelector;
