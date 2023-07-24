import Navbar from './Navbar/Navbar'
import style from './main.module.scss'

const Main = () => {
  return (
    <div className={style.main}>
      <Navbar />
      <div className={style.content}>content</div>
      <div className={style.content}>content</div>
    </div>
  )
}

export default Main