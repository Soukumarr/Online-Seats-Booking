import { useState } from "react";
import styles from "./SeatLayout.module.css";

export const SeatGrid = (props) => {
  // bY CHANGING ELEMENTS OF THIS ARRAY we can alter number of rows and columns
  // Later from backend we will fetch an array like below and modify our code to work for the elements inside it
  // for now we can set the lenght from props and alter the styling
  const [items, setItems] = useState(
    Array.from({ length: props.rows * props.columns }).fill("white")
  );

  const handleClick = (seatIndex) => {
    // Create a copy of the seatColors array to avoid mutation
    const updatedColors = [...items];

    if (updatedColors[seatIndex] == "white") {
      updatedColors[seatIndex] = "green";
      props.onSelect(-1);

    } else if (updatedColors[seatIndex] == "green") {
      updatedColors[seatIndex] = "white";
      props.onSelect(1);
    }

    // Update the state with the modified array
    setItems(updatedColors);
  };

  var gridStyles = {
    gridTemplateColumns: "repeat(" + props.columns + ", 1fr)",
    gridTemplateRows: "repeat(" + props.rows + ", 1fr)",
  };
  return (
    <div>
      <div className={styles.innerGridContainer} style={gridStyles}>
        {items.map((color, index) => (
          <div
            key={index}
            className={styles.seat}
            style={{ backgroundColor: color }}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
