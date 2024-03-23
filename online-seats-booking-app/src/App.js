import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Signin } from "./components/Pages/Signin";
import { Contact } from "./components/Pages/Contact";
import { Calender } from "./components/Pages/Calender";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calender" element={<Calender />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
