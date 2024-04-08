import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Home } from "./components/Pages/Home";
import About from "./components/Pages/About/About.jsx";
import { SigninForm } from "./components/Pages/SigninForm.js";
import { Contact } from "./components/Pages/Contact";
import { Signup } from "./components/Pages/Signup";
// import Seatbooking from "./components/Pages/Seatbooking";
import { Calender } from "./components/Pages/calendar/Calender";
import { Demo } from "./components/Card/Demo";
import { useNavigate } from "react-router-dom";
import { SeatLayout } from "./components/Pages/layout/SeatLayout";
import Header from "./components/Pages/Header/Header.jsx";
import Footer from "./components/Pages/Footer/Footer.jsx";
import Userprofile from "./components/Pages/Userprofile";
import Bookings from "./components/Pages/Bookings";
import Resetpassword from "./components/Pages/ResetPassword";
import History from "./components/Pages/History.js";
import Seatswapform from "./components/Pages/Seatswapform.js";

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
            <Route path="/signin" element={<SigninForm />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/seatbook" element={<Seatbooking />} /> */}
            <Route path="/calender" element={<Calender />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/layout" element={<SeatLayout />} />
            <Route path="/userprofile" element={<Userprofile/>} />
            <Route path="/bookings" element={<Bookings/>} />
            <Route path="/resetpassword" element={<Resetpassword/> } />
            <Route path="/history" element={<History/>} />
            <Route path="/seatswap" element={<Seatswapform/>} />
          
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
