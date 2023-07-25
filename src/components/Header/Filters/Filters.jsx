import style from './filters.module.scss'
import popular from '/assets/fire-square-svgrepo-com 1.svg'
import clock from '/assets/clock.svg'

const Filters = () => {
    return (
        <div className={style.filters}>
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
            <div className={style.searchWrapper}>
                    <input type="text" placeholder='Поиск'/>
                <div className={style.magnifier}>
                    <img src="/assets/magnifier.svg" alt="magnifier" />
                </div>

            </div>
            <div className={style.filter}>filter</div>
        </div>
    )
}

export default Filters