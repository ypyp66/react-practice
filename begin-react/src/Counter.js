import React, {Component, useReducer, useState} from 'react';

// export default function Counter() {
//     const [number, setNumber] = useState(0);
//     //변수명, set변수명 = useState(초기값);
//     /*
//         기본값을 파라미터로 넣어서 호출해줍니다
//         이 함수를 호출해주면 배열이 반환되는데요, 
//         첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
//     */
    
    
//     const increase = () => {
//         setNumber(prev => prev + 1);
//         //
//     }
//     const decrease = () => {
//         setNumber(num => num - 1);
//     }
//     return(
//         <div>
//             <h1>{number}</h1>
//             <button onClick={increase}>+</button>
//             <button onClick={decrease}>-</button>
//         </div>
//     );
// }
class Counter extends Component{
    state = {
        counter : 0,
        fixed : 1
    };
    handleIncrease = () => {
        console.log('증가');
        this.setState({
            counter : this.state.counter + 1
        },
        () => { //상태가 업데이트 된 후의 작업
            console.log(this.state.counter);
        }
    );
    };
    handleDecrease = () => {
        console.log('감소');
        this.setState(state => ({
            counter : state.counter - 1
        }));
    }
    render() {
        return(
            <div style={{margin : '1rem'}}>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
                <p>fixed값 : {this.state.fixed}</p>
            </div>
        );
    }
}

export default Counter;