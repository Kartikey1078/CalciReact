import React, { useState } from "react";
import "../App.css";

const Calci = () => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    const val = e.target.value;
  
    switch (val) {
      case "=":
        try {
          setValue(eval(value).toString());
        } catch {
          setValue("Error");
        }
        break;
  
      case "del":
        setValue(value.slice(0, -1));
        break;
  
      case "ac":
        setValue("");
        break;
  
      default:
        setValue(value + val);
        break;
    }
  };
  

  return (
    <div className="container-fluid">
      <div className="inputContainer">
        <input
          type="text"
          className="inp"
          value={value}
          readOnly
          placeholder="0"
        />
      </div>
      <div className="buttonsContainer">
        <div className="d-flex justify-content-between">
          <button className="bg-primary" onClick={handleClick} value="+">+</button>
          <button className="bg-primary" onClick={handleClick} value="-">-</button>
          <button className="bg-primary" onClick={handleClick} value="*">*</button>
          <button className="bg-primary" onClick={handleClick} value="/">/</button>
        </div>
        <div className="d-flex justify-content-between">
          {["1", "2", "3", "4"].map((num) => (
            <button
              key={num}
              className="bg-primary"
              onClick={handleClick}
              value={num}
            >
              {num}
            </button>
          ))}
        </div>
        <div className="d-flex justify-content-between">
          {["5", "6", "7", "8"].map((num) => (
            <button
              key={num}
              className="bg-primary"
              onClick={handleClick}
              value={num}
            >
              {num}
            </button>
          ))}
        </div>
        <div className="d-flex justify-content-between">
          {["9", "0", "00", "."].map((num) => (
            <button
              key={num}
              className="bg-primary"
              onClick={handleClick}
              value={num}
            >
              {num}
            </button>
          ))}
        </div>
        <div className="d-flex justify-content-between">
          <button className="bg-primary" onClick={handleClick} value="del">
            Delete
          </button>
          <button className="bg-primary" onClick={handleClick} value="ac">
            AC
          </button>
          <button className="bg-primary equalButton" onClick={handleClick} value="=">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calci;
