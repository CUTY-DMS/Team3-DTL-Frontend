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
            {headers: { AccessToken : `${localStorage.getItem("token")}`}})
            .then((response) =>{
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
                    <Situation>완료 : { list.success ? "⭕" : "❌" }</Situation>
                        <Titlediv>
                            <div>{list.title}</div>
                        </Titlediv>
                        <ContentsText>{list.content}</ContentsText>
                        <IdText>{list.created_at}</IdText>
                        <LikeDiv>
                            <LikeImoge>❤</LikeImoge>
                            <LikeText>{list.like_count}</LikeText>
                        </LikeDiv>
                    </Link>
                </Textdiv>
            )}</Wrapper>
            </BackColor>
        )
}

export default My

const LikeDiv = styled.div`
    display: flex;
    margin-top: 6px;
    margin-bottom: 6px;
`

const LikeImoge = styled.div`
    color: red;
    margin-top: -2px;
    margin-right: 5px;
`

const LikeText = styled.div`
    color: black;
`

const TextDiv = styled.div`
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-family: 'DoHyeon';
`

const Situation = styled.div`
    color: black;
    font-size: 20px;
    margin-bottom: 10px;
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
