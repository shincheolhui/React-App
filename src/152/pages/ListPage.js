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

  // form 의 상태를 담을 변수
  const [post, setPost] = useState({ id: '', title: '', content: '' });

  const handleWrite = (e) => {
    // form 의 onSubmit 에서 동작시킬경우, 기본액션을 중지시켜야 한다
    e.preventDefault();

    console.log('handleWrite() 동작!');
    console.log('posts는? ', posts);
    console.log('post는? ', post);
    console.log('post.id는? ', post.id);

    // // 정수여부 판별
    // if (!isNaN(parseInt(post.id))) {
    //   alert('정수 O');
    // } else {
    //   alert('정수 X');
    // }

    if (!post.id) {
      return alert('id를 입력하세요.');
    }

    const updateData = posts.map((element) =>
      parseInt(element.id) === parseInt(post.id)
        ? { ...element, ...post }
        : { ...posts, ...post },
    );

    // id, title, content 을 가져와야 함.
    // useRef 를 사용해도 되나... input 에 넣으면 불편함.
    // <input>(들) 에 '상태' 를 주어 사용하는 것이다.
    // setPosts([...posts, post]); // 기존에 글목록에, 새로운 글 추가

    setPosts([...updateData]);
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

  // input 이 여러개이면 똑같은 함수를 여러개 만들어야 하나??
  // 하나로 만들어 보자!!!
  // => computed property name
  const handleForm = (e) => {
    // 저 e 가 무엇인지 궁금하당
    console.log('e를 출력하면 무엇이 나올까? ', e); // event객체를 알아봤다
    console.log('e.target도 확인해보고 ', e.target); // event가 발생한 input태그 가 나왔네? 오호~ 그래서 name과 value를 이용할 수 있었군~

    // event 객체의 name과 value를 이용한다.
    console.log(e.target.name, e.target.value);

    // 전체 post 에 e.target.name으로 property를, e.target.value로 값을 저장해줌.
    setPost({ ...post, [e.target.name]: e.target.value });
    console.log(post); // 저장되는 확인
  };

  // 해당 글 삭제하는 함수
  const deletePost = (idToDelete) => {
    console.log('삭제하려는 글번호는? ', idToDelete); // 해당 글번호 확인!

    // 삭제할 글번호만 걸러내고 나머지 글은 새로운 배열을 만든다.
    const filteredPosts = posts.filter(
      (post) => parseInt(post.id) !== parseInt(idToDelete),
    );
    console.log('걸러진 글목록은? ', filteredPosts); // 걸리진 글목록 확인!

    // 삭제버튼을 클린한 글의 id로 삭제가 되는 것을 확인함!
    // 하지만 중복되는 글번호가 있으면 모두 삭제됨...
    // 글쓰기할때 중복되는 것을 막야하나?
    setPosts(filteredPosts);
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
          onChange={handleForm} // onChange event가 발생했을때 handleForm이 동작
          name="id" // handleForm()함수에서 event 객체의 name으로 이용됨(e.target.name)
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
        {/* <button type="button" onClick={handleWrite}> */}
        <button type="submit">글쓰기</button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyleItemBoxDiv>
          <div>
            번호: {post.id} 제목: {post.title} 내용: {post.content}
          </div>
          <button onClick={() => deletePost(post.id)}>삭제</button>
        </StyleItemBoxDiv>
      ))}
    </>
  );
};

export default ListPage;
