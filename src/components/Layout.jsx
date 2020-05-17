import styled from 'styled-components'

export const Layout = styled.section`
  background-color: #fafafa;
  color: #333;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.5;
  padding: 5vh 15vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  
  @media only screen and (max-width: 768px) {
    padding: 10vh 10vw;
  }
`;

export const TitleContainer = styled.div`
  cursor: pointer;
`;
