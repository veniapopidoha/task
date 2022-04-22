import { useSelector } from 'react-redux';
import { Articles } from '../Data/style';
import { Back, Wrap } from './style';

export const ShowArticlePage = () => {
  
  const idx = useSelector(state => state.idx);
  const data = useSelector(state => state.articles);
  console.log(data);

  return(
    <Wrap>
      <Back to="/">Back</Back>
      <Articles>
        {data[idx]}
      </Articles>
    </Wrap>
  );
};