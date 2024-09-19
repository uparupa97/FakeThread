import React from 'react';

const ContentBox = ({ profileImage, name, textMessage }) => {
  return (
    <div className="px-3 py-2 flex flex-row">
      <img
        src={profileImage}
        alt="profile"
        className="w-14 h-14 mt-2 rounded-full shadow-md bg-slate-800 overflow-hidden"
      />

      <div className="flex flex-col text-left w-full">
        <p className="mt-2 ml-4 font-bold text-xl">{name}</p>
        <p className="w-full m-4 rounded-lg bg-slate-800 p-3">{textMessage}</p>
      </div>
    </div>
  );
};

export default ContentBox;
