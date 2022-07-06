import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Write = () => {
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");

    const Submit = () => {
        axios.post("http://10.156.147.206:8080/post", 
        {
            "title": title,
            "content": content,
        })
        .then((response) =>{
            alert("글쓰기에 성공했습니다.");
            document.location.href = '/';
        })
        .catch((error) => {
            alert("글을 입력하여 주십시오.");
        });
    }
    

    return(
    <>
    <Wrapper>
            <InputDiv>제목</InputDiv>
            <Input maxlength="20" placeholder="제목을 입력해주세요."></Input>
            <InputDiv>내용</InputDiv>
            <Textarea maxlength="100" placeholder="내용을 입력해주세요."></Textarea>
            <Btn type="submit" onClick={Submit}>완료</Btn>
    </Wrapper>
    </>
    )
}

export default Write;

const Input = styled.input`
    width: 520px;
    height: 30px;
    border-radius: 10px;
    border-color: black;
    outline-color: black;
    padding: 5px 5px;
`

const InputDiv = styled.div`
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 25px;
    font-family: 'DoHyeon';
    `

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    border: 0px solid black;
`

const Textarea = styled.textarea`
    width: 500px;
    height: 450px;
    border-color: black;
    outline-color: black;
    border-radius: 20px;
    border-width: 2px;
    resize: none;
    padding: 10px 10px;
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