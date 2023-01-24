import React, { useState } from "react";
import { menuItems } from "../../menuItems";
import { Nav, Bars, Close, NavMenu, NavLink, SmallScreenMenu } from "./navbar.styled";
import { FaSlash } from "react-icons/fa";

function NavBar() {
    const [displayResponsiveMenu, setDisplayResponsiveMenu] = useState(false);
    const openMenuHandler = (event) => {
        setDisplayResponsiveMenu(true);
        alert('true')
    }
    
     const closeMenuHandler = () => {
        setDisplayResponsiveMenu(false)
        alert('false')
     }
  return (
    <>
      <Nav>
       <Bars onClick={openMenuHandler} style={{display: displayResponsiveMenu ? 'none' : 'block'}} /> 
       <Close onClick={closeMenuHandler} style={{display: displayResponsiveMenu ? 'block' : 'none'}} /> 
       {
        displayResponsiveMenu && <SmallScreenMenu>vdfgdgfdhgfhgfh</SmallScreenMenu>
       }
        <NavMenu>
          {menuItems.map((menuItem, index) => {
            return (
              <>
                <NavLink to={menuItem.url} key={index} activeStyle>
                  {menuItem.title}
                </NavLink>
                <FaSlash style={{ transform: "rotate(90deg)", display: (menuItems.length-1) === index ? 'none' : 'block' }} color="red" fontSize={12} />
              </>
            );
          })}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
}
export default NavBar;
