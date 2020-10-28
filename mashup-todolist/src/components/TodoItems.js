import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete, MdDeleteForever } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a6a6a6;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #ffa7a7;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      //TodoItemBlock 위에 커서가 있을 때, Remove 컴포넌트를 보여주라는 의미
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done && //CheckCircle에 들어온 done이 true이면
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done && //Text에 들어온 done이 true이면
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      {/*done이 true이면 MdDone (체크모양)표시*/}
      <Text id={id} done={done}>
        {text}
      </Text>
      <Remove onClick={onRemove}>
        <MdDeleteForever />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
//다른 항목이 업데이트 될 때, 불필요한 리렌더링을 방지
