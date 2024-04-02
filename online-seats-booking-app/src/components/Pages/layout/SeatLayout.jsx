import { useState } from "react";
import { SeatGrid } from "./SeatGrid";
import styles from "./SeatLayout.module.css";

export const SeatLayout = () => {
  const items = [1, 2, 3, 4, 5, 6];
  let [noOfSeats, setNoOfSeats] = useState(128);

  let [reset, setReset] = useState(false);

  let [pagestate, setPagestate] = useState("view");
  let [edit, setEdit] = useState(false);

  const handleView = () => {
    setPagestate("view");
    // Reset all states of Edit
    setEdit(false);

  }

  const handleEdit = () => {
    console.log("Edit called!");
    setEdit(!edit);
  };

  const handleLayout = () => {
    setPagestate("layout");
    setEdit(false);
  };

  const handleReset = () => {
    // window.location.reload();
    setReset(true)

  };

  const updateCount = (value) => {
    setNoOfSeats(value + noOfSeats);
  };


  

  return (
    <div>
      {/* Main  */}
      <div>
        {/* CONTAINER SECTION */}
        <div className={styles.contSection}>
          {/* SIDE BAR */}
          <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>Operations</div>
            <ul className={styles.sidebarMenu}>
              <li className={styles.sidebarMenuItem} onClick={handleView}>VIEW</li>
              <li className={styles.sidebarMenuItem} onClick={handleLayout}>
                LAYOUT
              </li>
              <li className={styles.sidebarMenuItem}>BOOKINGS</li>
            </ul>
          </div>

          {/* EDIT WORKPLACE */}
          <div className={styles.workplace}>
            {/* SEATS COUNT */}
            <h3 className={styles.availableSeat}>
              Seats Available: {noOfSeats}
            </h3>

            {/* SEATS LAYOUT */}
            <div className={styles.outerGrid}>
              {
              items.map((item, index) => {
                if (item == 2 || item == 5) {
                  return (
                    <div className={styles.outerGridItem}>
                      <SeatGrid
                        rows="4"
                        columns="4"
                        onSelect={updateCount}
                        edit={edit}
                        reset={reset}
                        key={index}
                      ></SeatGrid>
                    </div>
                  );
                }

                return (
                  <div className={styles.outerGridItem}>
                    <SeatGrid
                      rows="4"
                      columns="6"
                      onSelect={updateCount}
                      reset={reset}
                      edit={edit}
                      key={index}
                    ></SeatGrid>
                  </div>
                );
              })}
            </div>

            {/* LOWER BUTTONS */}
            <div className={styles.buttonsContainer}>
              {/* Edit Button */}
              {pagestate=="layout" ? (
                edit ? (
                  <div className={styles.smallContainer}>
                    <button
                      className={styles.resetButton}
                      onClick={() => handleReset()}
                    >
                      Reset
                    </button>
                    <button className={styles.saveButton}>Save</button>
                  </div>
                ):(
                  !edit && (
                    <div
                      className={styles.smallContainer}
                      style={{ justifyContent: "center" }}
                    >
                      <button
                        className={styles.editButton}
                        onClick={() => handleEdit()}
                      >
                        Edit
                      </button>
                    </div>
                  )

                )
                
              ) : (
                null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
