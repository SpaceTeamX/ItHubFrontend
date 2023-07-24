import style from './news.module.scss'

const News = () => {
    return (
        <div className={style.content}>
            {[...new Array(5)].map((item, index) =>
                <div className={style.card} key={index}>{item}</div>
            )}
        </div>
    )
}

export default News
