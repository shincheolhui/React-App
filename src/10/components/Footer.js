import React from 'react';
import { styled } from 'styled-components';

const StyledFooterDiv = styled.div`
  border: 2px solid blue;
  margin: 10px;
  height: 200px;
`;

const Footer = () => {
  return (
    <StyledFooterDiv>
      <ul>
        <li>주소: 서울 역삼동</li>
        <li>연락처: 02-1111-2222</li>
      </ul>
    </StyledFooterDiv>
  );
};

export default Footer;
