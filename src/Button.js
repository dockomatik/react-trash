import React, { useState, useEffect } from "react";

const Button = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setClick(false);
    });
  });

  return (
    <nav className="sign-in">
      <button className="btn" onClick={handleClick}>
        Sign In
      </button>
      <div className={click ? "drop-down-sign-in-active" : "drop-down-sign-in"}>
        <input className="input-user-password"></input>
        <br />
        <input className="input-user-password"></input>
        <button className="inner-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Button;
