import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Posting from '../components/Posting';
import UploadButton from '../components/UploadButton';
import Nav from '../components/Nav';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Edit = ({ editContent }) => {

  const [postContent, setPostContent] = useState("");

  const history = useNavigate();

  const postinput = (data) => {
    setPostContent(data);
  };

  const handleEdit = async (event) => {
    event.preventDefault(); 

      const rewriteData = doc(db, 'fakethread', editContent.id);
      await updateDoc(rewriteData, { textMessage : postContent});
      history('/');
     }
    
    
  

  return (
    <div className="px-8 pt-6 w-[600px] max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
      <div className="flex flex-row w-full p-6">
        <Link to={'/'} className="place-self-center text-gray-500">
          취소
        </Link>
        <h3 className="place-self-center font-mono text-xl m-auto">
          새로운 스레드
        </h3>
      </div>
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-700"></div>
      </div>
      <form id="post" onSubmit={handleEdit}>
        <Posting
          postChange={postinput}
          profileImage={editContent.profileImage}
          idName={editContent.idName}
          defaultValue={editContent.textMessage}
        />
        <div className="flex flex-row w-full text-start text-gray-500">
          <p className="w-[90%]">누구에게나 답글 및 인용 허용</p>
          <div className="w-full">
            <UploadButton buttonMessage={'게시'} />
          </div>
        </div>
      </form>
      <Nav />
    </div>
  );
};

export default Edit;
