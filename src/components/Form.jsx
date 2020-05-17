import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  border: 2px solid #333;
  height: 55px;
  width: 80px;
  margin-right: 20px;
  padding: 5px 10px;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;
