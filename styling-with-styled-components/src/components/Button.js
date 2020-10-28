import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;
const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "2rem",
    fontSize: "0.8rem",
  },
};
const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    fontsize: ${sizes[size].fontSize};
  `}
`;
const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem;

  /* 크기 */
  ${sizeStyles}
  /* 색상 */
  ${colorStyles}
  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
  ${fullWidthStyle}
`;
function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <StyledButton
      fullWidth={fullWidth}
      color={color}
      {...rest}
      size={size}
      outline={outline}
    >
      {" "}
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "blue",
  size: "medium",
};

export default Button;
