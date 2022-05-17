import React, { useState } from "react";
import "../../styles/style.css";

import { validateEmail } from "../../utils/helpers";

function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
  
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleInputValidation = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      validateEmail(inputValue);
    } else if (!inputValue) {
      alert("Please enter an email")
    }
  };

  const handleFormSubmit = (e) => {
  
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or name is invalid");
      
      return;
    
    }
  
    alert(`Hello ${name}`);

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div id="formdiv">
      <p>Email me here at owenhtforeman@gmail.com</p>
      <form className="form">
        <input id="emailinput"
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleInputValidation}
          type="email"
          placeholder="email"
          required
        />
        <input id="nameinput"
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleInputValidation}
          type="text"
          placeholder="name"
          required
        />
        <textarea id="messageinput"
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleInputValidation}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
