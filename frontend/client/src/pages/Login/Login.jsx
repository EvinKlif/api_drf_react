import React from "react";
import axios from "axios";
import "./Login.css";
import usericon from "../../image/user.png";
import password from "../../image/password.png";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userToken} from '../../api/Axios';
import { Context } from "../../context";

const Login = () => {
  const { axiosPost, url} = useContext(Context);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState('');
  const navigate = useNavigate();
  const mainPage = () => {
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  try{
        const resp = await axios.post("http://127.0.0.1:8000/auth/token/login/",
    {
        username: user,
        password: pwd,
    }).then(response => {
        const token = response.data.auth_token;
        localStorage.setItem('token', token);
        userToken(token);
        mainPage();
        window.location.reload()
      })
  } catch(e) {
    setErr(e.response.data.non_field_errors[0])
  }
}
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="loginPage">
        <div className="loginField">
          <h1>Log in</h1>
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
          <input className="btn" type="submit" value="Log in" />
          <Link className='registr' to="/registr"> Registration </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;