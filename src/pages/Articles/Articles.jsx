import Filters from '../../components/Filters/Filters';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import style from './articles.module.scss';

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
                            <ArticleCard key={index}/>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Articles