import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { useFormik } from 'formik';
import { Modal, Button, Form } from 'react-bootstrap';
import { hideModal } from '../../store/modals';
import { userResponseSuccess } from '../../store/grocceries';
import './modal.css';

const UserResponsebleModal = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.usersList);
  const foodList = useSelector((state) => state.grocceries.foodList);

  const userNameOptions = users.map(({ id, firstName, lastName }) => (
    <option value={id} key={id}>
      {firstName}
      {' '}
      {lastName}
    </option>
  ));

  const foodOptions = foodList.map(({ id, type, price }) => (
    <option key={id}>
      {type}
      {' '}
      {price}
      {' '}
      &#8362;
    </option>
  ));

  const handleHide = () => {
    dispatch(hideModal('userResponseble'));
  };

  const handleSubmitForm = ({
    type, count, userId,
  }, { resetForm, setSubmitting }) => {
    const splitedFoodType = type.split(' ');
    const userIdNum = Number(userId);
    const responsible = users.find((user) => user.id === userIdNum);
    const responsibleUser = `${responsible.firstName} ${responsible.lastName}`;

    const data = {
      id: _.uniqueId(1),
      userId: userIdNum,
      type: splitedFoodType[0],
      price: Number(splitedFoodType[1]),
      count,
      responsibleUser,
    };

    dispatch(userResponseSuccess(data));
    setSubmitting(false);
    resetForm();
    handleHide();
  };

  const {
    handleSubmit, handleChange, values,
  } = useFormik({
    initialValues: {
      userId: '',
      type: '',
      count: '',
    },
    onSubmit: handleSubmitForm,
  });

  return (
    <Modal show onHide={handleHide} animation={false}>
      <Modal.Dialog className="m-dialog">
        <Modal.Header>
          <Modal.Title>Choose Responsebilities</Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                name="type"
                as="select"
                size="sm"
                custom
                placeholder="What to bring?"
                value={values.type}
                onChange={handleChange}
                className="mt-2"
              >
                {foodOptions}
              </Form.Control>
              <Form.Control
                name="count"
                type="number"
                placeholder="How many?"
                value={values.count}
                onChange={handleChange}
                className="mt-2"
              />
              <Form.Control
                name="userId"
                as="select"
                size="sm"
                custom
                placeholder="Who is bringing?"
                values={values.userId}
                onChange={handleChange}
                className="mt-2"
              >
                {userNameOptions}
              </Form.Control>
            </Form.Group>
          </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleHide} className="mr-2">Close</Button>
            <Button type="submit" variant="primary" onClick={handleSubmit}>Save</Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default UserResponsebleModal;
