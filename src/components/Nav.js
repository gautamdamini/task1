import React from "react";
import profil from "../components/images/Group.png";
function Nav() {
  return (
    <>
      <div className="d-flex d-flex1 bgreen">
        <div className="projectcont1">
          <h2 className="text-white m-0 p-0">Virender Kundu</h2>
          <p>virender.singh@milkanoagro.com</p>
          <p>Gurgaon CC</p>
        </div>
        <div className="proflie">
          <img src={profil}></img>
        </div>
      </div>
    </>
  );
}

export default Nav;
