import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateForm = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  // 사용자 입력값도 '상태'로 다루기. (서버로 넘기기 편해진다.)
  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/book/' + id)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, []);

  const changeValue = (eventObject) => {
    setBook({
      ...book,
      [eventObject.target.name]: eventObject.target.value,
    });
  };

  const submitBook = (e) => {
    e.preventDefault(); // 기본 submit 동작 차단!

    // POST request
    fetch('http://localhost:8080/book', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(book),
    })
      .then((response) => {
        console.log(`response는? `, response);
        // 응답상태가 200(정상적인 업데이트)이면, json형태 변환한다.
        if (response.status === 200) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        if (data !== null) {
          alert('수정 완료되었습니다.');
          console.log(`책 수정완료`, data);
          //   navigate('/'); // 홈으로 이동
          navigate(`/book/${data.id}`); // 상세페이지 이동
        } else {
          alert('수정 실패');
        }
      });
  };

  return (
    <div>
      <h1>'{book.id}'번 책 수정하기</h1>
      <Form onSubmit={submitBook}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={changeValue}
            name="title"
            value={book.title}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author"
            onChange={changeValue}
            name="author"
            value={book.author}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UpdateForm;
