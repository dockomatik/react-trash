import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Services from "./Services";
import Logo from "./Logo";
import Schedule from "./Schedule";
import Input from "./Input";
import Button from "./Button";
import Card from "./Card";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="header">
      <Logo />
      <Services />
      <Schedule />
      <Input />
      <Button />
    </div>
  </React.StrictMode>
);
