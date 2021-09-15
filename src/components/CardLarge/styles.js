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
    props.whatThemeBackground === "Users" &&
    css`
      background-color: ${(props) => props.theme.colors.green};
    `}

  ${(props) =>
    props.whatThemeBackground === "Todos" &&
    css`
      background-color: ${(props) => props.theme.colors.red};
    `}

  &:hover {
    opacity: 0.8;
  }
  a {
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: flex-end;
  }
`;
