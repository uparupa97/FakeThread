import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Posting from '../components/Posting';
import UploadButton from '../components/UploadButton';
import Nav from '../components/Nav';
import { auth, db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

const Post = () => {
  const history = useNavigate();
  const [postContent, setPostContent] = useState('');

  const user = auth.currentUser;

  const postinput = (data) => {
    setPostContent(data);
  };

  const handlepost = async (event) => {
    event.preventDefault();
    const resultPost = postContent.trim();

    if (!resultPost) {
      alert('슈레드 입력해주세요');
      return;
    }

    try {
      const postData = collection(db, 'fakethread');

      const newFeed = {
        userId: user.uid,
        idName: user.displayName || 'anonymous',
        profileImage:
          user.photoURL ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BeQTqlNPL-juK9NhQoaZKls_bYXJPwZGyQ&s',
        textMessage: postContent,
        likecount: 0,
        createAt: Date.now(),
      };
      await addDoc(postData, newFeed);
      history('/');
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

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
      <form id="post" onSubmit={handlepost}>
        <Posting
          profileImage={user.photoURL}
          idName={user.displayName}
          postChange={postinput}
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

export default Post;
