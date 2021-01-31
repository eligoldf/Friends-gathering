import React from 'react';
import { Card } from 'react-bootstrap';
import './userResponseble.css';

const UsersResponsibilities = ({ foodResponsible, chosenUser }) => {
  const chosenUsersList = chosenUser === null ? foodResponsible
    : foodResponsible.filter((user) => user.userId === chosenUser);

  return (
    chosenUsersList.map(({
      id, responsibleUser, type, count,
    }) => (
      <Card
        bg="dark"
        key={id}
        text="light"
        style={{ width: '18rem' }}
        className="mb-2 mr-2"
      >
        <Card.Header>{responsibleUser}</Card.Header>
        <Card.Body>
          <Card.Text>
            Bringing
            {' '}
            {count}
            {' '}
            {type}
          </Card.Text>
        </Card.Body>
      </Card>
    )));
};

export default UsersResponsibilities;
