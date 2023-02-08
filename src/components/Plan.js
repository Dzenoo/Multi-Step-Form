import React, { useState } from "react";

import img0 from "../assets/images/icon-arcade.svg";
import img1 from "../assets/images/icon-advanced.svg";
import img2 from "../assets/images/icon-pro.svg";

import { BsToggleOn } from "react-icons/bs";

import "./Plan.css";

const Plan = () => {
  const [isChecked, setIsChecked] = useState(0, 1, 2);

  return (
    <div className="plan_section">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>

      <div className="items">
        <div
          className={`item ${isChecked === 0 ? " checked" : ""}`}
          onClick={() => setIsChecked(0)}
        >
          <img src={img0} alt="ico" />
          <h3>Arcade</h3>
          <p>$9/mo</p>
        </div>
        <div
          className={`item ${isChecked === 1 ? " checked" : ""}`}
          onClick={() => setIsChecked(1)}
        >
          <img src={img1} alt="ico" />
          <h3>Advanced</h3>
          <p>$12/mo</p>
        </div>
        <div
          className={`item ${isChecked === 2 ? " checked" : ""}`}
          onClick={() => setIsChecked(2)}
        >
          <img src={img2} alt="ico" />
          <h3>Pro</h3>
          <p>$15/mo</p>
        </div>
      </div>

      <div className="toggle">
        <h3>Yearly</h3>
        <BsToggleOn />
        <h3>Monthly</h3>
      </div>
    </div>
  );
};

export default Plan;
