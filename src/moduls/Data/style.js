import styled from 'styled-components';

export const Wrap = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #75FF33;
  padding: 100px 40px;
  border-radius: 30px;
  box-shadow: 10px 10px #ff3375;

  a {
    color: black;
    font-family: 'Roboto', sans-serif, monospace;
    font-weight: 700;
    font-size: 24px;
    text-decoration: none;
    display: block;
    padding: 10px 0 !important;
    :hover{
      color: #3375ff;
    }
  }
`;