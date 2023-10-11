import React, { useState } from "react";
import Input from "../Elements/input";
import Button from "../Elements/button";
import "../css/signup.css";
import useSignup from "../Hooks/useSignup";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // State variables for input values
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      firstname,
      lastname,
      email,
      phonenumber,
      password,
    };
    const signupSuccess = await useSignup(userData);
    if (signupSuccess) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");

      navigate("/");
    }
  };

  return (
    <div id="signup-wrapper">
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit} id="Signup-form">
        <div className="Signup-content">
          <Input
            text="First-name"
            value={firstname}
            setValue={setFirstName}
            Type="text"
          />
          <Input
            text="Last-name"
            value={lastname}
            setValue={setLastName}
            Type="text"
          />
          <Input text="Email" value={email} setValue={setEmail} Type="email" />
          <Input
            text="Phone-number"
            value={phonenumber}
            setValue={setPhoneNumber}
          />
          <Input
            text="password"
            password={true}
            value={password}
            setValue={setPassword}
            Type="password"
          />
          <Button text="SIGNUP" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
