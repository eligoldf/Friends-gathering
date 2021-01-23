import React from 'react';
import { Navbar } from 'react-bootstrap';

const GatheringFooter = () => {
  const year = new Date().getFullYear();
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom" style={{ height: '40px' }}>
      <Navbar.Collapse>
        <Navbar.Text style={{ marginTop: '15px' }}>
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
