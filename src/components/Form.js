import React, { useState } from "react";

import "./Form.css";

const isEmpty = (value) => value.trim() !== "";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const nameChangeHandler = (ev) => {
    setName(ev.target.value);
  };

  const emailChangeHandler = (ev) => {
    setEmail(ev.target.value);
  };

  const phoneChangeHandler = (ev) => {
    setPhone(ev.target.value);
  };

  const nameIsValid = isEmpty(name);
  const emailIsValid = isEmpty(email);
  const phoneIsValid = isEmpty(phone);

  return (
    <>
      <div>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number</p>
      </div>
      <div className="inputs">
        <div className="control">
          <label htmlFor="name">Name</label>
          {!nameIsValid && <p>Please enter valid name</p>}
        </div>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
        />
        <div className="control">
          <label htmlFor="email">Email Adress</label>
          {!emailIsValid && <p>Please enter valid email</p>}
        </div>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChangeHandler}
        />
        <div className="control">
          <label htmlFor="phone">Phone Number</label>
          {!phoneIsValid && <p>Please enter valid phone</p>}
        </div>
        <input
          type="number"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          value={phone}
          onChange={phoneChangeHandler}
        />
      </div>
    </>
  );
};

export default Form;
