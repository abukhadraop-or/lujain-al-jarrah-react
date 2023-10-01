import {
  MenuTitle,
  SidebarLink,
  SubMenu,
  SubMenuLink,
} from 'components/Header/styles';

import PropTypes from 'prop-types';
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';

/**
 * MenuItem component represents a single menu item with a dropdown.
 *
 * @param {string} title - The title of the menu item.
 * @param {string[]} subMenuItems - Array of sub-menu items.
 * @param {boolean} isOpen - Whether the sub-menu is open.
 * @param {function} onClick - Function to handle menu item click.
 */
export default function MenuItem({ title, subMenuItems, isOpen, onClick }) {
  return (
    <SidebarLink onClick={onClick}>
      <MenuTitle>{title}</MenuTitle>
      {isOpen && (
        <SubMenu className="sub-menu" key={`menu-item-${title}`}>
          {subMenuItems.map((item, index) => (
            <SubMenuLink key={index} href="#">
              {item}
            </SubMenuLink>
          ))}
        </SubMenu>
      )}
    </SidebarLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string,
  subMenuItems: PropTypes.arrayOf(PropTypes.string),
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

MenuItem.defaultProps = {
  title: '',
  subMenuItems: [],
  isOpen: [],
  onClick: () => {},
};
