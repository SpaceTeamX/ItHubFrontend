import { useDispatch, useSelector } from 'react-redux';
import { axiosChangeUser, setLogout } from '../../../redux/singupSlice';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import style from './profilecard.module.scss';


const ProfileCard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector(state => state.singup.userData);

    const [userData, setUserData] = useState({
        login: userInfo?.user.username,
        email: userInfo?.user.email,
        first_name: userInfo?.first_name,
        last_name: userInfo?.last_name,
        age: userInfo?.age,
        gender: userInfo?.gender,
        location: userInfo?.location
    });

    const handlLogout = () => {
        localStorage.removeItem('token');
        dispatch(setLogout());
        navigate("/")
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(axiosChangeUser(userData));
    };

    // const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className={style.card}>
            <div className={style.profile}>
                <p>Профиль</p>
            </div>
            <form onSubmit={handleSubmit} className={style.info}>
                <div className={style.wrapper}>
                    <p>Логин</p>
                    <input value={userData.login} type="text" readOnly placeholder='Введите имя' />
                </div>
                <div className={style.wrapper}>
                    <p>Почта</p>
                    <input value={userData.email} type="text" readOnly placeholder='Введите почту' />
                </div>
                <div className={style.wrapper}>
                    <p>Имя</p>
                    <input value={userData.first_name} onChange={(e) => setUserData({ ...userData, first_name: e.target.value })} type="text" placeholder='Введите имя' />
                </div>
                <div className={style.wrapper}>
                    <p>Фамилия</p>
                    <input value={userData.last_name} onChange={(e) => setUserData({ ...userData, last_name: e.target.value })} type="text" placeholder='Введите фамилию' />
                </div>
                <div className={style.wrapper}>
                    <p>Возраст</p>
                    <input value={userData.age} onChange={(e) => setUserData({ ...userData, age: e.target.value })} type="text" placeholder='Введите свой возраст' />
                </div>
                <div className={style.wrapper}>
                    <p>Пол</p>
                    <input value={userData.gender} onChange={(e) => setUserData({ ...userData, gender: e.target.value })} type="text" placeholder='Введите свой пол' />
                </div>
                <div className={style.wrapper}>
                    <p>Город</p>
                    <input value={userData.location} onChange={(e) => setUserData({ ...userData, location: e.target.value })} type="text" placeholder='Введите город' />
                </div>
                <div className={style.btnWrapper}>
                    <button type='submit'>Сохранить</button>
                    <button onClick={() => handlLogout()} className={style.exit}>Выйти</button>
                </div>
            </form >

        </div>
    )
}

export default ProfileCard