import style from './singup.module.scss'
import { useNavigate } from 'react-router-dom';



const Singup = () => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <div className={style.singup}>
      <div onClick={handleLoginClick}>Go back</div>
    </div>
  )
}

export default Singup