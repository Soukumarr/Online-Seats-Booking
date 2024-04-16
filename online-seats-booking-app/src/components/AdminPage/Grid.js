import React, { useState } from "react";
import { GridComponent } from "./GridComponent";
import styles from "./Grid.module.css";
import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';




export const Grid = () => {
  const [cards, setCards] = useState([]);
  const [floors, setFloors] = useState([]);
  const { isLoggedIn, logOut, roles, logIn, setRoles } = useContext(AuthContext);

  useEffect(() => {
    axios.get('http://localhost:8080/api/offices')
      .then(response => {
        const fetchedCards = response.data.map(office => ({
          id: office.id,
          office: office.name,
          location: office.location,
          floor: office.floorCount,
          seats: office.totalSeatCount,
          availableSeats: office.availableSeatCount
        }));
        setCards(fetchedCards);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const [newCard, setNewCard] = useState({ location: "", office: "", seats: 0, floor: 0 });
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {

    setSelectedCard(card);
  };

  const handleAddCard = async (event) => {
    event.preventDefault();
    if (newCard.floor > 10) {
      alert("You cannot add more than 10 floors.");
      return;
    }
    if (newCard.seats > 100) {
      alert("You cannot add more than 100 seats.");
      return;
    }
    const office = {
      name: newCard.office,
      location: newCard.location,
      floorCount: newCard.floor,
      totalSeatCount: 0,
      availableSeatCount: 0
    };
    try {
      const response = await axios.post('http://localhost:8080/api/offices', office);
      const newCardFromBackend = {
        id: response.data.id,
        office: response.data.name,
        location: response.data.location,
        floor: response.data.floorCount,
        seats: response.data.totalSeatCount,
        availableSeats: response.data.availableSeatCount
      };
      setCards(oldCards => [...oldCards, newCardFromBackend]);
      setNewCard({ location: "", office: "", seats: "", floor: "" }); // Reset the form

      // After creating the office, create the floors
      for (let i = 1; i <= newCard.floor; i++) {
        const newFloor = {
          floorNumber: i,
          seatCapacity: 0, // Replace with actual seat capacity if available
          office: { id: response.data.id }
        };
        try {
          const floorResponse = await axios.post('http://localhost:8080/api/floors', newFloor);
          // Handle the response here. For example, you can update the state with the new floor data
        } catch (error) {
          console.error('There was an error!', error);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleInputChange = (event) => {
    setNewCard({ ...newCard, [event.target.name]: event.target.value });
  };

  var [edit, setEdit] = useState(false);

  function handleEdit() {
    console.log(edit);
    setEdit(!edit);
  }
  const handleDeleteCard = (id) => {
    axios.delete(`http://localhost:8080/api/offices/${id}`)
      .then(() => {
        setCards(oldCards => oldCards.filter(card => card.id !== id));
      })
      .catch(error => console.error(error));
    axios.delete(`http://localhost:8080/api/floors/office/${id}`)
      .then(() => {
        // Handle the response here. For example, you can update the state with the updated card data
      }
      )
      .catch(error => {
        console.error('There was an error!', error);

        alert("This office has booked seats. Please delete the bookings first.");
      });
  };
  return (
    <div>
      {/* <h1>Admin DashBorad</h1> */}
      {isLoggedIn && !roles.includes('ROLE_USER') && (<button className={styles.newCard} onClick={() => handleEdit()}>Add new card</button>)}
      {edit == true && <form className={styles.DashBoard} onSubmit={handleAddCard}>
        <label>
          Location:
          <input type="text" name="location" value={newCard.location} onChange={handleInputChange} />
        </label>
        <label>
          Office:
          <input type="text" name="office" value={newCard.office} onChange={handleInputChange} />
        </label>
        {/* <label>
          Seats:
          <input type="number" name="seats" value={newCard.seats} onChange={handleInputChange} />
        </label> */}
        <label>
          Floor:
          <input type="number" name="floor" value={newCard.floor} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Card</button>
      </form>}


      <div className={styles.box}>
        {cards.map((card, index) => (
          <GridComponent
            onClick={() => handleCardClick(card)}
            key={card.id}
            {...card}
            location={card.location}
            office={card.office}
            seats={card.seats}
            floor={card.floor}
            onDelete={() => handleDeleteCard(card.id)}
            className={styles.fgh}
            selectedCard={selectedCard}
          />
        ))}
      </div>

    </div>
  );
};
