import style from './singup.module.scss'
import { useNavigate } from 'react-router-dom';



const Singup = () => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <div className={style.singup}>
      Hello you are in Singup page <br />  
      <div onClick={handleLoginClick}>Go back</div>
      
    </div>
  )
}

export default Singup