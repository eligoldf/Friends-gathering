import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './style.css';

const HomePage = () => (
  <Jumbotron className="homepage-jumbotron">
    <Container className="text-center">
      <h1>Welcome to Friends Dinner Gathering</h1>
      <p>
        Application to connect between friends before they gather to dinner.
      </p>
    </Container>
  </Jumbotron>
);

export default HomePage;
