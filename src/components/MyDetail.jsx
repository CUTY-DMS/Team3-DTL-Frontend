import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom"

const Detail = () => {
    const {id} = useParams();
    const [dataList,setDataList] = useState([]);
    
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

    const Delete = () => {
        axios.delete(`http://10.156.147.206:8080/users/my/${id}`, 
        {headers: { X_AUTH_TOKEN : `${localStorage.getItem("token")}`}})
        .then((response) => {
            navigate("/Mypage");
            Swal.fire(
                '삭제 성공',
                '글이 삭제 되었습니다.',
                'success'
            )
        })
        .catch((error) => {
            Swal.fire(
                '삭제 실패',
                '빽정에게 문의하세요.',
                'error'
            )
        })
    }

    const Click = () => {
        axios.patch(`http://10.156.147.206:8080/users/my/${id}`)
        .then((response) => {
            navigate("/Mypage");
            Swal.fire(
                '완료',
                '성공적으로 설정되었습니다.',
                'success'
            )
        })
        .catch((error) => {
            Swal.fire(
                '실패',
                '빽정에게 문의하세요.',
                'error'
            )
        })
    }

    const Correction = () => {

    }

    return(
        <>
        <BackColor>
            <Wrapper>
                <CompleteDiv>
                    <CompleteText onClick={Click}>완료/취소</CompleteText>
                    <SuccessText>{ dataList.success }</SuccessText>
                </CompleteDiv>
                <TitleDiv>{ dataList.title }</TitleDiv>
                <ContentDiv>{ dataList.content }</ContentDiv>
                <CreatedDiv>{ dataList.created_at }</CreatedDiv>
                <NameDiv>{ dataList.user_name }</NameDiv>
                <Imoge>
                    <ImogeDiv onClick={Correction}>📄</ImogeDiv>
                    <ImogeDiv onClick={Delete}>🗑️</ImogeDiv>
                </Imoge>
            </Wrapper>
            <OkayBtn onClick={Home}>확인</OkayBtn>
        </BackColor>
        </>
    )
}

export default Detail

const CompleteDiv = styled.div`
    display: flex;
    font-family: 'DoHyeon';
    margin-left: 16px;
    margin-top: 15px;
    margin-bottom: -10px;
`

const SuccessText = styled.div`
    color: black;
`

const CompleteText = styled.button`
    font-size: 18px;
    margin-top: 2px;
    border-radius: 5px;
    color: white;
    background-color: black;
    font-family: 'DoHyeon';
`

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
    min-height: 100vh;
    width: 100vw;
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
    color: black;
    font-family: 'DoHyeon';
    margin: 10px 18px 0px 0px;
`

const NameDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    color: black;
    font-family: 'DoHyeon';
    margin: 5px 18px 5px 0px;
`

const Imoge = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 15px;
    padding-right: 16px;
`

const ImogeDiv = styled.div`
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
`