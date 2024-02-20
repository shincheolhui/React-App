import React, { useState } from 'react';
import { styled } from 'styled-components';

const StyleItemBoxDiv = styled.div`
  border: 1px solid black;
  padding: 10px;
  height: 40px;
  margin: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListPage = () => {
  // ※ 페이지 로딩 최초에 서버로부터 데이터 받아서 그려야 한다
  const [posts, setPosts] = useState([
    { id: 1, title: '내용1', content: '내용1' },
    { id: 2, title: '내용2', content: '내용2' },
    { id: 3, title: '내용3', content: '내용3' },
    { id: 4, title: '내용4', content: '내용4' },
    { id: 5, title: '내용5', content: '내용5' },
  ]);

  // form 의 상태
  const [post, setPost] = useState({ id: '', title: '', content: '' });

  const handleWrite = (e) => {
    e.preventDefault(); // form 의 onSubmit 에서 동작시킬경우, 기본액션을 중지시켜야  한다

    // id, title, content 을 가져와야 함.
    // useRef 를 사용해도 되나... input 에 넣으면 불편함.
    // <input>(들) 에 '상태' 를 주어 사용하는 것이다.

    // setPosts([...posts, post])

    console.log(`글작성: `, post);
    if (!isNaN(parseInt(post.id))) {
      // 정수값이면  글 '추가' 혹은 '수정'.

      let idx = posts.findIndex((p) => parseInt(p.id) === parseInt(post.id));
      console.log('posts.findIndex는 무엇을 return할까? ', idx);
      // consol.log로 확인한 결과,
      // parseInt(p.id) === parseInt(post.id) <- 이것이
      // 같으면 0 을, 같지않으면 -1 을 return한다.

      // -1 이면 id가 존재하지 않기 때문에 새로운 글 '추가'!
      if (idx === -1) setPosts([...posts, post]);
      // -1 이 아니면 id가 존재하는 것으로 판단하여 기존의 글 '수정'
      else
        setPosts(
          posts.map((p) =>
            // posts 요소 중 id 가 같은면 수정(전개하여, spread), 그렇지 않으면 기존 글 유지
            parseInt(p.id) === parseInt(post.id) ? { ...p, ...post } : p,
          ),
        );
    } else {
      alert('정수아닙니다');
    }
  };

  // onXXX() 콜백함수(event handler)의 매개변수는 event객체다.
  const handleChangeId = (e) => {
    console.log(`id값 변경: ${e.target.value}`);
    setPost({ ...post, id: e.target.value });
  };
  const handleChangeTitle = (e) => {
    console.log(`title값 변경: ${e.target.value}`);
    setPost({ ...post, title: e.target.value });
  };
  const handleChangeContent = (e) => {
    console.log(`content값 변경: ${e.target.value}`);
    setPost({ ...post, content: e.target.value });
  };

  //   input 이 여러개이면 똑같은 함수 여러개 만들어야 하나??  하나로 만들어 보자!
  // => computed property name 활용

  const handleForm = (e) => {
    console.log(e.target.name, e.target.value);
    setPost({ ...post, [e.target.name]: e.target.value });
    console.log(post); // 바뀌었는지 확인
  };

  // 삭제
  const handleDelete = (id) => {
    console.log(`${id} 를 삭제합니다.`);
    setPosts(posts.filter((p) => parseInt(p.id) !== parseInt(id)));
  };

  return (
    <>
      <h4>글목록 페이지</h4>
      <form onSubmit={handleWrite}>
        id:{' '}
        <input
          type="number"
          placeholder="id 입력..."
          value={post.id}
          onChange={handleForm}
          name="id"
        />
        <br />
        제목:{' '}
        <input
          type="text"
          placeholder="제목을 입력하세요..."
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <br />
        내용:{' '}
        <input
          type="text"
          placeholder="내용을 입력하세요..."
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <br />
        <button
          type="submit"
          // onClick={handleWrite}
        >
          글쓰기
        </button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyleItemBoxDiv>
          <div>
            번호: {post.id} 제목: {post.title} 내용: {post.content}
          </div>
          <button onClick={() => handleDelete(post.id)}>삭제</button>
        </StyleItemBoxDiv>
      ))}
    </>
  );
};

export default ListPage;
