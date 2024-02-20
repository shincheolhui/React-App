import React from 'react';
import './App032.css'; // <- 방법2: 외부 파일에 작성, 외부에 css 파일을 import 한다.
/**
 * 리액트에서 스타일링 하기
 * 방법1: 내부에 적는 방법 -> 비추~~~
 * 방법2: 외부 파일에 작성
 * 방법3: 라이브러리 사용 (ex: 부트스트랩, component-styled) -> 나중에 하신다고 하심.
 */
const App032 = () => {
  // 방법1: 내부에 적는 방법
  const mystyle = {
    color: 'red',
  };
  return (
    <>
      <div style={mystyle}>안녕</div>
      <div style={{ color: 'blue' }}>안녕2</div>
      <hr/>
      'className' = JSX 에서 class 를 지정하는 구문
      <div className='box-style'>방법2: 외부 파일에 작성</div>
    </>
  );
};

export default App032;
