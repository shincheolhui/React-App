import React from 'react';
import './App101.css'; // 방법2. css를 import 한다.

// styled component

const App101 = () => {
  // 방법1. 지역변수로 만든다.
  // 이런 sytle 변수 같은 것은 App101 component 밖에 하는게 좋다
  const a = {
    color: 'yellow',
    backgroundColor: 'red',
  };

  return (
    <>
      <div style={a}>안녕</div>
      <div className="box-style">지우야 안녕</div>
    </>
  );
};

export default App101;
