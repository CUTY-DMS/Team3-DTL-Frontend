import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom"


const Correction = () => {
    const {id} = useParams();
    const [dataList,setDataList] = useState([]);

    const navigate = useNavigate();

        const [data, setData] = useState({
            title: "",
            content : ""
        });

        const onChange = (e) => {
            const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
            setData({
                ...data, // 기존의 input 객체를 복사한 뒤
                [name]: value // name 키를 가진 값을 value 로 설정
            });
        };
        

    useEffect(
        () => {
            axios.get(`http://10.156.147.206:8080/post/${id}`,
            {headers: { AccessToken : `${localStorage.getItem("token")}`}})
            .then((response) =>{
                setDataList(response.data)
                setData(response.data)
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

    const Complete = () => {
        axios.put(`http://10.156.147.206:8080/users/my/${id}`,
        data, {headers: { AccessToken : `${localStorage.getItem("token")}`}})
        .then((response) => {
            Swal.fire(
                '수정 완료',
                '수정되었습니다.',
                'success'
            )
            navigate(`/post/my/${id}`)
        })
        .catch((error) => {
                Swal.fire(
                    '수정 실패',
                    '수정을 실패하였습니다.',
                    'error'
                )
        })
    }

    return(
        <>
        <Wrapper key={id}>
            <InputTitle>제목</InputTitle>
            <TitleInput
            id="title"
            defaultValue={dataList.title}
            name="title"
            onChange={onChange}
            />
            <InputTitle>내용</InputTitle>
            <Textarea
            id="content"
            defaultValue={dataList.content}
            name="content"
            onChange={onChange}
            />
            <Btn onClick={Complete}>완료</Btn>
        </Wrapper>
        </>
    )
}

export default Correction

const InputTitle = styled.div`
    margin-bottom: 10px;
    font-size: 25px;
    font-family: 'DoHyeon';
    `

const Wrapper = styled.div`
    display: flex;
    padding-top: 100px;
    min-height: 75vh;
    flex-direction: column;
    align-items: center;
    border: 0px solid black;
    background-color: #00000016;
    `

const TitleInput = styled.input`
    width: 810px;
    height: 35px;
    border-radius: 10px;
    border-width: 2px;
    margin-bottom: 50px;
    padding-left: 10px;
    font-size: 20px;
    font-family: 'DoHyeon';
`

const Textarea = styled.textarea`
    width: 800px;
    height: 200px;
    border-color: black;
    outline-color: black;
    border-radius: 10px;
    border-width: 2px;
    font-size: 20px;
    resize: none;
    padding: 10px 10px;
    font-family: 'DoHyeon';
    `

const Btn = styled.button`
    border-style: none;
    width: 160px;
    height: 50px;
    margin-top: 50px;
    margin-bottom: -50px;
    font-weight: 900;
    color: white;
    background-color: black;
`