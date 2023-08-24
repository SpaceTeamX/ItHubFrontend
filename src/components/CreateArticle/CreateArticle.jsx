import React from 'react';
import style from './createArticle.module.scss';

const CreateArticle = ({ setCheckActive }) => {
    return (
        <div className={style.containerModalWindow} onClick={() => setCheckActive(false)}>
            <div className={style.modalWindow}>
                {/* Место для крестика */}
                <form className={style.articleContent} onClick={(e) => e.stopPropagation()}>
                    <h1 className={style.articleTitle}>Создание статьи</h1>
                    <div className={style.articleRow}>
                        <span className={style.articleCaption}>Название</span>
                        <input className={style.articleInput} type="text" />
                    </div>
                    <div className={style.articleRow}>
                        <span className={style.articleCaption}>Описание</span>
                        <textarea className={style.articleTextarea} type="text" />
                    </div>
                    <div className={style.articleRow}>
                        <div className={style.containerBtn}>
                            <button className={style.btn}>Создать</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateArticle