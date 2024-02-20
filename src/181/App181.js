import React, { useState } from 'react';
import './CSS/App181.css';
import Top from './components/Top';
import Bottom from './components/Bottom';

const App181 = () => {
  // 상태값
  const [number, setNumber] = useState(12);

  const addNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div className="container">
      <h2>최상단 화면</h2>
      {/* props로 상태값 pass */}
      <Top number={number} />
      <Bottom addNumber={addNumber} />
    </div>
  );
};

export default App181;
