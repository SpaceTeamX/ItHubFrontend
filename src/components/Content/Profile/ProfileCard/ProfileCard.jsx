import { useDispatch, useSelector } from 'react-redux'
import style from './profilecard.module.scss'
import {setLogout } from '../../../../redux/singupSlice'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'


const ProfileCard = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {token, userData} = useSelector(state => state.singup)
    const handlLogout = () => {
        dispatch(setLogout())
        navigate("/")
    }
    const onSubmit = (data) => {
        console.log(data)
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className={style.card}>
            <div className={style.profile}>
                <p>Профиль</p>
            </div>
            <form
                action="post"
                onSubmit={handleSubmit(onSubmit)}
                className={style.info}
            >
                <div className={style.wrapper}>
                    <p>Логин</p>
                    <input value={userData?.user.username || []} type="text" readOnly placeholder='Введите имя' />
                </div>
                <div className={style.wrapper}>
                    <p>Почта</p>
                    <input value={userData?.user.email || []} type="text" readOnly placeholder='Введите почту' />
                </div>
                <div className={style.wrapper}>
                    <p>Имя</p>
                    <input {...register("first_name", { required: false })} type="text" placeholder='Введите имя' />
                </div>
                <div className={style.wrapper}>
                    <p>Фамилия</p>
                    <input {...register("last_name", { required: false })} type="text" placeholder='Введите фамилию' />
                </div>
                <div className={style.wrapper}>
                    <p>Возраст</p>
                    <input {...register("age", { required: false })} type="text" placeholder='Введите свой возраст' />
                </div>
                <div className={style.wrapper}>
                    <p>Пол</p>
                    <input {...register("gender", { required: false })} type="text" placeholder='Введите свой пол' />
                </div>
                <div className={style.wrapper}>
                    <p>Город</p>
                    <input {...register("location", { required: false })} type="text" placeholder='Введите город' />
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