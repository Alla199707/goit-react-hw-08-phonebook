import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  background-color: #ffffff8e;
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
`;

export const Span = styled.span`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #1a202c;
`;

export const Label = styled.label`
  color: rgb(0, 0, 0);
`;

export const Input = styled.input`
  padding: 5px;
  margin-top: 4px;
  margin-bottom: 10px;
  width: 100%;
  height: 30px;
  font-size: 1rem;
  color: #4a5568;
  outline: none;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  :focus {
    background-color: #fff;
    box-shadow: 0 0 0 2px #cbd5e0;
  }

  :valid {
    border: 1px solid rgba(14, 14, 14, 0.205);
  }

  :invalid {
    border: 1px solid rgba(14, 14, 14, 0.205);
  }
`;

export const Submit = styled.button`
  background-color: #1a202c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
