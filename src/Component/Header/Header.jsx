import React from "react";
import "./Header.css";
import logo_icon from "../../assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src={logo_icon} alt="" />
        </div>
        <div className="SearchBox">
          <SearchIcon className="searchIcon" />
          <input type="search" placeholder="Search Restaurants cuisines..." />
        </div>
        <div className="btn">
          <div className="header-button1">
            <button>Log in </button>
          </div>
          <div className="header-button2">
            <button>Sign in </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
