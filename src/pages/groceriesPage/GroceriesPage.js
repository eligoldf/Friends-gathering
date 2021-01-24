import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import './groceries.css';
import UsersResponsibilities from './UserResponsibilities';
import FoodPriceCard from './FoodPriceCard';
import TotalSumCard from './TotalSum';

const GroceriesPage = () => {
  const foodList = useSelector((state) => state.grocceries.foodList);
  const userList = useSelector((state) => state.user.usersList);
  const usersLength = userList.length;

  const foodPrice = foodList
    .map(({
      id, type, count, price,
    }) => ({ id, type, cost: parseInt(count, 10) * parseFloat(price) }))
    .filter((totalCost) => totalCost.cost !== 0);

  const sumToPay = foodPrice.reduce((prev, next) => prev + next.cost, 0);
  const sumPerUser = sumToPay / usersLength;

  return (
    <Container className="text-center mt-5 c-grocceries">
      <h1>Groceries List</h1>
      <Container className="foodlist">
        <h3>Responsibilities</h3>
        <Container className="food-cards">
          <UsersResponsibilities foodList={foodList} />
        </Container>
        <h3>How much money?</h3>
        <Container className="food-cards">
          <FoodPriceCard foodPrice={foodPrice} />
        </Container>
        <h3>Total Sum</h3>
        <Container className="food-cards">
          <TotalSumCard sumToPay={sumToPay} sumPerUser={sumPerUser} />
        </Container>
      </Container>
    </Container>
  );
};

export default GroceriesPage;
