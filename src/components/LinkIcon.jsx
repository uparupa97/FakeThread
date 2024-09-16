import React from 'react';

const LinkIcon = ({ uploadClick }) => {
  return (
    <div className="flex justify-end w-full">
      <button
        type="button"
        onClick={uploadClick}
        className="mr-2 w-16 h-9 rounded-2xl bg-slate-100 hover:bg-slate-300 text-slate-900 "
      >
        게시
      </button>
    </div>
  );
};

export default LinkIcon;
