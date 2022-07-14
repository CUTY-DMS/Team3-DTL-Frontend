import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom"
import { BASE_URL } from "../../api/axios";

const Detail = () => {
    const [ like, setLike ] = useState();
    const [ likeImoge, setLikeImoge ] = useState();
    const [ dataList,setDataList ] = useState([]);
    const { id } = useParams();
    
    const navigate = useNavigate();
    
    const Home = () => {
        navigate("/");
    }
    
    const Liking = () => {
            axios.get(`${ BASE_URL }/post/main/like/${id}`,
            {headers: { AccessToken : `${localStorage.getItem("token")}`}})
            .then((response) => {
                setLike(response.data.like_count);
                setLikeImoge(response.data.liked)
                
            })
            .catch((error) => {
                Swal.fire(
                    '실패.',
                    '니 코드 봐봐.',
                    'error'
                )
            })
        }
        
        useEffect(
            () => {
                axios.get(`${ BASE_URL }/post/${id}`,
                {headers: { AccessToken : `${localStorage.getItem("token")}`}})
                .then((response) =>{
                setLike(response.data.like_count)
                setLikeImoge(response.data.liked)
                setDataList(response.data)
            })
            .catch((error) => {
                Swal.fire(
                    '로그인 후 이용 가능합니다.',
                    '회원이 아니시라면 회원 가입을 해주세요.',
                    'error'
                )
            })
        },[]
    )

    return(
        <>
        <BackColor>
            <Wrapper>
            <Situation>완료 : { dataList.success ? "⭕" : "❌" }</Situation>
                <TitleDiv>{ dataList.title }</TitleDiv>
                <ContentDiv>{ dataList.content }</ContentDiv>
                    <NameDiv>{ dataList.user_name }</NameDiv>
                    <CreatedDiv>{ dataList.created_at }</CreatedDiv>
                <LikeDiv onClick={Liking}>{likeImoge ? "🧡" : "🤍" } {like}</LikeDiv>
            </Wrapper>
            <OkayBtn onClick={Home}>확인</OkayBtn>
        </BackColor>
        </>
    )
}

export default Detail

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 10px;
    width: 700px;
    background-color: white;
`

const Situation = styled.div`
    color: black;
    font-size: 35px;
    margin-top: 15px;
    margin-left: 19px;
    font-family: 'DoHyeon';
`

const OkayBtn = styled.button`
    background-color: black;
    border-radius: 5px;
    color: white;
    margin-top: 60px;
    margin-bottom: 60px;
    width: 80px;
    height: 40px;
    font-family: 'DoHyeon';
    cursor: pointer;
`

const BackColor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 60px;
    width: 100vw;
    min-height: 100vh;
    background-color: #00000016;
`

const TitleDiv = styled.div`
    font-size: 30px;
    font-family: 'DoHyeon';
    padding: 10px 10px;
    padding-top: 13px;
    margin-left: 10px;
`

const ContentDiv = styled.div`
    font-size: 30px;
    font-family: 'DoHyeon';
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding-top: 13px;
    padding-bottom: 13px;
    width: 660px;
    margin-left: 20px;
`

const CreatedDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    color: #0000b8b5;
    font-family: 'DoHyeon';
    margin: 0px 18px 10px 0px;
`

const NameDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    color: #0000b8b5;
    font-family: 'DoHyeon';
    margin: 38px 18px 5px 0px;
`

const LikeDiv = styled.div`
    border: 0px solid black;
    width: 50px;
    font-size: 20px;
    margin-left: 18px;
    margin-bottom: 18px;
    cursor: pointer;
`