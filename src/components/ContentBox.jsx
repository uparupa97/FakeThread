import React, { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ContentBox = ({ profileImage, name, textMessage }) => {
  const buttonFunction = useNavigate();
  const [heartCount, setheartCount] = useState(0);

  const rewrite = () => {
    buttonFunction('/post');
  };

  const heartcounter = () => {
    setheartCount((prev) => prev + 1);
  };

  return (
    <div className="px-3 py-2 flex flex-row">
      <img
        src={profileImage}
        alt="profile"
        className="w-16 h-16 mt-2 rounded-full shadow-md bg-slate-800 overflow-hidden object-contain"
      />

      <div className="flex flex-col text-left w-full">
        <div className="flex flex-row">
          <p className="mt-2 ml-4 font-bold text-xl">{name}</p>
          <div className="flex ml-auto space-x-2">
            <button type="button" onClick={rewrite}>
              <FaPen className="h-8" />
            </button>
            <button type="button">
              <MdDelete className="h-8" />
            </button>
          </div>
        </div>
        <p className="w-full m-4 rounded-lg bg-slate-800 p-3">{textMessage}</p>
        <button type="button" onClick={heartcounter}>
          <CiHeart className="h-10" />
          {heartCount}
        </button>
      </div>
    </div>
  );
};

export default ContentBox;
