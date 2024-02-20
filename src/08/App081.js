import React, { useMemo, useState } from 'react';
/**
 * useMemo (memorization)
 *
 *   https://react.dev/reference/react/useMemo
 *   React Hook that lets you cache the result of a calculation between re-renders.
 *   연산된 값을 기억
 *
 *   const cachedValue = useMemo(calculateValue, dependencies)
 *      calculateValue: 어떤 함수를 메모(기억)할것인지
 *      dependencies: 위 함수는 언제 실행되게 할 것인지
 */

const App081 = () => {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  // 모든 값을 더하는 함수
  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum += i));
    console.log(`getAddResult() 호출 sum = ${sum}`);
    return sum;
  };

  // [문자변경] 을 클릭할때는 getAddResult() 가 호출안되었으면 좋겠다면,
  // addResult 가 useMemo() 의 return 값을 받는다.
  const addResult = useMemo(() => getAddResult(), [list]);
  //    ↑ 메모라이징 된 결과
  //      getAddResult() 의 결과를 기억
  //      list 가 변경되었을때만 getAddResult 를 실행함.

  return (
    <>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트 데이터 추가
      </button>
      <br />
      <button
        onClick={() => {
          setStr('안녕');
        }}
      >
        문자변경
      </button>
      <ul>
        {list.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      <div>
        {str}: {addResult}
      </div>
    </>
  );
};

export default App081;
