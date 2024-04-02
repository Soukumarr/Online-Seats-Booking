import { useState } from "react";
import { SeatGrid } from "./SeatGrid";
import styles from "./SeatLayout.module.css";

export const SeatLayout = () => {
  const items = [1, 2, 3, 4, 5, 6];
  var [noOfSeats, setNoOfSeats] = useState(128);

  let [layout, SeatLayout] = useState(false);
  let [edit, setEdit] = useState(false);

  const handleEdit = () => {
    console.log("Edit called!");
    setEdit(!edit);
  };

  const handleLayout = () => {
    SeatLayout(true);
    setEdit(false);
  };

  const handleReset = () => {
    window.location.reload();
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
          <div class={styles.sidebar}>
            <div class={styles.sidebarHeader}>Operations</div>
            <ul class={styles.sidebarMenu}>
              <li class={styles.sidebarMenuItem}>VIEW</li>
              <li class={styles.sidebarMenuItem} onClick={handleLayout}>
                LAYOUT
              </li>
              <li class={styles.sidebarMenuItem}>BOOKINGS</li>
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
              {items.map((item) => {
                if (item == 2 || item == 5) {
                  return (
                    <div className={styles.outerGridItem}>
                      <SeatGrid
                        rows="4"
                        columns="4"
                        onSelect={updateCount}
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
                    ></SeatGrid>
                  </div>
                );
              })}
            </div>

            {/* LOWER BUTTONS */}
            <div className={styles.buttonsContainer}>
              {edit && (
                <div className={styles.smallContainer}>
                  <button
                    className={styles.resetButton}
                    onClick={() => handleReset()}
                  >
                    Reset
                  </button>
                  <button className={styles.saveButton}>Save</button>
                </div>
              )}

              {/* Edit Button */}
              {layout ? (
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
