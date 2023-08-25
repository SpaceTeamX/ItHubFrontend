import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setNavItemId } from '../../redux/navBarSlice';
import { axiosGetUser } from '../../redux/singupSlice';
import CreateArticle from '../CreateArticle/CreateArticle';
import style from './header.module.scss'

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.singup.user);
  const [openModalWindow, setOpenModalWindow] = useState(false)

  const handleUserClick = () => {
    dispatch(setNavItemId(null));
  };

  useEffect(() => {
    dispatch(axiosGetUser());
  }, [])

  const [isActive, setIsActive] = useState(false);

  return (
    <div className={style.header}>
      {openModalWindow && <CreateArticle setCheckActive={setOpenModalWindow} />}
      <Link to='/'>
        <img className={style.logo} src="/assets/logo.svg" alt="LogoImg" />
      </Link>

      <div className={style.wrapper}>
        <div className={style.buttonWrapper}>

          <button onClick={() => setIsActive(!isActive)} className={style.button} >
            <img src="/assets/plus.svg" alt="plusIcon" />
            <p>Создать</p>
          </button>
          {(isActive) &&
            <div className={style.popup}>
              <ul>
                <li>
                  <img src="/public/assets/Iconly/Light outline/Document.svg" alt="newPostImg" />
                  <p onClick={() => setOpenModalWindow(true)}>Статью</p>
                </li>
                <li>
                  <img src="/public/assets/Iconly/Light-Outline/Work.svg" alt="workImg" />
                  <p>Вакансию</p>
                </li>
              </ul>
            </div>
          }
        </div>

        {userData ? (
          <Link to='/profile' onClick={handleUserClick} className={style.login}>
            <img src='/assets/user.svg' alt="user" />
            <p className={style.login}>{userData.user.username}</p>
          </Link>) : (
          <Link to='/login' className={style.login}>
            <img src='/assets/user.svg' alt="userIcon" />
            <p>Войти</p>
          </Link>)
        }
      </div>
    </div>
  )
}

export default Header;
