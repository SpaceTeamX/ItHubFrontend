import React from 'react';
import { useNavigate } from 'react-router-dom';
import Filters from './Filters/Filters'
import Logo from './Logo/Logo'
import userIcon from '../../../public/assets/Iconly/Light outline/userIcon.png'
import style from './header.module.scss'
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const { islogin } = useSelector(state => state.singup)
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className={style.header}>
      <Logo />
      <Filters />
      {islogin ? <p>User</p> :
        <div className={style.login} onClick={handleLoginClick}>
          <img src={userIcon} alt="user" />
          <p>Войти</p>
        </div>}
    </div>
  )
}

export default Header;
