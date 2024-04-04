import { useState } from "react";
import { SeatGrid } from "./SeatGrid";
import styles from "./SeatLayout.module.css";
import { redirect } from "react-router";
import { useRedirect } from "../../util/useRedirect";

export const SeatLayout = () => {
  let [section1, setSection1] = useState(
    Array.from({ length: 24 }).fill("white")
  );
  let [section2, setSection2] = useState(
    Array.from({ length: 16 }).fill("white")
  );
  let [section3, setSection3] = useState(
    Array.from({ length: 24 }).fill("white")
  );
  let [section4, setSection4] = useState(
    Array.from({ length: 24 }).fill("white")
  );
  let [section5, setSection5] = useState(
    Array.from({ length: 16 }).fill("white")
  );
  let [section6, setSection6] = useState(
    Array.from({ length: 24 }).fill("white")
  );

  let [noOfSeats, setNoOfSeats] = useState(128);

  let [reset, setReset] = useState(false);

  let [pagestate, setPagestate] = useState("view");
  let [edit, setEdit] = useState(false);

  const redirectTo = useRedirect();

  const [isOpen, setIsOpen] = useState(false);
  

  const handleView = () => {
    setPagestate("view");
    // Reset all states of Edit
    setEdit(false);
  };

  const handleEdit = () => {
    console.log("Edit called!");
    setEdit(!edit);
  };

  const handleLayout = () => {
    setPagestate("layout");
    setEdit(false);
  };

  const updateCount = (value) => {
    setNoOfSeats(value + noOfSeats);
  };

  const handleBookings = () => {
    console.log("Called bookings handler!");
    setPagestate("booking");
    setEdit(false);
  };

  const handleReset = () => {
    // window.location.reload();
    setSection1(Array.from({ length: 24 }).fill("white"));
    setSection2(Array.from({ length: 16 }).fill("white"));
    setSection3(Array.from({ length: 24 }).fill("white"));
    setSection4(Array.from({ length: 24 }).fill("white"));
    setSection5(Array.from({ length: 16 }).fill("white"));
    setSection6(Array.from({ length: 24 }).fill("white"));
    setNoOfSeats(128);
    setReset(true);
  };

  const handleSave = () => {
    setEdit(false);
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
              <li className={styles.sidebarMenuItem} onClick={handleView}>
                VIEW
              </li>
              <li className={styles.sidebarMenuItem} onClick={handleLayout}>
                LAYOUT
              </li>
              <li className={styles.sidebarMenuItem} onClick={handleBookings}>
                BOOKINGS
              </li>
            </ul>
          </div>

          {/* EDIT WORKPLACE */}
          <div className={styles.workplace}>


            {/* Info Section */}
      <div className={styles.info}>
        <span className={styles.infoElement}> 
        <div className={styles.infoColor} style={{backgroundColor:'lightgreen'}}></div>
        <div className={styles.infoText}>Available Seats</div>
        </span>

        <span className={styles.infoElement}> 
        <div className={styles.infoColor}style={{backgroundColor:'red'}}></div>
        <div className={styles.infoText} >Booked Seats</div>
        </span>

        <span className={styles.infoElement}> 
        <div className={styles.infoColor} style={{backgroundColor:'purple'}}></div>
        <div className={styles.infoText}>Swap Requests</div>
        </span>
      </div>
            {/* SEATS COUNT */}
            {pagestate == "layout" && (
              <h3 className={styles.availableSeat}>
                Seats Available: {noOfSeats}
              </h3>
            )}

            {/* SEATS LAYOUT */}
            <div className={styles.outerGrid}>
              {
                <>
                  <div className={styles.outerGridItem}>
                    <SeatGrid
                      onSelect={updateCount}
                      state={pagestate}
                      edit={edit}
                      isSelected={isOpen}
                      setSelected={setIsOpen}

                      seats={section1}
                      setSeats={setSection1}
                      key={1}
                      rows={4}
                      columns={6}
                    ></SeatGrid>
                  </div>
                  <div className={styles.outerGridItem}>
                    <SeatGrid
                      onSelect={updateCount}
                      state={pagestate}
                      isSelected={isOpen}
                      setSelected={setIsOpen}
                      edit={edit}
                      seats={section2}
                      setSeats={setSection2}
                      key={2}
                      rows={4}
                      columns={4}
                    ></SeatGrid>
                  </div>
                  <div className={styles.outerGridItem}>
                    <SeatGrid
                      onSelect={updateCount}
                      state={pagestate}
                      isSelected={isOpen}
                      setSelected={setIsOpen}
                      edit={edit}
                      seats={section3}
                      setSeats={setSection3}
                      key={3}
                      rows={4}
                      columns={6}
                    ></SeatGrid>
                  </div>
                  <div className={styles.outerGridItem}>
                    <SeatGrid
                      onSelect={updateCount}
                      state={pagestate}
                      isSelected={isOpen}
                      setSelected={setIsOpen}
                      edit={edit}
                      seats={section4}
                      setSeats={setSection4}
                      key={4}
                      rows={4}
                      columns={6}
                    ></SeatGrid>
                  </div>
                  <div className={styles.outerGridItem}>
                    <SeatGrid
                      onSelect={updateCount}
                      state={pagestate}
                      isSelected={isOpen}
                      setSelected={setIsOpen}
                      edit={edit}
                      seats={section5}
                      setSeats={setSection5}
                      key={5}
                      rows={4}
                      columns={4}
                    ></SeatGrid>
                  </div>
                  <div className={styles.outerGridItem}>
                    <SeatGrid
                      onSelect={updateCount}
                      state={pagestate}
                      isSelected={isOpen}
                      setSelected={setIsOpen}
                      edit={edit}
                      seats={section6}
                      setSeats={setSection6}
                      key={6}
                      rows={4}
                      columns={6}
                    ></SeatGrid>
                  </div>
                </>
              }
            </div>

            {/* LOWER BUTTONS */}
            <div className={styles.buttonsContainer}>
              {/* Edit Button */}
              {pagestate == "layout" ? (
                edit ? (
                  <div className={styles.smallContainer}>
                    <button
                      className={styles.resetButton}
                      onClick={() => handleReset()}
                    >
                      Reset
                    </button>
                    <button
                      className={styles.saveButton}
                      onClick={() => handleSave()}
                    >
                      Save
                    </button>
                  </div>
                ) : (
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
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
