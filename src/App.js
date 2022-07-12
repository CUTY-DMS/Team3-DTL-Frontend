import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUppage from './pages/SignUppage'
import Mainpage from './pages/Mainpage';
import Writepage from './pages/Writepage';
import Loginpage from './pages/Loginpage';
import Mypage from "./pages/Mypage";
import Detailpage from "./pages/Detailpage"
import MyDetailpage from "./pages/MyDetailpage";

function App() {

  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Mainpage/>}></Route>
      <Route path="/Loginpage" element={<Loginpage/>}></Route>
      <Route path="/Mypage" element={<Mypage/>}></Route>
      <Route path="/SignUppage" element={<SignUppage/>}></Route>
      <Route path="/writepage" element={<Writepage/>}></Route>
      <Route path="/post/:id" element={<Detailpage/>}/>
      <Route path="/post/my/:id" element={<MyDetailpage/>}/>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
