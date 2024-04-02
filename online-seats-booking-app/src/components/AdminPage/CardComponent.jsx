import { useState } from 'react';
import { useRedirect } from "./useRedirect";
import styles from "./CardComponents.module.css";

export const CardComponent = (props) => {
  const redirectTo = useRedirect();
  const [isEditing, setIsEditing] = useState(false);
  const [location, setLocation] = useState(props.location);
  const [office, setOffice] = useState(props.office);
  const [seats, setSeats] = useState(props.seats);
  const [floor, setFloor] = useState(props.floor);
  const [showTable, setShowTable] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent the card click event from being triggered
    setIsEditing(!isEditing);
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent the form from being submitted
  
  setIsEditing(false);
    
    // Here you can add the logic to save the new values
    // For example, you can send a request to the server
  };
  const handleSaveClick = (e) => {
    e.stopPropagation(); // Prevent the card click event from being triggered
    handleSave(e);
  };

  const handleCardClick = (e) => {
    e.stopPropagation(); // Prevent the card click event from being triggered

    setShowTable(!showTable);
    props.onClick();
  };

  const handleFloorClick = (floor) => {
    // Do something with the clicked floor
    console.log(`Floor ${floor} was clicked.`);
  };

  return (

    <div className={styles.cardnew} onClick={handleCardClick}>
      <div className={styles.containernew}>
        <>
            {isEditing ? (
  <form onSubmit={handleSave}>
    <label>
      Location:
      <input type="text" value={location} onClick={e => e.stopPropagation()} onChange={e => setLocation(e.target.value)} />
    </label>
    <br />
    <label>
      Office:
      <input type="text" value={office} onClick={e => e.stopPropagation()} onChange={e => setOffice(e.target.value)} />
    </label>
    <br />
    <label>
      Total Seats:
      <input type="number" value={seats} onClick={e => e.stopPropagation()} onChange={e => setSeats(e.target.value)} />
    </label>
    <br />
    <label>
      Total Floors:
      <input type="number" value={floor} onClick={e => e.stopPropagation()} onChange={e => setFloor(e.target.value)} />
    </label>
    <button type="submit" onClick={handleSaveClick}>Save</button>
  </form>
            ) : (
              <>
                <h4><b>{location}</b></h4>
                <h6><b>{office}</b></h6>
                <p style={{ fontSize: "20px", color: "gray" }}>
                  <span style={{ marginLeft: "50px" }}>
                    SeatingCapacity
                    {seats === undefined ? "     ---" : " " + seats}
                  </span>
                  <br></br>
                </p>
                <span className={styles.floornew}><b>
                  Total Floors :
                  {floor === undefined ? "" : <span style={{ marginLeft: '5px' }}>{floor}</span>}
                </b></span>
                <div className={styles.plusButtonWrapper}>
                  <button className={styles.plusButton} onClick={handleClick}>
                  Edit
                  </button>
                  <button className={styles.plusButton} onClick={props.onDelete}>Delete</button>
                </div>
              </>
            )}
          </>

        
          {(props.selectedCard && showTable) && (
            <table >
              <thead>
                <tr>
                  <th>Floors</th>
                </tr>
              </thead>
              <tbody>
              <tr>
          <td>
            <select size="3" className={styles.dropdownScroll}>
              {Array.from({ length: props.selectedCard.floor }, (_, i) => i + 1).map((floor, index) => (
                <option key={index} onClick={(e) => {
                  e.stopPropagation(); // Prevent the card click event from being triggered
                  handleFloorClick(floor);
                }}>
                  {floor}
                </option>
              ))}
            </select>
          </td>
        </tr>
              </tbody>
            </table>
          )}
      </div>
    </div>
  );
};