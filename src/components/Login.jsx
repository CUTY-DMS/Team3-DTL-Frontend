import React,{useState} from "react";
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const [id, setid] = useState("");
    const [password, setpassword] = useState("");

    const navigate = useNavigate();

    const ClickEvent = () => {
        axios.post("http://3.34.157.6:8080/users/signin", 
        {
            "userId" : id,
            "userPw" : password,
        })
        .then((response) =>{
            localStorage.setItem("token", response.data.token);
            Swal.fire(
                '회원 가입 성공',
                '회원 가입에 성공하셨습니다.',
                'success'
            )
            navigate("/");
        })
        .catch((error) => {
            Swal.fire(
                '로그인 실패',
                '잘못된 로그인 정보입니다.',
                'error'
            )
        });
    }

    return (
    <>
    <Wrapper>
        <InputDiv>
            <InputDiv>아이디</InputDiv>
            <Input
            required 
            fullWidth 
            label="아이디" 
            id="id"
            value={id}
            onChange={(event) => {
            setid(event.target.value);
            }}
            />
        </InputDiv>
        <InputDiv>
            <InputDiv>비밀번호</InputDiv>
            <Input
            required
            fullWidth
            label="비밀번호"
            type="password"
            id="password"
            value={password}
            onChange={(event) => {
            setpassword(event.target.value);
            }}
            />
        </InputDiv>
        <Btn type="submit" onClick={ClickEvent}>로그인하기</Btn>
    </Wrapper>
    </>
    )
}

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0px solid black;
    background-color: #00000016;
`

const InputDiv = styled.div`
    margin-top: 10px;
    color: black;
    margin-bottom: 20px;
    border: 0px solid black;
    width: 400px;
    font-family: 'DoHyeon';
` 

const Btn = styled.button`
    border-style: none;
    width: 160px;
    height: 50px;
    margin-top: 50px;
    font-weight: 900;
    color: white;
    background-color: black;
    `

const Input = styled.input`
    width: 390px;
    height: 40px;
    border-radius: 5px;
    border-color: #000000a0;
    border-width: 1px;
    padding-left: 15px;
`

export default Login