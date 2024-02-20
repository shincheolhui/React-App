import React, { createRef, useRef, useState } from 'react';
/**
 * useRef()
 *   https://react.dev/reference/react/useRef
 *   주로 dom 을 변경할때 사용
 *   useRef is a React Hook that lets you reference a value that’s not needed for rendering.
 *   해석) useRef는 렌더링에 필요하지 않은 값을 참조할 수 있게 해주는 React Hook입니다.
 *   const ref = useRef(initialValue)
 *
 *
 */

const App091 = () => {
  const myRef = useRef(null);

  const [list, setList] = useState([
    { id: 1, name: '허지우' },
    { id: 2, name: '권희수' },
  ]);

  // Array.from() 사용
  //   iterable 이나 array like 객체로부터 배열 생성.
  const myRefs = Array.from({ length: list.length }).map(() => createRef());
  //    Ref 의 배열(list의 길이와 같은..)

  return (
    <>
      <div ref={myRef}>박스</div>
      <button
        onClick={() => {
          console.log(myRef);
          console.log(myRef.current);
          myRef.current.style.backgroundColor = 'red';
          myRefs[0].current.style.color = 'orange';
          console.log(myRefs);
          console.log(myRefs[0].current);
        }}
      >
        색변경
      </button>
      <hr />
      <ul>
        {list.map((user, index) => (
          <li ref={myRefs[index]}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App091;
