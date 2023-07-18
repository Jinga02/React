import { Link } from "react-router-dom";

const Thumbnail = () => {
  return (
    <>
      <h1>Thumbnail 입니다.</h1>
      <Link to={`/OurPage`}>
        <button>GO✨</button>
      </Link>
    </>
  );
};

export default Thumbnail;
