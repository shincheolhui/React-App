import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdatePage = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  const [post, setPost] = useState({
    user: '',
    subject: '',
    content: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/board/detail/' + id)
      .then((response) => response.json())
      .then((data) => {
        console.log('useEffect fetch response data는? =>', data);
        setPost(data);
      });
  }, []);

  const changeValue = (eventObject) => {
    setPost({
      ...post,
      [eventObject.target.name]: eventObject.target.value,
    });
  };

  const submitPost = (e) => {
    e.preventDefault(); // 기본 submit 동작 차단!

    // POST request
    fetch('http://localhost:8080/board/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(post),
    })
      .then((response) => {
        console.log(`PUT의 response는? `, response);
        if (response.status === 200) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        if (data !== null) {
          alert('수정 완료되었습니다!');
          console.log(`post 수정완료 `, data);
          navigate(`/detail/${data.id}`);
        } else {
          alert('수정 실패..');
        }
      });
  };

  return (
    <>
      <div class="container mt-3">
        <h2>수정 - {post.id}</h2>
        <hr />
        <div className="mb-3 mt-3 clearfix">
          <span className="float-stat me-2">id: {post.id}</span>
          <span className="float-end ms-4">작성일: {post.regDate}</span>
          <span className="float-end">조회수: {post.viewCnt}</span>
        </div>

        <Form onSubmit={submitPost}>
          <Form.Group className="my-3">
            <Form.Label>작성자</Form.Label>
            <Form.Control
              type="text"
              onChange={changeValue}
              name="user"
              value={post.user}
              readOnly
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              onChange={changeValue}
              name="subject"
              value={post.subject}
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>내용</Form.Label>
            <Form.Control
              type="text"
              onChange={changeValue}
              name="content"
              value={post.content}
            />
          </Form.Group>
          <Button variant="success" type="submit" className="me-2">
            수정완료
          </Button>
          <Link to={'/list'} className="btn btn-primary">
            목록
          </Link>
        </Form>
      </div>
    </>
  );
};

export default UpdatePage;
