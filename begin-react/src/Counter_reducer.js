import React, { useReducer } from 'react';
/*reducer 는 현재 상태와 액션 객체를 파라미터로 받아와서 
  새로운 상태를 반환해주는 함수입니다. */
function reducer(state, action) {
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter_reducer() {
    const [number, dispatch] = useReducer(reducer, 0)
    //number - 앞으로 사용할수 있는 상태, dispatch - 액션을 발생시키는 함수

    const Increase = () => {
        dispatch({type : "INCREMENT"});
    };

    const Decrease = () => {
        dispatch({type : "DECREMENT"});
    };

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={Increase}>+</button>
            <button onClick={Decrease}>-</button>
        </div>
    );
}

export default Counter_reducer;