import styled from "@emotion/styled";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  margin: 0.625rem;
  .percentage-container {
    display: none;
  }
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
    height: 75%;
    background-size: cover;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 6.125rem;
  position: relative;
  padding: 1.625rem 0.625rem 0.75rem;
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
  left: 5%;
  position: absolute;
  top: -15%;
  width: 2.375rem;
`;
export {
  CardContainer,
  CardContent,
  CardImage,
  MovieDescription,
  MovieDate,
  MovieTitle,
  PercentageContainer,
};
