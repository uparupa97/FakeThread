import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';
import { Link } from 'react-router-dom';
import Threadtext from '../components/Threadtext';
import uparupa from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/threadapp/src/image/chuzlogo.svg';
import SocialButton from '../components/SocialButton';

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (data, typeInput) => {
    console.log('handleinputchange', data, typeInput);

    let newFormdata = { ...loginUser, [typeInput]: data };
    setLoginUser(newFormdata);
  };

  useEffect(() => {
    console.log('formdata', loginUser);
  }, [loginUser]);

  return (
    <div className="pt-36 px-10 w-[600px]">
      <img src={uparupa} alt="안녕하세요" className="w-40 h-auto m-auto" />
      <Threadtext />
      <form id="login-form">
        <InputField
          typeInput={'email'}
          onChange={handleInputChange}
          inputText={'Email'}
        />
        <InputField
          typeInput={'password'}
          onChange={handleInputChange}
          inputText={'Password'}
        />
        <LoginButton buttontype={'submit'} buttonName={'Login'} />
      </form>
      <p className="from-neutral-100 mb-8">
        <span className="inline-block mr-3">계정이 없으신가요?</span>
        <span className="inline-block">
          <Link to={'/adminpage'} className="text-blue-500">
            {' '}
            가입하기
          </Link>
        </span>
      </p>
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-700"></div>
        <span className="px-4 text-gray-300">or</span>
        <div className="flex-grow border-t border-gray-700"></div>
      </div>
      <SocialButton />
    </div>
  );
};

export default Login;
