import React, { useState } from "react";
import styles from "../dropdown/FloorsDropDown.module.css";
import { BookSeatForm } from "../Forms/BookSeatForm";

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
      <BookSeatForm></BookSeatForm>
    </div>
  );
};
