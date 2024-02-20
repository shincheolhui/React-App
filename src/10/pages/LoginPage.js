import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/login/Login';

// 3개의 components 로 이루어진 하나의 page
const LoginPage = () => {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
};

export default LoginPage;
