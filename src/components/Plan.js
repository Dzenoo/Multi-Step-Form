import React, { useContext, useState } from "react";
import { AppContext } from "../context/app-context";
import { BsToggleOn } from "react-icons/bs";

import img0 from "../assets/images/icon-arcade.svg";
import img1 from "../assets/images/icon-advanced.svg";
import img2 from "../assets/images/icon-pro.svg";

import "./Plan.css";

// const DUMMY_PLANS = [
//   {
//     id: 1,
//     icon: img0,
//     title: "Arcade",
//     price: 9,
//   },
//   {
//     id: 2,
//     icon: img1,
//     title: "Advanced",
//     price: 12,
//   },
//   {
//     id: 3,
//     icon: img2,
//     title: "Pro",
//     price: 15,
//   },
// ];

const Plan = () => {
  const appCtx = useContext(AppContext);

  const { plan, setPlan } = appCtx;

  return (
    <div className="plan_section">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>

      <div className="items">
        <div
          className={`item ${plan === "Arcade, $9/mo" ? "checked" : ""}`}
          onClick={() => setPlan("Arcade, $9/mo")}
        >
          <img src={img0} alt="ico" />
          <h3>Arcade</h3>
          <p>$9/mo</p>
        </div>
        <div
          className={`item ${plan === "Advanced, $12/mo" ? "checked" : ""}`}
          onClick={() => setPlan("Advanced, $12/mo")}
        >
          <img src={img1} alt="ico" />
          <h3>Advanced</h3>
          <p>$12/mo</p>
        </div>
        <div
          className={`item ${plan === "Pro, $15/mo " ? "checked" : ""}`}
          onClick={() => setPlan("Pro, $15/mo")}
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
