import style from './profilecard.module.scss'

const ProfileCard = () => {
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
            <div>
                <button>Сохранить</button>
            </div>
        </div>
    )
}

export default ProfileCard