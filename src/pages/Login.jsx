import React from 'react';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';
import { Link } from 'react-router-dom';
import Threadtext from '../components/Threadtext';
import uparupa from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/threadapp/src/image/uparupa.png'
import SocialButton from '../components/SocialButton';


const Login = () => {

  

  return (
    <div className="grid place-content-center pt-20 px-10">
      <img src={uparupa} alt="thread" className="place-content-center w-40 ml-14" />
      <Threadtext/>
      <InputField typeInput={"text"} inputValue={"email"} inputText={"Email"}/> 
      <InputField typeInput={"password"} inputValue={"password"} inputText={"Password"}/>
      <LoginButton/>
      <p className='from-neutral-100 mb-8'> 
        <span className='inline-block mr-3'>계정이 없으신가요?</span>
        <span className='inline-block'>
          <Link to={'/admin'} className='text-blue-500'> 가입하기</Link>
        </span>
      </p>
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-700"></div>
        <span className="px-4 text-gray-300">or</span>
        <div className="flex-grow border-t border-gray-700"></div>
      </div>
      <SocialButton/> 
    </div>
  )
}

export default Login