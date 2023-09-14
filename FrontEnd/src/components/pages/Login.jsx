import { useState } from "react";
import Input from "../Elements/input";
import Button from "../Elements/button";
import "../css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
    setEmail("");
    setPassword("");
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
