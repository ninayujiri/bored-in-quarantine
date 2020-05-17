import styled from 'styled-components'

export const Layout = styled.section`
  background-color: #fafafa;
  color: #333;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 15vh 10vw;
  
  @media only screen and (min-width: 768px) {
    padding: 10vh 10vw;
  }
`;

export const TitleContainer = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
`;
