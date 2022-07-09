import React, { useState } from "react";
import Data from "./MockData.json";

const Input = () => {
  const [searchLetter, setSearchLetter] = useState("");

  return (
    <div className="input-div">
      <input
        type="text"
        placeholder="Search..."
        className="input"
        onChange={(event) => {
          setSearchLetter(event.target.value);
        }}
      />
      <div className="drop-input-active">
        {Data.filter((val) => {
          if (searchLetter == "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchLetter.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="input-drop-list" key={key}>
              {val.first_name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Input;
