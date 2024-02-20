import React from 'react';

const App042 = () => {
  let list = [1, 2, 3]; // 상태 데이터
  return (
    <>
      {/* iterable 한 것을 자동으로  */}
      <div>{list}</div>
      <hr/>
      <p>{list.map((n) => n)}</p>
      <hr/>
      <div>{list.map((n) => <h4>{n}</h4>)}</div>
      <hr/>
      <ul>{list.map((n) => <li>{n}</li>)}</ul>
      <hr/>
      <div>{list.map(() => <h4>허지우</h4>)}</div>
      <hr/>
      <ol>{list.map(() => <li>허지우</li>)}</ol>
    </>
  );
};

export default App042;
