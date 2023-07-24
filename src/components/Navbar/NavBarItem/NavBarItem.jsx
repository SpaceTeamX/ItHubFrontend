import { useDispatch, useSelector } from 'react-redux'
import style from './navbaritem.module.scss'
import { setNavItemId } from '../../../redux/navBarSlice'
import { Link } from 'react-router-dom'

const NavBarItem = ({ item, index }) => {

  const dispatch = useDispatch()
  const { navItemId } = useSelector(state => state.navBar)

  const handleClick = (index) => {

    dispatch(setNavItemId(index))
  }


  return (
    <div className={index == navItemId ? style.active : style.wrapper}>
      <Link
        to={item.link}
        onClick={() => handleClick(index)}
        className={style.btn}
      >
        <img src={item.img} alt="" />
        <p>{item.name}</p>
      </Link>
    </div>
  )
}

export default NavBarItem