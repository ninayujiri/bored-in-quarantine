import styled from 'styled-components'

export const Button = styled.button`
  border: 2px solid #333;
  color: #333;
  background-color: transparent;
  padding: 1em 1.5em;
  font-weight: 500;
  background-size: 0 100%;
  background-repeat: no-repeat;
  -webkit-transition: all .4s ease;
  transition: all .4s ease-in-out;
  margin-top: 1em;
  font-size: 16px;

  @media only screen and (max-width: 768px) {
     width: 100%;
  }

  &:hover {
    color: #fafafa;
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(65%, #333), color-stop(1, #333));
    background-size: 100% 100%;
    cursor: pointer;
  }
`;
