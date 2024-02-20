import React from 'react';
import { styled } from 'styled-components';

// 부모쪽에서 pass 한 데이터를 받는다.
// props 받기,
// function 의 매개변수로 기술,
const Home = (props) => {
  //   console.log(props); // 일단확인!
  //   const boards = props.boards; // props 에서 boards 꺼내기!
  //   console.log('props.boards는 ', boards);
  //   const id = props.id;
  //   console.log(`props.id는 ${id}`);

  // 여러개의 props 를 비구조할당 방식으로 한번에!!!
  console.log(`부모(HomePage)에서 pass한 props는`, props);
  const { boards, id, setBoards, number, setNumber } = props;
  const { userinfo } = props;
  console.log('props.boards는 ', boards);
  console.log('props.id는 ', id);
  console.log('props.number는 ', number);

  // styled component 에 JavaScript 표현식 가능
  const color1 = 'cyan';
  const StyledButton1 = styled.button`
    color: ${'orangered'};
    background-color: ${color1};
    border-style: ${color1 === 'cyan' ? 'dashed' : 'none'};
  `;

  // styled component props 패싱
  const StyledButton2 = styled.button`
    margin: 0 5px;
    /* 주의! 여기서 매개변수 props 는 Home() 함수의 매개변수 props 가 아니라 styled component 에 전달된 props 다!! */
    background-color: ${(props) => props.bgColor};
  `;

  // 부모로부터 받은 데이터로 조건부 스타일링
  const StyledButton3 = styled.button`
    color: ${(props) => (props.u.username === '허지우' ? 'blue' : 'red')};
  `;

  // styled component 상속 및 style 변경
  const StyledButton4 = styled(StyledButton1)`
    background-color: yellow;
  `;

  return (
    <div>
      <h1>홈페이지</h1>
      {/* 자식쪽에서 setBoards() 직접 사용 못함. */}
      <button onClick={() => setBoards([])}>전체삭제</button>
      {/* 그렇다면 매개변수로 부모(HomePage)에서 자식(Home)에게 pass 해보자! */}
      <ul>
        {boards.map((board) => (
          <li>
            id: {board.id}, 제목: {board.title}, 내용: {board.content}
          </li>
        ))}
      </ul>
      <hr />
      <h1>number: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>증가</button>
      <button onClick={() => setNumber(0)}>초기화</button>

      <hr />
      <StyledButton1>스타일버튼1</StyledButton1>
      <StyledButton2 bgColor="limegreen">스타일버튼2</StyledButton2>
      <StyledButton3 u={userinfo}>스타일버튼3</StyledButton3>
      <StyledButton4>스타일버튼4</StyledButton4>

      <hr />
    </div>
  );
};

export default Home;
