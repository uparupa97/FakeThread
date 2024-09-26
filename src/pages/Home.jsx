import React, { useState, useEffect } from 'react';
import uparupa from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/threadapp/src/image/chuzlogo.svg';
import UploadButton from '../components/UploadButton';
import ContentBox from '../components/ContentBox';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import { auth, db } from '../firebase';
import {
  collection,
  deleteDoc,
  doc,
  increment,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';

const Home = ({ onEdit, editHome }) => {
  console.log('editFinish', editHome);
  const history = useNavigate();

  const [messagecontent, setMessagecontent] = useState([]);
  const user = auth.currentUser;

  let unsubscribe = null;

  const logoutButton = async () => {
    const ok = window.confirm('정말 로그아웃 하시겠습니까?');

    if (!ok) return;

    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
    history('/login');
  };

  const getLiveData = () => {
    const collectionRef = collection(db, 'fakethread');
    const textQuery = query(collectionRef, orderBy('createAt', 'desc'));
    unsubscribe = onSnapshot(textQuery, (snapshot) => {
      const datalist = snapshot.docs.map((item) => {
        return {
          id: item.id,
          ...item.data(),
        };
      });
      setMessagecontent(datalist);
    });
  };

  useEffect(() => {
    getLiveData();

    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!editHome) return;
    const resultFeedlist = messagecontent.map((item) => {
      if (item.id === editHome.id) return editHome;
      return item;
    });

    setMessagecontent(resultFeedlist);
  }, [editHome]);

  const handleDelete = async (selectedData) => {
    // const filterList = messagecontent.filter(
    //   (item) => item.id !== selectedData.id
    // );
    // setMessagecontent(filterList);

    if (selectedData.userId !== user.uid) return;

    try {
      const deleteData = doc(db, 'fakethread', selectedData.id);

      await deleteDoc(deleteData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRewrite = (selectedData) => {
    const filterList = messagecontent.filter(
      (item) => item.id === selectedData.id
    );
    onEdit(filterList[0]);
    history('/edit');
  };

  const handleLike = async (selectedData) => {
    const likeData = doc(db, 'fakethread', selectedData.id);

    await updateDoc(likeData, { likecount: increment(1) });

    // await updateDoc(likeData);
  };

  return (
    <div className="px-8 pt-6 w-[600px] max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
      <div className="grid grid-cols-3 my-2">
        <div></div>
        <div className="place-self-center">
          <img
            src={uparupa}
            alt="안녕하세요"
            className="w-40 outline-none shadow-none border-none"
          />
        </div>
        <div className="justify-self-end place-self-center">
          <UploadButton buttonMessage={'로그아웃'} uploadClick={logoutButton} />
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-700"></div>
      </div>

      <div>
        {messagecontent.map((feed) => (
          <ContentBox
            key={feed.id}
            data={feed}
            onDelete={handleDelete}
            onRewrite={handleRewrite}
            heartcounter={handleLike}
          />
        ))}
      </div>

      <Nav />
    </div>
  );
};

export default Home;
