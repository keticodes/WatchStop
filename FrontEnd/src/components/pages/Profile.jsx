import React, { useState, useEffect } from "react";
import Input from "../Elements/readOnlyInput";
import Button from "../Elements/button";
import "../css/Profile.css";
import useProfile from "../Hooks/useProfile";
import useUpdate from "../Hooks/useUpdate";

const Profile = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userData = await useProfile();
        setFirstName(userData.firstname);
        setLastName(userData.lastname);
        setEmail(userData.email);
        setPhoneNumber(userData.phonenumber);
        setPassword(userData.password);
      } catch (error) {
        console.error("Error fetching user profile:", error.message);
      }
    };

    fetchUserProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    useUpdate(firstname, lastname, email, phonenumber, password);
    setPassword("");
  };

  return (
    <div id="Profile-wrapper">
      <h1>PROFILE</h1>
      <form onSubmit={handleSubmit} id="Profile-form">
        <div className="Profile-content">
          <Input
            text="First-name"
            type={"text"}
            value={firstname}
            setValue={setFirstName}
          />
          <Input
            text="Last-name"
            type={"text"}
            value={lastname}
            setValue={setLastName}
          />
          <Input
            text="Email"
            type={"email"}
            value={email}
            setValue={setEmail}
          />
          <Input
            text="Phone-number"
            type={"text"}
            value={phonenumber}
            setValue={setPhoneNumber}
          />
          <Input
            text="Password"
            type={"password"}
            value={password}
            setValue={setPassword}
          />
          <Button text="SAVE" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Profile;
