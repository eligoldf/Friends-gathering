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
  const userFnameOptions = users.map(({ id, firstName, lastName }) => (
    <option key={id}>
      {firstName}
      {' '}
      {lastName}
    </option>
  ));

  const handleHide = () => {
    dispatch(hideModal('userResponseble'));
  };

  const handleSubmitForm = ({
    type, count, responsible, price,
  }, { resetForm, setSubmitting }) => {
    const data = {
      id: _.uniqueId(1),
      type,
      price,
      count,
      responsibleUser: responsible,
    };

    dispatch(userResponseSuccess(data));
    setSubmitting(false);
    resetForm();
    handleHide();
  };

  const {
    handleSubmit, handleChange, values, errors,
  } = useFormik({
    initialValues: {
      type: '',
      count: '',
      responsible: '',
      price: '',
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
                type="text"
                placeholder="What to bring"
                value={values.foodType}
                onChange={handleChange}
              />
              {errors.foodType}
              <Form.Control
                name="count"
                type="number"
                placeholder="How many?"
                value={values.count}
                onChange={handleChange}
                className="mt-2"
              />
              <Form.Control
                name="responsible"
                as="select"
                size="sm"
                custom
                placeholder="Who is bringing?"
                value={values.responsible}
                onChange={handleChange}
                className="mt-2"
              >
                {userFnameOptions}
              </Form.Control>
              <Form.Control
                name="price"
                type="number"
                placeholder="Price?"
                value={values.price}
                onChange={handleChange}
                className="mt-2"
              />
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
