import React from "react";
import styled from "styled-components";

const LoginBtn = styled.div`
    border: 1px solid #191919;
    border-radius: 10px;
    background-color: #FEE500;
    color: #191919;
    box-sizing: border-box;
    padding: 10px;
    margin: 10px;
    width: 200px;
    font-weight: bold;
    text-align: center;
`;


function LoginWithKakao() {
    const Rest_api_key = 'af96e5d63de8eb37e169486fed401a23';
    const redirect_uri = 'http://localhost/3000/login/kakao';
    
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return (
        <div>
            <LoginBtn 
                type="button" 
                onClick={handleLogin}>
                    카카오로 시작하기
            </LoginBtn>
        </div>
    );
}

export default LoginWithKakao;