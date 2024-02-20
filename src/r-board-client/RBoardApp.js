import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import WritePage from './pages/WritePage';
import UpdatePage from './pages/UpdatePage';

const RBoardApp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/list');
  }, []);

  return (
    <>
      <div></div>
      <Container>
        <Routes>
          <Route path="/list" Component={ListPage}></Route>
          <Route path="/write" Component={WritePage}></Route>
          <Route path="/detail/:id" Component={DetailPage}></Route>
          <Route path="/update/:id" Component={UpdatePage}></Route>
        </Routes>
      </Container>
    </>
  );
};

export default RBoardApp;
