import React, { useEffect, useState } from "react";
import { menuItems } from "../../menuItems";
import {
  Nav,
  Bars,
  Close,
  NavMenu,
  NavLink,
  SmallScreenMenu,
  NavBtn,
  NavBtnLink,
} from "./navbar.styled";
import { FaSlash } from "react-icons/fa";
import useWindowSize from "../../hooks/useWindowResize";

function NavBar() {
  const windowSize = useWindowSize();
  console.log("window size", windowSize);
  const [mobileView, setMobileView] = useState(false);
  const [displayResponsiveMenu, setDisplayResponsiveMenu] = useState(false);
  const openMenuHandler = (event) => {
    setDisplayResponsiveMenu(true);
  };

  const closeMenuHandler = () => {
    setDisplayResponsiveMenu(false);
  };

  useEffect(() => {
    if (windowSize.width > 768) setMobileView(false);
    else setMobileView(true);
  }, [windowSize]);
  return (
    <>
      <Nav className="fixed-top">
        {mobileView && (
          <Bars
            onClick={openMenuHandler}
            style={{ display: displayResponsiveMenu ? "none" : "block" }}
          />
        )}
        {mobileView && (
          <Close
            onClick={closeMenuHandler}
            style={{ display: displayResponsiveMenu ? "block" : "none" }}
          />
        )}
        {displayResponsiveMenu && (
          <SmallScreenMenu>
            <ul>
              {menuItems.map((menuItem, index) => {
                return <li key={index}>{menuItem.title}</li>;
              })}
             <li style={{color:'red',fontSize:'20px'}}>
             Get Your Ticket
             </li>
            </ul>
            
          </SmallScreenMenu>
        )}
        <NavMenu>
          {menuItems.map((menuItem, index) => {
            return (
              <>
                <NavLink to={menuItem.url} key={index} activeStyle>
                  {menuItem.title}
                </NavLink>
                <FaSlash
                  style={{
                    transform: "rotate(90deg)",
                    display: menuItems.length - 1 === index ? "none" : "block",
                  }}
                  color="red"
                  fontSize={12}
                />
              </>
            );
          })}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="#">Get Your Ticket</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
export default NavBar;
