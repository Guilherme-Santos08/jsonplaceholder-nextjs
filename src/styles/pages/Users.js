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
      
      background-color: ${(props) => props.theme.colors.cards};
      color: #fff;

      border-radius: 8px;
      transition: opacity 0.2s ease-in-out;

      a {
        color: #fff;
        text-decoration: none;
      }

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;
