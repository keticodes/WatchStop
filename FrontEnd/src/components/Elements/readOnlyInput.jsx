import { useState } from "react";
import "../css/readonlyinput.css";
import editImage from "../../assets/edit.png";
const ReadOnly = ({ text, password, type, value, setValue, readOnly }) => {
  const [iseReadOnly, setIsReadOnly] = useState(true);

  const toggleReadOnly = () => {
    setIsReadOnly(!iseReadOnly);
  };
  return (
    <div className="input">
      <input
        type={type}
        id={password ? "passwordInput" : text}
        placeholder={text}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        readOnly={iseReadOnly}
        className={iseReadOnly ? "readonly" : ""}
      />
      <button type="button" onClick={toggleReadOnly}>
        <img src={editImage} width="40px" height="40px" alt="" />
      </button>
    </div>
  );
};

export default ReadOnly;
