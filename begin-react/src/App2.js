import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from "immer";

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};

function reducer(state, action) {
    switch(action.type){
        // case 'CHANGE_INPUT':
        //     return{
        //         ...state, //먼저 이전 상태를 불러옴
        //         inputs : {
        //             ...state.inputs,
        //             [action.name] : action.value
        //         }
        //     };
        case 'Create_User':
            return produce(state, draft => {
                /*inputs : initialState.inputs,*/
                //users : state.users.concat(action.user)
                draft.users.push(action.user);
            });
            
        case 'Toggle_User':
            /*return{
                ...state,
                users : state.users.map(
                    user => user.id === action.id? {...user, active: !user.active} : user
                    //users배열의 값을 바꾸려면 users를 먼저 전부 가져와야하므로 ...user를 사용
                )
            };*/
            return produce (state, draft => {
                const user = draft.users.find(user => user.id === action.id);
                user.active = !user.active;
            })
        case 'Remove_User':
            /*return{
                ...state,
                users : state.users.filter(user => user.id !== action.id)
            };*/
            return produce(state, draft => {
                const index = draft.users.findIndex(user => user.id === action.id);
                draft.users.splice(index,1);
            })
        default:
            return state;
    }
}

export const UserDispatch = React.createContext(null);
function App2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  /* state는 컴포넌트에서 사용할 상태를 가르키고
     dispatch는 액션을 발생시키기 위한 함수이다. 
     초기상태는 initialState이다. 
     useReducer 에 넣는 첫번째 파라미터는 reducer 함수이고, 
     두번째 파라미터는 초기 상태입니다.
    */
  const { users } = state; //users = initialState.users
  //const { username, email } = state.inputs; //initialState.inputs, initialState.email
  //const nextId = useRef(4);

  /*const [{username, email}, onChange, reset] = useInput({
      username : '',
      email : ''
  });

//   const onChange = useCallback((e) => {
//     const { name, value } = e.target;
//     dispatch({ //dispatch는 setState와 비슷함
//         //dispatch에서 type을 보내면 reducer함수에서 action.type으로 받음
//         type : 'CHANGE_INPUT', //타입이 change일때
//         name, //name : name
//         value //value : value 로 설정
//     });
//     console.log("change");
//   },[]);

  /*const onCreate = useCallback(() => {
      dispatch({
          type : 'Create_User',
          user : {
              id : nextId.current,
              username, //CreateUser.js에서 name="username"임
              email //CreateUser.js에서 name="email"임
          }
      });
      reset();
      nextId.current += 1;
  },[username, email]); //username,email이 변경될 때 호출하기때문에 deps배열에 username, email을 적음
*/
//   const onToggle = useCallback((id) => {
//       dispatch({
//           type : 'Toggle_User',
//           id
//       });
//   },[]);

//   const onRemove = useCallback((id) => {
//     dispatch({
//         type : 'Remove_User',
//         id
//     });
//   },[]);
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
    <UserDispatch.Provider value={dispatch}>
      <CreateUser 
        /*username = {username}
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate}*/
      />
      <UserList users={users} /*onRemove={onRemove} onToggle={onToggle}*//>
    <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
    </>
  );
}

export default App2;