import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUppage from './pages/SignUppage'
import Mainpage from './pages/Mainpage';
import Writepage from './pages/Writepage';
import Loginpage from './pages/Loginpage';

function App() {

  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Mainpage/>}></Route>
      <Route path="/Loginpage" element={<Loginpage/>}></Route>
      <Route path="/SignUppage" element={<SignUppage/>}></Route>
      <Route path="/writepage" element={<Writepage/>}></Route>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
