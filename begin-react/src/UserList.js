import React, { useEffect, useContext  } from 'react';
import {UserDispatch} from './App2';

const User = React.memo(function User({ user/*onRemove, onToggle*/ }) {
    const dispatch = useContext(UserDispatch);
    //인자를 {username, email}로 주면 {username}, {email} 로 받을 수 있다
    /*useEffect(
        /* useEffect 는 리액트 컴포넌트가 렌더링 될 때마다 
        특정 작업을 수행하도록 설정 할 수 있는 Hook 입니다. 
        함수를 재사용할 때에는 useCallback사용
        */
        /*() => {
            // console.log(user);
            console.log('user 설정', user);
            return () => { //return이 cleanup함수를 반환해줌
                //컴포넌트가 언마운트되기 전이나, 업데이트 되기 직전에 어떠한 작업을 수행
                console.log("이전 user", user);
            };
        },[]); //2번째 파라미터로 빈 배열을 넣어주면 update될 때에는 아무것도 실행하지 않음
    /*useEffect 를 사용 할 때에는 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열 (deps)을 넣습니다. 
    만약에 deps 배열을 비우게 된다면, 컴포넌트가 처음 나타날때에만 useEffect 에 등록한 함수가 호출됩니다. */
    return(
        <div>
            <b style={{cursor : 'pointer', color : user.active ? 'green' : 'black'}}
                onClick={() => {
                    dispatch({ type: 'Toggle_User', id: user.id });
                }/*onToggle(user.id)*/}
            >
                {user.username}</b>
                &nbsp;
            <span>({user.email})</span> 
            <button onClick={() => {
                dispatch({ type: 'Remove_User', id: user.id });
                /*onRemove(user.id)*/
            }}>삭제</button>
        </div>
    )
});
function UserList({ users /*onRemove, onToggle*/ }) {
    return(
        <div>
            {users.map(user => (
                <User user={user} key={user.id} /*onRemove={onRemove} onToggle={onToggle}*//>
                //
                //<User username={user.username} email={user.email} key={user.id}/>
                    )
                )
            }
        </div>
    );
}

export default React.memo(UserList);