import { useEffect, useState } from "react";
import styles from "../Pages/layout/SeatLayout.module.css";
import { SeatGrid } from "../Pages/layout/SeatGrid";
import FloorsDropDown from "../dropdown/FloorsDropDown";
import DateSelector from "../datepicker/DateSelector";
import { BookSeatForm } from "../Forms/BookSeatForm";
import LayoutService, { getFloorLayout } from "../util/LayoutService.js";
import { useNavigate, useParams } from "react-router";
import { jwtDecode } from "jwt-decode";

// Dropdown list
// const items = [
//   {
//     label: "Floor 1",
//     number: 1,
//     id: 2,
//   },
//   {
//     label: "Floor 2",
//     number: 2,
//   },
//   {
//     label: "Floor 3",
//     number: 3,
//   }
// ];

export const BookingLayout = (porps) => {

  let { office, floorNumber } = useParams();
  const options = ["Book Seat", "Swap Seat", "Cancel Request", "More"];

  const page = "booking";

  const [selectedSeat, setSelectedSeat] = useState(null);

  const [blur, setBlur] = useState(false);

  const [floor, setFloor] = useState(Number.parseInt(floorNumber));

  const [date, setDate] = useState(new Date().toLocaleDateString());

 
  // console.log("OFFICE ID: " + Number.parseInt(office));

  const [officeId, setOfficeId] = useState(Number.parseInt(office));

  const [items, setItems] = useState([]);

  let navigate = useNavigate();

  const [updateSeats, setUpdateSeats] = useState(false);

  useEffect(() => {
    // getFloorLayout(3).then((response)=>{
    //   console.log("promise completed")
    //   return response.data
    // })

    console.log("On Page Mount");

    LayoutService.getAllFloors(officeId)
      .then((response) => {
        setItems(response.data);
        // console.log(response.data);
      })
      .catch((e) => console.log(e));

    let reqObj = {
      officeId: officeId,
      floor: floor,
      date: date,
    };
    LayoutService.getFloorLayout(reqObj)
      .then((response) => {
        // console.log("USE EFFECT: " + JSON.stringify(response.data));
        setSection1(response.data[0]);
        setSection2(response.data[1]);
        setSection3(response.data[2]);
        setSection4(response.data[3]);
        setSection5(response.data[4]);
        setSection6(response.data[5]);
      })
      .catch((e) => {
        // if error return empty array
        console.log(e);
        setSection1(Array.from({ length: 24 }).fill(null));
        setSection2(Array.from({ length: 16 }).fill(null));
        setSection3(Array.from({ length: 24 }).fill(null));
        setSection4(Array.from({ length: 24 }).fill(null));
        setSection5(Array.from({ length: 16 }).fill(null));
        setSection6(Array.from({ length: 24 }).fill(null));
      });
  }, [floor, date, blur, updateSeats]);

  // console.log("got: ", floor)

  let [section1, setSection1] = useState([]);
  let [section2, setSection2] = useState([]);
  let [section3, setSection3] = useState([]);
  let [section4, setSection4] = useState([]);
  let [section5, setSection5] = useState([]);
  let [section6, setSection6] = useState([]);

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
        if (sec[index] == "lightgreen") {
          sec[index] = color;
          setSection1(sec);
        }
        break;
      case 2:
        sec = section2;
        if (sec[index] == "lightgreen") {
          sec[index] = color;
          setSection2(sec);
        }
        break;
      case 3:
        sec = section3;
        if (sec[index] == "lightgreen") {
          sec[index] = color;
          setSection3(sec);
        }
        break;
      case 4:
        sec = section4;
        if (sec[index] == "lightgreen") {
          sec[index] = color;
          setSection4(sec);
        }
        break;
      case 5:
        sec = section5;
        if (sec[index] == "lightgreen") {
          sec[index] = color;
          setSection5(sec);
        }
        break;
      case 6:
        sec = section6;
        if (sec[index] == "lightgreen") {
          sec[index] = color;
          setSection6(sec);
        }
        break;
      default:
        return null;
    }
  };

  const goBack = () => {
    navigate(-2);
  };

  function getSection(key) {
    switch (key) {
      case 1:
        return section1;
      case 2:
        return section2;
      case 3:
        return section3;
      case 4:
        return section4;
      case 5:
        return section5;
      case 6:
        return section6;
      default:
        return "unknown"; // Handle unknown keys (optional)
    }
  }

  const token = localStorage.getItem("jwtToken");

  const decodedToken = jwtDecode(token);
  const userId = decodedToken.id || [];

  // console.log("USER_ID" + userId);

  const renderSeats = () => {
    setUpdateSeats(!updateSeats);
  };

  return (
    <div>
      <div className={styles.formContainer}>
        {blur ? (
          <BookSeatForm
            setBlur={setBlur}
            selectedSeat={selectedSeat}
            getSection={getSection}
            updateSection={updateSecton}
            date={date}
            userId={userId} // set userId from global state
            items={items}
            // setFloor={setFloor  }
            selectDate={setDate}
          />
        ) : null}
      </div>
      <div className={blur ? styles.seatBookingContainer : {}}>
        {/* CONTAINER SECTION */}
        <div className={styles.contSectionBooking}>
          {/* EDIT WORKPLACE */}
          <div className={styles.workplace}>
            {/* BACK BUTTON */}
            <div className={styles.buttonContainer}>
              <button className={styles.backButton} onClick={goBack}>
                Back
              </button>
            </div>
            {/* Info Section */}
            <div className={styles.info}>
              <span className={styles.infoElement}>
                <div
                  className={styles.infoColor}
                  style={{ backgroundColor: "lightgreen" }}
                ></div>
                <div className={styles.infoText}>Fully Available</div>
              </span>

              <span className={styles.infoElement}>
                <div
                  className={styles.infoColor}
                  style={{ backgroundColor: "lightgrey" }}
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
              <span className={styles.infoElement}>
                <div
                  className={styles.infoColor}
                  style={{ backgroundColor: "pink" }}
                ></div>
                <div className={styles.infoText}>Partially Available</div>
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
                  floor={floor}
                  setFloor={setFloor}
                ></FloorsDropDown>

                {/* Date Selector */}
                <DateSelector date={date}  selectDate={setDate}></DateSelector>
              </div>
              {/* SEATS LAYOUT */}
              <div className={styles.outerGrid}>
                {
                  <>
                    <div className={styles.outerGridItem}>
                      <SeatGrid
                        updateSeats={updateSeats}
                        renderSeats={renderSeats}
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
                        updateSeats={updateSeats}
                        renderSeats={renderSeats}
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
                        updateSeats={updateSeats}
                        renderSeats={renderSeats}
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
                        updateSeats={updateSeats}
                        renderSeats={renderSeats}
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
                        updateSeats={updateSeats}
                        renderSeats={renderSeats}
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
                        updateSeats={updateSeats}
                        renderSeats={renderSeats}
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
