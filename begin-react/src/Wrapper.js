import React from 'react';

export default function Wrapper({children}){
    //props.children : 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을때
    const style = {
        border : '2px solid black',
        padding : '16px'
    }
    return (
        <div style={style}>
            {children}
        </div>
    );
}