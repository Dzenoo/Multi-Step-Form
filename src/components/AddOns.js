import React, { useContext, useState } from "react";
import { AppContext } from "../context/app-context";
import "./AddOns.css";

const Plan = () => {
  const appCtx = useContext(AppContext);
  const { adds, setAdds } = appCtx;

  return (
    <div className="add_section">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enchance your gaming experience</p>

      <div className="items_checks">
        <div
          className={`itemCh ${
            adds.includes("Online Service, $1/mo") ? "checked" : ""
          }`}
        >
          <input
            type="checkbox"
            onChange={() =>
              setAdds((prevAdd) => prevAdd.concat("Online Service, $1/mo"))
            }
          />
          <div className="text">
            <h3>Online service</h3>
            <span>Access to multiplayer games</span>
          </div>
          <p>+$1/mo</p>
        </div>
        <div
          className={`itemCh ${
            adds.includes("Larger storage, $2/mo") ? "checked" : ""
          }`}
        >
          <input
            type="checkbox"
            onChange={() =>
              setAdds((prevAdd) => prevAdd.concat("Larger storage, $2/mo"))
            }
          />
          <div className="text">
            <h3>Larger storage</h3>
            <span>Extra 1TB of cloud save</span>
          </div>
          <p>+$2/mo</p>
        </div>
        <div
          className={`itemCh ${
            adds.includes("Customizable Profile,  $2/mo") ? "checked" : ""
          }`}
        >
          <input
            type="checkbox"
            onChange={() =>
              setAdds((prevAdd) =>
                prevAdd.concat("Customizable Profile,  $2/mo")
              )
            }
          />
          <div className="text">
            <h3>Customizable Profile</h3>
            <span>Custom theme on your profile</span>
          </div>

          <p>+$2/mo</p>
        </div>
      </div>
    </div>
  );
};

export default Plan;
