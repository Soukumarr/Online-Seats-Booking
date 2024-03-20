import "./Home.css";
import React from 'react'

export default function Home() {
  return (
    <div className="home">
        <h1>Welcome to Online Seats Booking</h1>
        <br />
        <p>
            This is a simple application to book seats online. You can select the seats and book them according to your comfort.
            <br />
             The seats are available on a first-come-first-serve basis.
        </p>
        <div className="button-container">
            <button className="round-button">Admin</button>
            <button className="round-button">User</button>
        </div>
  
    </div>
  )
}
