import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
`;

export const NavLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #808080;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 20;
  }
`;

export const Close = styled(FaTimes)`
display: none;
color: #fff;

@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 20;
}
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 25px;
  background: #fff;
  padding: 10px 22px;
  color: red;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #808080;
    color: #fff;
  }
`;

export const SmallScreenMenu = styled.div`
 background-color: rgba(0,0,0, 0.7);
 width: 100%;
 height: 400px;
 padding:30px;

 @media screen and (min-width: 768px) {
    display: none;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li{
      margin-bottom: 20px;
      padding: 5px 20px;
      border-bottom: solid rgba(256,256,256, 0.3) 1px;
    }
  }
`