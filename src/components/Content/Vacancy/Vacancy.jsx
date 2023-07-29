import style from './vacancy.module.scss'

const Vacancy = () => {
  return (
    <div className={style.content}>
      {[...new Array(2)].map((item, index) =>
        <div className={style.card} key={index}>{item}</div>
      )}
    </div>
  )
}

export default Vacancy