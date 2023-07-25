import style from './articles.module.scss'

const Articles = () => {
    return (
        <div className={style.content}>
            {[...new Array(3)].map((item, index) =>
                <div className={style.card} key={index}>{item}</div>
            )}
        </div>
    )
}

export default Articles