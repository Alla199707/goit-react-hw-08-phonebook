import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 10px;
`;

export const UserName = styled.p`
  font-style: italic;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.5;
  color: white;
  margin-right: 10px;
`;

export const LogOutBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: 20px;
  width: 80px;
  padding: 8px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  background-color: black;
  color: white;
  border-radius: 4px;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 10px 5px 5px grey;
  }
`;
