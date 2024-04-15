import React from "react";
import "./Contact.css";

const Map = () => {
  return (
    <div className="map-content">
      {/* eslint-disable-next-line */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1324.632436250079!2d73.79505989210459!3d18.596775822537175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9db99874387%3A0xa109f96c68df6335!2sAwfis%20GK%20Mall!5e0!3m2!1sen!2sin!4v1711346769151!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};

export default Map;
