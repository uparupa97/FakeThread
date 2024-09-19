import React from 'react';

const LinkIcon = ({ uploadClick, linkNav }) => {
  return (
    <div className="flex">
      <button
        type="button"
        onClick={uploadClick}
        className="place-items-center "
      >
        {linkNav}
      </button>
    </div>
  );
};

export default LinkIcon;
