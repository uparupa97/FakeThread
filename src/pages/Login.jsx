// import React, { useEffect, useState } from 'react';
// import InputField from '../components/InputField';
// import LoginButton from '../components/LoginButton';
// import { Link, useNavigate } from 'react-router-dom';
// import Threadtext from '../components/Threadtext';
// import uparupa from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/threadapp/src/image/chuzlogo.svg';
// import SocialButton from '../components/SocialButton';

// const Login = () => {
//   // const history = useNavigate();

//   // const [loginUser, setLoginUser] = useState({
//   //   email: '',
//   //   password: '',
//   // });

//   // // const handleInputChange = (value, inputName) => {
//   // //   // setIsClear(false);
//   // //   const newLoginUser = { ...loginUser, [inputName]: value };
//   // //   console.log(newLoginUser);
//   // //   setLoginUser(newLoginUser);
//   // // };

//   // const handleInputChange = (value, inputName) => {
//   //   const newLoginUser = { ...loginUser, [inputName]: value };
//   //   console.log(newLoginUser);
//   //   setLoginUser(newLoginUser);
//   // };

//   // const [storedUser, setStoredUser] = useState(null);
//   // useEffect(() => {
//   //   setStoredUser(JSON.parse(localStorage.getItem('user')));
//   // }, []);

//   // const handleEvent = (e) => {
//   //   e.preventDefault();

//   //   if (!storedUser) {
//   //     alert('user없습니다');
//   //     setLoginUser({ email: '', password: '' });
//   //     return;
//   //   }

//   //   // const storedUser = JSON.parse(localStorage.getItem('user'));
//   //   const foundUser = storedUser.find((user) => user.email === loginUser.email);
//   //   // const foundUser = storedUser.get(loginUser.email);

//   //   if (foundUser) {
//   //     if (foundUser.password === loginUser.password) {
//   //       setLoginUser({ email: '', password: '' });
//   //       alert('로그인 성공!');
//   //       history('/');
//   //     } else {
//   //       alert('비밀번호가 틀렸습니다.');
//   //       setLoginUser({ email: '', password: '' });
//   //     }
//   //   } else {
//   //     alert('해당되는 사용자는 없습니다.');
//   //     setLoginUser({ email: '', password: '' });
//   //   }
//   // };

//   return (
//     <div className="pt-36 px-10 w-[600px]">
//       <img src={uparupa} alt="안녕하세요" className="w-40 h-auto m-auto" />
//       <Threadtext />
//       <form id="login-form" onSubmit={handleEvent}>
//         <InputField
//           typeInput={'text'}
//           inputChange={handleInputChange}
//           inputName={'email'}
//           inputText={'Email'}
//           test={loginUser.email}
//         />
//         <InputField
//           typeInput={'password'}
//           inputChange={handleInputChange}
//           inputName={'password'}
//           inputText={'Password'}
//           test={loginUser.password}
//         />
//         <LoginButton buttontype={'submit'} buttonName={'Login'} />
//       </form>
//       <p className="from-neutral-100 mb-8">
//         <span className="inline-block mr-3">계정이 없으신가요?</span>
//         <span className="inline-block">
//           <Link to={'/adminpage'} className="text-blue-500">
//             {' '}
//             가입하기
//           </Link>
//         </span>
//       </p>
//       <div className="flex items-center">
//         <div className="flex-grow border-t border-gray-700"></div>
//         <span className="px-4 text-gray-300">or</span>
//         <div className="flex-grow border-t border-gray-700"></div>
//       </div>
//       <SocialButton />
//     </div>
//   );
// };

// export default Login;
