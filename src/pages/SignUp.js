import React, { useState } from "react";
import axios from "axios";
import App from "../App";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system"
import { Grid } from "@mui/material"

function SignUp(){
    const [name, setname] = useState("");
    const [id, setid] = useState("");
    const [password, setpassword] = useState("");
    const [number, setnumber] = useState(1);

    const minus = (event) => {
        if(event.target.value >= 0 || event.target.value < 100) setnumber(event.target.value);
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
        })
        .catch((error) => {
            alert("Error");
        });
    }

    return(
    <>
    <Container component="main" maxWidth="xs">
    <Absol>
        <Mag>
            <Mag>이름</Mag>
            <Grid item xs={12}>
                <TextField 
                required 
                autoFocus label="이름" 
                id="name" 
                fullWidth={true}
                value={name}
                onChange={(event) => {
                    setname(event.target.value);
                }}
                />
            </Grid>
        </Mag>
        <Mag>
            <Mag>나이</Mag>
            <TextField
            required
            fullWidth
            label="나이"
            type="number"
            id="number"
            value={number}
            InputProps={{ inputProps: { min: 0, max: 100 }}}
            onChange={minus}
            />
        </Mag>
        <Mag>
            <Mag>아이디</Mag>
            <TextField 
            required 
            fullWidth 
            label="아이디" 
            id="id"
            value={id}
            onChange={(event) => {
            setid(event.target.value);
            }}
            />
        </Mag>
        <Mag>
            <Mag>비밀번호</Mag>
            <TextField 
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
        </Mag>
        <Btn type="submit" onClick={ClickEvent}>완료</Btn>
    </Absol>
    </Container>
    </>
    )
}


export default SignUp;

const Absol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    border: 0px solid black;
`

const Mag = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    font-weight: 900;
    border: 0px solid black;
    width: 400px;
` 

const Btn = styled.button`
    border-radius: 10px;
    border-style: none;
    width: 60px;
    height: 30px;
    margin-top: 20px;
    color: #2E9AFE;
`