import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import users from '../../data/users.json';
import { loginSuccess } from '../../store/user';
import './style.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(3).required(),
  });

  const handleValidation = ({ email, password }, { resetForm, setSubmitting, setFieldError }) => {
    const varifiedUser = users.find(
      (user) => (user.email === email && user.password === password),
    );

    if (varifiedUser === undefined) {
      resetForm();
      setSubmitting(false);
      setFieldError('user', 'There is no such user');
    } else {
      const activeUser = varifiedUser.firstName;
      dispatch(loginSuccess(activeUser));
      setSubmitting(false);
      resetForm();
      window.location = '/#/groceries';
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
      <Form onSubmit={handleSubmit} className="form">
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
          <div className="errors">{errors.email}</div>
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
          <div className="errors">{errors.password}</div>
          <div className="errors">{errors.user}</div>
        </Form.Group>
        <Button variant="info" block type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};
export default LoginPage;
