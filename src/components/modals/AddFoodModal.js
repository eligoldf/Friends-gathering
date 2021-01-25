import React from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { useFormik } from 'formik';
import { Modal, Button, Form } from 'react-bootstrap';
import { hideModal } from '../../store/modals';
import { addFoodSuccess } from '../../store/grocceries';
import './modal.css';

const AddFoodModal = () => {
  const dispatch = useDispatch();

  const handleHide = () => {
    dispatch(hideModal('addFood'));
  };

  const handleSubmitForm = ({ type, price }, { resetForm, setSubmitting }) => {
    const data = {
      id: _.uniqueId(1),
      type,
      price,
    };

    dispatch(addFoodSuccess(data));
    setSubmitting(false);
    resetForm();
    handleHide();
  };

  const {
    handleSubmit, handleChange, values,
  } = useFormik({
    initialValues: {
      type: '',
      price: '',
    },
    onSubmit: handleSubmitForm,
  });

  return (
    <Modal show onHide={handleHide} animation={false}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Add Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                name="type"
                type="text"
                placeholder="What to add?"
                value={values.foodType}
                onChange={handleChange}
              />
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

export default AddFoodModal;
