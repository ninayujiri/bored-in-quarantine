import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    width: auto;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media only screen and (min-width: 768px) {
    width: auto;
  }
`;

export const Select = styled.select`
  border: 2px solid #333;
  height: 55px;
  width: 100%;
  padding: 5px 10px;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  margin-right: 0;
  margin-bottom: 20px;
  
  @media only screen and (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
    width: 80px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;
