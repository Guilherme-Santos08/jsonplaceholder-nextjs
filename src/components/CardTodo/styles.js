import styled, { css } from "styled-components";

export const Container = styled.article`
  display: flex;
  gap: 30px;
  cursor: default;

  > div {
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.cards};
    width: 190px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    p {
      line-height: 1.4;
    }

    .color {
      width: 43.11px;
      height: 6px;
      background-color: #17b978;
      border-radius: 10px;
      margin-bottom: 8px;

      ${(props) =>
        props.whatThemeBackground === true &&
        css`
          background-color: ${(props) => props.theme.colors.green};
        `}
      ${(props) =>
        props.whatThemeBackground === false &&
        css`
          background-color: ${(props) => props.theme.colors.red};
        `}
    }
  }
`;
