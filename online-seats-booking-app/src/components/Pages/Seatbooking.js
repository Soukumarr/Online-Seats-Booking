import React, { useState } from "react";
import styles from './Seatbooking.module.css'
import Modal from "./Modal";
import { useEffect } from "react";
import list from "./Data";


function Seatbooking() {
  // const [book, setbook] = useState([]);
  // const handleChange = (e) => {
  //   var book1 = JSON.parse(localStorage.getItem("booked"));
  //   console.log(book1);
  //   book1.map((value) => {
  //     <p>Booked Seats:{value.id}</p>;
  //   });
  // };var cart3=[];
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatSelect = (seat) => {
    setSelectedSeat(seat);
  };

  const handleSwap = () => {
    if (!selectedSeat) {
      alert("Please select a seat to swap.");
      return;
    }
    alert("Your swap request has been submitted.");
  };

  // var cart = [];
  let cart = JSON.parse(localStorage.getItem("tickets1")) || [];
  const handle = (e) => {
    var tickets = e.target.innerText;

    if (
      !e.target.classList.contains("selected") &&
      !e.target.classList.contains("occupied")
    ) {
      cart.push(tickets);
      // cart3.push(tickets);
      // JSON.stringify(localStorage.setItem("Selected", cart3));
      e.target.classList.add("selected");
    } else {
      if (e.target.classList.contains("occupied")) {
        alert("Already booked,Please Select Another Seat");
      } else {
        e.target.classList.remove("selected");
        console.log(e.target.innerText);

        console.log(e.target.innerText);
        cart.splice(cart.indexOf(e.target.innerText), 1);
        // cart3.splice(cart3.indexOf(e.target.innerText), 1);
        // JSON.stringify(localStorage.setItem("Selected", cart3));
      }
    }
    localStorage.setItem("tickets1", JSON.stringify(cart));
    // localStorage.setItem("tickets1", cart);
    console.log(cart);
  };

  //   const handleClick=(e)=>{
  // console.log("button clicked")
  //   }
  useEffect(() => {
    console.log("hello world");
    var btn = document.querySelectorAll(".btn");
    let occ = JSON.parse(localStorage.getItem("booked")) || [];
    let selected = JSON.parse(localStorage.getItem("tickets1")) || [];
    console.log(btn);
    Object.values(btn).map((value) => {
      if (occ.includes(value.innerText)) {
        console.log("val" + value.innerText);
        value.classList.add("occupied");
        console.log("hello");
      }
      if (selected.includes(value.innerText)) {
        console.log("val" + value.innerText);
        value.classList.add("selected");
        console.log("hello");
      }
    });
    document.getElementById("count").innerHTML = occ.length;
    document.getElementById("total").innerHTML =
      "Total Seats Avaliable:" + localStorage.getItem("Total");
    var arr = localStorage.getItem("tickets1");
    console.log(arr);
    //     var arr1=[]
    //     arr1 = JSON.parse(localStorage.getItem("booked"));
    //     if(localStorage.getItem("Selected"))
    // arr.map((value) => {
    //       if (value.id != arr1) {
    //         arr.splice(arr.indexOf(value), 1);
    //         console.log(arr);
    //       JSON.parse(localStorage.setItem("Selected",arr))
    //       }
    //     });
  });
  var items = list.map((i) => {
    return (
      <div className="grid-item">
        <div className= {styles.container}>
          <button
            className="btn"
            style={{ margin: 10 }}
            type="button"
            onClick={handle}
            class="btn btn-primary"
          >
            {i.seat1}
          </button>
          <button
            className="btn"
            style={{ margin: 10 }}
            type="button"
            onClick={handle}
            class="btn btn-primary"
          >
            {i.seat2}
          </button>
          <button
            className="btn"
            style={{ margin: 10 }}
            type="button"
            onClick={handle}
            class="btn btn-primary"
          >
            {i.seat3}
          </button>
          <button
            className="btn"
            style={{ margin: 10 }}
            type="button"
            onClick={handle}
            class="btn btn-primary"
          >
            {i.seat4}
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <div class="Book-seat">
        <p>
          <div class="Showcase">
            <ul>
              <li>
                <div
                  class="grid-item selected1"
                  style={{ height: "1px" }}
                ></div>
                <small>Available</small>
              </li>
              <li>
                <div
                  id="grid-item"
                  class="grid-item selected "
                  style={{ height: "1px" }}
                ></div>
                <small>Selected</small>
              </li>
              <li>
                <div
                  id="grid-item"
                  class="grid-item occupied"
                  style={{ height: "1px" }}
                ></div>

                <small>Occupied</small>
              </li>
            </ul>
          </div>
        </p>
        <></>
        <div id="button"></div>
      </div>{" "}
      <div className="grid">{items}</div>
      <div className="App">
        <button
          id="button"
          className="button"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Book a Seat
        </button>
        <button id="button" className="button" onClick={handleSwap}>
          Swap Seat
        </button>

        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
      <div className="total">
        <p>
          Booked Seat: <span id="count">&nbsp; </span>
        </p>
        <span id="total" style={{ position: "relative", top: "15px" }}></span>
      </div>
      {/* <div className="Booked Seats">
        <button onClick={handleChange}> Booked Items</button>
      </div> */}
      {/* <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup> */}
    </>
  );
}

export default Seatbooking;
