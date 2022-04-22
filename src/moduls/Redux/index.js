import { createStore } from "redux";
import { Provider } from "react-redux";
import { MainPage } from '../MainPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Action } from '../Action';

export const Redux = () => {
  const defaultState = {
    idx: 0,
    articles: [],
    loading: false,
  }
  const reducer = (state = defaultState, action) => {
    console.log('Reducer - ', action.type, action.payload);
    switch(action.type) {
      case "LOAD_ARTICLES":
        return { ...state, loading: true }
      case "LOAD_ARTICLES_SUCCESS":
        return { ...state,
          loading: false,
          articles: action.payload }
      case "INDEX" :
        return {...state, idx: action.payload}
      default:
        return state
    }
  }

  const store = createStore(reducer);
  return(
    <Provider store = {store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage/>}/>
          <Route store = {store} exact path="/article" element={<Action/>}/>
        </Routes>
      </Router>
    </Provider>
  );
};