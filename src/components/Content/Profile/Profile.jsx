import style from './profile.module.scss'

const Profile = () => {
  return (
    <div className={style.content}>
      <div className={style.wrapper}>
        <div className={style.title}>
          <img src="/assets/user.png" alt="userIcon" />
          <div className={style.user}>
            <p>id:1</p>
            <p>UserName</p>
          </div>
        </div>
        <div className={style.card}>Profile</div>
      </div>
    </div>
  )
}

export default Profile