import React from 'react';
import '../CSS/App182.css';
import { useSelector } from 'react-redux';

const Top = () => {
  // useSelector() 를 사용하여 어느 component 에서든지 store 의 state 값들을 사용할수 있게 된다.
  // store 의 state 에 등록되어 있는 number 를 꺼내오기
  const { number, user } = useSelector((store) => store);

  return (
    <div className="sub_container">
      <h4>Top</h4>
      번호: {number}
      <br />
      이름: {user.name}
    </div>
  );
};

export default Top;
