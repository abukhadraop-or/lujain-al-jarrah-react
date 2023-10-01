import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  background-color: #032541;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  position: fixed;
  width: 100%;
  z-index: 1;
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
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: none;
  min-width: 160px;
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
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-around;
    cursor: pointer;
  }
`;

const DropDownLink = styled.a`
  color: black;
  display: block;
  padding: 12px 16px;
  text-decoration: none;
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
  background-color: #032541e6;
  color: white;
  height: 100%;
  position: fixed;
  top: 80px;
  left: ${({ isOpen }) => (isOpen ? "0" : "-350px")};
  transition: left 0.3s ease-in-out;
  width: 350px;
  z-index: 1;
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
  display: block;
  font-size: 16px;
  padding: 0 0 10px;
  text-decoration: none;
`;

const MenuTitle = styled.div`
  color: white;
  font-size: 20px;
  padding-bottom: 15px;
`;

const OthersMenu = styled.a`
  color: #ffffff99;
  display: block;
  font-size: 16px;
  padding: 5px 10px;
  text-decoration: none;
`;

const MenuDesktop = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }
`;
const Icon = styled.span`
  cursor: pointer;
`;

const Image = styled.img`
  width: 154px;
  height: 20px;
  cursor: pointer;
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
  Icon,
  Image,
};
