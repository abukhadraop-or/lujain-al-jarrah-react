/* eslint-disable import/prefer-default-export */
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    max-width:90rem;
    margin: auto;
  }
  }
`;
export { Container };
