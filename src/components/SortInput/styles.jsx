import styled from "@emotion/styled";

const Icon = styled.img`
  width: 16px;
  height: 16px;
  padding: 16px;
  transform: ${(props) => (props.isActive ? "rotate(90deg)" : "")};
`;

const SortContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: block;
  overflow: hidden;
  margin: 5.3125rem 0.625rem 0 0.625rem;
  @media (min-width: 992px) {
    width: 19.375rem;
    margin: 0.625rem 0.625rem;
  }
`;
export { Icon, SortContainer };
