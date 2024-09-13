import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import uparupa from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/threadapp/src/image/uparupa.png';


const Home = () => {

  const history = useNavigate();

  const goToHome = () => {
    history("/login");
    };


  return (
    <div className="grid place-content-center pt-36 px-10">
      <img src={uparupa} alt="안녕하세요" className="place-content-center w-40 ml-16" />




        <Link to={'/login'} style={{color: "black"}}>Go to login</Link>
        <button type="button" onClick={goToHome}>Login화면으로 이동</button>

    </div>
  )
}

export default Home