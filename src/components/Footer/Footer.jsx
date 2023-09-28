import React from "react";
import {
  Container,
  Header,
  Item,
  ItemContainer,
  Button,
} from "components/Footer/styles";
import FooterData from "components/Footer/FooterData";
import TMDBFooter from "assets/TMDBFooter.svg";

/**
 * Footer component for the web application.
 * Renders a footer section with TMDB logo and various sections with items.
 */
export default function Footer() {
  return (
    <Container>
      <div>
        <img
          src={TMDBFooter}
          alt="footer-img"
          width={130}
          height={94}
          className="TMDB-desktop"
        />
        <Button> JOIN THE COMMUNITY</Button>
      </div>

      {FooterData.map((section) => (
        <div key={section.title}>
          <Header>{section.title}</Header>
          <ItemContainer>
            {section.items.map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </ItemContainer>
        </div>
      ))}
    </Container>
  );
}
