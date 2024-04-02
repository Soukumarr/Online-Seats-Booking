import React, { useState } from "react";
import { CardComponent } from "./CardComponent";
import styles from "./Grid.module.css";



export const Grid = () => {
  const [cards, setCards] = useState([
    { location: "Sarjah", office: "Corporate Square", seats: "35", floor: 5 },
    { location: "Columbo", office: "Tech Park", seats: "45", floor: 3 },
    { location: "Columbo", office: "Tech Park", seats: "45", floor: 3 },
    { location: "Columbo", office: "Tech Park", seats: "45", floor: 3 },
    { location: "Columbo", office: "Tech Park", seats: "45", floor: 3 },
    { location: "Columbo", office: "Tech Park", seats: "45", floor: 3 }
    // Add more cards as needed
  ]);
  const [newCard, setNewCard] = useState({ location: "", office: "", seats: "", floor: "" });
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleAddCard = (event) => {
    event.preventDefault();
    if (newCard.floor > 10) {
      alert("You cannot add more than 10 floors.");
      return;
    }
    if (newCard.seats > 100) {
      alert("You cannot add more than 100 seats.");
      return;
    }
    setCards([...cards, newCard]);
    setNewCard({ location: "", office: "", seats: "", floor: "" }); // Reset the form
  };

  const handleInputChange = (event) => {
    setNewCard({ ...newCard, [event.target.name]: event.target.value });
  };

  var [edit, setEdit] = useState(false);

  function handleEdit() {
    console.log(edit);
    setEdit(!edit);
  }
  const handleDeleteCard = (index) => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
  };

  return (
    <div>
      <h1>Admin DashBorad</h1>
      <button onClick={()=> handleEdit()}>Edit</button>
      { edit==true && <form className={styles.DashBoard} onSubmit={handleAddCard}>
        <label>
          Location:
          <input type="text" name="location" value={newCard.location} onChange={handleInputChange} />
        </label>
        <label>
          Office:
          <input type="text" name="office" value={newCard.office} onChange={handleInputChange} />
        </label>
        <label>
          Seats:
          <input type="number" name="seats" value={newCard.seats} onChange={handleInputChange} />
        </label>
        <label>
          Floor:
          <input type="number" name="floor" value={newCard.floor} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Card</button>
      </form>}
      

      <div className={styles.box}>
        {cards.map((card, index) => (
          <CardComponent
          onClick={() => handleCardClick(card)}
            key={index}
            location={card.location}
            office={card.office}
            seats={card.seats}
            floor={card.floor}
            onDelete={() => handleDeleteCard(index)}
            className={styles.fgh}
            selectedCard={selectedCard}
          />
        ))}
      </div>
      
    </div>
  );
};
