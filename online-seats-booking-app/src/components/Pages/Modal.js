import React, { useEffect } from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  let select1 = JSON.parse(localStorage.getItem("tickets1"));

  // const selectedSeat = select1.map((val) => {
  //   var str = val + ",";

  //   return str;
  // });
  useEffect(() => {
    select1 = JSON.parse(localStorage.getItem("tickets1"));
    document.querySelector(".num").innerHTML += Object.values(select1);
  });
  const select = (e) => {
    e.preventDefault();
    // let seat = document.querySelectorAll(".btn");

    // console.log(select1);
    let tot = JSON.parse(localStorage.getItem("booked")) || [];
    tot.push(...select1);
    localStorage.setItem("booked", JSON.stringify(tot));
    localStorage.removeItem("tickets1");
    // Object.values(seat).map((value) => {
    //   if (tot.includes(value.innerText)) {
    //     value.classList.add("occupied");
    //   }
    // });
    // let booked = JSON.parse(localStorage.getItem("booked"));
    var total = 40;
    total = total - tot.length;
    document.getElementById("count").innerHTML = select1.length;
    document.getElementById("total").innerHTML =
      "Total Seats Avaliable:" + localStorage.getItem("Total");
    localStorage.setItem("Total", total);
    console.log(total);
    window.location.reload();
    // handleClick();
    // seat.addEventListener("click",handleClick)
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          Your Seat Numbers-<div className="num"></div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button id="button" className="button" onClick={select}>
            Book a seat
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
