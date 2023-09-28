import styled from "@emotion/styled";

const Container = styled.div`
  background-image: radial-gradient(at 30%top, #031d33 0%, rgba(3, 37, 65) 70%);
  margin-top: 2.5rem;
  max-width: 100%;
  padding: 2.5rem 0;
  img.TMDB-desktop {
    display: none;
  }
  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
    img.TMDB-desktop {
      display: block;
      margin-left: 11.25rem;
    }
  }
`;
const Header = styled.h3`
  color: #fff;
  font-size: 1.4em;
  margin: 0 2.5rem;
`;
const ItemContainer = styled.ul`
  display: block;
  list-style-type: none;
`;
const Item = styled.li`
  color: #cbdccb;
  line-height: 1.6em;
  max-width: 16.25rem;
`;
const Button = styled.button`
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  color: #235ea7;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 1rem 2.5rem;
  padding: 0.5rem 1rem;
`;
export { Container, Header, Item, ItemContainer, Button };
