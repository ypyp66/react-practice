import React, { useCallback, useMemo, useRef, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';

function countActiveUser(users) {
    console.log('활성 사용자 수를 세는중');
    return users.filter(user => user.active).length;
}

function App() {
  const name = 'park';
  const style ={
    backgroundColor: 'black',
    color : 'aqua',
    fontSize : '24',
    padding : '1rem'
  };
  
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active : false
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active : false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active : false
    }
  ]);
  const [inputs, setInputs] = useState({
    username : '',
    email : ''
  });
  const { username, email } = inputs;
  const onChange = useCallback( (e) => {
    const { name, value } = e.target;
    setInputs(inputs => ({ /*여기서도 마찬가지로 setInputs를 통해
      inputs의 최신상태를 가져온다*/
        ...inputs,
        [name] : value
      }));
    }, []//따라서 여기가 [inputs] -> [] 이된다
  );
  const nextId = useRef(users.length+1);
  //ref는 특정 element의 현상을 발생시키는 역할
  //useRef() 를 사용 할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본값이 됩니다.
  const onCreate = useCallback(() => {
    const user = {
      id : nextId.current,
      username,
      email
    };
    setUsers([...users, user]); //기존의 users배열에 추가한 user배열을 합침
    //setUsers(users => users.concat(user)); //users 배열에 만든 user를 붙힘
    //setUsers를 통해 최신 users를 참조할 수 있으므로 deps배열에 users를 넣지않아도 된다.
    setInputs(
      {
        username : '',
        email : ''
      }
    );
    nextId.current += 1;
  },[username, email]);
  const onRemove = useCallback((id) => {
    setUsers(users => users.filter(user => user.id !== id));
    //console.log('Appusers',users);
  },[]);
  const onToggle = useCallback((id) =>{ //id를 파라미터로 받음
    setUsers(users => 
      users.map( //users배열을 [0]부터 검사함
      //user배열에서 user.id와 파라미터로 받은 id가 같으면
      //클릭한 id에 해당되어있는 객체를 가져오고 active값을 원래의 반대로 바꿈
      user => user.id === id ? {...user, active: !user.active} : user
    ));
  },[]);
  //const count = countActiveUser(users); // countActiveUser에 users배열을 전달
  //ㄴ 이때는 input에 값이 바뀌어도 컴포넌트가 리랜더링이 되므로 계속 호출이 된다
  const count = useMemo(() => countActiveUser(users), [users]);
  /*
    useMemo 의 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수를 넣어주면 되고 
    두번째 파라미터에는 deps 배열을 넣어주면 되는데, 이 배열 안에 넣은 내용이 바뀌면, 
    우리가 등록한 함수를 호출해서 값을 연산해주고, 
    만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용하게 됩니다.
    useMemo는 숫자, 문자열, 객체등에 사용
  */

  return (
    <>
      <Wrapper>
        <Hello name="연빈" //여기서 props를 보냄
          //isSpecial={true} //자바스크립트 값 이기때문에 {}사용
          isSpecial //값이 없으면 자동으로 true로 간주
        />
        <Hello color="pink"/>
        {/* 이게 바로 주석 */}
        <div style={style}>안녕 {name}</div>
        <div className="gray-box"></div>
        <Counter></Counter><br/>
        <InputSample></InputSample><br/>

        활성된 사용자 수 : {count}
        <CreateUser
          username = {username}
          email = {email}
          onChange = {onChange}
          onCreate = {onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/> {/*UserList컴포넌트의 users에 배열users를 전달*/}
      </Wrapper>
    </>
    
  );
}

export default App;