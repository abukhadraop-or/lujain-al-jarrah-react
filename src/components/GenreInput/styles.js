import styled from '@emotion/styled';

const GenresButton = styled.button`
  background-color: ${(props) => (props.isActive ? '#01b4e4' : '#fff')};
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: ${(props) => (props.isActive ? '#fff' : '#black')};
  margin: 0.5rem 0.375rem 0 0;
  outline: none;
  padding: 0.25rem 0.75rem;
`;

export default GenresButton;
