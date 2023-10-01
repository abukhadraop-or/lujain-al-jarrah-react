import {
  Button,
  Container,
  Header,
  Image,
  Item,
  ItemContainer,
  Title,
} from 'components/Footer/styles';

import FooterData from 'components/Footer/FooterData';
import React from 'react';
import TMDBFooter from 'assets/TMDBFooter.svg';

/**
 * Footer component for the web application.
 * Renders a footer section with TMDB logo and various sections with items.
 */
export default function Footer() {
  return (
    <Container>
      <div>
        <Image src={TMDBFooter} alt="footer-img" className="TMDB-desktop" />
        <Button> JOIN THE COMMUNITY</Button>
      </div>

      {FooterData.map((section) => (
        <Title key={section.title}>
          <Header>{section.title}</Header>
          <ItemContainer>
            {section.items.map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </ItemContainer>
        </Title>
      ))}
    </Container>
  );
}
