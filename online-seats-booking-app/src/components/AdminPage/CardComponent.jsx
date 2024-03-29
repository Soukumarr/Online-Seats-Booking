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

  const handleClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you can add the logic to save the new values
    // For example, you can send a request to the server
  };

  return (
    <div className={styles.cardnew}>
      <div className={styles.containernew}>
        {isEditing ? (
          <form onSubmit={handleSave}>
            <label>
              Location:
              <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
            </label>
            <br />
            <label>
              Office:
              <input type="text" value={office} onChange={e => setOffice(e.target.value)} />
            </label>
            <br />
            <label>
              Total Seats:
              <input type="number" value={seats} onChange={e => setSeats(e.target.value)} />
            </label>
            <br />
            <label>
              Total Floors:
              <input type="number" value={floor} onChange={e => setFloor(e.target.value)} />
            </label>
            <button type="submit">Save</button>
          </form>
        ) : (
          <>
            <h4><b>{location}</b></h4>
            <h6><b>{office}</b></h6>
            <p style={{ fontSize: "20px", color: "gray" }}>
              <span style={{ marginLeft: "50px" }}>
                SeatingCapacity
                {seats == undefined && "     ---"}
                {seats != undefined && " " + seats}
              </span>
              <br></br>
            </p>
            <span className={styles.floornew}><b>
              Total Floors :
              {floor == undefined && ""}
              <span style={{ marginLeft: '5px' }}>
                {floor}
              </span>
            </b></span>
            <div className={styles.plusButtonWrapper}>
              <button className={styles.plusButton} onClick={handleClick}>
                Edit
              </button>
            
               <button className={styles.plusButton} onClick={props.onDelete}>Delete</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};









