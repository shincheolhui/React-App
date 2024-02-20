import React, { useEffect, useState } from 'react';
import Sub, { 진무, num2 as 종현 } from './Sub';
/**
 * useEffect
 *   https://react.dev/reference/react/useEffect
 *
 *   useEffect(setup, dependencies?)
 *      setup:  콜백함수. The function with your Effect’s logic
 *      dependencies:  의존하는 상태변수(들)
 *   React Hook that lets you synchronize a component with an external system.
 *
 *  useEffect 의 setup 콜백 실행시점:
 *  1. App() 함수가 최초 실행될때
 *    ('마운트 될때' 라고 함 ) (혹은 그려질때)
 *  2. 상태변수가 변경될때 (=> App()함수가 실행되니까)
 *     dependencies 에 등록되어 있어야 한다
 */

const App071 = () => {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    // (가령) 데이터 다운로드
    let downloadData = 5;
    setData(downloadData);
  };

  // 1. App() 함수가 최초 실행될때(마운트 될때)
  // 두번째 매개변수가 비어있는 배열이기 때문에 어떤 상태값에도 의존하지 않는다.
  // 따라서 버튼을 클릭해도 리렌더링 되지않고 값만 변경된다!
  useEffect(() => {
    console.log('App071() useEffect 콜백 실행');
    download(); // 화면 로딩 최초에 데이터 다운로드
  }, [search]); // <- search 값이 변경되면 useEffect 동작한다. [?, ?, ?, ?]안에 여러개를 넣을수있다.
  return (
    <>
      {/* {(진무, 종현)} <- 이것은 왜 '종현'의 값만 나올까요?? */}
      {진무}, {종현}, {(진무, 종현)}
      <Sub />
      히지우
      <div>데이터: {data}</div>
      클릭했을때 함수 객체가 넘어간다
      <br />
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
      <br />
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색
      </button>
    </>
  );
};

export default App071;
