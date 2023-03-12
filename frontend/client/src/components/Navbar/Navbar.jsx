import React from "react";
import "./Navbar.css";
import logo from "../../image/hero-logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem('token')
  const postPage = () => {
    navigate("/createpage");
  };

 function exit() {
    const resp = axios.post(
        "http://127.0.0.1:8000/auth/token/logout/", token ,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
      localStorage.clear();
      navigate("/login");
    }
      

  return (
    <div className="Navbar">
      <div className="logo">
        <img className="logoPng" src={logo} />
        <i>Notepad</i>
      </div>
      <div>
        <button onClick={postPage} className="btnCreate">
          Create
        </button>
      </div>
      <div>
        <button onClick={exit} className="btnLogout">
          Exit
        </button>
      </div>
    </div>
  );
};

export default Navbar;
