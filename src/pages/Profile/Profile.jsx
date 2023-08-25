import { useSelector } from 'react-redux'
import ProfileCard from './ProfileCard/ProfileCard'
import style from './profile.module.scss'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
const Profile = () => {

  const userData = useSelector(state => state.singup.user);
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Navbar />
        <div className={style.content}>
          <div className={style.container}>
            <div className={style.title}>
              <img src="/assets/profileUser.png" alt="userIcon" />
              <div className={style.user}>
                <p>id: {userData?.id}</p>
                <p className={style.username}>{userData.user?.username}</p>
              </div>
            </div>
            {userData && <ProfileCard />}
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile