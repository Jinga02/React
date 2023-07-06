import axios from "axios";
// const { data: userData, error, mutate } = useSWR('/api/users', fetcher);
// 위에서 받은 첫 번째 매개변수를 가져와서 사용
// 리턴하는 데이터가 data: userData 이거임
// 에러가 error에 담김
//
const fetcher = (url, token) =>
  axios.get(url, {
    withCredentials: true,
    headers: {
      Authorization: `Token ${token}`,
    },
  }).then((response) => response.data);

export default fetcher;
