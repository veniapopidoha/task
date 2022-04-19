import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Left = styled.a`
  font-size: 100px;
  position: relative;
  width: 50px;
  cursor: pointer;
`;

export const Right = styled(Left)`
  right: 0vh !important;
`;

export const NavWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-top: 40vh;
  user-select: none;
`;