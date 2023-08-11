import style from './filter.module.scss'

const Filter = () => {
    return (
        <div className={style.filter}>
            <img src="/assets/filter.svg" alt="filter" />
            <p>Фильтр</p>
        </div>
    )
}

export default Filter