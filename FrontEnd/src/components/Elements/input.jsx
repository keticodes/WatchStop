import React from "react";

const Input = ({ text, password, value, setValue, Type }) => {
  return (
    <div className="input">
      <input
        type={Type}
        id={password ? "passwordInput" : text}
        placeholder={text}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
