import React, {useContext, useRef} from 'react';
import useInput from './hooks/useInput';
import { UserDispatch } from './App2';

function CreateUser(/*{username, email /*onChange, onCreate}*/) {
    const dispatch = useContext(UserDispatch);
    const nextId = useRef(4);
    const [{username, email}, onChange, reset] = useInput({
        username : '',
        email : ''
    });
    const onCreate = () => {
        dispatch({
            type : 'Create_User',
            user : {
                id : nextId.current,
                username,
                email
            }
        });
        reset();
        nextId.current += 1;
    };
    return(
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);