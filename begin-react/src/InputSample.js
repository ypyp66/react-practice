import React, { useState, useRef } from 'react';

export default function InputSample() {

    const [inputs, setInputs] = useState(
        {
            name : '',
            nickname : '',
        }
    );
    const nameInput = useRef();
    //console.log('inputs',inputs);
    const {name, nickname} = inputs; //비구조화 할당

    const onChange = (e) => {
        console.log(e.target);
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        //e.target.value, e.target.name을 가져옴
        setInputs({
          ...inputs, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
          //e.target.name : e.target.value와 같다
        });
        console.log(inputs);
      };
    
      const onReset = () => {
        setInputs({
          name: '',
          nickname: '',
        })
        nameInput.current.focus();
      };

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}