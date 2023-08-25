import React from 'react';
import style from './articleCard.module.scss';

const ArticleCard = () => {
    return (
        <div className={style.articleContainer}>
            <div className={style.articleHeader}>
                Тема <span>P</span>1
            </div>
            <div className={style.articleMain}>
                <h1 className={style.articleTitle}>Название</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam illum pariatur velit fugiat maiores in iste tempore, praesentium beatae quod a culpa alias laudantium labore explicabo! Sit, dolores quis?</p>
            </div>
            <div className={style.articleFooter}>
                <div className={style.aticleMenu}>
                    <div className={style.articleIcon}>
                        <span>P</span> 5
                    </div>
                    <div className={style.articleIcon}>
                        <span>P</span> 3
                    </div>
                </div>
                <div>
                    <span>З</span>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard