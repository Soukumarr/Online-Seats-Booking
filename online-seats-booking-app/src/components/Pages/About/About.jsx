import React from 'react';
import "./About.css";
import "../../Common.css";
import images from '../../../constants/images';


export const About = () => {
  return (
    <section className="about section-p bg-dark" id="about">
      <div className="containerr">
        <div className="about-content grid text-center">
          <div className="content-left">
            <img src={images.about_main_img} alt="" />
          </div>
          <div className="content-right">
            <div className="section-t">
              <h3>About Us</h3>
            </div>
            <p className="text">
              Welcome to Awfis, your go-to destination for hassle-free seat
              reservations! Whether you're planning a trip, attending an event,
              or simply looking for a comfortable spot, our user-friendly
              platform simplifies the process of booking seats with just a few
              clicks. Say goodbye to long queues and last-minute rushes. With
              our intuitive interface and secure payment system, you can easily
              browse available seats, select your preferred ones, and confirm
              your booking in no time. Experience convenience like never before
              with Awfis.
            </p>
            <p className="text">
              An online seat booking application for a website streamlines the
              process of reserving seats for various events, such as concerts,
              movies, or transportation services. Through a user-friendly
              interface, customers can easily browse available seats, select
              their preferred options, and complete secure transactions online.
              The application provides real-time updates on seat availability,
              ensuring users can make informed decisions. With integrated
              payment processing, users can securely purchase their chosen
              seats, receiving instant confirmation of their bookings. This
              convenient solution not only enhances the user experience but also
              offers organizers efficient management of seat allocations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About