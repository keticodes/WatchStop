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
