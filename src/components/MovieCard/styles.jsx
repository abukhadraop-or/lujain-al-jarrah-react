import styled from "@emotion/styled";

const CardContainer = styled.div`
  position: relative;
  margin: 0.625rem;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 8px;
  .percentage-container {
    display: none;
  }
  filter: ${(props) => (props.isMenuOpen ? "blur(8px)" : "")};
  @media (min-width: 992px) {
    flex-direction: column;
    width: 12.5rem;
    .percentage-container {
      display: block;
    }
  }
`;

const CardImage = styled.img`
  width: 25%;
  padding-right: 0.625rem;
  @media (min-width: 992px) {
    width: 100%;
    height: 75%;
    background-size: cover;
  }
`;

const CardContent = styled.div`
  position: relative;
  padding: 1.625rem 0.625rem 0.75rem;
  height: 6.125rem;
  flex-direction: column;
  display: flex;
`;

const MovieTitle = styled.div`
  font-weight: bold;
  margin: 0.9375rem 0 0.3125rem 0;
  &:hover {
    color: #01b4e4;
    cursor: -webkit-grab;
    cursor: grab;
  }
`;

const MovieDate = styled.div`
  color: #999999;
  margin-bottom: 1.25rem;
`;
const MovieDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.3125rem;
  @media (min-width: 992px) {
    display: none;
  }
`;
const PercentageContainer = styled.div`
  width: 2.375rem;
  top: -15%;
  position: absolute;
  left: 5%;
  height: 2.375rem;
  font-weight: 600;
`;
const ImageCard = styled.img`
  width: 25.59px;
  right: 0;
  position: absolute;
  height: 25.59px;
`;
const MenuContainer = styled.div`
  position: relative;
`;

const MenuContent = styled.div`
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  left: 50px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 1.25rem;
`;

const MenuItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  gap: 20px;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export {
  CardContainer,
  CardContent,
  CardImage,
  MovieDescription,
  MovieDate,
  MovieTitle,
  PercentageContainer,
  ImageCard,
  MenuContent,
  MenuItem,
  MenuContainer,
};
