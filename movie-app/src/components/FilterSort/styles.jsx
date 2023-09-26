import styled from "@emotion/styled";

const CardContainer = styled.button`
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 8px;
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
const ContentName = styled.button`
  background-color: #fff;
  border: none;
  color: black;
  cursor: pointer;
  display: block;
  font-size: 0.9375rem;
  outline: none;
  padding: 1.125rem;
  text-align: left;
  width: 100%;
`;

const ContentContainer = styled.div`
background-color: #fff;
border-top: none,
border: 1px solid #ccc;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
display: block;
overflow: hidden;
margin: 10px 10px;
@media (min-width: 992px) {
 width: 19.375rem;
}
}`;

const GenresButton = styled.button`
  border: 1px solid #ccc;
  background-color: ${(props) => (props.isActive ? "#01b4e4" : "#fff")};
  color: ${(props) => (props.isActive ? "#fff" : "#black")};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 8px 6px 0 0;
  padding: 4px 12px;
  outline: none;
`;
const Button = styled.button`
  background-color: #01b4e4;
  border: 1px;
  border-radius: 0.625rem;
  color: #fff;
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.625rem 0.625rem;
  padding: 0.625rem;
  width: 95%;
`;

const Select = styled.select`
  background-color: "#fff";
  height: "30px";
  width: "100%";
`;
const Paragraph = styled.p`
  border-top: 1px solid #ccc;
  color: #ccc;
  padding: 10px;
`;
export {
  GenresButton,
  CardContainer,
  ContentContainer,
  Button,
  Select,
  ContentName,
  Paragraph,
};
