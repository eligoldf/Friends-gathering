import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import _ from 'lodash';
import { addUserSuccess } from '../store/user';

const SignupPage = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    firstName: Yup.string().min(2).max(20).required(),
    lastName: Yup.string().min(2).max(30).required(),
    phone: Yup.string().min(9).max(15).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(3).required(),
  });

  const handleSignUp = ({
    firstName, lastName, phone, email, password,
  }, { resetForm, setSubmitting }) => {
    const data = {
      id: _.uniqueId(),
      firstName,
      lastName,
      email,
      isAdmin: false,
      password,
      phone,
    };

    dispatch(addUserSuccess(data));
    setSubmitting(false);
    resetForm();
  };

  const {
    handleSubmit, handleChange, values, errors,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
    },
    onSubmit: handleSignUp,
    validationSchema,
  });

  return (
    <Container className="c-signup-page text-center">
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="first-name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={values.firstName}
            onChange={handleChange}
            isInvalid={!!errors.firstName}
          />
          {errors.firstName}
        </Form.Group>
        <Form.Group controlId="last-name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={values.lastName}
            onChange={handleChange}
            isInvalid={!!errors.lastName}
          />
          {errors.lastName}
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={values.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          {errors.phone}
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          {errors.email}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
          />
          {errors.password}
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};
export default SignupPage;
