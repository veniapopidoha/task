import { useSelector } from 'react-redux';
import { Wrap } from './style';

export const Action = () => {
  
  const idx = useSelector(state => state.idx);
  const data = useSelector(state => state.articles);
  console.log(data);

  return(
    <Wrap>{data[idx]}</Wrap>
  );
};