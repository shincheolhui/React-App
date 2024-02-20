import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SaveForm = () => {
  const navigate = useNavigate();

  // 사용자 입력값도 '상태'로 다루기. (서버로 넘기기 편해진다.)
  const [book, setBook] = useState({
    // 초깃값 세팅
    title: '',
    author: '',
  });

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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(book),
    })
      .then((response) => {
        console.log(`response는? `, response);
        // 응답상태가 201이면, json형태 변환한다.
        if (response.status === 201) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        if (data !== null) {
          console.log(`책 작성완료`, data);
          //   navigate('/'); // 홈으로 이동
          navigate(`/book/${data.id}`); // 상세페이지 이동
        } else {
          alert('등록 실패');
        }
      });
  };

  return (
    <div>
      <h1>책 등록하기</h1>
      <Form onSubmit={submitBook}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={changeValue}
            name="title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author"
            onChange={changeValue}
            name="author"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SaveForm;
