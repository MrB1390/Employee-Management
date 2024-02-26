import React, { useState } from "react";
import crownicon from "../assets/crownicon.svg";
import userlist from "../assets/project-manager-icon.svg";
import addIcon from "../assets/add-boy-user-icon.svg";
import editIcon from "../assets/brush-pencil-icon.svg";
import settingsIcon from "../assets/setting-icon.svg";
import Toggle from "../assets/three-horizontal-lines-icon.svg";
import './Sidebar.css'
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showNames, setShowNames] = useState(false); // State to manage visibility of icon names

  const toggleNames = () => {
    setShowNames(!showNames);
  };

  return (
    <div>
    <div className="sidebar">
    <button
            className="btn mb-2"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleNames} // Toggle visibility of names
          >
             <img src={Toggle} alt="Toggle" width={"30vw"} height={"20%"} />
          </button>
      <ul className="nav flex-column ms-1">
        <li className="nav-item mb-2 p-2">
          <div className="d-flex">
            <img src={crownicon} alt="crown" width={"30vw"} height={"20%"} />
            {showNames && <p className="p-1 mx-2">
                <Link to='/' style={{textDecoration: "none",color: "inherit"}}> CR </Link>
                </p>}
          </div>
        </li>
        <li className="nav-item mb-2 p-2">
          <div className="d-flex">
            <img src={userlist} alt="list" width={"30vw"} height={"20%"} />
            {showNames && <p className="p-1 mx-2">
            <Link to='/list' style={{textDecoration: "none",color: "inherit"}}> List </Link>
                </p>}
          </div>
        </li>
        <li className="nav-item mb-4 p-2">
          <div className="d-flex">
            <img src={addIcon} alt="add" width={"30vw"} height={"20%"} />
            {showNames && <p className="p-1 mx-2">
            <Link to='/add' style={{textDecoration: "none",color: "inherit"}}> Adduser </Link>
                </p>}
          </div>
        </li>
        <li className="nav-item mb-4 p-2">
          <div className="d-flex">
            <img src={editIcon} alt="edit" width={"30vw"} height={"20%"} />
            {showNames && <p className="p-1 mx-2">
            <Link to='/edit' style={{textDecoration: "none",color: "inherit"}}> Edituser </Link>
                </p>}
          </div>
        </li>
        <li className="nav-item mb-4 p-2">
          <div className="d-flex">
            <img src={settingsIcon} alt="settings" width={"30vw"} height={"20%"} />
            {showNames && <p className="p-1 mx-2">
            <Link to='/settings' style={{textDecoration: "none",color: "inherit"}}> Settings </Link>
                </p>}
          </div>
        </li>
      </ul>
          
    </div>
    </div>
  );
};

export default Sidebar;
