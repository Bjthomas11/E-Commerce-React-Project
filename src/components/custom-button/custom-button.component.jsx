import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, type, name, value }) => (
  <button className="custom-button" name={name} type={type} value={value}>
    {children}
  </button>
);

export default CustomButton;
