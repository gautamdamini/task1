import React, { useState } from "react";
import icon from "../components/images/Vector.png";
import businesscard from "../components/images/businesscard.png";
import icon2 from "../components/images/Vector (3).png";
import router from "../components/images/router.png";
import Vector from "../components/images/Vector (2).png";
import Vector2 from "../components/images/Vector (1).png";
import delivery from "../components/images/delivery-add.png";
import vm from '../components/images/Vector5.png'
import Group1 from '../components/images/Group1.png'
import Group2 from '../components/images/person-bounding-box.png'
import Group3 from '../components/images/Group2.png'
import { Link } from "react-router-dom";
function SidebarItem() {
  const [open, setOpen] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive); // Toggle the active state
  };
  return (
    <>
      <div className={open ? "sidebar-item open" : "sideBar-item"}>
        <div className="sidebar-title mb-3 mt-3">
          <span>
            <img src={icon} className="imgtext" />
            Dashboard
          </span>
          <img src={Vector} className="taggle-btn bt" />
        </div>
      </div>
      <div className={open ? "sidebar-item open" : "sideBar-item"}>
        <div className="sidebar-title mb-3 mt-3">
          <span>
            <img src={businesscard} className="imgtext" />
            Farmer,Business,FBO
          </span>
          <img src={Vector} className="taggle-btn bt " />
        </div>
      </div>
      <div className={open ? "sidebar-item open" : "sideBar-item"}>
        <div className="sidebar-title mb-3 mt-3">
          <span>
            <img src={router} className="imgtext" />
            CC Sourcing & Dispatch
          </span>
          <img src={Vector} className="taggle-btn bt " />
        </div>
      </div>
      <div className={open ? "sidebar-item open" : "sideBar-item"}>
        <div className="sidebar-title mb-3 mt-3">
          <span>
            <img src={Vector2} className="imgtext" />
            WHS Inventory
          </span>
          <img src={Vector} className="taggle-btn bt" />
        </div>
      </div>

      <div className={open ? "sidebar-item open" : "sideBar-item"}>
        <div className="subtext">
          <div className="sidebar-title">
            <span className="text-white">
              <img src={delivery} className="imgtext " />
              Logistics & operations
            </span>
            <img
              src={icon2}
              className="taggle-btn bt"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="sidebar-content">
            <Link to="/" className="text-white " >
              Vehicle Onboard
            </Link>
         
          </div>
          <div className="sidebar-content">
            <Link to="/about" className="text-white">
              Vehicle Pending
            </Link>
          </div>
          <div className="sidebar-content">
            <Link to="/" className="text-white">
              Vehicle Approved
            </Link>
          </div>
          <div className="sidebar-content">
            <Link to="/" className="text-white">
              Vehicle Rejected
            </Link>
          </div>
          <div className="sidebar-content">
            <Link to="/" className="text-white">
              Vehicle Entry/Exit
            </Link>
          </div>
          <div className="sidebar-content">
            <Link to="/" className="text-white">
              Vehicle Opration Dashboard
            </Link>
          </div>
          <div className="sidebar-content">
            <Link to="/" className="text-white">
              Vehicle Dispatch
            </Link>
          </div>
          <div className="sidebar-content">
            <Link to="/" className="text-white">
              Vehicle Return ,Payment & RTO
            </Link>
          </div>
        </div>
      </div>
      <div className={open ? "sidebar-item open" : "sideBar-item"}>
        <div className="sidebar-title mb-3">
          <span>
            <img src={vm} className="imgtext" />
            Master Data
          </span>
          <img src={Vector} className="taggle-btn bt " />
        </div>
        <div className="sidebar-title mb-3">
          <span>
            <img src={Group1} className="imgtext" />
            WHS Product
          </span>
          <img src={Vector} className="taggle-btn bt" />
        </div>
        {/* <div className="sidebar-title mb-3">
          <span>
            <img src={Group2} className="imgtext" />
            Buyer
          </span>
          <img src={Vector} className="taggle-btn bt " />
        </div>
        <div className="sidebar-title mb-3">
          <span>
            <img src={Group3} className="imgtext" />
            Order
          </span>
          <img src={Vector} className="taggle-btn bt " />
        </div> */}

      </div>
      
    </>
  );
}

export default SidebarItem;
