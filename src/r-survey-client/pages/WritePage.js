import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const WritePage = () => {
  const navigate = useNavigate();

  const [survey, setSurvey] = useState({
    // 초기 상태값
    name: '',
    age: '',
    gender: '',
    area: '',
    favorite: '',
  });

  // 이름, 나이, 성별, 지역 inputValue 확인..
  const changeInputValue = (eventObject) => {
    console.log(`${eventObject.target.name}: ${eventObject.target.value}`);

    setSurvey({
      ...survey,
      [eventObject.target.name]: eventObject.target.value,
    });

    console.log(`changeInputValue의 survey? => `, survey);
  };

  // 이상형 CheckBox 관련
  // checkboxStates 의 초기상태값을 빈 배열로 설정하고 나중에 값이 변경되었는데 값을 설정해준다.
  const [checkboxStates, setCheckboxStates] = useState([]);

  //useEffect는 처음 마운트될때 동작하고, 2번째 매개변수가 변경되었을때 동작한다.
  useEffect(() => {
    // 처음 마운트될때 확인해보고
    // 두번째 매개변수인 checkboxStates 가 변경되었을때도 확인해보자
    console.log(`useEffect 의 checkboxStates ? =>`, checkboxStates);

    // checkboxStates 의 변경된 값을 문자열로 변환하여 favorite 의 상태값을 설정해줌.
    setSurvey({
      ...survey,
      favorite: checkboxStates.toString(),
    });
  }, [checkboxStates]);

  // 이상형 CheckBox 의 change 가 발생했을때 동작하고 매개변수로 체크된 사람의 이름을 String 타입으로 받는다.
  const handleCheckboxChange = (checkboxName) => {
    // 체크된 사람의 이름이 출력되는지 확인
    console.log(`handleCheckboxChange 의 checkboxName ? => `, checkboxName);
    // handleCheckboxChange 가 동작할 때 checkboxStates 에 어떤 값들이 있는지 확인
    console.log(
      `handleCheckboxChange 에서 checkboxStates ? => `,
      checkboxStates,
    );

    // 만약, checkboxStates 가 checkboxName 을 포함하고 있다면,
    if (checkboxStates.includes(checkboxName)) {
      // checkboxStates 의 요소와 checkboxName 가 일치하지 않는 것만 필터해서 새로운 배열에 담는다.
      // 이것은 현재 체크된 것을 제외하는 것이다.
      const filteredCheckboxStates = checkboxStates.filter(
        (e) => e !== checkboxName,
      );
      // 필터된 요소들 확인
      console.log(`filteredCheckboxStates ? => `, filteredCheckboxStates);

      // 필터된 요소들만 다시 checkboxStates에 설정한다.
      // checkboxStates 의 상태값이 변경되었기 때문에 useEffect가 실행할 것이다.
      setCheckboxStates([filteredCheckboxStates]);

      // checkboxStates 가 checkboxName 을 포함하고 있지 않다면,
    } else {
      // checkboxStates 에 checkboxName 를 추가한다.
      setCheckboxStates([...checkboxStates, checkboxName]);
    }

    // 이러면 체크박스의 변경이 발생했을때 체크된 값들이 배열에 담기고
    // 체크박스상태값이 변경되어 useEffect 를 실행시킨다.
  };

  // Form Submit 관련..
  const submitSurvey = (e) => {
    console.log(`submitPost survey? =>`, survey);

    e.preventDefault();

    // POST 요청
    fetch('http://localhost:9090/survey/write', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(survey),
    })
      .then((response) => {
        console.log(`POST 요청의 response는? => `, response);

        if (response.status === 201) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        if (data !== null) {
          console.log(`설문 작성 완료. 작성한 data 보기 => `, data);
          alert(`설문 작성이 완료되었습니다.`);
          navigate(`/detail/${data.id}`);
        } else {
          alert(`작성 실패했어요..`);
        }
      });
  };

  return (
    <>
      <div class="container mt-3">
        <h2 class="display-6">설문 작성</h2>
        <hr />
        <br />

        {/* 설문작성form */}
        <Form onSubmit={submitSurvey}>
          {/* 이름form */}
          <Form.Group className="mt-3">
            <Form.Label>
              <h5>
                이름 <small>(필수)</small>
              </h5>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="이름을(를) 입력하세요."
              onChange={changeInputValue}
              name="name"
              required
            />
          </Form.Group>
          <br />

          {/* 나이form */}
          <Form.Group className="mt-3">
            <Form.Label>
              <h5>
                나이 <small>(필수)</small>
              </h5>
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="나이을(를) 입력하세요."
              onChange={changeInputValue}
              name="age"
              min={0}
              required
            />
          </Form.Group>
          <br />

          {/* 성별 Radio */}
          <Form.Group className="mt-3">
            <Form.Label>
              <h5>성별</h5>
            </Form.Label>
            <Form.Check
              type="radio"
              id="radio1"
              label="남성"
              name="gender"
              value="MALE"
              checked={survey.gender === 'MALE'}
              onChange={changeInputValue}
            />
            <Form.Check
              type="radio"
              id="radio2"
              label="여성"
              name="gender"
              value="FEMALE"
              checked={survey.gender === 'FEMALE'}
              onChange={changeInputValue}
            />
          </Form.Group>
          <br />

          {/* 거주지 Select */}
          <Form.Group className="mt-3">
            <Form.Label>
              <h5>
                거주지역 <small>(택1)</small>
              </h5>
            </Form.Label>
            <Form.Control
              as="select"
              custom
              value={survey.area}
              name="area"
              onChange={changeInputValue}
            >
              <option value="">-- 거주지역을 선택해 주세요 --</option>
              <option value="서울">서울</option>
              <option value="경기">경기</option>
              <option value="기타">기타</option>
            </Form.Control>
          </Form.Group>
          <br />

          {/* 이상형 CheckBox */}
          <Form.Group className="mt-3">
            <Form.Label>
              <h5>
                이상형 <small>(1개이상 선택)</small>
              </h5>
            </Form.Label>
            {/* 체크박스 1 */}
            <Form.Check
              type="checkbox"
              id="checkbox1"
              label="송민호"
              checked={checkboxStates.송민호}
              onChange={() => handleCheckboxChange('송민호')}
            />

            {/* 체크박스 2 */}
            <Form.Check
              type="checkbox"
              id="checkbox2"
              label="이승원"
              checked={checkboxStates.이승원}
              onChange={() => handleCheckboxChange('이승원')}
            />

            {/* 체크박스 3 */}
            <Form.Check
              type="checkbox"
              id="checkbox3"
              label="서현기"
              checked={checkboxStates.서현기}
              onChange={() => handleCheckboxChange('서현기')}
            />
          </Form.Group>
          <hr />
          <br />

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
