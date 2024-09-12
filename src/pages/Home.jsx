import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {

  const history = useNavigate();

  const goToHome = () => {
    history("/login");
    };


  return (
    <div>
        <h2 className="text-red-500">Home</h2>
        <Link to={'/login'} style={{color: "black"}}>Go to login</Link>
        <button type="button" onClick={goToHome}>Login화면으로 이동</button>

    </div>
  )
}

export default Home