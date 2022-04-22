import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Articles, Wrap, StyledLink } from './style';
import axios from 'axios';

export const Data = () => {

  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles);
  const loading = useSelector(state => state.loading);
  const isEmpty = useSelector(state => state.isEmpty)


  const loadArticles = () => {
    dispatch({ type:"LOAD_ARTICLES", payload: true });
    if(isEmpty == true){
      axios
      .get("https://baconipsum.com/api/?type=meat-and-filler")
      .then((response) => {
        loadArticlesSuccess(response.data);
      });
    dispatch({ type:"LOAD_ARTICLES", payload: false });
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
      <Articles>
        {/* {loading ? <div>Loading...</div> : */}
        {articles.map((data, index) => (
          <StyledLink to='/article' onClick={searchIndex(index)}>{data.split('  ')[0]}</StyledLink>
        ))}
      </Articles>
    </Wrap>
  );
};
