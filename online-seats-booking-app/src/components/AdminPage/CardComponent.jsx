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
    <div className={styles.card}>
      <div className={styles.container}>
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
            <span className={styles.floor}><b>
              Total Floors :
              {floor == undefined && ""}
              <span style={{ marginLeft: '5px' }}>
                {floor}
              </span>
            </b></span>
            <div className="plus-button-wrapper">
              <button class="plus-button" onClick={handleClick}>
                Edit
              </button>
              {/* <button class="plus-button" onClick={handleClick}>
+
</button> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};










// import { useRedirect } from "./useRedirect";
// import styles from "./CardComponent.module.css";


// export const CardComponent = (props) => {
//   const redirectTo = useRedirect();

//   const handleClick = () => {
//     // let newColor = buttonColor === 'green' ? 'red' : 'green'; // Toggle color
//     // setButtonColor(newColor);
//     console.log("Clicked!!");
//     redirectTo("/seatbook");
//   };

//   return (
//     <div class={styles.card}>
//       <div class={styles.container}>
//         <h4>
//           <b>{props.location}</b>
//         </h4>
//         <h6>
//           <b>
//             {props.office}
//           </b>
//         </h6>
//         <p style={{ fontSize: "20px", color: "gray" }}>
//           <span style={{ marginLeft: "50px" }}>
//             SeatingCapacity
//             {props.seats == undefined && "     ---"}
//             {props.seats != undefined && " " + props.seats}
//           </span>
//           <br></br>
//         </p>
//         <span className={styles.floor}><b>
//           FLOOR : 
//           {props.floor == undefined && ""}
//           <span style={{marginLeft:'5px'}}> 
//           {props.floor}
//           </span>

//         </b>
//           </span>

//         {/* add button for booking  */}
//         <div className="plus-button-wrapper">
{/* <button class="plus-button" onClick={handleClick}>
+
</button> */}
//         </div>
//       </div>
//     </div>
//   );
// };
