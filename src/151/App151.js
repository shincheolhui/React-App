import React, { useState } from 'react';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';

const App151 = () => {
  // const [posts, setPosts] = useState([
  //     {id:1, title: "내용1"},
  // ]);

  return (
    <>
      <Navigation />
      <Routes>
        {/* <Route path='/' Component={ListPage(posts)}></Route>
                <Route path='/write' Component={WritePage(setPosts)}></Route> */}
        <Route path="/" Component={ListPage()}></Route>
        <Route path="/write" Component={WritePage()}></Route>
        {/* 현시점에선 WritePage 에서 ListPage 의 상태를 변경할 수 없다. 그래서 route를 없애고 하나의 페이지로 작성 */}
      </Routes>
    </>
  );
};

export default App151;
