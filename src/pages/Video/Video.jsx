import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import style from './video.module.scss'

const Video = () => {
    return (
        <>
            <Header />
            <div className={style.wrapper}>
                <Navbar />
                <div className={style.video}>
                    <p> Cтраница находится в разработке :) </p>
                    <img src="/assets/develop.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Video