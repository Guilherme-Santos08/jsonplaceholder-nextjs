import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 178px;

  margin-bottom: 10px;
  padding: 16px;

  background-color: ${(props) => props.theme.colors.green};

  display: flex;
  align-items: flex-end;

  cursor: pointer;
  border-radius: 16px;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    font-size: 1.8rem;

    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;
  }
`;
