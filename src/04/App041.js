import React from 'react';
import Beta from './Beta';

// 'App041' 이 하나의 'component'
const App041 = () => {
  //   return (
  //     <>
  //       <div>A</div>
  //       <div>B</div>
  //     </>
  //   );
  return (
    <>
      <div>C {console.log('App041() 만 렌더링 될까? 부모')}</div>
      <Beta />
    </>
  );

  // '부모' 를 다시 그리게 되면 '자식' 도 다시 그려지게 된다.
  // '자식' 을 다시 그릴지 말지를 판단하기 위한 연산을 react 가 수행함.
  // 판단을 위한 연산을 최적화 하기 위해 '깊은(얕은) 복사' 필요.
};

export default App041;
