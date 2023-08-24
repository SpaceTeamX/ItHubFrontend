import { useDispatch, useSelector } from 'react-redux'
import style from './navbaritem.module.scss'
import { setNavItemId } from '../../../redux/navBarSlice'
import { NavLink } from 'react-router-dom'

const NavBarItem = ({ item, index }) => {

  const dispatch = useDispatch()
  const { navItemId } = useSelector(state => state.navBar)

  const handleClick = (index) => {
    dispatch(setNavItemId(index))
  }

  return (
    <div className={index == navItemId ? style.active : style.wrapper}>
      <NavLink
        to={item.link}
        className={style.btn}
        onClick={() => handleClick(index)}
      >
        <img src={item.img} alt="" />
        <p>{item.name}</p>
      </NavLink>
    </div>
  )
}

export default NavBarItem