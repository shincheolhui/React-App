import React, { useState } from 'react';
import './CSS/App182.css';
import Top from './components/Top';
import Bottom from './components/Bottom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store';

// createStore(reducer, [preloadedState], [enhancer])
//   https://redux.js.org/api/createstore
//   https://ko.redux.js.org/api/createstore/
//   리턴: Store객체 ← 앱의 전체 '상태'를 가지고 있는 객체.
//         이 객체의 상태를 바꾸는 유일한 방법은 '액션'을 보내는것 뿐입니다.
//         UI를 업데이트 하기 위해 '상태를 구독' 할 수도 있습니다.
const store = createStore(reducer);
// 이렇게 생성한 store 를 '모든곳' 에서 사용하려면
// <Provider> 로 감싸주면 됨 -> 그 내부의 '모~든' component 에서 store 사용 가능하도록 전달됨.

const App182 = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h2>최상단 화면</h2>
        <Top />
        <Bottom />
      </div>
    </Provider>
  );
};

export default App182;
