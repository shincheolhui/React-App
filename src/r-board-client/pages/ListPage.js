import React, { useEffect, useState } from 'react';
import PostItems from '../components/PostItems';
import { Link } from 'react-router-dom';

const ListPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/board/list')
      .then((response) => response.json())
      .then((data) => {
        console.log('8080/board/list의 response data는? ', data);
        setPosts(data);
      });
  }, []);

  return (
    <>
      <div class="container mt-3">
        <h2>목록</h2>
        <hr />

        <table class="table table-hover">
          <thead class="table-success">
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>작성자</th>
              <th>조회수</th>
              <th>작성일</th>
            </tr>
          </thead>
          {posts.map((element) => (
            <PostItems key={element.id} post={element} />
          ))}
        </table>

        <div class="row">
          <div class="col-12">
            <Link to="/write" className="btn btn-primary">
              작성
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPage;
