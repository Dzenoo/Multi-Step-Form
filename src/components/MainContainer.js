import React, { useContext, useState } from "react";
import Form from "./Form";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";

import "./MainContainer.css";
import { AppContext } from "../context/app-context";

const MainContainer = () => {
  const appCtx = useContext(AppContext);
  const { currentPage, nextStepHandler, backStepHandler } = appCtx;
  const currentButton = [1, 2, 3, 4];

  const confirmHandler = () => {
    alert("Success confirm");
  };

  return (
    <div className="container">
      <div className="info_section">
        <div className="button_div">
          <button className={`${currentPage === 0 ? "active" : ""} `}>
            {currentButton[0]}
          </button>
          <div className="btn_text">
            <p>STEP 1</p>
            <h1>Your info</h1>
          </div>
        </div>
        <div className="button_div">
          <button className={`${currentPage === 1 ? "active" : ""}`}>
            {currentButton[1]}
          </button>
          <div className="btn_text">
            <p>STEP 2</p>
            <h1>Select Plan</h1>
          </div>
        </div>
        <div className="button_div">
          <button className={`${currentPage === 2 ? "active" : ""}`}>
            {currentButton[2]}
          </button>
          <div className="btn_text">
            <p>STEP 3</p>
            <h1>Add-ONS</h1>
          </div>
        </div>
        <div className="button_div">
          <button className={`${currentPage === 3 ? "active" : ""}`}>
            {currentButton[3]}
          </button>
          <div className="btn_text">
            <p>STEP 4</p>
            <h1>SUMMARY</h1>
          </div>
        </div>
      </div>
      <div className="input_section">
        {currentPage === 0 && <Form />}
        {currentPage === 1 && <Plan />}
        {currentPage === 2 && <AddOns />}
        {currentPage === 3 && <Summary />}

        <div className="button">
          {!currentPage > 0 && <div></div>}
          {currentPage > 0 && <span onClick={backStepHandler}>Go back</span>}
          <button
            onClick={currentPage === 3 ? confirmHandler : nextStepHandler}
          >
            {currentPage === 3 ? "Confirm" : "Next Step"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
