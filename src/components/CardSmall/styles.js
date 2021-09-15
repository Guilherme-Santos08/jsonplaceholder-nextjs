import styled, { css } from "styled-components";

export const Container = styled.div`
  background: #5dbe62;
  width: 100%;
  height: 178px;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  ${(props) =>
    props.whatThemeBackground === "Todos" &&
    css`
      background-color: ${(props) => props.theme.colors.red};
    `}
  ${(props) =>
    props.whatThemeBackground === "Post" &&
    css`
      background-color: ${(props) => props.theme.colors.blue};
    `}
    
  &:hover {
    opacity: 0.8;
  }
  span {
    font-weight: bold;
    font-size: 1.8rem;
  }
`;
