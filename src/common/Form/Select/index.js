import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.scss";

const SelectInput = ({ label, name, value, handleChange, options }) => {
  return (
    <div className="selectInput">
      <p className="selectInput__label"> {label} </p>
      <FormControl fullWidth>
        <Select
          name={name}
          value={value}
          onChange={handleChange}
          displayEmpty
          className="selectInput__input"
          inputProps={{ "aria-label": "Without label" }}
        >
          {options.map(({ label, value }) => (
            <MenuItem value={value}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectInput;
