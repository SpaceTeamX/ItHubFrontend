import style from './newscard.module.scss'

const NewsCard = () => {
    return (
        <div className={style.card}>
            <div className={style.category}>
                <p>Технологии</p>
            </div>
            <div className={style.title}>
                <p>Лучшие смартфоны до 20 000 рублей в июле 2023 года</p>
            </div>
            <div className={style.wrapper}>
                <div className={style.date}>
                    <p>Сегодня 23:00</p>
                </div>
                <div className={style.views}>
                    <img src="/assets/eye.svg" alt="" />
                    <p>1</p>
                </div>
            </div>
        </div>
    )
}

export default NewsCard