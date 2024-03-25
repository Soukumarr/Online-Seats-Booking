import { SeatGrid } from "./SeatGrid";
import styles from "./SeatLayout.module.css";

export const SeatLayout = () => {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <div className={styles.conatiner}>
        <div className={styles.outerGrid}>
          {items.map((item) => {

            if (item == 2 || item == 5) {

              return <div className={styles.outerGridItem}>
                     <SeatGrid rows="4" columns="4"></SeatGrid></div>
            }

            return (
              <div className={styles.outerGridItem}>
                <SeatGrid rows="4" columns="6"></SeatGrid>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
