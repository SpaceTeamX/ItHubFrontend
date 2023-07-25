import style from './categories.module.scss'
import popular from '/assets/fire-square-svgrepo-com 1.svg'
import clock from '/assets/clock.svg'

const Categories = () => {
    return (
        <div className={style.categories}>
            <div className={style.active}>
                <img className={style.popular} src={popular} alt="popular" />
                <p>Популярное</p>
            </div>
            <div className={style.wrapper}>
                <img className={style.clock} src={clock} alt="clock" />
                <p>Новое</p>
            </div>
        </div>
    )
}

export default Categories