import React from 'react';
import '../CSS/App182.css';
import { useDispatch } from 'react-redux';
import { increase, decrease, changeName } from '../store';

const Bottom = () => {
  const dispatch = useDispatch();
  
  return (
    <div className="sub_container">
      <h4>Bottom</h4>
      <button onClick={()=>{dispatch(increase())}}>증가</button>
      <button onClick={()=>{dispatch(decrease())}}>감소</button>
      <button onClick={()=>{dispatch(changeName("유상곤"))}}>이름변경</button>
    </div>
  );
};

export default Bottom;
