import style from './filters.module.scss'
import Categories from './Categories/Categories'
import Search from './Search/Search'
import Filter from './Filter/Filter'

const Filters = () => {
    return (
        <div className={style.filters}>
            <div className={style.wrapper}>
                <Categories />
                <Search />
            </div>
            <Filter />
        </div>
    )
}

export default Filters