//useState 대신에 useReducer 를 사용해서 구현

import { useEffect, useReducer } from "react";
import axios from "axios";
import Users from "./Users";

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "success":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "error":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error("언핸들드 액션 타입: ${action.type}");
  }
}
function Users2() {
  /*
    useReducer를 사용하여 state와 해당state의 값을 변경할 dispatch를 선언하고 있습니다. 
    useReducer함수의 첫번째 인자는 처음에 만들어 놓은 reducer함수를 넘기고, 
    두번째 인자에는 state의 최초값을 넘기면 됩니다. 
    */
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchUsers = async () => {
    dispatch({ type: "loading" });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "success", data: response.data });
      //type이 success일때를 호출하고 data는 response.data를 넘겨줌
    } catch (e) {
      dispatch({ type: "error", error: e });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

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
