import React, { useState } from "react";
import Input from "../Elements/input";
import Button from "../Elements/button";
import "../css/Profile.css";
import useProfile from "../Hooks/useProfile";
const Signup = () => {
  // State variables for input values
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
  };
  const profile = useProfile();
  return (
    <div id="Profile-wrapper">
      <h1>PROFILE</h1>
      <form onSubmit={handleSubmit} id="Profile-form">
        <div className="Profile-content">
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
          <Button text="SAVE" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
