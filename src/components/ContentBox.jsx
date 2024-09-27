import React from 'react';
// import { CiHeart } from 'react-icons/ci';
import { FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const ContentBox = ({ data, onDelete, onRewrite, heartcounter }) => {
  const { profileImage, idName, textMessage, likecount, isUser } = data;

  const rewriteContent = () => {
    const ok = window.confirm('다시 쓰실 것인가요?');
    if (ok) {
      onRewrite(data);
    }
  };

  const deleteContent = () => {
    const ok = window.confirm('정말 취소하실 것인가요?');
    if (ok) {
      onDelete(data);
    }
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
          <p className="mt-2 ml-4 font-bold text-xl">{idName}</p>
          <div className="flex ml-auto space-x-2">
            <button type="button">
              {!isUser ? <></> : <FaPen className="h-8" onClick={rewriteContent} />}
            </button>
            <button type="button">
              {!isUser ? <></> : <MdDelete className="h-8" onClick={deleteContent} />}
            </button>
          </div>
        </div>
        <p className="w-full min-h-12 max-h-60 mx-4 mt-4 rounded-lg bg-slate-800 p-3 break-all overflow-scroll">
          {textMessage}
        </p>
        <div className="flex flex-row">
          <button
            type="button"
            onClick={() => heartcounter(data)}
            className="flex"
          >
            <span className="place-self-center hover:text-red-500">♥</span>
            {/* <CiHeart />{' '} */}
            <span className="ml-2 mt-1 text-gray-400">{likecount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
