import style from './search.module.scss'

const Search = () => {
    return (
        <div className={style.searchWrapper}>
            <input type="text" placeholder='Поиск' />
            <div className={style.magnifier}>
                <img src="/assets/magnifier.svg" alt="magnifier" />
            </div>
        </div>
    )
}

export default Search