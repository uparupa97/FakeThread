import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Adminpage from './pages/Adminpage';
import Post from './pages/Post';
import Profilepage from './pages/Profilepage';
import { useState } from 'react';

function App() {
  const [postContent, setPostContent] = useState('');

  const postinput = (data) => {
    setPostContent(data);
  };

  return (
    <div className="flex justify-center bg-slate-900 text-gray-100 h-full text-center overflow-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home postcontent={postContent} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminpage" element={<Adminpage />} />
          <Route path="/post" element={<Post onPost={postinput} />} />
          <Route path="/profile" element={<Profilepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
