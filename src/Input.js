import React, { useState } from "react";

const Input = () => {
  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={handleClick} className="input"></input>
    </div>
  );
};

export default Input;
