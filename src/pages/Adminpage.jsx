import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Threadtext from '../components/Threadtext';
import InputField from '../components/InputField';
import uparupa from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/threadapp/src/image/chuzlogo.svg';
import LoginButton from '../components/LoginButton';
import SocialButton from '../components/SocialButton';

const Adminpage = () => {
  const history = useNavigate();

  const [userForm, setUserForm] = useState([]);

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Function to handle input changes
  const handleInputChange = (value, inputName) => {
    const newLoginUser = { ...newUser, [inputName]: value };
    setNewUser(newLoginUser);
  };

  useEffect(() => {
    setUserForm([
      { id: 1, name: 'hi', email: 'user1', password: '1234' },
      { id: 2, name: 'Anne', email: 'user2', password: '5678' },
      { id: 3, name: 'Diana', email: 'user3', password: '91011' },
    ]);
  }, []);

  useEffect(() => {
    console.log('유저 추가 완료');
  }, [userForm]);

  // Function to create a new account
  const createAccount = (e) => {
    e.preventDefault();

    if (newUser.name && newUser.email && newUser.password) {
      const newId = userForm.length + 1; // Generate new user ID
      setUserForm([...userForm, { id: newId, ...newUser }]); // Add new user to the userForm array
      const nueUserForm = [...userForm, { id: newId, ...newUser }];
      console.log('New user added:', newUser);
      console.log('전체', nueUserForm);
      localStorage.setItem('user', JSON.stringify(nueUserForm));
      setNewUser({ name: '', email: '', password: '' });
      alert('회원가입되었습니다.');
      history('/login');
    }
  };

  return (
    <div className="pt-36 px-10 w-[600px]">
      <img src={uparupa} alt="안녕하세요" className="w-40 h-auto m-auto" />
      <Threadtext />
      <form onSubmit={createAccount}>
        <InputField
          typeInput={'text'}
          inputChange={handleInputChange}
          inputName={'name'}
          inputText={'Name'}
        />
        <InputField
          typeInput={'text'}
          inputChange={handleInputChange}
          inputName={'email'}
          inputText={'Email'}
        />
        <InputField
          typeInput={'password'}
          inputChange={handleInputChange}
          inputName={'password'}
          inputText={'Password'}
        />
        <LoginButton buttontype={'submit'} buttonName={'Create Account'} />
      </form>
      <p className="from-neutral-100 mb-8">
        <span className="inline-block mr-3">계정이 있으신가요?</span>
        <span className="inline-block">
          <Link to={'/login'} className="text-blue-500">
            로그인
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

export default Adminpage;
