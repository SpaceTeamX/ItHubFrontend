import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setNavItemId } from '../../redux/navBarSlice';

const Header = () => {
  const dispatch = useDispatch()
  const { success } = useSelector(state => state.auth)

  const handleUserClick = () => {
    dispatch(setNavItemId(null))
  }

  return (
    <div className={style.header}>
      <Link to='/'>
        <img className={style.logo} src="/assets/logo.svg" alt="" />
      </Link>

      <div className={style.wrapper}>
        <div className={style.button}>
          <img src="/assets/plus.svg" alt="plusIcon" />
          <p>Создать</p>
        </div>
        {success ? (
          <Link to='/profile' onClick={handleUserClick} className={style.login}>
            <img src='/assets/user.svg' alt="user" />
            <p className={style.login}>User</p>
          </Link>) : (
          <Link className={style.login}>
            <img src='/assets/user.svg' alt="userIcon" />
            <p>Войти</p>
          </Link>)
        }
      </div>


    </div>
  )
}

export default Header;
