import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const login = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email,
        password
      });
      navigate("/");
    } catch (error) {
        setErrorMessage('Incorrect Email or Password');
        console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={login}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>
          {errorMessage === '' ? '' : <span className="message is-danger">Incorrect email or password!</span>}
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Login
              </button>
            </div>
          </div>          
        </form>       
      </div>
    </div>
  );
};

export default Login;
