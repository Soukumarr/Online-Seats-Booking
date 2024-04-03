import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Signin } from "./components/Pages/Signin";
import { Contact } from "./components/Pages/Contact";
import { Signup } from "./components/Pages/Signup";
import Seatbooking from "./components/Pages/Seatbooking";
import { Calender } from "./components/Pages/calendar/Calender";
import { Demo } from "./components/Card/Demo";
import { useNavigate } from "react-router-dom";
import { SeatLayout } from "./components/Pages/layout/SeatLayout";
import Userprofile from "./components/Pages/Userprofile";
import Bookings from "./components/Pages/Bookings";
import Resetpassword from "./components/Pages/ResetPassword";

function App() {

  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/seatbook" element={<Seatbooking />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/layout" element={<SeatLayout />} />
            <Route path="/userprofile" element={<Userprofile/>} />
            <Route path="/bookings" element={<Bookings/>} />
            <Route path="/resetpassword" element={<Resetpassword/> } />
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
