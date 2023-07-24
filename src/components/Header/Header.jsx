import Filters from './Filters/Filters'
import Logo from './Logo/Logo'
import style from './header.module.scss'

const Header = () => {
  return (
    <div className={style.header}>
      <Logo />
      <Filters />
      <div className={style.login}>Войти</div>
    </div >
  )
}

export default Header