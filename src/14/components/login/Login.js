import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Login = () => {
  const StyledLoginDiv = styled.div`
    padding: 30px 0 30px 0;
    background-color: beige;
  `;

  const navigate = useNavigate();

  return (
    <StyledLoginDiv>
      <h1>로그인 페이지</h1>
      {/* <button onClick="history.back()">go back</button> <- 이거 동작하지 않음!! */}
      {/* React 에서 직전 url로 이동하는 방법! */}
      <button onClick={() => navigate(-1)}>go back</button>
    </StyledLoginDiv>
  );
};

export default Login;
