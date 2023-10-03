import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 62rem) {
    display: flex;
    flex-direction: row;
    margin: auto;
    max-width: 90rem;
  }
`;

export default Container;
