import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Articles from './components/Content/Articles/Articles';
import Vacancy from './components/Content/Vacancy/Vacancy';
import News from './components/Content/news/News';
import Singup from './components/Content/Singup/Singup';
import style from './app.module.scss';
import Video from './components/Content/Video/Video';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Content/Login/Login';
import Profile from './components/Content/Profile/Profile';
import Filters from './components/Header/Filters/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { setNavItemId } from './redux/navBarSlice';
// import { axiosGetUser } from './redux/singupSlice';



const App = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  if (location.pathname == '/') { dispatch(setNavItemId(0)) }
  const {  } = useSelector(state => state.singup)

  const isSingupPage = location.pathname === '/singup';
  const isLoginPage = location.pathname === '/login';
  const filtersEllement = location.pathname === '/' || location.pathname === '/articles'
  return (
    <div className={style.app}>
      {!isSingupPage && !isLoginPage && <Header />}
      <div className={style.main}>
        {!isSingupPage && !isLoginPage && <Navbar />}
        <div className={style.content}>
          {filtersEllement && <Filters />}
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
      </div>
    </div>
  );
}

export default App;
