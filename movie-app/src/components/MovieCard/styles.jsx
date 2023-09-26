import styled from "@emotion/styled";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  margin: 0.625rem;
  @media (min-width: 992px) {
    flex-direction: column;
    width: 12.5rem;
  }
`;

const CardImage = styled.img`
  padding-right: 0.625rem;
  width: 25%;
  @media (min-width: 992px) {
    width: 100%;
    background-size: cover;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.3125rem;
  @media (min-width: 992px) {
    display: none;
  }
`;
export {
  CardContainer,
  CardContent,
  CardImage,
  MovieDescription,
  MovieDate,
  MovieTitle,
};
