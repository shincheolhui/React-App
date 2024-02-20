import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './App';
import reportWebVitals from './reportWebVitals';
// import App02 from './02/App02'; // src폴더 안에 02폴더 안에 App02파일 안에 있는 App02를 import 한 것이다. 경로를 따라가서 확인해보자!
// import App021 from './02/App021'; // import 한 것은 아래에 <App021/> 로 사용할 수 있다.ㅋㅋㅋ 좋당
// import App031 from './03/App031'; // JSX 기초
// import App032 from './03/App032'; // CSS 적용하기
// import App041 from './04/App041'; // component
// import App042 from './04/App042'; // 데이터(들) 렌더링
// import App061 from './06/App061'; // useState() 상태값 관리
// import App062 from './06/App062'; // useState() 배열 상태값 다루기
// import App071 from './07/App071'; // useEffect() React Hook that lets you synchronize a component with an external system.
// import App081 from './08/App081'; // useMemo() 연산된 값을 기억, React Hook that lets you cache the result of a calculation between re-renders.
// import App091 from './09/App091'; // useRef() 주로 dom 을 변경할때 사용
// import App101 from './10/App101'; // style 적용하는 방법1, 2
// import App102 from './10/App102'; // styled component 로 style 적용하기
// import App103 from './10/App103'; // props 외
// import App141 from './14/App141'; // react-router-dom, react-bootstrap
// import App151 from './151/App151'; // 간단 게시판(목록/작성/삭제 기능, 내부데이터만 사용) 자식이 다른 자식의 데이터 조작은 불가
// import App152 from './152/App152'; // 실습! 간단 게시판
// import App153 from './153/App153'; // 리뷰! 강사님께서 App152를 리뷰해주심.
// import App181 from './181/App181'; // Redux(React의 Flux패턴 구현체)
// import App182 from './182/App182'; // store(action, state, reducer) 작성
import BookApp from './book-frontend/BookApp'; // react 와 jpa로 만든 간단한 book게시판 강의
// import RBoardApp from './r-board-client/RBoardApp'; // react 와 jpa로 실습, Bt16 게시판을 remake
// import RSurveyApp from './r-survey-client/RSurveyApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    {/* <App />
    <App02/>
    <App021/> */}
    {/* <App031/> */}
    {/* <App032/> */}
    {/* <App041/> */}
    {/* <App042 /> */}
    {/* <App061 /> */}
    {/* <App062 /> */}
    {/* <App071 /> */}
    {/* <App081 /> */}
    {/* <App091 /> */}
    {/* <App101 /> */}
    {/* <App102 /> */}
    {/* <App103 /> */}
    <BrowserRouter>
      {/* <App141 /> */}
      {/* <App151 /> */}
      {/* <App152 /> */}
      {/* <App153 /> */}
      {/* <App181 /> */}
      {/* <App182 /> */}
      <BookApp />
      {/* <RBoardApp /> */}
      {/* <RSurveyApp /> */}
    </BrowserRouter>
    {/* </React.StrictMode>, */}
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
