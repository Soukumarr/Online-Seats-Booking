import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Home } from "./components/Pages/Home";
import About from "./components/Pages/About/About.jsx";
// import { Signin } from "./components/Pages/Signin";
import { Contact } from "./components/Pages/Contact";
// import { Signup } from "./components/Pages/Signup";
// import Seatbooking from "./components/Pages/Seatbooking";
import { Calender } from "./components/Pages/calendar/Calender";
import { Demo } from "./components/Card/Demo";
import { useNavigate } from "react-router-dom";
import { SeatLayout } from "./components/Pages/layout/SeatLayout";
import Header from "./components/Pages/Header/Header.jsx";
import Footer from "./components/Pages/Footer/Footer.jsx";
import { SeatBooking } from "./components/Pages/SeatBooking/SeatBookingPage.jsx";
import { SeatsLayout } from "./components/Layout/SeatsLayout.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/seatbook" element={<Seatbooking />} /> */}
            <Route path="/calender" element={<Calender />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/layout" element={<SeatLayout />} />
            <Route path="/booking" element={<SeatBooking />} />
            <Route path="/bookseats" element={<SeatsLayout />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
