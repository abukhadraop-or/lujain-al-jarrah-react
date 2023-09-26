import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  background-color: #032541;
  color: white;
  width: 100%;
  position: fixed;
  @media (min-width: 992px) {
    width: 100%;
    justify-content: space-around;
    gap: 18%;
    position: static;
    .sidebar-icon,
    .TMDB-icon,
    .user-icon {
      display: none;
    }
  }
`;

const DropDownMenuContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownMenu = styled.div`
  position: relative;
  display: inline-block;
  &:hover .dropdown-content {
    display: block;
  }
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-around;
  }
`;

const DropDownLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const IconContainter = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 992px) {
    display: none;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 80px;
  left: ${({ isOpen }) => (isOpen ? "0" : "-350px")};
  width: 350px;
  height: 100%;
  background-color: #032541e6;
  color: white;
  transition: left 0.3s ease-in-out;
`;

const SidebarLink = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const SubMenu = styled.div`
  display: block;
`;

const SubMenuLink = styled.a`
  color: #cbdccb;
  padding: 0 0 10px;
  text-decoration: none;
  display: block;
  font-size: 16px;
`;

const MenuTitle = styled.div`
  color: white;
  font-size: 20px;
  padding-bottom: 15px;
`;

const OthersMenu = styled.a`
  color: #ffffff99;
  padding: 5px 10px;
  text-decoration: none;
  display: block;
  font-size: 16px;
`;

const MenuDesktop = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between; 
    gap: 15px;
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
  MenuDesktop,
};
