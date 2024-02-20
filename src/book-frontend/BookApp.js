import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/book/Home';
import Header from './components/Header';
import SaveForm from './pages/book/SaveForm';
import Detail from './pages/book/Detail';
import UpdateForm from './pages/book/UpdateForm';

const BookApp = () => {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" Component={Home}></Route> {/* 목록 */}
          <Route path="/saveForm" Component={SaveForm}></Route> {/* 글 작성 */}
          <Route path="/book/:id" Component={Detail}></Route> {/* 글 상세 */}
          <Route path="/updateForm/:id" Component={UpdateForm}></Route> {/* 글 수정 */}
        </Routes>
      </Container>
    </div>
  );
};

export default BookApp;
