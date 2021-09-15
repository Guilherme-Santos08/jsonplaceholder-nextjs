import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  /* min-height: 90vh; */
  margin-top: 10rem;
  color: #000;
  gap: 10px;

  h3 {
    margin-bottom: 0.6rem;
  }
  .card {
    width: 300px;
    height: 190px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 8px;
    cursor: default;
    p {
      line-height: 1.6;
    }
  }
`;
