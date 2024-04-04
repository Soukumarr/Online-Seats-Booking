import React from 'react';
import "./Footer.css";

const Footer = () => {

    let date = new Date();

  return (
    <footer className='footer bg-black flex flex-center' id = "footer">
        <div className='containerr flex flex-center w-100'>
            <div className='grid footer-content text-center'>
                <p className='text'>Book Your Seats Now!!!</p>
                <span className='text'>&copy; {date.getFullYear().toString()} Awfis</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer
