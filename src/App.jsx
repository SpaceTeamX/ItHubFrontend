import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Articles from './pages/Articles/Articles';
import Vacancy from './pages/Vacancy/Vacancy';
import News from './pages/news/News';
import Singup from './pages/Singup/Singup';
import style from './app.module.scss';
import Video from './pages/Video/Video';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { setNavItemId } from './redux/navBarSlice';
// import { axiosGetUser } from './redux/singupSlice';



const App = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  if (location.pathname == '/') { dispatch(setNavItemId(0)) }
  return (
    <div className={style.app}>
        <Routes>
          <Route path='/' element={<News />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/vacancy' element={<Vacancy />} />
          <Route path='/video' element={<Video />} />
          <Route path='/singup' element={<Singup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
  );
}

export default App;
