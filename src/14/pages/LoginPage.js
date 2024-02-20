import React from 'react';
import Login from '../components/login/Login';
import { useParams } from 'react-router-dom';

const LoginPage = () => {
    let params = useParams(); // Dynamic segment 경로상의 값들을 받아온다.

    console.log(params.id);
    
    return (
        <Login/>
    );
};

export default LoginPage;