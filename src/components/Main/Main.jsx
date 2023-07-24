import Content from './Content/Content'
import Navbar from './Navbar/Navbar'
import style from './main.module.scss'

const Main = () => {
  return (
    <div className={style.main}>
      <Navbar />
      <Content/>
    </div>
  )
}

export default Main