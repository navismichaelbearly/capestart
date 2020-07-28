import React from "react";
import "./style.css";

const Button = ({...props}) => (
  <button className="button-container" {...props} />
);

export default Button;
