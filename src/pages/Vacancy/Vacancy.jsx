import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import VacancyCard from './VacancyCard/VacancyCard'
import VacancyFilter from './VacancyFilter/VacancyFilter'
import style from './vacancy.module.scss'

const Vacancy = () => {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Navbar />
        <div className={style.vacancy}>
          <div className={style.info}>
            <h3>Вакансии</h3>
            <p>Разместить вакансию</p>
          </div>
          <div className={style.content}>
            <div className={style.main}>
              {[...new Array(2)].map((item, index) =>
                <VacancyCard item={item} key={index} />
              )}
            </div>
            <VacancyFilter />
          </div>
        </div>
      </div>
    </>
  )
}

export default Vacancy