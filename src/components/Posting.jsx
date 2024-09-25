import React, { useState } from 'react';
import Nav from './Nav';

const Posting = ({ postChange, profileImage, idName, textMessage }) => {
  const [value, setValue] = useState(textMessage);

  const handleChange = (event) => {
    postChange(event.target.value);
    setValue(event.target.value);
  };

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
          className="w-full h-40 mb-4 p-3 placeholder-churead-gray-300 placeholder-opacity-60 text-churead-gray-400 bg-gray-800 outline-none resize-none"
          onChange={handleChange}
          value={value}
        ></textarea>
      </div>
      <Nav />
    </div>
  );
};

export default Posting;
