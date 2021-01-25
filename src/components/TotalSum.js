import React from 'react';
import { Card } from 'react-bootstrap';

const TotalSumCard = ({ sumToPay, sumPerUser }) => (
  <Card
    bg="dark"
    text="light"
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>Money in total</Card.Header>
    <Card.Body>
      <Card.Title>
        Total price
        {' '}
        {sumToPay}
        {' '}
        &#8362;
      </Card.Title>
      <Card.Text>
        Each one will pay
        {' '}
        {sumPerUser}
        {' '}
        &#8362;
      </Card.Text>
    </Card.Body>
  </Card>
);

export default TotalSumCard;
