import React from 'react';

const WritePage = () => {
  const handleWrite = () => {
    // ListPage 의 setPosts() 로 추가해야함!
    // TODO
  };
  return (
    <>
      <h4>글쓰기 페이지</h4>

      <form>
        id: <input type="number" placeholder="id 입력하세요." />
        <br />
        제목: <input type="text" placeholder="제목 입력하세요." />
        <br />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
    </>
  );
};

export default WritePage;
