import React from 'react';

const SocialButton = ({ handleGoogle }) => {
  return (
    <div>
      <button
        onClick={handleGoogle}
        type="button"
        className="flex justify-center rounded-lg bg-slate-900 hover:bg-slate-700 text-slate-100 border border-gray-700 w-full py-5 pl-3 pr-5 my-4 text-md"
      >
        <img alt="G" src={'https://banner2.cleanpng.com/20190731/uqk/kisspng-google-icon-1713874997698.webp'} className="h-6 w-6 overflow-hidden mr-2 object-contain" />
        Continue with google
      </button>
    </div>
  );
};

export default SocialButton;
