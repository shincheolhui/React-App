import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            홈
          </Link>
          <Link to="/saveForm" className="navbar-link">
            글쓰기
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
