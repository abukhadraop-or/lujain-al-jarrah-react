import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  align-items: center;
  background-color: #032541;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 0;
  position: fixed;
  width: 100%;
  z-index: 1;
  @media (min-width: 62rem) {
    gap: 18%;
    justify-content: space-around;
    position: static;
    width: 100%;
    .sidebar-icon,
    .TMDB-icon,
    .user-icon {
      display: none;
    }
  }
`;

const DropDownMenuContent = styled.div`
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: none;
  min-width: 10rem;
  position: absolute;
  top: 1.25rem;
  z-index: 1;
`;

const DropDownMenu = styled.div`
  display: inline-block;
  position: relative;
  &:hover .dropdown-content {
    display: block;
  }
  @media (min-width: 62rem) {
    display: flex;
    justify-content: space-around;
    cursor: pointer;
  }
`;

const DropDownLink = styled.a`
  color: black;
  display: block;
  padding: 0.75rem 1rem;
  text-decoration: none;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const IconContainter = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 62rem) {
    display: none;
  }
`;

const Sidebar = styled.div`
  background-color: #032541e6;
  color: white;
  height: 100%;
  left: ${({ isOpen }) => (isOpen ? '0' : '-21.875rem')};
  position: fixed;
  top: 5rem;
  transition: left 0.3s ease-in-out;
  width: 21.875rem;
  z-index: 1;
`;

const SidebarLink = styled.div`
  padding: 0.625rem;
  cursor: pointer;
`;

const SubMenu = styled.div`
  display: block;
`;

const SubMenuLink = styled.a`
  color: #cbdccb;
  display: block;
  font-size: 1rem;
  padding: 0 0 0.625rem;
  text-decoration: none;
`;

const MenuTitle = styled.div`
  color: white;
  font-size: 1.25rem;
  padding-bottom: 0.9375rem;
`;

const OthersMenu = styled.a`
  color: #ffffff99;
  display: block;
  font-size: 1rem;
  padding: 0.3125rem 0.625rem;
  text-decoration: none;
`;

const NavSection = styled.div`
  display: none;
  @media (min-width: 62rem) {
    display: flex;
    justify-content: space-between;
    gap: 0.9375rem;
  }
`;
const Icon = styled.span`
  cursor: pointer;
`;

const Image = styled.img`
  cursor: pointer;
  height: 1.25rem;
  width: 9.625rem;
`;

export {
  HeaderContainer,
  DropDownMenuContent,
  DropDownMenu,
  DropDownLink,
  IconContainter,
  Sidebar,
  SubMenu,
  SidebarLink,
  MenuTitle,
  SubMenuLink,
  OthersMenu,
  NavSection,
  Icon,
  Image,
};
