import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const WritePage = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState({
    // 초기상태
    user: '',
    subject: '',
    content: '',
  });

  const changeValue = (eventObject) => {
    setPost({
      ...post,
      [eventObject.target.name]: eventObject.target.value,
    });
  };

  const submitPost = (e) => {
    console.log(`submitPost post는? =>`, post);
    console.log(`submitPost post.user는? =>`, post.user);
    console.log(`submitPost post.subject는? =>`, post.subject);

    if (!post.user.trim()) {
      alert('작성자는 필수입력항목입니다.');
      return;
    } else if (!post.subject.trim()) {
      alert('제목은 필수입력항목입니다.');
      return;
    }

    e.preventDefault();

    // POST 요청
    fetch('http://localhost:8080/board/write', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(post),
    })
      .then((response) => {
        console.log(`POST 요청의 response는? => `, response);
        // 정상출력확인ㅎㅎ

        if (response.status === 201) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        if (data !== null) {
          console.log(`글 작성 완료했어요~ 작성한 data 보여주세요 => `, data);
          alert(`글 작성되었어요~! 야호!!!`);
          navigate(`/detail/${data.id}`);
        } else {
          alert(`작성 실패했어요..`);
        }
      });
  };

  return (
    <>
      <div class="container mt-3">
        <h2>작성</h2>
        <hr />
        <Form onSubmit={submitPost}>
          <Form.Group className="my-3">
            <Form.Label>작성자</Form.Label>
            <Form.Control
              type="text"
              placeholder="작성자를 입력하세요."
              onChange={changeValue}
              name="user"
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              placeholder="제목을 입력하세요."
              onChange={changeValue}
              name="subject"
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>내용</Form.Label>
            <Form.Control
              type="text"
              placeholder="내용을 입력하세요."
              onChange={changeValue}
              name="content"
            />
          </Form.Group>
          <Button variant="success" type="submit" className="me-2">
            작성완료
          </Button>
          <Link to={'/list'} className="btn btn-primary">
            목록
          </Link>
        </Form>
      </div>
    </>
  );
};

export default WritePage;
