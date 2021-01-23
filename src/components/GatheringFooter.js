import React from 'react';
import { Navbar } from 'react-bootstrap';

const GatheringFooter = () => {
  const year = new Date().getFullYear();
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="text-xs-center">
          <p>
            &copy; Eli Goldfeder
            {' '}
            {year}
          </p>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default GatheringFooter;
