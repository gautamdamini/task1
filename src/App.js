import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./components/Nav";
import logo from "./components/images/Big-Bonus-final-Logo 1.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SidebarItem from "./components/SidebarItem";
function App() {
  return (
    <>
      <Router>
        <div className="bg-secondary min-vh-100">
          <div className="row">
            <div className="col-md-2 bg-white vh-100 p-0">
              <div className="bglogo">
                <img src={logo} className="bg-logo" />
              </div>
              <div className="sidebar">
                <SidebarItem />
              </div>
            </div>
            <div className="col-md-10 p-0">
              <Nav />
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/about" element={<About />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
