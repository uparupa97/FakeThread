import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const history = useNavigate();

  const goToHome = () => {
    history("/");

    };


  return (
    <div style={{backgroundColor: "blue"}}>
      <h2>Login</h2>
      <button type="button" onClick={goToHome}>Home화면으로 이동</button>
    </div>
  )
}

export default Login