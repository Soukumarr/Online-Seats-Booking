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
import Userprofile from "./components/Pages/Userprofile.js";
import Bookings from "./components/Pages/Bookings";
import Resetpassword from "./components/Pages/ResetPassword";
import AdminDashboad from "./components/AdminDashboard/AdminDashboad";
// import { SeatBooking } from "./components/Pages/SeatBooking/SeatBookingPage.jsx";
import { BookingLayout, SeatsLayout } from "./components/Booking/BookingLayout.jsx";
import FloorsDropDown from "./components/dropdown/FloorsDropDown.jsx";





function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Navbar op1="Dashboard" op2="Profile"/> */}
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
            <Route path="/userprofile" element={<Userprofile />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/resetpassword" element={<Resetpassword />} />
            <Route path="/admin_dashboard" element={<AdminDashboad />}></Route>
            <Route path="/bookseats" element={<BookingLayout />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
