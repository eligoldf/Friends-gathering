import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const SignupPage = () => (
  <Container className="c-signup-page text-center">
    <h1>Sign Up</h1>
    <Form>
      <Form.Group controlId="first-name">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      <Form.Group controlId="last-name">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="last Name" />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  </Container>
);

export default SignupPage;
