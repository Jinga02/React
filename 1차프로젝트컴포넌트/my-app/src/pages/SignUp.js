// import { useState } from "react";
// import axios from "axios";

// const SignUp = () => {
//   const [id, setId] = useState("");
//   const [pw, setPw] = useState("");
//   const [cpw, setCpw] = useState("");

//   const onIdHandler = (event) => {
//     setId(event.currentTarget.value);
//   };

//   const onPwHandler = (event) => {
//     setPw(event.currentTarget.value);
//   };

//   const onCpwHandler = (event) => {
//     setCpw(event.currentTarget.value);
//   };

//   const onSubmitForm = (event) => {
//     event.preventDefault();
//     if (pw !== cpw) {
//       return alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
//     }
//     if (pw.length < 8) {
//       return alert("비밀번호는 8자 이상이어야 합니다.");
//     }
//     axios({
//       method: "POST",
//       url: "http://127.0.0.1:8000/accounts/signup/",
//       data: {
//         username: id,
//         password1: pw,
//         password2: cpw,
//       },
//     })
//       .then((response) => {
//         console.log(response);
//         console.log(response.config.data);
//         alert("회원가입 완료");
//       })
//       .catch((error) => {
//         alert("이미 존재하는 ID입니다.");
//         console.log(error);
//       });
//   };

//   return (
//     <div id="signUpModal">
//       <h1>회원가입</h1>
//       <div id="signInput">
//         <form onSubmit={onSubmitForm}>
//           <span>
//             <label htmlFor="signId">ID : </label>
//             <input type="text" id="signId" onChange={onIdHandler} />
//           </span>
//           <span>
//             <label htmlFor="signPw"> PW : </label>
//             <input
//               type="password"
//               id="signPw"
//               onChange={onPwHandler}
//               placeholder="최소 8자 이상"
//             />
//           </span>
//           <span>
//             <label htmlFor="CofirmPassword">Cofirm PW :</label>
//             <input
//               type="password"
//               id="CofirmPassword"
//               onChange={onCpwHandler}
//             />
//           </span>
//           <div id="signBnt">
//             <button>회원가입</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default SignUp;

const SignUp = () => {
  return (
    <>
      <h1>SignUp입니다.</h1>
      <h2>
        ID : <input type="text" />
      </h2>
      <h2>
        PW : <input type="text" />
      </h2>
    </>
  );
};

export default SignUp;
