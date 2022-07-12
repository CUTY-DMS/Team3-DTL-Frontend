import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom"

const Detail = () => {
    const [ dataList,setDataList ] = useState([]);
    const { id } = useParams();
    
    const navigate = useNavigate();
    
    const Home = () => {
        navigate("/");
    }
    
    useEffect(
        () => {
            axios.get(`http://10.156.147.206:8080/post/${id}`)
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

    return(
        <>
        <BackColor>
            <Wrapper>
                <TitleDiv>{ dataList.title }</TitleDiv>
                <ContentDiv>{ dataList.content }</ContentDiv>
                <NameDiv>{ dataList.user_name }</NameDiv>
                <CreatedDiv>{ dataList.created_at }</CreatedDiv>
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

const OkayBtn = styled.button`
    background-color: black;
    border-radius: 5px;
    color: white;
    margin-top: 60px;
    margin-bottom: 60px;
    width: 80px;
    height: 40px;
    font-family: 'DoHyeon';
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
    margin: 10px 18px 5px 0px;
`