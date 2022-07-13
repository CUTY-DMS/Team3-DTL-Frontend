import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUppage from './pages/SignUppage'
import Mainpage from './pages/Mainpage';
import Writepage from './pages/Writepage';
import Loginpage from './pages/Loginpage';
import Mypage from "./pages/Mypage";
import Detailpage from "./pages/Detailpage"
import MyDetailpage from "./pages/MyDetailpage";
import Correctionpage from "./pages/Correctionpage";

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
