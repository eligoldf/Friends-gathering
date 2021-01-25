import React from 'react';
import { Card } from 'react-bootstrap';

const FoodPriceCard = ({ foodPrice }) => (
  foodPrice.map(({ id, type, cost }) => (
    <Card
      bg="dark"
      key={id}
      text="light"
      style={{ width: '18rem' }}
      className="mb-2 mr-2"
    >
      <Card.Header>{type}</Card.Header>
      <Card.Body>
        <Card.Title>
          Total price
          {' '}
          {cost}
          {' '}
          &#8362;
        </Card.Title>
      </Card.Body>
    </Card>
  )));

export default FoodPriceCard;
