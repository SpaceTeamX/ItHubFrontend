import style from './filters.module.scss'

const Filters = () => {
    return (
        <div className={style.filters}>
            <div className={style.categories}>
                <div className={style.wrapper}>
                    <div className={style.popular}>popular</div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.new}>new</div>
                </div>
            </div>
            <div className={style.search}>search</div>
            <div className={style.filter}>filter</div>
        </div>
    )
}

export default Filters