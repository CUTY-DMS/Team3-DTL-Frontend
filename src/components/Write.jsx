import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Write = () => {
    const [data, setData] = useState({
        title: "",
        contents: ""
    });

    const { title,contents } = data;

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setData({
            ...data, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
      };
    

    const navigate = useNavigate();

    const Checking = () => {
        if(title !== "" && contents !== ""){
            Submit();
        }
        else{
            alert("글을 입력해주세요.");
        }
    }

    const Submit = () => {
        axios.post("http://10.156.147.206:8080/post", 
        data, {headers: { Authentication: `${localStorage.getItem("token")}`}}
        )
        .then((response) =>{
            console.log(response)
            alert("글쓰기에 성공했습니다.");
            navigate("/");
        })
        .catch((error) => {
            alert("글을 다시 확인 주십시오.");
            console.log(error)
            console.log(localStorage.getItem("token"))
        });
    }
    

    return(
    <>
    <Wrapper>
            <InputTitle>제목</InputTitle>
            <input
            name="title"
            type='text'
            maxLength='20'
            value={title}
            onChange={onChange}
            placeholder="제목을 입력해주세요." />
            <InputTitle>내용</InputTitle>
            <Textarea
            name="contents"
            maxlength="100"
            value={contents}
            onChange={onChange}
            placeholder="내용을 입력해주세요."
            />
            <Btn type="submit" onClick={Checking}>작성</Btn>
    </Wrapper>
    </>
    )
}

export default Write;

const InputTitle = styled.div`
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 25px;
    font-family: 'DoHyeon';
    `

const Wrapper = styled.div`
    display: flex;
    padding-top: 100px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0px solid black;
    background-color: #00000016;
    > input{
    width: 520px;
    height: 30px;
    border-radius: 10px;
    border-color: black;
    outline-color: black;
    padding: 5px 5px;
    }
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
    margin-bottom: 50px;
    font-weight: 900;
    color: white;
    background-color: black;
`