import styled from "styled-components";

export const Container = styled.div`
  header {
    margin-bottom: 4rem;
    p {
      font-size: 1rem;
      display: flex;
      align-items: center;
    }

    div {
      width: 43.11px;
      height: 6px;
      border-radius: 8px;
      margin-left: 0.9rem;
    }
    .completed {
      div {
        background-color: ${(props) => props.theme.colors.green};
      }
    }
    .no-completed {
      div {
        background-color: ${(props) => props.theme.colors.red};
      }
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1300px;
    margin: 0 auto;
    gap: 10px;
  }
`;
