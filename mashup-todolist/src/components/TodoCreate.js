import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";
/*
이 컴포넌트에서는 useState 를 사용하여 토글 할 수 있는 open 값을 관리하며, 
이 값이 true 일 때에는 아이콘을 45도 돌려서 X 모양이 보여지게 한 후, 
버튼 색상을 빨간색으로 바꿔줍니다. 그리고, 할 일을 입력 할 수 있는 폼도 보여줍니다
*/
const CircleButton = styled.button`
  background: #38d9a9; //기본 버튼색깔
  &:hover {
    background: #63e6be; //화살표를 올렸을 때
  }
  &:active {
    background: #20c997; //클릭했을 때
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s all ease-in;
  ${(props) =>
    props.open && //open에 true값이 들어온다면
    css`
      transform: translate(-50%, 50%) rotate(45deg);
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      //transform: translate(-50%, 50%) rotate(45deg); //45도 돌리기 +가 x모양이됨
    `}
`;

const InssertFromPositioner = styled.div`
  //+눌렀을때 나오는 창
  width: 100%;
  bottom: 0;
  left: 0;
  //position: absolute;
`;

const InsertForm = styled.form`
  //창 꾸미기
  background: #f8f9fa;
  padding: 2rem;
  padding-bottom: 5rem;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px; //외곽이 둥그므로 둥글게
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  //입력부분
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none; //쓰려고 클릭했을 때 윤곽선 제거
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false); //초기open값은 false로
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => {
    setOpen(!open); //open이 false면 true로, true이면 false로
  };
  const onChange = (e) => {
    setValue(e.target.value); //value를 입력값으로함
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };
  return (
    <>
      {open && (
        <InssertFromPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후 Enter를 누르세요"
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InssertFromPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd /> {/*CircleButton안의 내용*/}
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
