import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const DetailPage = () => {
  const navigate = useNavigate();

  let { id } = useParams();

  const [survey, setSurvey] = useState({
    // 초기 상태값
    name: '',
    age: '',
    gender: '',
    area: '',
    favorite: '',
  });

  useEffect(() => {
    fetch('http://localhost:9090/survey/detail/' + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(`useEffect fetch response data는? =>`, data);
        console.log(`useEffect fetch response {...data}는? =>`, { ...data });
        console.log(
          `useEffect fetch response data.viewCnt는? =>`,
          data.viewCnt,
        );
        setSurvey(data);
      });
  }, []);

  const deletePost = () => {
    if (!window.confirm('삭제하시겠습니까요?')) return;

    fetch('http://localhost:9090/survey/delete/' + survey.id, {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(`deletePost의 response data는? => `, data);
        if (data === '1') {
          alert(`설문이 삭제되었습니다.`);
          navigate(`/list`);
        } else {
          alert('삭제되지않았습니다..');
        }
      });
  };

  const updatePost = () => {
    navigate(`/update/${survey.id}`);
  };

  return (
    <>
      <div class="container mt-3">
        <h2 class="display-6">설문 상세조회</h2>
        <hr />
        <div
          class="alert alert-light d-flex justify-content-between"
          role="alert"
        >
          <span>Id: {survey.id}</span>
          <span>{survey.createdAt} 작성</span>
        </div>

        <section>
          <div class="mt-3">
            <h5>이름</h5>
            <span class="form-control" readonly>
              {survey.name}
            </span>
          </div>
          <br />

          <div class="mt-3">
            <h5>나이</h5>
            <span class="form-control" readonly>
              {survey.age}
            </span>
          </div>
          <br />

          <div class="mt-3">
            <h5>성별</h5>
            <span class="form-control" readonly>
              {survey.gender === 'MALE' ? '남자' : '여자'}
            </span>
          </div>
          <br />

          <div class="mt-3">
            <h5>거주지역</h5>
            <span class="form-control" readonly>
              {survey.area}
            </span>
          </div>
          <br />

          <div class="mt-3">
            <label>
              <h5>이상형</h5>
            </label>
            <span class="form-control" readonly>
              {survey.favorite}
            </span>
          </div>
        </section>
        <br />
        <hr />

        {/* 하단버튼들 */}
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
      </div>
    </>
  );
};

export default DetailPage;
