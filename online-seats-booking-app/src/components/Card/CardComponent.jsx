import { useRedirect } from "../util/useRedirect";
import styles from "../Pages/calendar/Calender.module.css";

export const CardComponent = (props) => {
  const redirectTo = useRedirect();

  const handleClick = () => {
    // let newColor = buttonColor === 'green' ? 'red' : 'green'; // Toggle color
    // setButtonColor(newColor);
    console.log("Clicked!!");
    redirectTo("/seatbook");
  };

  return (
    <div class={styles.card}>
      <div class={styles.container}>
        <h4>
          <b>{props.day}</b>
        </h4>
        <h6>
          <b>
            {props.office == undefined && "No Bookings!"}
            {props.office}
          </b>
        </h6>
        <p style={{ fontSize: "20px", color: "gray" }}>
          <i class="fa fa-clock-o"></i>
          {props.time == undefined && "00:00 - 00:00"}
          {props.time}
          <span style={{ marginLeft: "50px" }}>
            Desk 
            {props.desk == undefined && "     ---"}
            {props.desk != undefined && " " + props.desk}
          </span>
          <br></br>
        </p>
        <span className={styles.floor}><b>
          FLOOR : 
          {props.floor == undefined && ""}
          <span style={{marginLeft:'5px'}}> 
          {props.floor}
          </span>
            
        </b>
          </span>

        {/* add button for booking  */}
        <div className={styles.plusButtonWrapper}>
          <button class={styles.plusButton} onClick={handleClick}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
