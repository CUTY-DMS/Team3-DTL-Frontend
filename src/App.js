import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUppage from './pages/Header/SignUppage'
import Mainpage from './pages/Main/Mainpage';
import Writepage from './pages/Header/Writepage';
import Loginpage from './pages/Header/Loginpage';
import Mypage from "./pages/My/Mypage";
import Detailpage from "./pages/Main/Detailpage"
import MyDetailpage from "./pages/My/MyDetailpage";
import Correctionpage from "./pages/My/Correctionpage";

function App() {

  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Mainpage/>} />
      <Route path="/Loginpage" element={<Loginpage/>} />
      <Route path="/Mypage" element={<Mypage/>} />
      <Route path="/SignUppage" element={<SignUppage/>} />
      <Route path="/writepage" element={<Writepage/>} />
      <Route path="/post/:id" element={<Detailpage/>} />
      <Route path="/post/my/:id" element={<MyDetailpage/>} />
      <Route path="/correction/:id" element={<Correctionpage/>} />
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
