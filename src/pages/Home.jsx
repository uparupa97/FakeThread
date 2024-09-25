import React, { useState, useEffect } from 'react';
import uparupa from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/threadapp/src/image/chuzlogo.svg';
import UploadButton from '../components/UploadButton';
import ContentBox from '../components/ContentBox';
import { useNavigate } from 'react-router-dom';
import { inimessagecontent } from '../data/response';
import Nav from '../components/Nav';

const Home = ({ postcontent, onEdit, editHome }) => {
  console.log('editFinish', editHome);
  const history = useNavigate();

  const [messagecontent, setMessagecontent] = useState(inimessagecontent);

  const logoutButton = () => {
    history('/login');
  };

  // 진입시 딱 한번 실행
  useEffect(() => {
    if (!postcontent) return;
    const newFeed = {
      id: messagecontent.length + 1,
      idName: 'anonymous',
      profileImage:
        'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
      textMessage: postcontent,
    };
    // feedList에 객체 추가
    setMessagecontent([newFeed, ...messagecontent]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!editHome) return;
    const resultFeedlist = messagecontent.map((item) => {
      if (item.id === editHome.id) return editHome;
      return item;
    });

    setMessagecontent(resultFeedlist);
  }, [editHome]);

  const handleDelete = (selectedData) => {
    const filterList = messagecontent.filter(
      (item) => item.id !== selectedData.id
    );
    setMessagecontent(filterList);
  };

  const handleRewrite = (selectedData) => {
    const filterList = messagecontent.filter(
      (item) => item.id === selectedData.id
    );
    onEdit(filterList[0]);
    history('/edit');
  };

  return (
    <div className="px-8 pt-6 w-[600px] max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
      <div className="grid grid-cols-3 my-2">
        <div></div>
        <div className="place-self-center">
          <img
            src={uparupa}
            alt="안녕하세요"
            className="w-40 outline-none shadow-none border-none"
          />
        </div>
        <div className="justify-self-end place-self-center">
          <UploadButton buttonMessage={'로그아웃'} uploadClick={logoutButton} />
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-700"></div>
      </div>

      <div>
        {messagecontent.map((feed) => (
          <ContentBox
            key={feed.id}
            data={feed}
            onDelete={handleDelete}
            onRewrite={handleRewrite}
          />
        ))}
      </div>

      <Nav />
    </div>
  );
};

export default Home;
