import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Adminpage from "./pages/Adminpage";

function App() {
  return (
      <div className="bg-slate-900 text-gray-100 h-full text-center " >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/adminpage" element={<Adminpage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
