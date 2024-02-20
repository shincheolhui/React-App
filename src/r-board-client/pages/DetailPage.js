import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const DetailPage = () => {
  const navigate = useNavigate();

  let { id } = useParams();

  const [post, setPost] = useState({
    user: '',
    subject: '',
    content: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/board/detail/' + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(`useEffect fetch response data는? =>`, data);
        console.log(`useEffect fetch response {...data}는? =>`, {...data});
        console.log(`useEffect fetch response data.viewCnt는? =>`, data.viewCnt);
        setPost(data);
      });
  }, []);

  const deletePost = () => {
    if (!window.confirm('삭제하시겠습니까요?')) return;

    fetch('http://localhost:8080/board/delete/' + post.id, {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(`deletePost의 response data는? => `, data);
        if (data === '1') {
          alert(`글이 삭제되었습니다.`);
          navigate(`/list`);
        } else {
          alert('삭제되지않았습니다..');
        }
      });
  };

  const updatePost = () => {
    navigate(`/update/${post.id}`);
  };

  return (
    <>
      <div class="container mt-3">
        <h2>조회 - {post.id}</h2>
        <hr />
        <div className="mb-3 mt-3 clearfix">
          <span className="float-stat me-2">id: {post.id}</span>
          <span className="float-end ms-4">작성일: {post.regDate}</span>
          <span className="float-end">조회수: {post.viewCnt}</span>
        </div>

        <section>
          <div className="mb-3">
            <label>작성자:</label>
            <br />
            <span>{post.user}</span>
          </div>
          <div className="mb-3 mt-3">
            <label>제목:</label>
            <br />
            <span>{post.subject}</span>
          </div>
          <div className="mb-3 mt-3">
            <label>내용:</label>
            <br />
            <div className="border bg-light rounded p-2">{post.content}</div>
          </div>
          <div className="d-flex">
            <Link to={'/list'} className="btn btn-primary me-2">
              목록
            </Link>
            <Link to={'/write'} className="btn btn-primary me-2">
              작성
            </Link>
            <Button variant="warning" onClick={updatePost} className="me-auto">
              수정
            </Button>
            <Button variant="danger" onClick={deletePost}>
              삭제
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailPage;
