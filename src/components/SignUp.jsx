import React, {useState} from "react";
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp(){
    const [name, setname] = useState("");
    const [id, setid] = useState("");
    const [password, setpassword] = useState("");
    const [number, setnumber] = useState(0);

    const navigate = useNavigate();

    const minus = (event) => {
        if(event.target.value >= 0 || event.target.value < 100)
        setnumber(event.target.value);
        else{
            alert("나이를 정확히 입력해주십시오.");
        }
    }

    const ClickEvent=()=>{
        axios.post("http://10.156.147.206:8080/users/signup", 
        {
            "userId" : id,
            "userAge" : number,
            "userName" : name,
            "userPw" : password,
        })
        .then((response) =>{
            alert("회원가입에 성공했습니다.");
            navigate("/");
        })
        .catch((error) => {
            alert("정보를 다시 입력하여 주십시오.");
        });
    }

    return(
    <>
    <Wrapper>
        <InputDiv>
            <Text>이름</Text>
                <Input 
                required 
                autoFocus label="이름" 
                id="name" 
                fullWidth={true}
                value={name}
                onChange={(event) => {
                    setname(event.target.value);
                }}
                />
        </InputDiv>
        <InputDiv>
            <Text>나이</Text>
            <Input
            required
            fullWidth
            label="나이"
            type="number"
            id="number"
            value={number}
            min={0}
            max={100}
            onChange={minus}
            />
        </InputDiv>
        <InputDiv>
            <Text>아이디</Text>
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
            <Text>비밀번호</Text>
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
        <Btn type="submit" onClick={ClickEvent}>회원 가입하기</Btn>
    </Wrapper>
    </>
    )
}


export default SignUp;

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    padding-top: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0px solid black;
    background-color: #00000016;
`

const InputDiv = styled.div`
`

const Text = styled.div`
    margin-top: 30px;
    color: black;
    margin-bottom: 10px;
    border: 0px solid black;
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