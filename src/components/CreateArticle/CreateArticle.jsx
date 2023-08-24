import React from 'react';
import { useState } from 'react';
import style from './createArticle.module.scss';

const CreateArticle = ({ setCheckActive }) => {
    const [dataArticle, setDataArticle] = useState({ nameArticle: '', descriptionArticle: '' });
    const maxLength = { input: 180, textarea: 320 }

    return (
        <div className={style.containerModalWindow} onClick={() => setCheckActive(false)}>
            <div className={style.modalWindow}>
                {/* Место для крестика */}
                <form className={style.articleContent} onClick={(e) => e.stopPropagation()}>
                    <h1 className={style.articleTitle}>Создание статьи</h1>
                    <div className={style.articleRow}>
                        <span className={style.articleCaption}>Название</span>
                        <div className={style.counter}>{maxLength.input - dataArticle.nameArticle.length}</div>
                        <input value={dataArticle.nameArticle} onChange={(e) => dataArticle.nameArticle.length < maxLength.input ? setDataArticle({ ...dataArticle, nameArticle: e.target.value }) : null} className={style.articleInput} type="text" />
                    </div>
                    <div className={style.articleRow}>
                        <span className={style.articleCaption}>Описание</span>
                        <div className={style.counter}>{maxLength.textarea - dataArticle.descriptionArticle.length}</div>
                        <textarea value={dataArticle.descriptionArticle} onChange={(e) => dataArticle.descriptionArticle.length < maxLength.textarea ? setDataArticle({ ...dataArticle, descriptionArticle: e.target.value }) : null} className={style.articleTextarea} type="text" />
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