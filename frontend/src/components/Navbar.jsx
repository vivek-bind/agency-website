import React, { useState, useEffect } from "react";
//import MainLogo from "../assets/magLogo.png";
import { Sun, Moon, User } from "lucide-react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [showmenu, setShowmenu] = useState(false);

  // Load saved theme on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Apply theme on toggle
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const navigate = useNavigate();
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo"></div>
          <div className="ham-menu">
            <button onClick={() => setShowmenu(!showmenu)}>
              <RxHamburgerMenu />
            </button>
          </div>
          <nav className={showmenu ? "menu-mobile" : "menu-desktop"}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Solutions">Solutions</a>
              </li>
              <li>
                <a href="/Clients">Clients</a>
              </li>
              <li className="dropdown">
                <a href="/About" className="dropdown-link">
                  About Us
                </a>

                <div className="dropdown-menu">
                  <a href="/About">About Us</a>
                  <a href="/Career">Careers</a>
                </div>
              </li>

              <li>
                <a href="/Contact">Contact us</a>
              </li>

              <div className="header-btn">
                <button className="user-portal">
                  <User />
                </button>

                <button className="theme-toggle" onClick={toggleTheme}>
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <button className="btn-get-started">Get started</button>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
