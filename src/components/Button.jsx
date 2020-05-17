import styled, { css } from 'styled-components'

export const ButtonStyle = css`
  border: 2px solid #333;
  color: #fafafa;
  background-color: #333;
  padding: 1em 1.5em;
  font-weight: 500;
  background-size: 0 100%;
  background-repeat: no-repeat;
  -webkit-transition: all .4s ease;
  transition: all .4s ease-in-out;
  font-size: 16px;
  height: 55px;

  @media only screen and (max-width: 768px) {
     width: 100%;
  }

  &:hover {
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(65%, #000), color-stop(1, #000));
    border-color: #000;
    background-size: 100% 100%;
    cursor: pointer;
  }
`;

export const LinkStyle = css`
  color: #333;
  text-decoration: none;
`;

export const Button = styled.button`
  ${ ButtonStyle }
  display: block;
`;

