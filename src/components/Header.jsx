import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mainDTL from "../assets/img/mainDTL.png";
import "../style/style.css";

const Header = () => {

  const Logout = () => {
    localStorage.removeItem("token");
    document.location.href = '/';
  }

    return( 
    <>
        <Wrapper>
        <Link to="/"><Img src={mainDTL} /></Link>
        <Sort>
        {!localStorage.getItem("token") && 
            (<>
              <Font><Link to="../Loginpage"><ColorWhite>로그인</ColorWhite></Link></Font>
              <Font><Link to="../SignUppage"><ColorWhite>회원가입</ColorWhite></Link></Font>
            </>
            )}
            {localStorage.getItem("token") && 
            (<>
            <Font><Link to="../writepage"><ColorWhite>글쓰기</ColorWhite></Link></Font>
            <Font><Link to="../Mypagepage"><ColorWhite>마이페이지</ColorWhite></Link></Font>
            <Font><ColorWhite onClick={Logout}>로그아웃</ColorWhite></Font>
            </>
            )}
        </Sort>
    </Wrapper>
    </>
    )
}



const ColorWhite = styled.div`
  color: white;
  cursor: pointer;
  text-decoration: none;
`

const Img = styled.img`
  width: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 45px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0px solid black;
  background-color: #0000005b;
  `
const Sort = styled.div`
  display: flex;
  margin-right: 35px;
`

const Font = styled.div`
  margin-left: 15px;
  font-size: 20px;
  font-family: 'DoHyeon';
`

export default Header;