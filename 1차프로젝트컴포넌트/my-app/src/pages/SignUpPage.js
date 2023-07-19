const SignUpPage = () => {
  const divStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const spanStyle = {
    display: "block",
    marginBottom: "20px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
  };

  const inputStyle = {
    width: "300px",
    height: "25px",
    borderRadius: "5px",
  };

  const buttonContainerStyle = {
    textAlign: "center",
  };

  const SignUpbuttonStyle = {
    backgroundColor: "green",
    border: "none",
    width: "80px",
    height: "30px",
    borderRadius: "5px",
  };

  return (
    <div style={divStyle}>
      <h1>CRIT</h1>
      <form action="">
        <span style={spanStyle}>
          <label style={labelStyle}>이메일</label>
          <input
            type="text"
            placeholder="아이디는 영문+숫자만 가능"
            style={inputStyle}
          />
          <button>중복확인</button>
        </span>

        <span style={spanStyle}>
          <label style={labelStyle}>비밀번호</label>
          <input
            type="text"
            placeholder="비밀번호는 8자 이상 20자 이하"
            style={inputStyle}
          />
        </span>

        <span style={spanStyle}>
          <label style={labelStyle}>비밀번호 확인</label>
          <input type="text" style={inputStyle} />
        </span>

        <span style={spanStyle}>
          <label style={labelStyle}>이름</label>
          <input type="text" style={inputStyle} />
        </span>

        <span style={spanStyle}>
          <label style={labelStyle}>닉네임</label>
          <input
            type="text"
            placeholder="닉네임은 2자 이상 10자 이하로 입력해주세요."
            style={inputStyle}
          />
          <button>중복확인</button>
        </span>
      </form>
      <div style={buttonContainerStyle}>
        <button style={SignUpbuttonStyle}>회원가입</button>
      </div>
    </div>
  );
};

export default SignUpPage;
