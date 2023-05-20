import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  line-height: 1.5;
  padding: 8px;
  margin-right: 8px;
  font-size: 18px;
  border: none;
  text-decoration: none;
  background-color: transparent;
  color: white;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 10px 5px 5px grey;
  }
`;
