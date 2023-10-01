import styled from "@emotion/styled";

const CardContainer = styled.button`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: black;
  cursor: pointer;
  display: flex;
  font-size: 0.9375rem;
  margin: 0.625rem 0.625rem 0 0.625rem;
  outline: none;
  padding: 1.125rem;
  text-align: left;
  width: 95%;
`;

const ContentContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: block;
  margin: 0.625rem 0.625rem;
  overflow: hidden;
  @media (min-width: 992px) {
    width: 19.375rem;
  }
`;

const GenresButton = styled.button`
  background-color: ${(props) => (props.isActive ? "#01b4e4" : "#fff")};
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: ${(props) => (props.isActive ? "#fff" : "#black")};
  margin: 8px 6px 0 0;
  outline: none;
  padding: 0.25rem 0.75rem;
`;
const Button = styled.button`
  background-color: #01b4e4;
  border-radius: 0.625rem;
  border: 1px;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.625rem 0.625rem;
  padding: 0.625rem;
  width: 95%;
`;

const Icon = styled.img`
  cursor: pointer;
  height: 1rem;
  padding: 1rem;
  transform: ${(props) => (props.isActive ? "rotate(90deg)" : "")};
  width: 1rem;
`;

export { GenresButton, CardContainer, ContentContainer, Button, Icon };
