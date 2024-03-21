import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./style.scss";
import { options } from "./options";

const Searchbar = () => {
  const [anchorEl, setAnchorEl] = React.useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="searchbar">
      <div className="searchbar__input-container">
        <OutlinedInput
          className="searchbar__searchbar-input"
          id="outlined-adornment-weight"
          placeholder="Seach your apps, files..."
          startAdornment={
            <InputAdornment position="start">
              <IconButton aria-label="toggle password visibility">
                <SearchIcon className="searchbar__search-icon" />
              </IconButton>
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </div>

      <div className="searchbar__info">
        <div className="searchbar__moon-icon">
          <NightlightIcon />
        </div>
        <div className="searchbar__buttons">
          <div className="searchbar__buttons-sell"> $KAI 100 </div>
          <div className="searchbar__buttons-buy"> Buy $KAI </div>
        </div>
        <div className="searchbar__profile">
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300" />

          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <KeyboardArrowDownIcon className="searchbar__down-arrow" />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: 48 * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
