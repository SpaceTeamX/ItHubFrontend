import NewsCard from './NewsCard/NewsCard'
import style from './news.module.scss'

const News = () => {


    return (
        <div className={style.content}>
            {[...new Array(5)].map((item, index) => <NewsCard key={index}/>)}
        </div>
    )
}

export default News
