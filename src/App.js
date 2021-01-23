import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/Homepage';
import GroceriesPage from './pages/GroceriesPage';
import GuestsPage from './pages/GuestsPage';
import AddressPage from './pages/AdressPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import GatheringNavbar from './components/GatheringNavbar';
import GatheringFooter from './components/GatheringFooter';

const App = () => (
  <HashRouter>
    <Route exact path={['/', '/groceries', '/guests', '/adress']}>
      <GatheringNavbar />
    </Route>
    <Container>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/groceries">
          <GroceriesPage />
        </Route>
        <Route exact path="/guests">
          <GuestsPage />
        </Route>
        <Route exact path="/adress">
          <AddressPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
      </Switch>
    </Container>
    <GatheringFooter />
  </HashRouter>
);

export default App;
