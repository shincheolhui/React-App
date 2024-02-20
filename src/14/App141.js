import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';


const App141 = () => {
  return (
    <>
      {/* <h3>헤더인것으로 추정..</h3> */}
      {/* <hr /> */}
      <Header />
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        {/* Dynamic segment 사용 -> props 로 넘겨진다 useParams 로 받을수있다. LoginPage에 있다! */}
        <Route path="/login/:id" Component={LoginPage} />
      </Routes>

      {/* <a>, 이동은 하지만 동일한 화면, 아이고 의미없다.. */}
      {/* <a href='www.naver.com'>네이버 링크</a> */}
      <hr />
      <h3>푸터인것으로 추정..</h3>
    </>
  );
};

export default App141;
