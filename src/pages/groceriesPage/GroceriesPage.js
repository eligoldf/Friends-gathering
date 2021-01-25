import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import UsersResponsibilities from '../../components/UserResponsibilities';
import FoodPriceCard from '../../components/FoodPriceCard';
import TotalSumCard from '../../components/TotalSum';
import { showModal } from '../../store/modals';
// import GroceriesModal from '../../components/modals/UserResponsebleModal';
import getModal from '../../components/modals';
import './groceries.css';

const GroceriesPage = () => {
  const dispatch = useDispatch();
  const { modalName, status } = useSelector((state) => state.modal);
  const foodList = useSelector((state) => state.grocceries.foodResponsebilities);
  const userList = useSelector((state) => state.user.usersList);
  // const activeUser = useSelector((state) => state.user.activeUser);
  const usersLength = userList.length;

  const renderModal = (name) => {
    if (!name) return null;

    const Modal = getModal(name);
    return <Modal />;
  };

  const handleUserResposeble = () => {
    dispatch(showModal('userResponseble'));
  };

  const handleAddGroceries = () => {
    dispatch(showModal('addFood'));
  };

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
      <Button type="button" size="sm" variant="outline-light" onClick={handleUserResposeble}>
        Add responsibility
      </Button>
      <Button type="button" size="sm" variant="outline-light" className="ml-3" onClick={handleAddGroceries}>
        Add groceries
      </Button>
      { status === 'show' && renderModal(modalName) }
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
