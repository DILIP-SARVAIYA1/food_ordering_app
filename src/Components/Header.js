import { useState } from "react";
import { IMG_LOGO } from "../utils/constant";
const Header = () => {
  const [login, setLogin] = useState("Log In");

  return (
    <div className="header">
      <div className="logo-container">
        <a href="http://localhost:1234/">
          <img className="app-logo" src={IMG_LOGO} alt="logo" />
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="log_btn"
            onClick={() => {
              login === "Log In" ? setLogin("Log Out") : setLogin("Log In");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
