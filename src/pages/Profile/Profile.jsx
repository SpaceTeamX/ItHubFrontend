import { useSelector } from 'react-redux'
import ProfileCard from './ProfileCard/ProfileCard'
import style from './profile.module.scss'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
const Profile = () => {

  const { user, userData } = useSelector(state => state.singup)
  console.log(userData)
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
                <p>id: {user.id}</p>
                <p className={style.username}>{user.username}</p>
              </div>
            </div>
            <ProfileCard />
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile