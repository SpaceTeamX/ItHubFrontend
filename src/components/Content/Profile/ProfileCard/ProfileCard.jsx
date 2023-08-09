import { useDispatch } from 'react-redux'
import style from './profilecard.module.scss'
import { setLogout } from '../../../../redux/singupSlice'
import { useNavigate } from 'react-router-dom'


const ProfileCard = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const handlLogout = () => {
        dispatch(setLogout())
        navigate("/")
    }

    return (
        <div className={style.card}>
            <div className={style.profile}>
                <p>Профиль</p>
            </div>
            <div className={style.info}>
                <div className={style.wrapper}>
                    <p>Логин</p>
                    <input type="text" placeholder='Введите имя' />
                </div>
                <div className={style.wrapper}>
                    <p>Почта</p>
                    <input type="text" placeholder='Введите почту' />
                </div>
                <div className={style.wrapper}>
                    <p>Имя</p>
                    <input type="text" placeholder='Введите имя' />
                </div>
                <div className={style.wrapper}>
                    <p>Фамилия</p>
                    <input type="text" placeholder='Введите фамилию' />
                </div>
                <div className={style.wrapper}>
                    <p>Возраст</p>
                    <input type="text" placeholder='Введите свой возраст' />
                </div>
                <div className={style.wrapper}>
                    <p>Страна</p>
                    <input type="text" placeholder='Введите страну проживания' />
                </div>
                <div className={style.wrapper}>
                    <p>Город</p>
                    <input type="text" placeholder='Введите город' />
                </div>
            </div>
            <div className={style.btnWrapper}>
                <button>Сохранить</button>
                <button onClick={() => handlLogout()} className={style.exit}>Выйти</button>
            </div>
        </div>
    )
}

export default ProfileCard