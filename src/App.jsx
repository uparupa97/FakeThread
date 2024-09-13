import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Adminpage from "./pages/Adminpage";
import Post from "./pages/Post";

function App() {
  return (
      <div className="bg-slate-900 text-gray-100 h-full text-center " >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/adminpage" element={<Adminpage/>}/>
            <Route path="/post" element={<Post/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
