import { Link } from 'react-router-dom'
import Filters from './Filters/Filters'
import Logo from './Logo/Logo'
import style from './header.module.scss'

const Header = () => {
  return (
    <div className={style.header}>
      <Logo />
      <Filters />
      <Link to='/singup'>
        <div className={style.login}>
          <img src="/assets/user.svg" alt="" />
          <p>Войти</p>
        </div>
      </Link>
    </div >
  )
}

export default Header