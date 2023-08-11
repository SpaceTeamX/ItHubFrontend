import Filters from '../../components/Filters/Filters'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import NewsCard from './NewsCard/NewsCard'
import style from './news.module.scss'

const News = () => {


    return (
        <>
            <Header />
            <div className={style.wrapper}>
                <Navbar />
                <div>
                    <Filters />
                    <div className={style.content}>
                        {[...new Array(5)].map((item, index) => <NewsCard key={index} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default News
