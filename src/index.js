import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Router 설정을 위해 라이브러리 설치. 서버 종료 후 yarn add react-router-dom 
// 이후 라이브러리 불러오기
import {BrowserRouter} from 'react-router-dom'
// 부트스트랩을 모든곳에서 사용할 수 있게됨
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* 이제 App은 브라우저 라우터를 사용할 수 있는 상태가 됨 */
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// reportWebVitals 은 그냥 제거
