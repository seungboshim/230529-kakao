import React from "react";
import styled from "styled-components";
import LoginWithKakao from "../components/KakaoLogin";
import KakaoLogin from "react-kakao-login";

const Title = styled.div`
    font-weight: bold;
    font-size: 24px;
    padding: 10px;
    margin: 10px;
`;

function Main() {
    return(
        <div>
            <Title>
                소셜 로그인 구현!
            </Title>
            <LoginWithKakao />
        </div>
    )
}

export default Main;