import React, { useEffect, useState } from 'react';
import SurveyItems from '../components/SurveyItems';
import { Link } from 'react-router-dom';

const ListPage = () => {
  const [surveyArray, setSurveyArray] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9090/survey/list')
      .then((respons) => respons.json())
      .then((data) => {
        console.log('9090/survey/list의 respons data는? => ', data);
        setSurveyArray(data);
      });
  }, []);
  return (
    <>
      <div class="container mt-3">
        <h2>설문 목록</h2>
        <hr />
        <table class="table table-hover">
          <thead class="table-success">
            <tr>
              <th>#</th>
              <th>이름</th>
              <th>작성일시</th>
            </tr>
          </thead>
          {surveyArray.map((element) => (
            <SurveyItems key={element.id} surveyItem={element} />
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
