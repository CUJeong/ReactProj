import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// 부트스트랩 사용하고 싶으면
// yarn add react-bootstrap bootstrap 로 라이브러리 설치
// Navi 에서만 쓸게 아니므로 import 'bootstrap/dist/css/bootstrap.min.css'; 는 index.js 에 넣어주면 됨
// 공식 가이드 https://react-bootstrap.github.io/docs/components/accordion
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// 위와 같은 import를 한줄로 작성 가능
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import Home from './Home';
import Introduce from './Introduce';
import Resume from './Resume';
import Portfolio from './Portfolio';

// 확인해보면 네비게이션 링크 이동시 페이지 전체가 새로고침 됨. 
// 리액트의 특징은 클라이언트에 모든 화면이 전부 로드되어 있고 페이지 전환시 해당 부분만 교체되는 방식이라 빠를 수 밖에 없다는 점임
// 기존의 href 방식이 아닌 react-router-dom 라이브러리의 Link 를 사용해야함. 
// NavLink를 이용하면 현재 페이지에 해당하는 태그에 active 라는 클래스명이 추가됨 (css 로 active 에 스타일을 줘서 티낼 수 있음 )
import { Link, NavLink } from 'react-router-dom';

function App() {

  console.log("App 컴포넌트 실행"); 

  return (
    <div className="App">

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* 위의 홈(/)과 비교해보면 압도적인 속도차이를 보여줌 */}
              {/* 부트의 Nav 랑 별개로 사용한다면 <Link to="/introduce">자기소개</Link> 와 같이 작성 */}
              <Nav.Link as={Link} to="/introduce">자기소개</Nav.Link>
              <Nav.Link as={NavLink} to="/resume">이력서</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">포트폴리오</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 현재 주소에 대해 Routes 내부의 태그가 매칭되어 들어감 */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/introduce" element={<Introduce />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        {/* Router에 존재하지 않는 주소면 그냥 새로고침되는데 이를 핸들링 하기 */}
        <Route path="/*" element={'존재하지 않는 페이지입니다.'}></Route>
      </Routes>

    </div>
  );
}


// 이게 있어야 다른 파일에서 import 할 수 있음
export default App;
