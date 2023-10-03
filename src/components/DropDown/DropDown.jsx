import {
  DropDownLink,
  DropDownMenu,
  DropDownMenuContent,
} from 'components/Header/styles';

import PropTypes from 'prop-types';
import React from 'react';

/**
 * MenuItem component represents a single menu item with a dropdown.
 *
 * @param {Object} props - The component's properties.

 * @param {string} props.title - The title of the menu item.
 * @param {string[]} props.subMenu - Array of sub-menu items.
 */
export default function DropDown({ title, subMenu }) {
  return (
    <DropDownMenu key={title}>
      <div>{title}</div>
      <DropDownMenuContent className="dropdown-content">
        {subMenu.map((item) => (
          <DropDownLink key={item} href="#">
            {item}
          </DropDownLink>
        ))}
      </DropDownMenuContent>
    </DropDownMenu>
  );
}

DropDown.propTypes = {
  title: PropTypes.string,
  subMenu: PropTypes.arrayOf(PropTypes.string),
};

DropDown.defaultProps = {
  title: '',
  subMenu: [],
};
