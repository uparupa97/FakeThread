import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Adminpage from './pages/Adminpage';
import Post from './pages/Post';
import Profilepage from './pages/Profilepage';
import { useState, useEffect } from 'react';
import Edit from './pages/Edit';
import { auth } from './firebase';
import Private from './pages/Private';
import { delay } from './lib/common';

function App() {
  const [editContent, setEditContent] = useState(null);
  const [editHome, setEditHome] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const editinput = (data) => {
    const newFeed = data;
    setEditContent(newFeed);
  };

  const init = async () => {
    await delay(1000);
    await auth.authStateReady(); // 로그인상태 변화 감지하여 감지가 끝나면 로딩 false
    console.log('인증 완료', auth);

    // 준비된 이후 실행
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="flex justify-center bg-slate-900 text-gray-100 h-full text-center overflow-auto">
      {isLoading ? (
        <p className="text-2xl">Loading...</p>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/adminpage" element={<Adminpage />} />

            <Route path="/" element={<Private />}>
              <Route
                path=""
                element={<Home onEdit={editinput} editHome={editHome} />}
              />
              <Route path="post" element={<Post />} />
              <Route path="profile" element={<Profilepage />} />
              <Route
                path="edit"
                element={
                  <Edit
                    editContent={editContent}
                    editFinish={(data) => setEditHome(data)}
                  />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
