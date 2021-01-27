import React from 'react';
// import _ from 'lodash';
import { Card } from 'react-bootstrap';
import './userResponseble.css';

const UsersResponsibilities = ({ foodList }) => (
  foodList.filter(({ responsibleUser }) => responsibleUser !== null)
    .map(({
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
/*
  console.log(foodList);
  const userResponsebleObj = _.groupBy(foodList, 'responsibleUser');
  console.log(userResponsebleObj);
  const listItem = (userName) => foodList[userName]
    .map(({ products }) => (
      <ListGroup variant="flash" bg="dark" key={products.id}>
        <ListGroup.Item>
          {products.type}
          {' '}
          {products.count}
        </ListGroup.Item>
      </ListGroup>
    ));

  return foodList.filter(({ responsibleUser }) => responsibleUser !== null)
    .map(({
      id, responsibleUser,
    }) => (
      <Card
        bg="dark"
        key={id}
        text="light"
        style={{ width: '18rem' }}
        className="mb-2 mr-2"
      >
        <Card.Header>{responsibleUser}</Card.Header>
        {listItem(responsibleUser)}
      </Card>
    ));
*/

export default UsersResponsibilities;
