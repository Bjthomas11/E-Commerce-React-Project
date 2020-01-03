import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, name, value, type, required }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      name={name}
      value={value}
      type={type}
      required={required}
    />
    {label ? (
      <label className={`${value.length} ? 'shrink' : "" } form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
