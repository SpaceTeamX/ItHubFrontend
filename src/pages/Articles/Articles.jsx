import Filters from '../../components/Filters/Filters'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import style from './articles.module.scss'

const Articles = () => {
    return (
        <>
            <Header />
            <div className={style.wrapper}>
                <Navbar />
                <div>
                    <Filters />
                    <div className={style.content}>
                        {[...new Array(2)].map((item, index) =>
                            <div className={style.card} key={index}>{item}</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Articles