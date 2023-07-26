import style from "./login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import eyeoffIcon from '../../../../public/assets/Iconly/Light-Outline/eyeoff.svg';
import lockIcon from '../../../../public/assets/Iconly/Light-OutLine/lock.svg';
import mailIcon from '../../../../public/assets/Iconly/Light-Outline/mail.svg';
import eyeOnIcon from '../../../../public/assets/Iconly/Light-Outline/eyeOn.svg';
import Logo from "../../Header/Logo/Logo";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {

  const navigate = useNavigate()
  
  const handleClickCreate = () => {
    navigate('/singup')
  }

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
    console.log(data);
  };

  const onSubmit = (data) => {
    setData(data)
  }

  console.log(data)

  return (
    <div className={style.singup}>
      <div className={style.singupContent}>
        <div className={style.form}>
          <Link to='/'>
            <Logo />
          </Link>
          <span className={style.HelloProgram}>Авторизация</span>
          <form
            action="post"
            onSubmit={handleSubmit(onSubmit)}
            className={style.formInputs}
          >
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
              <button className={style.iconContainerEye} onClick={togglePasswordVisibility}>
                <img src={passwordVisible ? eyeOnIcon : eyeoffIcon} alt="eyeoffIcon" className={style.eye} />
              </button>
            </div>
            <div onClick={handleClickCreate} className={style.createAcc}><p>Создать аккаунт</p></div>
            <div className={style.ButtonContainer}>
              <button type="submit" className={style.login}>Войти</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
