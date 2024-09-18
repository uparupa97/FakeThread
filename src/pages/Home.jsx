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

  const messagecontent = [
    {
      profileImage:
        'https://images.wagwalkingweb.com/media/breed/maltese/appearance/maltese.png',
      idName: 'Uparupa',
      textMessage: `The subway is not fancy—in fact, riding it
can suck with rat, smells and all lol—but
there’ll never be anything more iconic?
and effective for getting around the city,
especially during NYFW.`,
    },
    {
      profileImage:
        'https://d128mjo55rz53e.cloudfront.net/media/images/blog-breed-french_pomeranian_2.max-400x400.format-jpeg.jpg',
      idName: 'steamylit',
      textMessage: `NO ONE TOLD ME IT WAS NATIONAL
READ A BOOK DAY? WHY AM I WORKING?
Well if you need a book you know we
have a selection 🤭🤗`,
    },
    {
      profileImage:
        'https://lh5.googleusercontent.com/proxy/RGyWWIOJiMuNmTOeWWkfeEc4MX30g1I62M4E0CtvR0LWOTQ5zrrShJjrIfksUHMqC5KWeiFNWbgqkEAdRh91f9qg5-Rh43W0DFyrC_nPkEm3s-lw',
      idName: 'thespeakershack',
      textMessage: `AVID HiFi Integra amplifier and EVO
Three speakers 🔊❤️🇬🇧🙏`,
    },
  ];

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
        <ContentBox
          profileImage={messagecontent[0].profileImage}
          name={messagecontent[0].idName}
          textMessage={messagecontent[0].textMessage}
        />
        <ContentBox
          profileImage={messagecontent[1].profileImage}
          name={messagecontent[1].idName}
          textMessage={messagecontent[1].textMessage}
        />
        <ContentBox
          profileImage={messagecontent[2].profileImage}
          name={messagecontent[2].idName}
          textMessage={messagecontent[2].textMessage}
        />
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
