import style from './newscard.module.scss'

const NewsCard = () => {
    return (
        <div className={style.card}>
            <div className={style.category}>
                <p>Технологии</p>
            </div>
            <div className={style.title}>
                <p>Tesla готовится снова принимать биткоин для оплаты покупки электромобилей</p>
            </div>
            <div className={style.absolute}>
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
        </div>
    )
}

export default NewsCard