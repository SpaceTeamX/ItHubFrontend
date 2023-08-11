import style from './vacancyfilter.module.scss'

import React from 'react'
import Select from 'react-select'

const workplace = [
    { value: 'all', label: 'Любой' },
    { value: 'office', label: 'Офис' },
    { value: 'remote', label: 'Удалённо' }
]

const city = [
    { value: 'all', label: 'Любой' },
    { value: 'Москва', label: 'Москва' },
    { value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
    { value: 'Новосибирск', label: 'Новосибирск' },
    { value: 'Екатеринбург', label: 'Екатеринбург' },
    { value: 'Нижний Новгород', label: 'Нижний Новгород' },
    { value: 'Красноярск', label: 'Красноярск' },
    { value: 'Челябинск', label: 'Челябинск' },
    { value: 'Уфа', label: 'Уфа' },
    { value: 'Ростов-на-Дону', label: 'Ростов-на-Дону' },
    { value: 'Краснодар', label: 'Краснодар' },
    { value: 'Омск', label: 'Омск' },
    { value: 'Воронеж', label: 'Воронеж' },
    { value: 'Пермь', label: 'Пермь' },
    { value: 'Волгоград', label: 'Волгоград' },
]


const customStyles = {
    option: (defaultStyles, state) => ({
        ...defaultStyles,
        color: state.isSelected ? "#464646" : "",
        fontWeight: state.isSelected ? "500" : "400",
        backgroundColor: state.isSelected ? "#b2d4ff" : "#fff",
    }),

    control: (defaultStyles) => ({
        ...defaultStyles,
        backgroundColor: "#f5f5f5",
        padding: "5px",

        border: 'none',
        boxShadow: "none",
    }),

};


const VacancyFilter = () => {
    return (
        <div className={style.filter}>
            <h3>Фильтры вакансий</h3>
            <div className={style.selectWrap}>
                <label>Тип работы</label>
                <Select defaultValue={workplace[0]} className={style.select} styles={customStyles} options={workplace} />
            </div>
            <div className={style.selectWrap}>
                <label>Город</label>
                <Select defaultValue={workplace[0]} className={style.select} styles={customStyles} options={city} />
            </div>
            {/* <div className={style.btn}>
                <button>Применить</button>
                <button><img src="/public/assets/reset.svg" alt="" /></button>
            </div> */}
        </div>
    )
}

export default VacancyFilter