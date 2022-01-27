import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMoonClearLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import "./Navbar.css";
import useDarkMode from "../../hooks/useDarkMode";

function Navbar() {
  let navigate = useNavigate();
  const [colorTheme, setTheme] = useDarkMode();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isActive, setActive] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleNavbar = () => {
    if (screenWidth < 768) {
      setActive(!isActive);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    setTheme(colorTheme);
  };

  return (
    <>
      {/* bg */}
      <div className="bg">
        {/* content */}
        <div className="content">
          {/* logo */}
          <div className="logo">
            <div
              onClick={() => {
                navigate("/home");
              }}
            >
              selimmh
            </div>
          </div>
          {/* navigation */}
          <div className={`navigation ${isActive ? "isMenu" : null}`}>
            {/* items */}
            <div className="list" onClick={toggleNavbar}>
              <div
                className="item"
                onClick={() => {
                  navigate("/home");
                }}
              >
                Home
              </div>
              <div
                className="item"
                onClick={() => {
                  navigate("/projects");
                }}
              >
                Projects
              </div>
              <div
                className="item"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact
              </div>
              <div className="toggleDark">
                {isDarkMode ? (
                  <FiSun onClick={toggleDarkMode} className=" text-gray-100" />
                ) : (
                  <RiMoonClearLine
                    onClick={toggleDarkMode}
                    className=" text-gray-800"
                  />
                )}
              </div>
            </div>
          </div>
          {/* menu */}
          <div className="toggle">
            {isActive ? (
              <AiOutlineClose onClick={toggleNavbar} />
            ) : (
              <BiMenuAltRight
                className="text-gray-800 dark:text-gray-100"
                onClick={toggleNavbar}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
