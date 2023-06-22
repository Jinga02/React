import { useState } from "react";
import axios from "axios";

export default function SignUpModal() {
  // const [nickname, setNickname] = useState("");
  // const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");

  // const onNicknameHandler = (event) => {
  //   setNickname(event.currentTarget.value);
  // };

  // const onEmailHandler = (event) => {
  //   setEmail(event.currentTarget.value);
  // };

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPwHandler = (event) => {
    setPw(event.currentTarget.value);
  };

  const onCpwHandler = (event) => {
    setCpw(event.currentTarget.value);
  };
  // const navigate = useNavigate();
  // const location = useLocation();
  // axios
  const onSubmitForm = (event) => {
    event.preventDefault();
    if (pw !== cpw) {
      return alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
    }
    if (pw.length < 8) {
      return alert("비밀번호는 8자 이상이어야 합니다.");
    }
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/accounts/signup/",
      data: {
        // nickname: nickname,
        // email: email,
        username: id,
        password1: pw,
        password2: cpw,
      },
    })
      .then((response) => {
        console.log(response); // 서버 응답 데이터 출력
        console.log(response.config.data);
        alert("회원가입 완료");
        // location.reload();
      })
      .catch((error) => {
        alert("이미 존재하는 ID입니다.");
        console.log(error); // 에러 처리
      });
  };
  // fetch
  // const onSubmitForm = (event) => {
  //   event.preventDefault();
  //   if (pw !== cpw) {
  //     return alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
  //   }
  //   fetch("http://127.0.0.1:8000/accounts/signup/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json;charset=utf-8" },
  //     body: JSON.stringify({
  //       username: id,
  //       password1: pw,
  //       password2: cpw,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <div id="signUpModal">
      <h1>회원가입</h1>
      <div id="signInput">
        <form onSubmit={onSubmitForm}>
          {/* <span>
            <label htmlFor="signNickname">Nickname : </label>
            <input
              type="text"
              id="signNickname"
              value={nickname}
              onChange={onNicknameHandler}
            />
          </span>
          <span>
            <label htmlFor="signEmail">Email : </label>
            <input type="email" id="signEmail" onChange={onEmailHandler} />
          </span> */}
          <span>
            <label htmlFor="signId">ID : </label>
            <input type="text" id="signId" onChange={onIdHandler} />
          </span>
          <span>
            <label htmlFor="signPw"> PW : </label>
            <input
              type="password"
              id="signPw"
              onChange={onPwHandler}
              placeholder="최소 8자 이상"
            />
          </span>
          <span>
            <label htmlFor="CofirmPassword">Cofirm PW :</label>
            <input
              type="password"
              id="CofirmPassword"
              onChange={onCpwHandler}
            />
          </span>
          <div id="signBnt">
            <button>회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
}
