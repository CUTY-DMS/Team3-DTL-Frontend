import React,{useState} from "react";
import styled from "styled-components"
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system"

const Login = () => {
    const [id, setid] = useState("");
    const [password, setpassword] = useState("");

    const ClickEvent = () => {
        axios.post("http://10.156.147.206:8080/users/signin", 
        {
            "userId" : id,
            "userPw" : password,
        })
        .then((response) =>{
            localStorage.setItem("token", response.data.name);
            alert("로그인에 성공했습니다.");
            document.location.href = '/'
        })
        .catch((error) => {
            alert("정보를 정확히 입력하여 주십시오.");
        });
    }

    return (
    <>
    <Container component="main" maxWidth="xs">
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
    </Container>
    </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
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
    height: 25px;
    border-color: #000000a0;
    border-width: 1px;
`

export default Login