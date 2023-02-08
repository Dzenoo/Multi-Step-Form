import React, { useState } from "react";

import "./AddOns.css";

const Plan = () => {
  const [checks, setChecks] = useState(0, 1, 2);

  return (
    <div className="add_section">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enchance your gaming experience</p>

      <div className="items_checks">
        <div className={`itemCh ${checks === 0 ? "checked" : ""}`}>
          <input type="checkbox" onClick={() => setChecks(0)} />
          <div className="text">
            <h3>Online service</h3>
            <span>Access to multiplayer games</span>
          </div>
          <p>+$1/mo</p>
        </div>
        <div className={`itemCh ${checks === 1 ? "checked" : ""}`}>
          <input type="checkbox" onClick={() => setChecks(1)} />
          <div className="text">
            <h3>Larger storage</h3>
            <span>Extra 1TB of cloud save</span>
          </div>
          <p>+$2/mo</p>
        </div>
        <div className={`itemCh ${checks === 2 ? "checked" : ""}`}>
          <input type="checkbox" onClick={() => setChecks(2)} />
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
