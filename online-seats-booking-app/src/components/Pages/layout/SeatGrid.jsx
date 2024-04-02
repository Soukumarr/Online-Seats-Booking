import { useEffect, useState } from "react";
import styles from "./SeatLayout.module.css";
import Seat from './Seat'
import { useRef } from "react";

export const SeatGrid = (props) => {
  // bY CHANGING ELEMENTS OF THIS ARRAY we can alter number of rows and columns
  // Later from backend we will fetch an array like below and modify our code to work for the elements inside it
  // for now we can set the lenght from props and alter the styling



  let [seats, setSeats] = useState(
    Array.from({ length: props.rows * props.columns }).fill("white")
  );

  // const resetArray = useRef([...seats]);
  const resetArray = [];

  
  console.log(`seat ${seats.at(5) == "white" ? 'hoverable' : ''}`)
  const handleClick = (index) => {
    // Create a copy of the seatColors array to avoid mutation
    const updatedColors = [...seats];
    
    if(props.edit) {

      if (updatedColors[index] == "white") {
        updatedColors[index] = "green";
  
        props.onSelect(-1);
  
      } else if (updatedColors[index] == "green") {
        updatedColors[index] = "white";
            props.onSelect(1);
      }
  
      // Update the state with the modified array
      setSeats(updatedColors);
      
    }
  };

  const handleReset = () => {
    console.log("Handel Reset Called ")
    // setSeats(resetArray);
    console.log(resetArray)
  }

  var gridStyles = {
    gridTemplateColumns: "repeat(" + props.columns + ", 1fr)",
    gridTemplateRows: "repeat(" + props.rows + ", 1fr)",
  };
  return (
    <div>
      <div className={styles.innerGridContainer} style={gridStyles}>
        {
        seats.map((color, index) => (
            <div
            key={index}
            className={`${styles.seat} ${seats.at(index)=="white" ? styles.hoverable : ''}`}
            style={{ '--seat-color': color}}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
      <button onClick={()=> handleReset()}>Reset</button>
    </div>
  );
};

