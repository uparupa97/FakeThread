import React, { useState } from 'react';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';
import { Link, useNavigate } from 'react-router-dom';
import Threadtext from '../components/Threadtext';
import uparupa from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/threadapp/src/image/chuzlogo.svg';
import SocialButton from '../components/SocialButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrormessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // const [loginUser, setLoginUser] = useState({
  //   email: '',
  //   password: '',
  // });

  const handleInputChange = (value, inputName) => {
    if (inputName === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }

    // const newLoginUser = { ...newUser, [inputName]: value };
    // setNewUser(newLoginUser);
  };

  // const [storedUser, setStoredUser] = useState(null);
  // useEffect(() => {
  //   setStoredUser(JSON.parse(localStorage.getItem('user')));
  // }, []);

  const handleEvent = async (e) => {
    e.preventDefault();
    setErrormessage('');

    if (isLoading || !email || !password) return;

    setIsLoading(true);

    try {
      //비동기처리 성공시
      const usercredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(usercredential, 'usercredential');

      history('/');
    } catch (error) {
      //비동기처리 실패시
      setErrormessage(error.message);
    } finally {
      //성공하든 실패하든 마지막에 실행된다
      setIsLoading(false);
    }

    // if (!storedUser) {
    //   alert('user없습니다');
    //   setLoginUser({ email: '', password: '' });
    //   return;
    // }

    // // const storedUser = JSON.parse(localStorage.getItem('user'));
    // const foundUser = storedUser.find((user) => user.email === loginUser.email);
    // // const foundUser = storedUser.get(loginUser.email);

    // if (foundUser) {
    //   if (foundUser.password === loginUser.password) {
    //     setLoginUser({ email: '', password: '' });
    //     alert('로그인 성공!');
    //     history('/');
    //   } else {
    //     alert('비밀번호가 틀렸습니다.');
    //     setLoginUser({ email: '', password: '' });
    //   }
    // } else {
    //   alert('해당되는 사용자는 없습니다.');
    //   setLoginUser({ email: '', password: '' });
    // }
  };

  return (
    <div className="pt-36 px-10 w-[600px]">
      <img src={uparupa} alt="안녕하세요" className="w-40 h-auto m-auto" />
      <Threadtext />
      <form id="login-form" onSubmit={handleEvent}>
        <InputField
          typeInput={'text'}
          inputChange={handleInputChange}
          inputName={'email'}
          inputText={'Email'}
          //   test={loginUser.email}
        />
        <InputField
          typeInput={'password'}
          inputChange={handleInputChange}
          inputName={'password'}
          inputText={'Password'}
          //   test={loginUser.password}
        />
        {errorMessage && <p>{errorMessage}</p>}

        <LoginButton
          buttontype={'submit'}
          buttonName={isLoading ? 'Loading' : 'Login'}
        />
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
