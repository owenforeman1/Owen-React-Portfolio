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
    <div>
      <p>Email me here at owenhtforeman@gmail.com</p>
      <p>Give me a call at 304-282-4543</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
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
