import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../firebase';

const Private = () => {
  if (!auth.currentUser) {
    alert('로그인이 필요합니다.'); // 경고창 표시
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default Private;
