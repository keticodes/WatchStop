import { useState } from "react";

const Input = ({ text, password, value, setValue }) => {
  return (
    <div className="input">
      <label htmlFor={password ? "passwordInput" : "textInput"}>
        {password ? "Password" : text}:
      </label>
      <input
        type={password ? "password" : "text"}
        id={password ? "passwordInput" : text}
        placeholder={text}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
