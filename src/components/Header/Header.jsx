/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import TMDBicon from "assets/TMDBicon.png";
import TMDB from "assets/TMDB-desktop.svg";
import MenuItem from "components/Header/MenuItem";
import { menuData, otherMenuItems } from "components/Header/HeaderData";
import {
  HeaderContainer,
  DropDownMenuContent,
  DropDownMenu,
  DropDownLink,
  IconContainter,
  Sidebar,
  OthersMenu,
  MenuDesktop,
} from "components/Header/styles";
/**
 * Header component that displays a navigation bar with menu items.
 */
function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState([]);

  /**
   * Toggle the sidebar open/close state.
   */
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  /**
   * Toggle the open state of a menu item.
   *
   * @param {string} menuId - The ID of the menu item to toggle.
   */

  const toggleMenu = (menuId) => {
    if (openMenus.includes(menuId)) {
      setOpenMenus((prev) => prev.filter((id) => id !== menuId));
    } else {
      setOpenMenus((prev) => [...prev, menuId]);
    }
  };

  return (
    <HeaderContainer>
      <MenuDesktop>
        <img
          src={TMDB}
          alt=""
          width={154}
          height={20}
          className="TMDB-desktop"
        />
        {menuData.map((menuItem) => (
          <DropDownMenu key={menuItem.title}>
            <div>{menuItem.title}</div>
            <DropDownMenuContent className="dropdown-content">
              {menuItem.subMenu.map((item) => (
                <DropDownLink key={item} href="#">
                  {item}
                </DropDownLink>
              ))}
            </DropDownMenuContent>
          </DropDownMenu>
        ))}
        <DropDownMenu key="more-menu">
          <div> more </div>
          <DropDownMenuContent className="dropdown-content">
            {otherMenuItems.map((item) => (
              <DropDownLink key={item} href="#">
                {item}
              </DropDownLink>
            ))}
          </DropDownMenuContent>
        </DropDownMenu>
      </MenuDesktop>
      <MenuDesktop key="menu-desktop-2">
        <FeatherIcon icon="plus" />
        <FeatherIcon icon="globe" />
        <span>Login</span>
        <span>JoinTMDB</span>
        <FeatherIcon icon="search" style={{ color: "#01b4e4" }} />
      </MenuDesktop>
      <FeatherIcon
        icon="menu"
        onClick={toggleSidebar}
        className="sidebar-icon"
        key="menu-icon"
      />
      <img
        src={TMDBicon}
        alt=""
        width={55}
        height={40}
        className="TMDB-icon"
        key="tmdb-icon"
      />
      <IconContainter key="icon-container">
        <DropDownMenu key="user-dropdown">
          <FeatherIcon
            icon="user"
            style={{ padding: "0 10px" }}
            className="user-icon"
          />
          <DropDownMenuContent className="dropdown-content">
            <DropDownLink key="login-link" href="#">
              Login
            </DropDownLink>
            <DropDownLink key="signup-link" href="#">
              Sign Up
            </DropDownLink>
          </DropDownMenuContent>
        </DropDownMenu>
        <FeatherIcon icon="search" style={{ color: "#01b4e4" }} />
      </IconContainter>
      <Sidebar isOpen={sidebarOpen} className="side-bar" key="sidebar">
        {menuData.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            title={menuItem.title}
            subMenuItems={menuItem.subMenu}
            isOpen={openMenus.includes(menuItem.id)}
            onClick={() => toggleMenu(menuItem.id)}
          />
        ))}
        {otherMenuItems.map((item) => (
          <OthersMenu key={item}>{item}</OthersMenu>
        ))}
      </Sidebar>
    </HeaderContainer>
  );
}

export default Header;
