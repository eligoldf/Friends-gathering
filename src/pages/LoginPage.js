import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import users from '../data/users.json';
import { loginSuccess } from '../store/user';

const LoginPage = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(3).required(),
  });

  const handleValidation = ({ email, password }, { resetForm, setSubmitting, setFieldError }) => {
    const isActiveUser = users.find((user) => user.email === email && user.password === password);

    if (isActiveUser === undefined) {
      resetForm();
      setSubmitting(false);
      setFieldError('user', 'There is no such user');
    } else {
      const activeUser = isActiveUser.firstName;
      dispatch(loginSuccess(activeUser));
      setSubmitting(false);
      resetForm();
    }
  };

  const {
    handleSubmit, handleChange, values, errors,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleValidation,
    validationSchema,
  });

  return (
    <Container className="c-login-page text-center">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupEmail">
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
        <Form.Group controlId="formGroupPassword">
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
          {errors.user}
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};
export default LoginPage;
