import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import Swal from "sweetalert2";
import "../style/style.css";

const Main = () => {
    const [nameList,setNameList] = useState([]);
    useEffect(
        () => {
            axios.get("http://10.156.147.206:8080/post/main")
            .then((response) =>{
                setNameList(response.data)
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
            <Wrapper>{nameList.map((list, index) =>
                <Textdiv key={index} className="text">
                    <Titlediv>
                        <div>{list.title}</div>
                    </Titlediv>
                    <ContentsText>{list.contents}</ContentsText>
                    <IdText>{list.created_at} {list.member_id} </IdText>
                </Textdiv>
            )}</Wrapper>
        </BackColor>
    )
}

export default Main

const Titlediv = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
`

const ContentsText = styled.div`
    border-top: 1px solid black;
    width: 690px;
    padding-top: 15px;
`

const IdText = styled.div`
    font-size: 10px;
    float: right;
    padding-bottom: 5px;
    padding-right: 10px;
    color: #0000b8;
`

const BackColor = styled.div`
    background-color: #00000016;
    height: 100%;
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
    padding-top: 150px;
    padding-bottom: 50px;
`