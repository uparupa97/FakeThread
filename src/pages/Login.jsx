import React, {useState} from 'react';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';
import { Link, useNavigate } from 'react-router-dom';
import Threadtext from '../components/Threadtext';
import uparupa from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/threadapp/src/image/chuzlogo.svg'
import SocialButton from '../components/SocialButton';


const Login = () => {

  const history = useNavigate();

  const [inputEmail, setInputEmail] = useState("email"); 
  const [inputPassword, setInputPassword] = useState("password"); 
 
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginUser({
      ...loginUser,
      [name]: value
    });
  };



const handleEvent = (e) => {
  e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const foundUser = storedUser.find(user => user.email === loginUser.email); 

  if (foundUser) { 
    if (foundUser.password === loginUser.password) {
      setLoginUser({name: '', email: '', password: ''});
      alert("로그인 성공!"); 
      history("/");
    } else {
      alert("비밀번호가 틀렸습니다."); 
      setLoginUser({name: '', email: '', password: ''});
      setInputEmail(""); 
      setInputPassword(""); 
    }
  } else {
    alert("해당되는 사용자는 없습니다.");
    setLoginUser({name: '', email: '', password: ''});
    setInputEmail(""); 
    setInputPassword("");
  }

 
};







  return (
    <div className="pt-36 px-10 w-[600px]">
      <img src={uparupa} alt="안녕하세요" className="w-40 h-auto m-auto" />
      <Threadtext/>
      <form id="login-form" onSubmit={handleEvent}>
        <InputField typeInput={"text"} inputChange={handleInputChange} inputValue={inputEmail} inputText={"Email"}/> 
        <InputField typeInput={"password"} inputChange={handleInputChange} inputValue={inputPassword} inputText={"Password"}/>
        <LoginButton buttontype={"submit"} buttonName={"Login"}/>
      </form>
      <p className='from-neutral-100 mb-8'> 
        <span className='inline-block mr-3'>계정이 없으신가요?</span>
        <span className='inline-block'>
          <Link to={'/adminpage'} className='text-blue-500'> 가입하기</Link>
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