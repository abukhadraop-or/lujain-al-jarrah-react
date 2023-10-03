import styled from '@emotion/styled';

const Button = styled.button`
  background-color: #01b4e4;
  border-radius: 10px;
  border: 1px;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0.625rem;
  padding: 0.625rem;
  width: 98%;
`;

const CardContainer = styled.div`
  @media (min-width: 62rem) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export { Button, CardContainer };
