import { useDispatch, useSelector } from 'react-redux';
import Data from '../Data';
import { Left, NavWrap, Right, Wrap } from './style';


export const StatePage = () => {
  const dispatch = useDispatch();
  const idx = useSelector(state => state.idx)

  const add = () => {
    dispatch({type:"NEXT", payload: 1})
  }
  const get = () => {
    dispatch({type:"PREVIUS", payload: 1})
  }
  return(
    <Wrap>
      <NavWrap>
        <Left onClick={get}>&#8249;</Left>
        <Data/>
        <Right onClick={add}>&#8250;</Right> 
      </NavWrap>
      <p>{idx}</p>
    </Wrap>
  );
};