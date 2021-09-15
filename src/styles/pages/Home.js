import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: 2.3rem;
    line-height: 1.5;
  }

  .cards {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 7rem auto;

    .cards__small {
      display: flex;

      div+ div {
        margin-left: 10px;
      }
    }
  }
`