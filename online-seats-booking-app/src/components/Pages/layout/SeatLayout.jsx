import { useState } from "react";
import { SeatGrid } from "./SeatGrid";
import styles from "./SeatLayout.module.css";

export const SeatLayout = () => {
  const items = [1, 2, 3, 4, 5, 6];
  var [noOfSeats, setNoOfSeats] = useState(128); 

  const handleReset = () => {
    window.location.reload();
  }

  const updateCount = (value) => {

    setNoOfSeats(value + noOfSeats);
  }

  
  return (
    <div>
      <div className={styles.conatiner}>
        <div className={styles.buttonsContainer}>
          <div className={styles.smallContainer}>
            <button className={styles.resetButton} onClick={()=>handleReset()}>Reset</button>
            <button className={styles.saveButton}>Save</button>
          </div>
        </div>

        <div className={styles.outerGrid}>
          {items.map((item) => {
            if (item == 2 || item == 5) {
              return (
                <div className={styles.outerGridItem}>
                  <SeatGrid rows="4" columns="4" onSelect ={updateCount}></SeatGrid>
                </div>
              );
            }

            return (
              <div className={styles.outerGridItem}>
                <SeatGrid rows="4" columns="6" onSelect ={updateCount}></SeatGrid>
              </div>
            );
          })}
        </div>
         <h3>Seats Available: {noOfSeats}</h3>
      </div>
    </div>
  );
};
