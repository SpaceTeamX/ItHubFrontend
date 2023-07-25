import style from './resume.module.scss'

const Resume = () => {
  return (
    <div className={style.content}>
      {[...new Array(3)].map((item, index) =>
        <div className={style.card} key={index}>{item}</div>
      )}
    </div>
  )
}

export default Resume