import style from "./login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import eyeoffIcon from '../../../../public/assets/Iconly/Light-Outline/eyeoff.svg';
import lockIcon from '../../../../public/assets/Iconly/Light-OutLine/lock.svg';
import mailIcon from '../../../../public/assets/Iconly/Light-Outline/mail.svg';
import eyeOnIcon from '../../../../public/assets/Iconly/Light-Outline/eyeOn.svg';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { axiosAuth } from "../../../redux/singupSlice";
import Loader from '../../Elements/Loader/Loader'

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleClickCreate = () => {
    navigate('/singup')
  }


  const { register, handleSubmit, formState: { errors } } = useForm();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const onSubmit = (data) => {
    dispatch(axiosAuth(data))
  }

  const { status } = useSelector(state => state.singup)


  return (
    <div className={style.singup}>
      <div className={style.singupContent}>
        {status == 'loading' ? <Loader /> : (
          <div className={style.form}>
            <Link to='/'>
              <img src="/assets/logo.svg" alt="" />
            </Link>
            <span className={style.HelloProgram}>Авторизация</span>
            <form
              action="post"
              onSubmit={handleSubmit(onSubmit)}
              className={style.formInputs}
            >
              {errors.username && <div className={style.errorsField}>Это поле обязательно к заполнению:</div>}
              <div className={style.inputContainer}>
                <div className={style.iconContainer}>
                  <img src={mailIcon} alt="Mail Icon" />
                </div>
                <input type='email' {...register("username", { required: true })} className={style.inputss} placeholder="Почта" />
              </div>

              {errors.password && <div className={style.errorsField}>Это поле обязательно к заполнению:</div>}
              <div className={style.inputContainer}>
                <div className={style.iconContainer}>
                  <img src={lockIcon} alt="lockIcon" className={style.eye} />
                </div>
                <input type={passwordVisible ? "text" : "password"} {...register("password", { required: true })} className={style.inputss} placeholder="Пароль" />
                <button className={style.iconContainerEye} onClick={togglePasswordVisibility}>
                  <img src={passwordVisible ? eyeOnIcon : eyeoffIcon} alt="eyeoffIcon" className={style.eye} />
                </button>
              </div>

              <div onClick={handleClickCreate} className={style.createAcc}>
                {status == 'error' && <p className={style.error}>Неправильный логин или пароль</p>}
                <p>Создать аккаунт</p>
              </div>
              <div className={style.ButtonContainer}>
                <button type="submit" className={style.login}>Войти</button>
              </div>
            </form>
          </div>
        )}
        {status == 'success' && navigate('/')}

      </div>
    </div>
  );
};

export default Login;
