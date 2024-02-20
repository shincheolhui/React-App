import React from 'react';
import { styled } from 'styled-components';

// ↓ 하나의 component 로 생성 (재사용을 하기 위해!)

// styled-component 를 쓰는 장점 :
//  JS 파일과 CSS 파일이 하나로 합쳐진다. → 코드 유지관리 편의성
//  만약 CSS 파일을 따로 만들 경우.  이를 수정했을때, 다른 참조하는 페이지도 망가질수 있다.
//  디자인 자체도 component 화 하는 거다.

const StyledHeaderDiv = styled.div`
  border: 2px solid blue;
  margin: 10px;
  height: 200px;
`;

const Header = () => {
  return (
    <StyledHeaderDiv>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </StyledHeaderDiv>
  );
};

export default Header;
