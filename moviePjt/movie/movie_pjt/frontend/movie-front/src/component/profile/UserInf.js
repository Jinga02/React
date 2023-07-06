const UserInf = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <h1>{user.username}</h1>
    </div>
  );
};

export default UserInf;
