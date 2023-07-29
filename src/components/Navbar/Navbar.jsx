import NavBarItem from './NavBarItem/NavBarItem';
import style from './navbar.module.scss';

const Navbar = () => {

  const navList = [
    { name: 'Новости', link: '/', img: '/public/assets/Iconly/Light outline/Calendar.svg' },
    { name: 'Статьи', link: '/articles', img: '/public/assets/Iconly/Light outline/Document.svg' },
    { name: 'Вакансии', link: '/vacancy', img: '/public/assets/Iconly/Light-Outline/Work.svg' },
    { name: 'Видео', link: '/video', img: '/public/assets/Video.svg' },
  ];


  return (
    <div className={style.navbar}>
      <div className={style.navList}>
        {navList.map((item, index) => <NavBarItem item={item} index={index} key={index} />)}
      </div>
    </div>
  );
};

export default Navbar;
