import React from 'react';
import axios from "axios";
import "./Registration.css";
import usericon from "../../image/user.png";
import password from "../../image/password.png";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userToken } from '../../api/Axios';
import mainUrl from '../../api/host';

const Registration = () => {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [conpwd, setConPwd] = useState("");
    const [err, setErr] = useState('');
    const navigate = useNavigate();
    const loginPage = () => {
      navigate('/');
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
    try{
          const resp = await axios.post(`http://${mainUrl}/auth/users/`,
      {
          username: user,
          password: pwd,
          re_password: conpwd,
      }).then((e) =>{
        if(e.status === 201){
            loginPage()
        }
       } )
    
    } catch(e) {
      if(e.response.data.username){
        setErr(e.response.data.username[0])
      }else if(e.response.data.password){
        setErr(e.response.data.password[0])
      }else if(e.response.data.non_field_errors){
        setErr(e.response.data.non_field_errors[0])
      }
    }
  }
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="loginPage">
          <div className="loginField">
            <h1>Registration</h1>
            <p className="err__p">{err}</p>
           <div className="userIcon">
              <img src={usericon} />
              <input
                className="inputField"
                placeholder="Username"
                onChange={(e) => setUser(e.target.value)}
                type="text"
                value={user}
                required
              />
            </div>
            <div className="passwordIcon">
              <img src={password} />
              <input
                className="inputField"
                type="password"
                placeholder="Password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
            <div className="passwordIcon">
              <img src={password} />
              <input
                className="inputField"
                type="password"
                placeholder="Сonfirm Password"
                onChange={(e) => setConPwd(e.target.value)}
                value={conpwd}
                required
              />
            </div>
            <input className="btn" type="submit" value="Register" />
            <Link className='registr' to="/login"> Log in </Link>
          </div>
        </div>
      </form>
    );
  };
  

export default Registration;