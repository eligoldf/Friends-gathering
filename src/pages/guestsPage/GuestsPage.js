import React from 'react';
import { useSelector } from 'react-redux';
import {
  Card, Container, Jumbotron,
} from 'react-bootstrap';
import './guests.css';

const GuestsPage = () => {
  const users = useSelector((state) => state.user.usersList);

  const usersCard = users.map(({
    id, firstName, lastName, phone, email,
  }) => (
    <Card
      bg="dark"
      key={id}
      style={{ width: '15rem' }}
      text="light"
      className="mb-2 mr-2"
    >
      <Card.Header>
        {firstName}
        {' '}
        {lastName}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {phone}
        </Card.Text>
        <Card.Text>
          <a href={`mailto:${email}`}>Email</a>
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  return (
    <Container className="text-center mt-5 guests-card">
      <h1 className="guests-title">Guests List</h1>
      <Jumbotron className="guests-jumbotron">
        {usersCard}
      </Jumbotron>
    </Container>
  );
};

export default GuestsPage;
