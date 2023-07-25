import NavBarItem from './NavBarItem/NavBarItem';
import style from './navbar.module.scss';

const Navbar = () => {
  const navList = [
    { name: 'Новости', link: '/', img: '/public/assets/Iconly/Light outline/Calendar.svg' },
    { name: 'Статьи', link: '/articles', img: '/public/assets/Iconly/Light outline/Document.svg' },
    { name: 'Резюме', link: '/resume', img: '/public/assets/Iconly/Light-Outline/Work.svg' },
    { name: 'Видео', link: '/video', img: '/public/assets/Video.svg' },
  ];

  return (
    <div className={style.navbar}>
      <div className={style.navList}>
        {navList.map((item, index) => <NavBarItem item={item} index={index} key={index} />)}
      </div>
      <button className={style.writePostButton}>
        <div className={style.btn}>
          <img src="/public/assets/newpost.svg" alt="pen" /> 
          <p>Написать пост</p>
        </div>
      </button>
    </div>
  );
};

export default Navbar;
