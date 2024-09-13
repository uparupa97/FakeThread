import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Threadtext from '../components/Threadtext';
import InputField from '../components/InputField';
import uparupa from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/threadapp/src/image/uparupa.png';
import LoginButton from '../components/LoginButton';
import SocialButton from '../components/SocialButton';


const Adminpage = () => {

  const history = useNavigate();

  const goToHome = () => {
    history("/login");
    };


  return (
    <div className="grid place-content-center pt-36 px-10">
      <img src={uparupa} alt="안녕하세요" className="place-content-center w-40 ml-16" />
      <Threadtext/>
      <form>
        <InputField typeInput={"text"} inputValue={"name"} inputText={"Name"}/>
        <InputField typeInput={"text"} inputValue={"email"} inputText={"Email"}/> 
        <InputField typeInput={"password"} inputValue={"password"} inputText={"Password"}/>
        <LoginButton buttontype={"submit"} buttonName={"Create Account"}/>
      </form>
      <p className='from-neutral-100 mb-8'> 
        <span className='inline-block mr-3'>계정이 있으신가요?</span>
        <span className='inline-block'>
          <Link to={'/login'} className='text-blue-500'>로그인</Link>
        </span>
      </p>
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-700"></div>
        <span className="px-4 text-gray-300">or</span>
        <div className="flex-grow border-t border-gray-700"></div>
      </div>
      <SocialButton/>




        <Link to={'/login'} style={{color: "black"}}>Go to login</Link>
        <button type="button" onClick={goToHome}>Login화면으로 이동</button>

    </div>
  )
}

export default Adminpage