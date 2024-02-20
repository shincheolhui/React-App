import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledHeaderDiv = styled.div`
  border: 2px solid blue;
  margin: 10px;
`;

// styled.Link <- 이딴거 없음!
// const StyledHeadLink = styled.Link;

// 상속받아서 쓰자~~
const StyledHeadLink = styled(Link)`
  color: red;
  text-decoration: none;
`;

const Header = () => {
  return (
    <>
      <Navbar bg="primary">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* 페이지가 전체 로딩되는 코드, 이렇게 하면 안된다는 것을 보여줬다.
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login/80">/login/80</Nav.Link>
            <Nav.Link href="/login/90">/login/90</Nav.Link> */}

            {/* 위처럼 사용하지 말고 React의 Link태크에 bootstrap의 class를 사용한다! */}
            {/* 그러면 해당 링크(태그)만 리로드된다. */}
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/login/80">
              /login/80
            </Link>
            <Link className="nav-link" to="/login/90">
              /login/90
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <StyledHeaderDiv>
        <ul>
          {/* <li> a태그를 사용하면 화면 전체가 리로딩 발생한다. React는 처음 화면 렌더링할 때 많은 로드가 발생한다!!!
          이것은 a태크가 동작한 것이 아니다! url로 요청만 했을뿐, App141의 Route태그가 동작한 것이다!!!
          <a href="/">홈</a>
          </li>
          <li>
          이것은 a태크가 동작한 것이 아니다! url로 요청만 했을뿐, App141의 Route태그가 동작한 것이다!!!
          <a href="/login">로그인</a>
        </li> */}

          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            {/* 위에서 styled(Link) 이렇게 상속받아 style을 적용한 태그를 여기서 사용. */}
            <StyledHeadLink to="/login/10">로그인/10</StyledHeadLink>
          </li>
        </ul>
      </StyledHeaderDiv>
    </>
  );
};

export default Header;
