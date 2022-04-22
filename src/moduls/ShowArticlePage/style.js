import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20vh 10vh;
  font-size: 24px;
  font-family: 'Roboto', sans-serif, monospace;
  line-height: 40px;
  font-weight: 600;
`;

export const Back = styled(Link)`
  position: absolute;
  top: 10vh;
  left: 10vh;
`;