import styled from "styled-components";

export const Container = styled.div`
  header {
    margin-bottom: 4rem;
  }
  max-height: 100vh;
  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;

    .users {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      padding: 16px;
      width: 280px;
      height: 80px;

      background-color: #fff;
      color: #000;

      border-radius: 8px;
      transition: opacity 0.2s ease-in-out;

      a {
        color: #000;
        text-decoration: none;
        width: 100%;
        height: 100%;
      }

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;
