import { useState } from "react";
import styles from "../Pages/layout/SeatLayout.module.css";
import { SeatGrid } from "../Pages/layout/SeatGrid";
import FloorsDropDown from "../dropdown/FloorsDropDown";
import DateSelector from "../datepicker/DateSelector";
import { BookSeatForm } from "../Forms/BookSeatForm";

// Dropdown list
const items = [
  { label: "Floor 1", onClick: () => console.log("Option 1 clicked") },
  { label: "Floor 2", onClick: () => console.log("Option 2 clicked") },
  { label: "Floor 3", onClick: () => console.log("Option 3 clicked") },
];

export const BookingLayout = () => {
  const options = ["Book Seat", "Swap Seat", "Cancle Request"];

  const page = "booking";

  const [selectedSeat, setSelectedSeat] = useState(null);

  const [blur, setBlur] = useState(false);

  let [section1, setSection1] = useState(
    Array.from({ length: 24 }).fill("lightgreen")
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

  const [isOpen, setIsOpen] = useState(false);

  const updateCount = (value) => {
    setNoOfSeats(value + noOfSeats);
  };

  const handleSeatBook = (index, key) => {
    console.log(index);
    setSelectedSeat({
      index,
      key,
    });
  };

  const updateSecton = (key, index, color) => {
    var sec;
    switch (key) {
      case 1:
        sec = section1;
        if (sec[index] == "lightgreen"){ 
        sec[index] = color;
         setSection1(sec);}
         break;
      case 2:
        sec = section2;
        if (sec[index] == "lightgreen"){
        sec[index] = color;
        setSection2(sec);}
        break;
      case 3:
        sec = section3;
        if (sec[index] == "lightgreen"){
        sec[index] = color;
        setSection3(sec);}
        break;
      case 4:
        sec = section4;
        if (sec[index] == "lightgreen"){
        sec[index] = color;
        setSection4(sec);}
        break;
      case 5:
        sec = section5;
        if (sec[index] == "lightgreen"){
        sec[index] = color;
        setSection5(sec);}
        break;
      case 6:
        sec = section6;
        if (sec[index] == "lightgreen"){
        sec[index] = color;
        setSection6(sec);}
        break;
      default:
        return null;
    }
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

  return (
    <div>
      <div className={styles.formContainer}>
        {blur ? <BookSeatForm setBlur={setBlur} selectedSeat={selectedSeat} updateSection={updateSecton} /> : null}
      </div>
      <div className={blur ? styles.seatBookingContainer : {}}>
        {/* CONTAINER SECTION */}
        <div className={styles.contSectionBooking}>
          {/* EDIT WORKPLACE */}
          <div className={styles.workplace}>
            {/* Info Section */}
            <div className={styles.info}>
              <span className={styles.infoElement}>
                <div
                  className={styles.infoColor}
                  style={{ backgroundColor: "lightgreen" }}
                ></div>
                <div className={styles.infoText}>Available Seats</div>
              </span>

              <span className={styles.infoElement}>
                <div
                  className={styles.infoColor}
                  style={{ backgroundColor: "red" }}
                ></div>
                <div className={styles.infoText}>Booked Seats</div>
              </span>

              <span className={styles.infoElement}>
                <div
                  className={styles.infoColor}
                  style={{ backgroundColor: "purple" }}
                ></div>
                <div className={styles.infoText}>Swap Requests</div>
              </span>
            </div>
            {/* SEATS COUNT */}

            <h3 className={styles.availableSeat}>
              Seats Available: {noOfSeats}
            </h3>

            <div className={styles.midSection}>
              <div className={styles.ddContainer}>
                {/* Dropdown Floors */}
                <FloorsDropDown
                  menuItems={items}
                  buttonText={"FLOORS"}
                ></FloorsDropDown>

                {/* Date Selector */}
                <DateSelector></DateSelector>
              </div>
              {/* SEATS LAYOUT */}
              <div className={styles.outerGrid}>
                {
                  <>
                    <div className={styles.outerGridItem}>
                      <SeatGrid
                        onSelect={updateCount}
                        page={page}
                        isSelected={isOpen}
                        giveIndexForm={handleSeatBook}
                        options={options}
                        blur={blur}
                        setBlur={setBlur}
                        setSelected={setIsOpen}
                        seats={section1}
                        setSeats={setSection1}
                        sectionKey={1}
                        rows={4}
                        columns={6}
                      ></SeatGrid>
                    </div>
                    <div className={styles.outerGridItem}>
                      <SeatGrid
                        onSelect={updateCount}
                        page={page}
                        isSelected={isOpen}
                        giveIndexForm={handleSeatBook}
                        options={options}
                        blur={blur}
                        setBlur={setBlur}
                        setSelected={setIsOpen}
                        seats={section2}
                        setSeats={setSection2}
                        sectionKey={2}
                        rows={4}
                        columns={4}
                      ></SeatGrid>
                    </div>
                    <div className={styles.outerGridItem}>
                      <SeatGrid
                        onSelect={updateCount}
                        page={page}
                        isSelected={isOpen}
                        giveIndexForm={handleSeatBook}
                        options={options}
                        blur={blur}
                        setBlur={setBlur}
                        setSelected={setIsOpen}
                        seats={section3}
                        setSeats={setSection3}
                        sectionKey={3}
                        rows={4}
                        columns={6}
                      ></SeatGrid>
                    </div>
                    <div className={styles.outerGridItem}>
                      <SeatGrid
                        onSelect={updateCount}
                        page={page}
                        isSelected={isOpen}
                        giveIndexForm={handleSeatBook}
                        options={options}
                        blur={blur}
                        setBlur={setBlur}
                        setSelected={setIsOpen}
                        seats={section4}
                        setSeats={setSection4}
                        sectionKey={4}
                        rows={4}
                        columns={6}
                      ></SeatGrid>
                    </div>
                    <div className={styles.outerGridItem}>
                      <SeatGrid
                        onSelect={updateCount}
                        page={page}
                        isSelected={isOpen}
                        giveIndexForm={handleSeatBook}
                        options={options}
                        blur={blur}
                        setBlur={setBlur}
                        setSelected={setIsOpen}
                        seats={section5}
                        setSeats={setSection5}
                        sectionKey={5}
                        rows={4}
                        columns={4}
                      ></SeatGrid>
                    </div>
                    <div className={styles.outerGridItem}>
                      <SeatGrid
                        onSelect={updateCount}
                        page={page}
                        isSelected={isOpen}
                        giveIndexForm={handleSeatBook}
                        options={options}
                        blur={blur}
                        setBlur={setBlur}
                        setSelected={setIsOpen}
                        seats={section6}
                        setSeats={setSection6}
                        sectionKey={6}
                        rows={4}
                        columns={6}
                      ></SeatGrid>
                    </div>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
