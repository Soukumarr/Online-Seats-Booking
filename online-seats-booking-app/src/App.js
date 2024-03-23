import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Signin } from "./components/Pages/Signin";
import { Contact } from "./components/Pages/Contact";
import { Signup } from "./components/Pages/Signup";
import Seatbooking from "./components/Pages/Seatbooking";

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
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
