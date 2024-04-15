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
import { Demo } from "./components/Card/Demo.jsx";

import { SeatLayout } from "./components/Pages/layout/SeatLayout";
import Header from "./components/Pages/Header/Header.jsx";
import Footer from "./components/Pages/Footer/Footer.jsx";
import Userprofile from "./components/Pages/Userprofile.js";
import Bookings from "./components/Pages/Bookings";
import Resetpassword from "./components/Pages/ResetPassword";
import AdminDashboad from "./components/AdminDashboard/AdminDashboad";
// import { SeatBooking } from "./components/Pages/SeatBooking/SeatBookingPage.jsx";
import { BookingLayout} from "./components/Booking/BookingLayout.jsx";

import { AuthProvider } from "./components/AuthProvider";
import {Grid} from "./components/AdminPage/Grid.js"; 


import History from "./components/Pages/History.js";
import Seatswapform from "./components/Pages/Seatswapform.js";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  return (
    <>
      <AuthProvider>
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
              <Route path="/bookingscard" element={<Grid />} />
              <Route
                path="/layout"
                element={
                  <PrivateRoute>
                    <SeatLayout />
                  </PrivateRoute>
                }
              />
              <Route
                path="/userprofile"
                element={
                  <PrivateRoute>
                    <Userprofile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/bookings"
                element={
                  <PrivateRoute>
                    <Bookings />
                  </PrivateRoute>
                }
              />
              <Route
                path="/resetpassword"
                element={
                  <PrivateRoute>
                    <Resetpassword />{" "}
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin_dashboard"
                element={
                  <PrivateRoute>
                    <AdminDashboad />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/bookseats"
                element={
                  <PrivateRoute>
                    <BookingLayout />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/history"
                element={
                  <PrivateRoute>
                    <History />
                  </PrivateRoute>
                }
              />
              <Route
                path="/seatswap"
                element={
                  <PrivateRoute>
                    <Seatswapform />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
