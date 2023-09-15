import { useState } from "react";
import Input from "../Elements/input";
import Button from "../Elements/button";
import "../css/login.css";

const apiUrl = "http://localhost:3001/api/users/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object containing the email and password
    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Handle successful login, e.g., redirect to another page
        console.log("Login successful");
        // Optionally, you can redirect the user to another page
        // window.location.href = "/dashboard";
      } else {
        // Handle login failure, e.g., display an error message
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }

    // Clear the email and password fields
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
