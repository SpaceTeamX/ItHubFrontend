import NavBarItem from './NavBarItem/NavBarItem'
import style from './navbar.module.scss'

const Navbar = () => {

  const navList = [
    { name: 'Новости', img: '/public/assets/Iconly/Light outline/Calendar.svg' },
    { name: 'Статьи', img: '/public/assets/Iconly/Light outline/Document.svg' },
    { name: 'Резюме', img: '/public/assets/Iconly/Light-Outline/Work.svg' },
    { name: 'Видео', img: '/public/assets/Video.svg' },
  ]


  return (
    <div className={style.navbar}>
      <div className={style.navList}>
        {navList.map((item, index) => <NavBarItem item={item} index={index} key={index} />)}
      </div>
      <button>
        <div className={style.btn}>
          <img src="/public/assets/newpost.svg" alt="pen" />
          <p>Написать пост</p>
        </div>
      </button>
    </div>
  )
}

export default Navbar