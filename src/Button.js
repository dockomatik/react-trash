import React from "react";

const Button = () => {
  const handleClick = () => {
    console.log("Hello");
  };
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        Sign In
      </button>
    </div>
  );
};

export default Button;
