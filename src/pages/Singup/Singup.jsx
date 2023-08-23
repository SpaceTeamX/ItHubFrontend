import style from "./singup.module.scss";
import { Link, useNavigate } from "react-router-dom";
import desktop from '/public/assets/Iconly/Light-Outline/Desktop.png';
import eyeoffIcon from '/public/assets/Iconly/Light-Outline/eyeoff.svg';
import lockIcon from '/public/assets/Iconly/Light-OutLine/lock.svg';
import mailIcon from '/public/assets/Iconly/Light-Outline/mail.svg';
import userIcon from '/public/assets/Iconly/Light-Outline/user.svg';
import eyeOnIcon from '/public/assets/Iconly/Light-Outline/eyeOn.svg';
import Confetti from "react-confetti";
import Loader from '../../components/Loader/Loader'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { axiosSingUp } from "../../redux/singupSlice";

const Singup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { status, isLoggedIn } = useSelector(state => state.singup)

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfettiClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const onSubmit = (data) => {
    dispatch(axiosSingUp(data))
  }

  useEffect(() => {
    if (isLoggedIn === true) {
      navigate('/')
    }

  }, [isLoggedIn])

  return (
    <div className={style.singup}>
      <div className={style.singupContent}>
        <div className={style.wrapper}>
          {status == 'loading' ? <Loader /> : (
            <div className={style.form}>
              <Link to='/'>
                <img src="/assets/logo.svg" alt="" />
              </Link>
              <span className={style.HelloProgram}>Привет Программист!</span>
              <form
                action="post"
                onSubmit={handleSubmit(onSubmit)}
                className={style.formInputs}
              >
                {errors.username && <div className={style.errorsField}>Это поле обязательно к заполнению:</div>}
                <div className={style.inputContainer}>
                  <div className={style.iconContainer}>
                    <img src={userIcon} alt="userIcon" />
                  </div>
                  <input type="text" {...register("username", { required: true })} className={style.inputss} placeholder="Логин" />
                </div>

                {errors.email && <div className={style.errorsField}>Это поле обязательно к заполнению:</div>}
                <div className={style.inputContainer}>
                  <div className={style.iconContainer}>
                    <img src={mailIcon} alt="Mail Icon" />
                  </div>
                  <input type='email' {...register("email", { required: true })} className={style.inputss} placeholder="Почта" />
                </div>

                {errors.password && <div className={style.errorsField}>Это поле обязательно к заполнению:</div>}
                <div className={style.inputContainer}>
                  <div className={style.iconContainer}>
                    <img src={lockIcon} alt="lockIcon" className={style.eye} />
                  </div>
                  <input type={passwordVisible ? "text" : "password"} {...register("password", { required: true })} className={style.inputss} placeholder="Пароль" />
                  <button type='button' className={style.iconContainerEye} onClick={togglePasswordVisibility}>
                    <img src={passwordVisible ? eyeOnIcon : eyeoffIcon} alt="eyeoffIcon" className={style.eye} />
                  </button>
                </div>

                {status == 'error' && (
                  <p className={style.error}>Логин или почта уже используется</p>
                )}

                <div className={style.ButtonContainer}>
                  <button type="submit" className={style.CreateAccount}>Создать аккаунт</button>
                </div>
              </form>
              <div className={style.CheckBox} >
                <span className={style.Info}>
                  <p>Создавая аккаунт вы соглашаетесь с </p>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" onClick={handleConfettiClick}>Условиями использования</a>
                </span>
              </div>
            </div>
          )}
        </div>
        <div className={style.imgContainer}>
          <img src={desktop} alt="" />
        </div>

        {showConfetti && <Confetti />}
      </div>
    </div>
  );
};

export default Singup;
