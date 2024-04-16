import React, { useState } from "react";
import styles from "./FloorsDropDown.module.css";

const FloorsDropDown = ({ buttonText, menuItems, style , floor, setFloor}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (item) => {
    setIsMenuOpen(false);
    setFloor(item.number)
  };

  return (
    <div className={(style==undefined)? styles.longButtonWithDropdown:style}>
      <button className={styles.longButton} onClick={() => handleButtonClick()}>
        {"FLOOR " + floor} &#9660;
      </button>
      {isMenuOpen && (
        <ul className={styles.dropdownMenu}>
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => handleMenuItemClick(item)}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FloorsDropDown;
