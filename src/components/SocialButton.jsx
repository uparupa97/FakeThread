import React from 'react';
import googlelogo from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/threadapp/src/image/googlelogo.svg';

const SocialButton = ({ handleGoogle }) => {
  return (
    <div>
      <button
        onClick={handleGoogle}
        type="button"
        className="flex justify-center rounded-lg bg-slate-900 hover:bg-slate-700 text-slate-100 border border-gray-700 w-full py-5 pl-3 pr-5 my-4 text-md"
      >
        <img alt="G" src={googlelogo} className="h-6 mr-2" />
        Continue with google
      </button>
    </div>
  );
};

export default SocialButton;
