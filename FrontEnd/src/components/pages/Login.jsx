import React, { useState } from "react";
import Input from "../Elements/input";
import Button from "../Elements/button";
import useLogin from "../Hooks/useLogin";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    const loginSuccess = await useLogin(userData);
    if (loginSuccess) {
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <div id="Login-wrapper">
      <form id="Login-form" onSubmit={handleSubmit}>
        <div className="Login-content">
          <h1>LOGIN</h1>
          <Input text="Email" value={email} setValue={setEmail} />
          <Input
            text="Password"
            password={true}
            value={password}
            setValue={setPassword}
          />
          <Button text="LOGIN" />
        </div>
      </form>
    </div>
  );
};

export default Login;
