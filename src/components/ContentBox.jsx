import React from 'react';
import profileImage from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/threadapp/src/image/uparupa.png';

const ContentBox = () => {
  return (
    <div className="px-3 py-2 flex flex-row">
      <img
        src={profileImage}
        alt="profile"
        className="w-20 h-20 mt-2 rounded-full shadow-md bg-slate-800 overflow-hidden"
      />

      <div className="flex flex-col text-left w-full">
        <p className="my-1 ml-4 font-bold text-xl">Uparupa</p>
        <p className="w-full h-[400px] m-4 rounded-lg bg-slate-800"></p>
      </div>
    </div>
  );
};

export default ContentBox;
