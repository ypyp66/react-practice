import React from "react";
import classNames from "classnames";
import "./Button.scss";

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  return (
    <button className={classNames("Button", size, color, { outline, fullWidth })}
    {...rest}>
      {/*//outline 값이 true 일 때에만 button 에 outline CSS 클래스가 적용됨
       ...rest를 사용해서 우리가 지정한 props 를 제외한 값들을 rest 라는 객체에 모아주고,
       <button> 태그에 {...rest} 를 해주면, rest 안에 있는 객체안에 있는 값들을 모두 <button> 태그에 설정해줌*/}
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
