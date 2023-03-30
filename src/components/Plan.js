import React, { useContext, useState } from "react";
import { AppContext } from "../context/app-context";
import { BsToggleOn } from "react-icons/bs";

import img0 from "../assets/images/icon-arcade.svg";
import img1 from "../assets/images/icon-advanced.svg";
import img2 from "../assets/images/icon-pro.svg";

import "./Plan.css";

const Plan = () => {
  const { plan, setPlan, changePlanMonth, setchangePlanMonth } =
    useContext(AppContext);

  return (
    <div className="plan_section">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>

      <div className="items">
        <div
          className={`item ${
            plan === `Arcade, ${changePlanMonth ? "$20/mo" : "$9/yr"}`
              ? "checked"
              : ""
          }`}
          onClick={() =>
            setPlan(changePlanMonth ? "Arcade, $20/mo" : "Arcade, $9/yr")
          }
        >
          <img src={img0} alt="ico" />
          <h3>Arcade</h3>
          <p>{changePlanMonth ? "$20/mo" : "$9/yr"}</p>
        </div>
        <div
          className={`item ${
            plan === `Advanced, ${changePlanMonth ? "$42/mo" : "$18/yr"}`
              ? "checked"
              : ""
          }`}
          onClick={() =>
            setPlan(changePlanMonth ? "Advanced, $42/mo" : "Advanced, $18/yr")
          }
        >
          <img src={img1} alt="ico" />
          <h3>Advanced</h3>
          <p>{changePlanMonth ? "$42/mo" : "$18/yr"}</p>
        </div>
        <div
          className={`item ${
            plan === `Pro, ${changePlanMonth ? "$60/mo" : "$28/yr"}`
              ? "checked"
              : ""
          }`}
          onClick={() =>
            setPlan(changePlanMonth ? "Pro, $60/mo" : "Pro, $28/yr")
          }
        >
          <img src={img2} alt="ico" />
          <h3>Pro</h3>
          <p>{changePlanMonth ? "$60/mo" : "$28/yr"}</p>
        </div>
      </div>

      <div className="toggle">
        <h3>Yearly</h3>
        <button onClick={() => setchangePlanMonth(!changePlanMonth)}>
          {changePlanMonth ? ">" : "<"}
        </button>
        <h3>Monthly</h3>
      </div>
    </div>
  );
};

export default Plan;
