import React from 'react';
import { styled } from 'styled-components';

// styled component 변수명 작명시
// 가급적 '규칙'을 가지고 다른 component 와는 '구분될 수 있게' 한다.
// ex) Styled***
const StyledLoginDiv = styled.div`
  padding: 30px 0 30px 0; /* css 주석 ok! */
  background-color: beige;
`;

const Login = () => {
  return (
    <StyledLoginDiv>
      <h1>로그인페이지입니다.</h1>
    </StyledLoginDiv>
  );
};

export default Login;
