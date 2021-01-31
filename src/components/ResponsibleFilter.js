import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { userResponseFilterSuccess } from '../store/user';

const ResponsibleFilter = ({ userList }) => {
  const dispatch = useDispatch();

  const userNameOptions = userList.map(({ id, firstName, lastName }) => (
    <option value={id} key={id}>
      {firstName}
      {' '}
      {lastName}
    </option>
  ));

  const handleSubmitForm = ({ id }, { resetForm, setSubmitting }) => {
    dispatch(userResponseFilterSuccess(Number(id)));
    setSubmitting(false);
    resetForm();
  };

  const {
    handleSubmit, handleChange, values,
  } = useFormik({
    initialValues: {
      id: '',
    },
    onSubmit: handleSubmitForm,
  });

  return (
    <Form className="mb-4">
      <Form.Control
        name="id"
        as="select"
        size="sm"
        custom
        placeholder="Choose responsible user"
        values={values.id}
        onChange={handleChange}
        className="mt-2"
        style={{ width: '200px' }}
      >
        {userNameOptions}
      </Form.Control>
      <Button size="sm" variant="primary" onClick={handleSubmit} className="ml-2 mt-2">
        Choose User
      </Button>
    </Form>
  );
};

export default ResponsibleFilter;
