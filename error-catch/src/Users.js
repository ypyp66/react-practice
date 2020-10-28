import React, { useRef } from 'react';

function Users({ users }) {
    // if(!users){
    //     return null;
    // }
    return(
        <ul>
            {users.map(user => (
                <li key={user.id} onClick={() => onToggle(user.id)}>
                    {user.username}
                </li>   
            ))}
        </ul>
    );
}
Users.defaultProps = {
    onToggle: () => {
        console.warn('onToggle is 미싱!');
    }
};
export default Users;