import React, { useState } from "react";
import Input from "../Elements/input";
import Button from "../Elements/button";
import { GoogleLogin } from "react-google-login"; // Import Google Login component
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
        console.log("Login successful");
        response.json().then((result) => {
          console.log(result);
          localStorage.setItem(
            "login",
            JSON.stringify({
              login: true,
              token: result.token,
              user: result.user,
            })
          );
        });
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
    setEmail("");
    setPassword("");
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    // You can use the Google Sign-In API or a library like react-google-login
  };

  const handleGoogleResponse = (googleResponse) => {
    // Handle the successful Google login here
    if (googleResponse.profileObj) {
      const userData = {
        email: googleResponse.profileObj.email,
        // You can send other user information as needed
      };

      // Send the user data to your server for authentication if required
      // ...

      // Optionally, you can redirect the user after successful login
      // window.location.href = "/dashboard";
    } else {
      // Handle Google login failure
      console.error("Google login failed");
    }
  };

  const handleGoogleFailure = (error) => {
    // Handle Google login failure
    console.error("Google login failed with error:", error);
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

          {/* Google Login using react-google-login */}
          <GoogleLogin
            clientId="570931366977-ocsnkvamfsmpro5pm8hdo315pintncek.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={handleGoogleResponse}
            onFailure={handleGoogleFailure}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
