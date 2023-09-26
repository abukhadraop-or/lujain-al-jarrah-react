/* eslint-disable react/prop-types */
import React from "react";

import {
  SubMenu,
  SidebarLink,
  MenuTitle,
  SubMenuLink,
} from "components/Header/styles";
/**
 * MenuItem component represents a single menu item with a dropdown.
 *
 * @param {string} title - The title of the menu item.
 * @param {string[]} subMenuItems - Array of sub-menu items.
 * @param {boolean} isOpen - Whether the sub-menu is open.
 * @param {function} onClick - Function to handle menu item click.
 */
function MenuItem({ title, subMenuItems, isOpen, onClick }) {
  return (
    <SidebarLink onClick={onClick}>
      <MenuTitle>{title}</MenuTitle>
      {isOpen && (
        <SubMenu className="sub-menu">
          {subMenuItems.map((item) => (
            <SubMenuLink key={item.id} href="#">
              {item}
            </SubMenuLink>
          ))}
        </SubMenu>
      )}
    </SidebarLink>
  );
}
export default MenuItem;
