import React, { useState } from 'react';

const App062 = () => {
  console.log('App062가 다시 렌더링 되나 봅시다');
  let sample = [
    { id: 1, name: '허지우' },
    { id: 2, name: '송민호' },
    { id: 3, name: '이승원' },
    { id: 4, name: '서현기' },
  ];

  // 다운로드 받은 user 데이터(들)을 '상태'로 관리
  const [users, setUsers] = useState(sample);

  //   let num = 5; // 지역변수를 리렌더링 시 초기화 한다. 이러지마요~
  const [num, setNum] = useState(5);

  const download = () => {
    // 다운 받은 샘플 데이터가 아래와 같다면.
    // let sample = [
    //   { id: 1, name: '허지우' },
    //   { id: 2, name: '송민호' },
    //   { id: 3, name: '이승원' },
    //   { id: 4, name: '서현기' },
    // ];

    // 다운받은 데이터를 기존 users 데이터 덮어쓰기
    // setUsers([sample]);
    // setUsers([...sample]); // 깊은복사를 발생, 다른 레퍼런스(주소)의 객체, 내용의 변경을 확인할 필요없이 다른 객체이기 때문에 바로 리렌더링함!
    // sample.push({id:5, name:'강동키'}); // 데이터 추가 // 이러지마요~ push는 mutable 함수다.
    // console.log('download()', sample); // 전체데이터 확인
    // setUsers(sample)

    // // 불변함수를 사용한다.
    // const a = sample.concat({id: 5, name: '유상곤'}); // concat 을 사용했기 때문에 주소가 달라짐.
    // setUsers(a); // 다른 레퍼런스의 데이터!

    // // concat 대신에 spread 사용, 간단하다~
    // setUsers([...sample, { id: 5, name: '김창희' }]);

    // // 과연 num 값은?
    // setUsers([...sample, { id: num, name: '김창희' }]); // num은 지역변수라. 매 App062()호출 시 초기화 됨.
    // num++;

    // num 도 상태값으로 변경한다.
    setUsers([...sample, { id: num, name: '최정인' }]);
    setNum(num + 1);
  };

  return (
    <>
      <button onClick={download}>다운로드</button>
      <ul>
        {users.map((u) => (
          <li>
            {console.log('클릭할때마다 찍히나?')}
            {u.id}, {u.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App062;
