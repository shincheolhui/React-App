import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookItem = (props) => {
  const { id, title, author } = props.book;

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          번호: {id}
          <br />
          제목: {title}
          <br />
          저자: {author}
        </Card.Title>
        <Link to={'/book/' + id} className="btn btn-primary">
          상세보기
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
