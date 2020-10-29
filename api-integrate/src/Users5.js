//react-async 의 useAsync 로 전환
import axios from "axios";
import { useAsync } from "react-async";

async function getUser({ id }) {
  /*useAsync 를 사용할 때에는 프로미스를 반환하는 함수의 
  파라미터를 객체형태로 해주어야 합니다
  이래야 id값을 따로 받아와서 사용할 수 있다.*/
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

function Users5({ id }) {
  const { data: user, error, isLoading } = useAsync({
    promiseFn: getUser,
    id,
    watch: id,
    /*watch 값에 특정 값을 넣어주면 
    이 값이 바뀔 때마다 promiseFn 에 넣은 함수를 다시 호출해줍니다. */
  });

  if (isLoading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default Users5;
