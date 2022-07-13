import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import Swal from "sweetalert2";
import "../style/style.css";
import {Link} from 'react-router-dom'

const Main = () => {
    const [dataList,setDataList] = useState([]);
    useEffect(
        () => {
            axios.get("http://10.156.147.206:8080/post/main",
            {headers: { AccessToken : `${localStorage.getItem("token")}`}})
            .then((response) =>{
                setDataList(response.data)
            })
            .catch((error) => {
                Swal.fire(
                    '불러오기 실패',
                    '빽정에게 문의하세요.',
                    'error'
                )
            })
        },[]
    )
    return (
        <BackColor>
            <Wrapper> {dataList.map((list, index) =>
                <Textdiv key={index} className="text">
                    <Link to={`/post/${list.id}`}>
                        <Situation>완료 : { list.success ? "⭕" : "❌" }</Situation>
                        <IdText>{list.created_at} {list.member_id}</IdText>
                        <Titlediv>
                            <div>{list.title}</div>
                        </Titlediv>
                        <ContentsText>{list.content}</ContentsText>
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

export default Main

const LikeDiv = styled.div`
    display: flex;
    margin-top: -5px;
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

const Titlediv = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    >div{
        color: black;
    }
`

const Situation = styled.div`
    color: black;
    font-size: 20px;
    margin-bottom: 10px;
`

const ContentsText = styled.div`
    border-top: 1px solid black;
    width: 690px;
    color: black;
    padding-top: 10px;
    padding-bottom: 10px;
`

const IdText = styled.div`
    padding-right: 10px;
    font-size: 10px;
    display: flex;
    float: right;
    color: #0000b8;
`

const BackColor = styled.div`
    background-color: #00000016;
    min-height: 100vh;
    width: 100vw;
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
    padding-top: 60px;
    padding-bottom: 50px;
`