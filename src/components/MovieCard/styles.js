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
  filter: ${(props) => (props.isMenuOpen ? 'blur(0.5rem)' : '')};
  @media (min-width: 62rem) {
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
  @media (min-width: 62rem) {
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
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.3125rem;
  @media (min-width: 62rem) {
    display: none;
  }
`;

const PercentageContainer = styled.div`
  font-weight: 600;
  height: 2.375rem;
  left: 5%;
  position: absolute;
  top: -15%;
  width: 2.375rem;
`;

const Icon = styled.img`
  cursor: pointer;
  height: 1.5625rem;
  position: absolute;
  right: 0.625rem;
  top: 0.625rem;
  width: 1.5625rem;
  z-index: 1;
`;

const CardContainer = styled.div`
  position: relative;
  .menu-card {
    display: none;
  }
  @media (min-width: 62rem) {
    .menu-card {
      display: block;
    }
  }
`;

const MenuContent = styled.div`
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: block;
  left: 3.125rem;
  min-width: 10rem;
  position: absolute;
  top: 2.1875rem;
  z-index: 1;
`;

const MenuItem = styled.a`
  color: black;
  display: flex;
  gap: 1.25rem;
  padding: 0.75rem 1rem;
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
