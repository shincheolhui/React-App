import React from 'react';
import styled from 'styled-components';
import { Title2 } from './components/MyCSS';

/*
styled component 란

Javascript 파일 내에서 CSS를 사용할 수 있게 해주는 대표적인 CSS-in-JS 라이브러리로 
React 프레임워크를 주요 대상으로 한 라이브러리.
styled-components 라이브러리를 사용하여 리액트 컴포넌트를 쉽게 만들 수 있으며 
Javascript 코드 내에서 일반 CSS로 구성 요소의 스타일을 지정할 수 있다.

App 파일에 작성 가능!  디자인을 동적으로 작성 가능!.  CSS 구문을 그대로 사용 가능!

https://styled-components.com/

설치 : npm install styled-components
*/

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const t = {
  fontSize: '1.5em',
  textAlign: 'center',
  color: 'palevioletred',
};

const App102 = () => {
  return (
    <>
      <Title>안녕1</Title>
      <div style={t}>안녕2</div>
      <Title2>안녕3</Title2>
    </>
  );
};

export default App102;
