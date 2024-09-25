import React, { useState } from 'react';
import Nav from './Nav';

const Posting = ({ postChange, profileImage, idName, textMessage }) => {
  const [value, setValue] = useState(textMessage);

  const handleChange = (event) => {
    postChange(event.target.value);
    setValue(event.target.value);
  };

  console.log('is it?', profileImage, idName, textMessage);

  return (
    <div className="px-3 py-2 flex flex-row">
      <img
        src={profileImage}
        alt="profile"
        className="w-20 h-20 mt-2 rounded-full shadow-md bg-slate-800 overflow-hidden"
      />

      <div className="flex flex-col text-left w-full">
        <p className="my-2 ml-4 font-bold text-xl">{idName}</p>
        <textarea
          placeholder="문구를 작성하세요"
          className="w-full h-[400px] m-4 p-3 rounded-lg bg-slate-800"
          onChange={handleChange}
          value={value}
        ></textarea>
      </div>
      <Nav />
    </div>
  );
};

export default Posting;
