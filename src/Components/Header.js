import { useState } from "react";
import { IMG_LOGO } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Log In");

  return (
    <div className="flex items-center justify-between shadow-lg bg-gray-100">
      <div className="logo-container">
        <a href="http://localhost:1234/">
          <img className="w-20" src={IMG_LOGO} alt="logo" />
        </a>
      </div>
      <div className="nav-items">
        <ul className="flex ">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link>Cart</Link>
          </li>
          <button
            className="px-6"
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
