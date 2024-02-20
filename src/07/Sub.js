import React from 'react';

let num1 = 10,
  num2 = 20;
const Sub = () => {
  return (
    <>
      <div>Sub</div>
    </>
  );
};
// export default 는 1개만 가능
export default Sub;
// 다른 것들도 export 하려면 {...} 안에 기술
export { num1 as 진무, num2 }; // 여러개 변수 export 가능, 별명가능
