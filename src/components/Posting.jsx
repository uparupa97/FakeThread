import React from 'react';
import profileImage from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/threadapp/src/image/Imagechutzrit.svg';

const Posting = () => {
  return (
    <div className="px-3 py-2">
      <img src={profileImage} alt="profile" className="" />
      <textarea placeholder="문구를 작성하세요"></textarea>
    </div>
  );
};

export default Posting;
