import styled from '@emotion/styled';

const SortContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: block;
  margin: 5.3125rem 0.625rem 0 0.625rem;
  overflow: hidden;
  @media (min-width: 992px) {
    width: 19.375rem;
    margin: 0.625rem 0.625rem;
  }
`;
const Content = styled.div`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`;
export { SortContainer, Content };
