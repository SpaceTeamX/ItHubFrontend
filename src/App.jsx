import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation

import Articles from './components/Content/Articles/Articles';
import Vacancy from './components/Content/Resume/Resume';
import News from './components/Content/news/News';
import Singup from './components/Content/Singup/Singup';
import style from './app.module.scss';
import Video from './components/Content/Video/Video';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Content/Login/Login';


const App = () => {
  const location = useLocation();

  const isSingupPage = location.pathname === '/singup';
  const isLoginPage = location.pathname === '/login';

  return (
    <div className={style.app}>
      {!isSingupPage && !isLoginPage && <Header />}
      <div className={style.main}>
        {!isSingupPage && !isLoginPage && <Navbar />}
        <Routes>
          <Route path='/' element={<News />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/resume' element={<Vacancy />} />
          <Route path='/video' element={<Video />} />
          <Route path='/singup' element={<Singup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
