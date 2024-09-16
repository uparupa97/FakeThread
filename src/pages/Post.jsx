import React from 'react';
import { Link } from 'react-router-dom';
import Posting from '../components/Posting';
import UploadButton from '../components/UploadButton';

const Post = () => {
  const loadClicking = () => {};

  return (
    <div className="px-8 pt-6 w-[600px] max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
      <div className="flex flex-row w-full p-6">
        <Link to={'/'} className="place-self-center text-gray-500">
          취소
        </Link>
        <h3 className="place-self-center font-mono text-xl m-auto">
          새로운 스레드
        </h3>
      </div>
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-700"></div>
      </div>
      <Posting />
      <div className="flex flex-row w-full text-start text-gray-500">
        <p className="w-[90%]">누구에게나 답글 및 인용 허용</p>
        <div className="w-full">
          <UploadButton buttonMessage={'게시'} uploadClick={loadClicking} />
        </div>
      </div>
    </div>
  );
};

export default Post;
