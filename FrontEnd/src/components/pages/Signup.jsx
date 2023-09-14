import React, { useState } from "react";
import Input from "../Elements/input";
import Button from "../Elements/button";
import "../css/signup.css";
const apiUrl = "http://localhost:3001/api/users";
const Signup = () => {
  // State variables for input values
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { firstname, lastname, email, phonenumber };

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("Error");
    }
    if (response.ok) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      console.log("new user added:", json);
    }
  };

  return (
    <div id="signup-wrapper">
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit} id="Signup-form">
        <div className="Signup-content">
          <Input text="First-name" value={firstname} setValue={setFirstName} />
          <Input text="Last-name" value={lastname} setValue={setLastName} />
          <Input text="Email" value={email} setValue={setEmail} />
          <Input
            text="Phone-number"
            value={phonenumber}
            setValue={setPhoneNumber}
          />
          <Input
            text="Password"
            password={true}
            value={password}
            setValue={setPassword}
          />
          <Button text="SIGNUP" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
