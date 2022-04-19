import { createStore } from "redux";
import { Provider } from "react-redux";
import { MainPage } from '../Data';
import { StatePage } from '../StatePage';

export const Redux = () => {
  const action = {type:'', payload: ''};
  const defaultState = {
    idx: 0,
    articless: [],
    currentArticle: null,  
  }
  const reducer = (state = defaultState, action) => {
    switch(action.type) {
      case "NEXT" :
        return {...state, idx: state.idx + action.payload}
      case "PREVIUS" :
        return {...state, idx: state.idx - action.payload}
      default:
        return state
    }
  }
  const store = createStore(reducer);
  return(
    <Provider store = {store}>
      <StatePage/>
    </Provider>
  );
};