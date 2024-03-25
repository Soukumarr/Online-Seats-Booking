import styles from "./SeatLayout.module.css";

export const SeatGrid = (props) => {

    // bY CHANGING ELEMENTS OF THIS ARRAY we can alter number of rows and columns
    // Later from backend we will fetch an array like below and modify our code to work for the elements inside it
    // for now we can set the lenght from props and alter the styling
  const items = Array.from({ length: (props.rows*props.columns) }).fill(0);
  var gridStyles = {
    gridTemplateColumns: 'repeat('+props.columns+', 1fr)',
    gridTemplateRows: 'repeat('+props.rows+', 1fr)'
  }
  return (
    <div>
      <div className={styles.innerGridContainer} 
            style={gridStyles}
      >
        {
        items.map((item) => <div className={styles.seat}></div>)
        }
      </div>
    </div>
  );
};
