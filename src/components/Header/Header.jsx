import React from 'react';
import { useNavigate } from 'react-router-dom';
import Filters from './Filters/Filters'
import Logo from './Logo/Logo'
import userIcon from '../../../public/assets/Iconly/Light outline/userIcon.png'
import style from './header.module.scss'

const Header = () => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/singup');
  };

  return (
    <div className={style.header}>
      <Logo />
      <Filters />
      <div className={style.login} onClick={handleLoginClick}><img src={userIcon} alt="user" /> Войти</div>
    </div>
  )
}

export default Header;
