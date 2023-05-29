import KakaoLogin from "react-kakao-login";

function SocialKakao () {

    const kakaoClientId = '5c25205f9e0eef2b77bf1bec79360ecb'
    const kakaoOnSuccess = async (data)=>{
      	console.log(data)
        const idToken = data.response.id_token  // 인가코드 백엔드로 전달
    }
    const kakaoOnFailure = (error) => {
        console.log(error);
    };
    return(
        <>
          <KakaoLogin
              token={kakaoClientId}
              onSuccess={kakaoOnSuccess}
              onFail={kakaoOnFailure}
          />
        </>
    )
}

export default SocialKakao
