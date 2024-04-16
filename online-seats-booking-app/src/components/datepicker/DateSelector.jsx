
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import styles from '../Pages/layout/SeatLayout.module.css'

const DateSelector = (props) => {
 
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  // On Mount Select Todays date 
  useEffect(()=>{
    props.selectDate(today)
  },[])

  const handleSelect = (date)=> {

    console.log(date.getDate())
    console.log(today.getDate())
    
    if(date.getDate() < today.getDate()){
      alert(`Please select a date on or after ${today.toDateString().slice(0, 10)+ ", "+today.toDateString().slice(11,15)}`)
    }
    else{
      setSelectedDate(date)
      props.selectDate(date)
    }
  }

  return (
    <div >
      <div style={{textAlign:'center  ', fontSize:'larger',    fontWeight: 'bold'}}>SELECTED DATE</div>
      <DatePicker
        selected={selectedDate}
        value={selectedDate}
        onChange={(date) => handleSelect(date)}
        dateFormat="dd/MM/yyyy" // Adjust the date format as needed
        placeholderText="Select a date" // Placeholder text for the input field
        className="custom-datepicker" // Optional: Add a custom class for styling
      />
    </div>
  );
};

export default DateSelector;
