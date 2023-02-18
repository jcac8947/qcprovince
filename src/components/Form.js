import React from "react";
import './pages/SIgnUp.css'
import "./Form.css";

function Form() {
  return (
    <div className="bg">
    <div className="container">
      <form>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <p></p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>
          <p></p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <p></p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Form;