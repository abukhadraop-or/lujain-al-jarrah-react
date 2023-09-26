import styled from "@emotion/styled";

const Button = styled.button`
  background-color: #01b4e4;
  border: 1px;
  border-radius: 10px;
  color: #fff;
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  width: 95%;
  margin: 0 0.625rem;
  padding: 0.625rem;
`;

const CardContainer = styled.div`
  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export { Button, CardContainer };
