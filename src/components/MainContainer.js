import React, { useState } from "react";

import "./MainContainer.css";

const MainContainer = () => {
  const [currentButton, setCurrentButton] = useState([1, 2, 3, 4]);

  return (
    <div className="container">
      <div className="info_section">
        <div className="button_div">
          <button>{currentButton[0]}</button>
          <div className="btn_text">
            <p>STEP 1</p>
            <h1>Your info</h1>
          </div>
        </div>
        <div className="button_div">
          <button>{currentButton[1]}</button>
          <div className="btn_text">
            <p>STEP 2</p>
            <h1>Select Plan</h1>
          </div>
        </div>
        <div className="button_div">
          <button>{currentButton[2]}</button>
          <div className="btn_text">
            <p>STEP 3</p>
            <h1>Add-ONS</h1>
          </div>
        </div>
        <div className="button_div">
          <button>{currentButton[3]}</button>
          <div className="btn_text">
            <p>STEP 4</p>
            <h1>SUMMARY</h1>
          </div>
        </div>
      </div>
      <div className="input_section">
        <div>
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number</p>
        </div>

        <div className="inputs">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email Adress</label>
          <input type="text" id="email" />
          <label htmlFor="phone">Phone Number</label>
          <input type="number" id="phone" placeholder="e.g. +1 234 567 890" />
        </div>

        <div className="button">
          <div></div>
          <button>Next Step</button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
