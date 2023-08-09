import { useSelector } from 'react-redux'
import ProfileCard from './ProfileCard/ProfileCard'
import style from './profile.module.scss'

const Profile = () => {

  const { user } = useSelector(state => state.singup)

  return (
    <div className={style.content}>
      <div className={style.wrapper}>
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
  )
}

export default Profile