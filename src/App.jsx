import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Adminpage from './pages/Adminpage';
import Post from './pages/Post';
import Profilepage from './pages/Profilepage';
import { useState } from 'react';
import Edit from './pages/Edit';

function App() {
  const [postContent, setPostContent] = useState('');
  const [editContent, setEditContent] = useState(null);
  const [editHome, setEditHome] = useState(null);

  const postinput = (data) => {
    setPostContent(data);
  };

  const editinput = (data) => {
    const newFeed = data;
    setEditContent(newFeed);
  };

  return (
    <div className="flex justify-center bg-slate-900 text-gray-100 h-full text-center overflow-auto">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                postcontent={postContent}
                onEdit={editinput}
                editHome={editHome}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/adminpage" element={<Adminpage />} />
          <Route path="/post" element={<Post onPost={postinput} />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route
            path="/edit"
            element={
              <Edit
                editContent={editContent}
                editFinish={(data) => setEditHome(data)}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
