import { useReducer, useEffect } from "react";

/*useReducer를 사용하려면 reducer함수를 작성
action의 type에 따라서 어떻게 state를 변경할 건지를 switch문으로 골라내도록 구현*/
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
      throw new Error("언핸들 액션타입 : ${action.type}");
  }
}
function useAsync(callback, deps = [], skip = false) {
  //2개의 파라미터를 받음 API요청 시작함수, deps배열
  //deps배열은 해당 함수 안에서 사용하는 useEffect의 deps로 설정됨
  const [state, dispatch] = useReducer(reducer, {
    //초기값 설정
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: "loading" });
    try {
      const data = await callback();
      dispatch({ type: "success", data });
    } catch (e) {
      dispatch({ type: "error", error: e });
    }
  };

  useEffect(() => {
    if (skip) return; //skip이 true이면 아무것도안하고 return
    //skip이 false이면 fetchData실행
    fetchData();
    // eslint 설정을 다음 줄에서만 비활성화
    // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
  /*
  이 Hook 에서 반환하는 값은 요청 관련 상태와, fetchData 함수입니다. 
  이렇게 fetchData 함수를 반환하여서 나중에 데이터를 쉽게 리로딩을 해줄 수 있습니다.
  */
}

export default useAsync;
