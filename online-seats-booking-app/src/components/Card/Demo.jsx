import React, { useState } from "react";
import styles from "../dropdown/FloorsDropDown.module.css";

const items = [
  { label: "Option 1", onClick: () => console.log("Option 1 clicked") },
  { label: "Option 2", onClick: () => console.log("Option 2 clicked") },
  { label: "Option 3", onClick: () => console.log("Option 3 clicked") },
];

export const Demo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(styles.dropdownArrow + (isMenuOpen ? "Open" : ""));
  };

  const handleMenuItemClick = (item) => {
    setIsMenuOpen(false);
    if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <div>
      <ul className={styles.dropdownMenu}>
        {items.map((item, index) => {
          console.log("Iteration "+index)
          return (
            <li key={index} onClick={() => handleMenuItemClick(item)}>
              {item.label}
            </li>
          );
        })}
      </ul>

      {/* <ul>
        {items.map((item) => {
          return <li>Om</li>;
        })}
      </ul> */}
    </div>
  );
};
