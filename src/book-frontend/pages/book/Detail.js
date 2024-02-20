import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
  const navigate = useNavigate();
  // saveForm에서 /book/${data.id}로 전달된 값 꺼냄.
  let { id } = useParams();

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

  const deleteBook = () => {
    if (!window.confirm('삭제하시겠습니까요?')) return;

    fetch('http://localhost:8080/book/' + id, {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === 'ok') {
          alert('삭제되었습니다.');
          navigate('/');
        } else {
          alert('삭제되지않았습니다.');
        }
      });
  };

  const updateBook = () => {
    navigate('/updateForm/' + id);
  };

  return (
    <div>
      <h1>'{book.id}'번 책 상세보기</h1>
      <button className="btn btn-warning me-2" onClick={updateBook}>
        수정
      </button>
      <button className="btn btn-danger" onClick={deleteBook}>
        삭제
      </button>
      <hr />
      <h3>Title: {book.title}</h3>
      <h3>Author: {book.author}</h3>
    </div>
  );
};

export default Detail;
