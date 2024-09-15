import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import uparupa from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/threadapp/src/image/chuzlogo.svg';

const Home = () => {
  const history = useNavigate();

  const goToHome = () => {
    history('/post');
  };

  return (
    <div className="grid place-content-center pt-36 px-10">
      <img
        src={uparupa}
        alt="안녕하세요"
        className="place-content-center w-40 m-auto"
      />

      <Link to={'/login'} style={{ color: 'black' }}>
        Go to login
      </Link>
      <button type="button" onClick={goToHome}>
        Post 화면으로 이동
      </button>
    </div>
  );
};

export default Home;
