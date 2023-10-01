import styled from '@emotion/styled';

const FilterContainer = styled.div`
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
const Content = styled.div`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  padding: 0 0.625rem;
`;
export { FilterContainer, Content };
