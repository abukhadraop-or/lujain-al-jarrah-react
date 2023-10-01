import styled from '@emotion/styled';

const SubCardContainer = styled.div`
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  margin: 0.625rem;
  position: relative;
  .percentage-container {
    display: none;
  }
  filter: ${(props) => (props.isMenuOpen ? 'blur(8px)' : '')};
  @media (min-width: 992px) {
    flex-direction: column;
    width: 12.5rem;
    .percentage-container {
      display: block;
    }
  }
`;

const CardImage = styled.img`
  padding-right: 0.625rem;
  width: 25%;
  @media (min-width: 992px) {
    width: 100%;
    height: 18.75rem;
    background-size: cover;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 6.125rem;
  padding: 1.625rem 0.625rem 0.75rem;
  position: relative;
  .menu-card {
    display: none;
  }
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
  font-weight: 600;
  height: 2.375rem;
  position: absolute;
  left: 5%;
  top: -15%;
  width: 2.375rem;
`;
const Icon = styled.img`
  cursor: pointer;
  height: 25.59px;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 25.59px;
  z-index: 1;
`;
const CardContainer = styled.div`
  position: relative;
  .menu-card {
    display: none;
  }
  @media (min-width: 992px) {
    .menu-card {
      display: block;
    }
  }
`;

const MenuContent = styled.div`
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: block;
  min-width: 160px;
  position: absolute;
  left: 50px;
  top: 35px;
  z-index: 1;
`;

const MenuItem = styled.a`
  color: black;
  display: flex;
  gap: 20px;
  padding: 12px 16px;
  text-decoration: none;
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
  Icon,
  MenuContent,
  MenuItem,
  SubCardContainer,
};
