import React,{useState, useEffect} from "react";
import styled from "styled-components"
import axios from "axios";
import Swal from "sweetalert2";
import {Link} from 'react-router-dom'

const My = () => {
    const [nameList,setNameList] = useState([]);
    const [nameInfoList,setNameInfoList] = useState();
    const [ageInfoList,setAgeInfoList] = useState();
    useEffect(
        () => {
            axios.get("http://10.156.147.206:8080/users/my", 
            {headers: { X_AUTH_TOKEN : `${localStorage.getItem("token")}`}})
            .then((response) =>{
                console.log(response.data)
                setNameList(response.data.todos);
                setNameInfoList(response.data.user_name);
                setAgeInfoList(response.data.user_age);
            })
            .catch((error) => {
                Swal.fire(
                    '불러오기 실패',
                    '로그아웃 후 다시 로그인',
                    'error'
                )
            })
        },[]
    )

        return(
            <BackColor>
            <Wrapper>
                <InfoBox>
                    <TextDiv>{nameInfoList}</TextDiv>
                    <TextDiv>{ageInfoList}살</TextDiv>
                </InfoBox>
                {nameList.map((list, index) => 
                <Textdiv key={index}>
                    <Link to={`/post/my/${list.id}`}>
                        <Titlediv>
                            <div>{list.title}</div>
                        </Titlediv>
                        <ContentsText>{list.content}</ContentsText>
                        <IdText>{list.created_at}</IdText>
                    </Link>
                </Textdiv>
            )}</Wrapper>
            </BackColor>
        )
}

export default My

const TextDiv = styled.div`
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-family: 'DoHyeon';
`

const InfoBox = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    width: auto;
    background-color: white;
    margin-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
`

const Titlediv = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    color: black;
`

const ContentsText = styled.div`
    border-top: 1px solid black;
    width: 690px;
    padding-top: 20px;
    color: black;
`

const IdText = styled.div`
    font-size: 10px;
    float: right;
    padding-right: 10px;
    color: #0000b8;
`

const BackColor = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #00000016;
`

const Textdiv = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    width: 700px;
    margin-top: 15px;
    margin-bottom: 15px;
    padding-left: 10px;
    padding-top: 10px;
    background-color: white;
    font-family: 'DoHyeon';
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
`
