import React from 'react';

const UploadButton = ({ uploadClick }) => {
  return (
    <div>
      <button type="button" onClick={uploadClick}>
        게시
      </button>
    </div>
  );
};

export default UploadButton;
