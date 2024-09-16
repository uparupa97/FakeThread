import React from 'react';
import uparupa from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/threadapp/src/image/chuzlogo.svg';
import UploadButton from '../components/UploadButton';
import ContentBox from '../components/ContentBox';
import LinkIcon from '../components/LinkIcon';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const history = useNavigate();

  const logoutButton = () => {
    history('/login');
  };

  return (
    <div className="px-8 pt-6 w-[600px] max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
      <div className="grid grid-cols-3 my-2">
        <div></div>
        <div className="place-self-center">
          <img src={uparupa} alt="안녕하세요" className="w-40" />
        </div>
        <div className="justify-self-end place-self-center">
          <UploadButton buttonMessage={'로그아웃'} uploadClick={logoutButton} />
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-700"></div>
      </div>

      <div>
        <ContentBox />
        <ContentBox />
        <ContentBox />
      </div>

      <div className="flex items-center">
        <LinkIcon />
        <LinkIcon />
        <LinkIcon />
      </div>
    </div>
  );
};

export default Home;
