import style from './vacancycard.module.scss'

const VacancyCard = () => {
    return (
        <div className={style.card}>
            <div className={style.company}>
                <h3>Авито</h3>
                <p>10 августа</p>
            </div>
            <div className={style.title}>
                <h2>Middle iOS-разработчик многопользовательской платформы</h2>
            </div>
            <div className={style.info}>
                <p>Удаленно</p>
                <p>Зарплата по договоренности</p>
                <p>Частичная занятость</p>
            </div>
        </div>
    )
}

export default VacancyCard