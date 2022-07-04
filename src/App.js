import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import mainDTL from "./img/mainDTL.png"

function App() {
  return (
  <>
    <Header>
      <Img src={mainDTL} />
      <Disf>
        <Log>로그인</Log>
        <Log>회원가입</Log>
      </Disf>
    </Header>
  </>
  );
}

export default App;

const Img = styled.img`
  width: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0px solid black;
  background-color: #51A7FE;
`
const Disf = styled.div`
  display: flex;
  margin-right: 15px;
`

const Log = styled.div`
  margin-left: 15px;
`