import {
  DropDownLink,
  DropDownMenu,
  DropDownMenuContent,
  HeaderContainer,
  Icon,
  IconContainter,
  Image,
  NavSection,
  OthersMenu,
  Sidebar,
} from 'components/Header/styles';
import React, { useState } from 'react';
import { menuData, otherMenuItems } from 'components/Header/HeaderData';

import DropDown from 'components/DropDown/DropDown';
import FeatherIcon from 'feather-icons-react';
import MenuItem from 'components/Header/MenuItem';
import TMDB from 'assets/TMDB-desktop.svg';
import TMDBicon from 'assets/TMDBicon.png';

/**
 * Header component that displays a navigation bar with menu items.
 */
export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState([]);

  /**
   * Toggle the sidebar open/close state.
   */
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
      <NavSection>
        <Image src={TMDB} alt="" className="TMDB-desktop" />
        {menuData.map((menuItem) => (
          <DropDown title={menuItem.title} subMenu={menuItem.subMenu} />
        ))}
        <DropDown title="more" subMenu={otherMenuItems} />
      </NavSection>
      <NavSection>
        <Icon>
          <FeatherIcon icon="plus" />
        </Icon>
        <Icon>
          <FeatherIcon icon="globe" />
        </Icon>
        <Icon>Login</Icon>
        <Icon>JoinTMDB</Icon>
        <Icon>
          <FeatherIcon icon="search" color="#01b4e4" />
        </Icon>
      </NavSection>
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
          <FeatherIcon icon="user" className="user-icon" />
          <DropDownMenuContent className="dropdown-content">
            <DropDownLink key="login-link" href="#">
              Login
            </DropDownLink>
            <DropDownLink key="signup-link" href="#">
              Sign Up
            </DropDownLink>
          </DropDownMenuContent>
        </DropDownMenu>
        <FeatherIcon icon="search" color="#01b4e4" />
      </IconContainter>
      <Sidebar isOpen={isSidebarOpen} className="side-bar" key="sidebar">
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
