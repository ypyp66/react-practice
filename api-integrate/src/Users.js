import { useState, useEffect } from "react";
import axios from "axios";

//useState 를 사용하여 요청 상태를 관리하고,
//useEffect 를 사용하여 컴포넌트가 렌더링되는 시점에 요청
function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //useEffect(() => {
  const fetchUsers = async () => {
    try {
      //요청이 시작 할 때 error 와 users 를 초기화
      setError(null);
      setUsers(null);
      setLoading(true); //loading 상태를 true로 변경

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      ); //await이 처리될 때 까지 기다린후 결과를 반환
      setUsers(response.data); //데이터는 response.data 안에 들어있다.
    } catch (e) {
      setError(e);
    }
    setLoading(false); //로딩끝나면 로딩을 false로
  };
  //fetchUsers(); //fetchUsers 호출
  //}, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>; //loading이 참이면 로딩중
  if (error) return <div>에러가 발생했습니다.</div>; //error가 참이면 에러출력
  if (!users) return null;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default Users;
