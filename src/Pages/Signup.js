import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


function Signup() {

  const navigateTo = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = e =>{
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const signup = () =>{
    const {firstName, lastName, email, password, reEnterPassword} = user
 if(firstName && lastName && email && password && (password === reEnterPassword)){
    axios.post("http://localhost:9002/signup", user).then(res => {
      alert(res.data.message)
      navigateTo("/graph")
    })
 }
 else{
  alert("Invalid Inputs");
 }
  }

  return (
    <div className="signup-parent flex">
      <div className="signup flex">
        <div className="top flex">
          <h2>Sign Up</h2>
          <div className="output">
            <div className="input">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                className="lastName"
              />
            </div>
            <div className="input">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                className="lastName"
              />
            </div>
          </div>
          <div className="input">
            <label>Email</label>
            <input type="Email" name="email" value={user.email}  onChange={handleChange} />
          </div>
          <div className="input">
            <label>Password</label>
            <input type="password" name="password" value={user.password}  onChange={handleChange} />
          </div>
          <div className="input">
            <label>Re-enter password</label>
            <input
              type="password"
              name="reEnterPassword"
              value={user.reEnterPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="checkbox" />
            <span>
              i've read and agree with Terms of <br />
              Service and our privacy Policy
            </span>
          </div>
          <div className="flex">
            <button className="signup-btn" onClick={signup}>
              Sign up
            </button>
          </div>
        </div>
        <div className="port flex">
          <h2 className="margin">OR</h2>
        <button className="sin" onClick={()=>{navigateTo("/login")}}>LogIn</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
