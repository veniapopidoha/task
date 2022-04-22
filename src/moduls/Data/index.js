import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Wrap } from './style';
import axios from 'axios';

export const Data = () => {

  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles);
  const loading = useSelector(state => state.loading);
  const idx = useSelector(state => state.idx); 


  const loadArticles = () => {
    dispatch({ type:"LOAD_ARTICLES", payload: null });
    if (articles != []){
      axios
      .get("https://baconipsum.com/api/?type=meat-and-filler")
      .then((response) => {
        loadArticlesSuccess(response.data);
      });
    }else{

    }
  }

  const loadArticlesSuccess = (articles) => {
    dispatch({ type:"LOAD_ARTICLES_SUCCESS", payload: articles })
  }

  const searchIndex = (index) => () => {
    dispatch({ type:"INDEX", payload: index })
  }

  useEffect(() => {
    loadArticles();
  }, []);


  return(  
    <Wrap>
      {loading ? <div>Loading...</div> :
      articles.map((data, index) => (
        <div onClick={searchIndex(index)}>
          <a href='/article'>{data.split('  ')[0]}</a>
          <>{idx}</>
        </div>
      ))}
    </Wrap>
  );
};
