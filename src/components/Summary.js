import React, { useContext } from "react";

import { AppContext } from "../context/app-context";
import "./Summary.css";

const Summary = () => {
  const appCtx = useContext(AppContext);
  const { plan, adds } = appCtx;

  const planName = plan.split(" ")[0];
  const planPrice = plan.split(" ")[1];

  const total = () => {
    let sum = 0;
    if (plan) {
      sum += parseInt(plan.split("$")[1].split("/")[0]);
    }
    adds.forEach((add) => {
      sum += parseInt(add.split("$")[1].split("/")[0]);
    });
    return sum;
  };

  return (
    <div>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming</p>

      <div className="wrapper">
        <div className="plan_wrapper">
          <div className="wrapper_text">
            <h3>{planName}</h3>
            <a href="">Change</a>
          </div>
          <p>{planPrice}</p>
        </div>
        <hr />

        <div>
          {adds.map((add) => (
            <p key={add}>{add}</p>
          ))}
        </div>
      </div>

      <p className="totalPrice">Total: ${total()}/mo</p>
    </div>
  );
};

export default Summary;
