import React,{useState, useEffect} from "react";
import styled from "styled-components"
import axios from "axios";
import Swal from "sweetalert2";

const My = () => {
    const [nameList,setNameList] = useState([]);
    useEffect(
        () => {
            axios.get("http://3.34.157.6:8080/users/my", 
            {headers: { Authentication: `${localStorage.getItem("token")}`}})
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

    const Delete = () => {

    }

    const Correction = () => {

    }

        return(
            <BackColor>
            <Wrapper>{nameList.map((list, index) => 
                <Textdiv key={index}>
                    <Titlediv>
                        <div>{list.title}</div>
                        <Flex>
                            <CorrectionEmoji onClick={Correction}>📄</CorrectionEmoji>
                            <DeleteEmoji onClick={Delete}>🗑️</DeleteEmoji>
                        </Flex>
                    </Titlediv>
                    <ContentsText>{list.contents}</ContentsText>
                    <IdText>{list.member_id}</IdText>
                </Textdiv>
            )}</Wrapper>
            </BackColor>
        )
}

export default My

const DeleteEmoji = styled.div`
    margin-right: 7px;
`

const CorrectionEmoji = styled.div`
    margin-right: 10px;
`

const Titlediv = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
`

const Flex = styled.div`
    display: flex;
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
`
