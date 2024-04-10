import React, { useState } from "react";
import styles from "./FloorsDropDown.module.css";

const FloorsDropDown = ({ buttonText, menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [buttonTitle, setButtonTitle] = useState(buttonText);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(styles.dropdownArrow + (isMenuOpen ? "Open" : ""));
  };

  const handleMenuItemClick = (item) => {
    setIsMenuOpen(false);
    setButtonTitle(item.label);
  };

  return (
    <div className={styles.longButtonWithDropdown}>
      <button className={styles.longButton} onClick={() => handleButtonClick()}>
        {buttonTitle} &#9660;
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
