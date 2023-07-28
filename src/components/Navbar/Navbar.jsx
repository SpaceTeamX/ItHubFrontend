import { useLocation } from 'react-router-dom';
import NavBarItem from './NavBarItem/NavBarItem';
import style from './navbar.module.scss';

const Navbar = () => {
  const location = useLocation();

  const navList = [
    { name: 'Новости', link: '/', img: '/public/assets/Iconly/Light outline/Calendar.svg' },
    { name: 'Статьи', link: '/articles', img: '/public/assets/Iconly/Light outline/Document.svg' },
    { name: 'Резюме', link: '/resume', img: '/public/assets/Iconly/Light-Outline/Work.svg' },
    { name: 'Видео', link: '/video', img: '/public/assets/Video.svg' },
  ];

  const isNewsPage = location.pathname === '/';
  const isProfilePage = location.pathname === '/profile'

  const getPageName = () => {
    if (isNewsPage) {
      return 'Новости';
    } else if (location.pathname === '/articles') {
      return 'Создать Статью';
    } else if (location.pathname === '/resume') {
      return 'Создать Резюме';
    } else if (location.pathname === '/video') {
      return 'Создать Видео';
    }
    return '';
  };

  return (
    <div className={style.navbar}>
      <div className={style.navList}>
        {navList.map((item, index) => <NavBarItem item={item} index={index} key={index} />)}
      </div>
      {isNewsPage || isProfilePage ? null : (
          <button className={style.writePostButton}>
            <div className={style.btn}>
              <img src="/public/assets/newpost.svg" alt="pen" /> 
              <p>{getPageName()}</p>
            </div>
          </button>
      )}
    </div>
  );
};

export default Navbar;
