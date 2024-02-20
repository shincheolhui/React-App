import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';
import DetailPage from './pages/DetailPage';
import UpdatePage from './pages/UpdatePage';

const RSurveyApp = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/list');
  // }, []);

  return (
    <>
      <Container>
        <Routes>
          <Route path="/" Component={ListPage}></Route>
          <Route path="/list" Component={ListPage}></Route>
          <Route path="/write" Component={WritePage}></Route>
          <Route path="/detail/:id" Component={DetailPage}></Route>
          <Route path="/update/:id" Component={UpdatePage}></Route>
        </Routes>
      </Container>
    </>
  );
};

export default RSurveyApp;
