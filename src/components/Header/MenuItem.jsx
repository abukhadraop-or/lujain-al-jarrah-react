import {
  MenuTitle,
  SidebarLink,
  SubMenu,
  SubMenuLink,
} from 'components/Header/styles';

import PropTypes from 'prop-types';
import React from 'react';

/**
 * MenuItem component represents a single menu item with a dropdown.
 *
 * @param {Object} props - The component's properties.

 * @param {string} props.title - The title of the menu item.
 * @param {string[]} props.subMenuItems - Array of sub-menu items.
 * @param {boolean} props.isOpen - Whether the sub-menu is open.
 * @param {function} props.onClick - Function to handle menu item click.
 */
export default function MenuItem({ title, subMenuItems, isOpen, onClick }) {
  return (
    <SidebarLink onClick={onClick}>
      <MenuTitle>{title}</MenuTitle>
      {isOpen && (
        <SubMenu className="sub-menu" key={`menu-item-${title}`}>
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
