import { useEffect, useState } from "react";
import { SeatGrid } from "./SeatGrid";
import styles from "./SeatLayout.module.css";
import { createPath, redirect, useNavigate, useParams } from "react-router";
import { useRedirect } from "../../util/useRedirect";
import FloorsDropDown from "../../dropdown/FloorsDropDown";
import DateSelector from "../../datepicker/DateSelector";
import LayoutService from "../../util/LayoutService";
import SeatService from "../../util/SeatService";

export const SeatLayout = () => {
  const options = ["Allow Booking", "Accept Swap", "Cancel Booking", "Details"];
  let [section1, setSection1] = useState(
    Array.from({ length: 24 }).fill("null")
  );
  let [section2, setSection2] = useState(
    Array.from({ length: 16 }).fill("null")
  );
  let [section3, setSection3] = useState(
    Array.from({ length: 24 }).fill("null")
  );
  let [section4, setSection4] = useState(
    Array.from({ length: 24 }).fill("null")
  );
  let [section5, setSection5] = useState(
    Array.from({ length: 16 }).fill("null")
  );
  let [section6, setSection6] = useState(
    Array.from({ length: 24 }).fill("null")
  );

  let navigate = useNavigate();

  let { office, floorNumber } = useParams();
  console.log("FLoorNo: " + Number.parseInt(floorNumber));

  const [officeId, setOfficeId] = useState(Number.parseInt(office));

  const [floor, setFloor] = useState(Number.parseInt(floorNumber));
  

  const [date, setDate] = useState(new Date().toLocaleDateString());

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
        console.log(response.data);
      })
      .catch((e) => console.log(e));
    let reqObj = {
      officeId: officeId,
      floor: floor,
      date: date,
    };

    LayoutService.getFloorLayout(reqObj)
      .then((response) => {
        console.log("USE EFFECT: " + JSON.stringify(response.data.at(1)));
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
  }, [floor, date, updateSeats]);

  const [items, setItems] = useState([]);

  let [noOfSeats, setNoOfSeats] = useState(128);

  let [reset, setReset] = useState(false);

  let [pagestate, setPagestate] = useState("view");
  let [edit, setEdit] = useState(false);

  const redirectTo = useRedirect();
  const page = "layout";

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

  const goBack = () => {
    navigate(-2);
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

  // Logic to add or remove seats
  let [newSeats, setNewSeats] = useState([]);
  let [deleteSeats, setDeleteSeats] = useState([]);
  // console.log(typeof newSeats)

  const addNewSeats = (seat) => {
    // console.log(typeof newSeats)
    var updateSeats = [...newSeats];
    updateSeats.push(seat);
    // console.log(typeof updateSeats)
    setNewSeats(updateSeats);
  };
  const removeSeats = (seat) => {
    var updateSeats = [];
    if (newSeats.includes(seat)) {
      updateSeats = [...newSeats];
      updateSeats.splice(newSeats.indexOf(seat), 1);
      // console.log("Delete Array: "+ JSON.stringify(updateSeats))
      setNewSeats(updateSeats);
    } else {
      updateSeats = [...deleteSeats];
      updateSeats.push(seat);

      setDeleteSeats(updateSeats);
    }
  };

  const handleSave = () => {
    setEdit(false);
    // make the post requests for all the seat objs present in the newSeats array
    // console.log("New Seats: "+JSON.stringify(newSeats));

    newSeats.map((seat) => {
      SeatService.addNewSeat(seat)
        .then((respose) => console.log("Made Request:", respose.status))
        .catch((e) => console.log(e));
    });

    //  Make sure the newSeat Array is clear
    setNewSeats([]);

    //make the delete requests for all the seat objs present in the deleteSeate array
    // console.log(JSON.stringify("Deleted Seats: " + deleteSeats))

    deleteSeats.map((seat) => {
      console.log("Deleting.... " + seat);
      SeatService.deleteSeats(seat.id)
        .then((respose) => console.log("Made Request:", respose.status))
        .catch((e) => console.log(e));
    });
    //  Make sure the deleteSeat Array is clear
    setDeleteSeats([]);
  };

  const renderSeats = () => {
    setUpdateSeats(!updateSeats);
  };

  return (
    <div>
      {/* Main  */}
      <div>
        {/* CONTAINER SECTION */}
        <div className={styles.contSectionLayout}>
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
                <div className={styles.infoText}>Available Seats</div>
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
                  style={{ backgroundColor: "brown" }}
                ></div>
                <div className={styles.infoText}>Cancel Requests</div>
              </span>
            </div>
            {/* SEATS COUNT */}
            {pagestate == "layout" && (
              <h3 className={styles.availableSeat}>
                Seats Available: {noOfSeats}
              </h3>
            )}
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
                <DateSelector date={date} selectDate={setDate}></DateSelector>
              </div>
              {/* SEATS LAYOUT */}
              <div className={styles.outerGrid}>
                {
                  <>
                    <div className={styles.outerGridItem}>
                      <SeatGrid
                        updateSeats={updateSeats}
                        renderSeats={renderSeats}
                        updateCount={updateCount}
                        page={page}
                        state={pagestate}
                        addNewSeats={addNewSeats}
                        removeSeats={removeSeats}
                        floor={floor}
                        officeId={officeId}
                        date={date}
                        edit={edit}
                        isSelected={isOpen}
                        options={options}
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
                        addNewSeats={addNewSeats}
                        removeSeats={removeSeats}
                        floor={floor}
                        officeId={officeId}
                        date={date}
                        sectionId={1}
                        updateCount={updateCount}
                        page={page}
                        state={pagestate}
                        edit={edit}
                        isSelected={isOpen}
                        options={options}
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
                        addNewSeats={addNewSeats}
                        removeSeats={removeSeats}
                        floor={floor}
                        officeId={officeId}
                        date={date}
                        sectionId={1}
                        updateCount={updateCount}
                        page={page}
                        state={pagestate}
                        edit={edit}
                        isSelected={isOpen}
                        options={options}
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
                        addNewSeats={addNewSeats}
                        removeSeats={removeSeats}
                        floor={floor}
                        officeId={officeId}
                        date={date}
                        sectionId={1}
                        updateCount={updateCount}
                        page={page}
                        state={pagestate}
                        edit={edit}
                        isSelected={isOpen}
                        options={options}
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
                        addNewSeats={addNewSeats}
                        removeSeats={removeSeats}
                        floor={floor}
                        officeId={officeId}
                        date={date}
                        sectionId={1}
                        updateCount={updateCount}
                        page={page}
                        state={pagestate}
                        edit={edit}
                        isSelected={isOpen}
                        options={options}
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
                        addNewSeats={addNewSeats}
                        removeSeats={removeSeats}
                        floor={floor}
                        officeId={officeId}
                        date={date}
                        sectionId={1}
                        updateCount={updateCount}
                        page={page}
                        state={pagestate}
                        edit={edit}
                        isSelected={isOpen}
                        options={options}
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
