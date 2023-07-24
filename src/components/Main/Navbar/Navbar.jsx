import style from './navbar.module.scss'

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.active}>
        <img src="/public/assets/Iconly/Light outline/Calendar.svg" alt="" />
        <p>Новости</p>
      </div>
      <div className={style.wrapper}>
        <img src="/public/assets/Iconly/Light outline/Calendar.svg" alt="" />
        <p>Новости</p>
      </div>
      <div className={style.wrapper}>
        <img src="/public/assets/Iconly/Light outline/Calendar.svg" alt="" />
        <p>Новости</p>
      </div>
      <div className={style.wrapper}>
        <img src="/public/assets/Iconly/Light outline/Calendar.svg" alt="" />
        <p>Новости</p>
      </div>
    </div>
  )
}

export default Navbar