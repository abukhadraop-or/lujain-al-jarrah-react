import styled from '@emotion/styled';

const Text = styled.p`
  border-top: 1px solid #ccc;
  color: #ccc;
  padding: 10px;
`;
const SelectStyle = styled.select`
  background-color: #ced3db;
  border-radius: 0.25rem;
  border: 0;
  font-size: 0.9em;
  margin: 0.625rem 0;
  padding: 0.375rem 0.75rem;
  width: 100%;
`;
const Title = styled.div`
  padding: 1rem;
`;
const Label = styled.button`
  background-color: #fff;
  border: none;
  color: black;
  cursor: pointer;
  display: flex;
  font-size: 1.0625rem;
  font-weight: bolder;
  justify-content: space-between;
  outline: none;
  text-align: left;
  width: 100%;
`;
const Icon = styled.img`
  cursor: pointer;
  height: 1rem;
  padding: 1rem;
  transform: ${(props) => (props.isActive ? 'rotate(90deg)' : '')};
  width: 1rem;
`;
export { Text, SelectStyle, Title, Label, Icon };
