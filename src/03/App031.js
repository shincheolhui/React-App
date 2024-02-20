import React from 'react';
/**
 * JSX 한개의 'element' 만 리턴한다.
 */
// 변수 선언은 let, const 로만 해야 함  (var 사용하지 말기!)
// JSX 네 { .. }  인에 유효한 JavaScript 표현식 사용 가능
//    https://ko.legacy.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx
// JSX 안에선 if 사용 불가.  삼항연산자 가능.

// 변수를 사용할 수 있다.
let a = 10;
const b = 20;

const App031 = () => {
  let c = 30;
  console.log(`c = `, c); // 렌더링할때마다 App03 함수가 호출된다.
  return ( // 괄호 감쌀 경우 return 오른쪽에 시작괄호가 있어야 한다. 줄바꿈되어 있으면 에러!
    // <h1></h1> 이렇게 하면 2개의 element 를 return 하는 것이기 때문에 에러 발생한다!
    // 하나의 element 안에 여러개의 element 를 넣는다.
    <>
      {/* JSX 의 주석(ctrl + /) */}
      {/* 변수로 계산이 가능하다 */}
      안녕하세요 {a}+{b} = {a + b}
      {/* 삼항연산자도 사용할 수 있다 */}
      <div>{a === c ? '같다' : '다르다'}</div>
      <p>하나</p>
      <p>둘</p>
      <hr />
      <div>여러개의 element가 return 되는지 확인하자</div>
      <div>그리고 가장 바깥에 있는 태그를 비어있는 태그로 감싸면</div>
      <div>
        렌더링된 화면에서는 보이지 않는다. 렌더링된 화면에서 개발자도구를 열어
        확인해보자.
      </div>
      {/* 조건부 렌더링 SCE 사용 */}
      <div>허지우 {c > 20 && '아직은 젊어요'}</div>
    </>
  );
};

export default App031;
