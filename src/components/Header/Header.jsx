import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Filters from './Filters/Filters'
import Logo from './Logo/Logo'
import userIcon from '../../../public/assets/Iconly/Light outline/userIcon.png'
import style from './header.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setNavItemId } from '../../redux/navBarSlice';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { success } = useSelector(state => state.auth)

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleUserClick = () => {
    navigate('/profile')
    dispatch(setNavItemId(null))
  }

  return (
    <div className={style.header}>
      <Link to='/'>
        <Logo />
      </Link>
      <Filters />
      {success ? <p onClick={handleUserClick} className={style.login}>User</p> :
        <div className={style.login} onClick={handleLoginClick}>
          <img src={userIcon} alt="user" />
          <p>Войти</p>
        </div>}
    </div>
  )
}

export default Header;
