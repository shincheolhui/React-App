import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/home/Home';

const HomePage = () => {
  // HomePage 에서 다운로드할까?  Home 에 다운로드할까?
  // '재사용'되는 쪽에는(Header, Footer) 다운로드 하지 않도록 합니다.
  // 따라서 데이터 다운로드는 HomePage 에서 하되
  // 다운받은 데이터를 Home 으로 전달(pass)되어야 한다

  const [boards, setBoards] = useState([]);

  // 도전!!!
  const [number, setNumber] = useState(0);

  const [user, setUser] = useState([]);

  // 최초 실행 시 수행할 작업
  useEffect(() => {
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    setBoards([...data]);

    setUser({ id: 1, username: '허지우' });
  }, []); // dependency 가 [] 빈 배열이면 최초에 딱 한번만 실행됨.

  return (
    <>
      <Header />
      {/* 상위 component(HomePage component) 에서  하위 component(Home component)) 로 데이터를 pass!, props 라 한다. */}
      {/* 위에서 선언한 변수에 할당된 값을 Home에게 boards라는 이름으로 pass 한다. */}
      {/* props 은 여러개 전달 가능 */}
      <Home
        boards={boards}
        id={1}
        setBoards={setBoards}
        number={number}
        setNumber={setNumber}
        userinfo={user}
      />
      <Footer />
    </>
  );
};
export default HomePage;
