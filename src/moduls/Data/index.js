
import axios from 'axios';
import React from 'react';
import { Wrap } from './style';

class Data extends React.Component {
  
  state = {
    data: []
  }

  componentDidMount() {
    axios
    .get("https://baconipsum.com/api/?type=meat-and-filler")
    .then((response) => this.setState({ data: response.data }));
  };
  


  render() {
    return(
    <Wrap> 
      {this.state.data.map((data) => (
        <p>{data.split('  ')[0]}</p>
      ))}
    </Wrap>
    );
  }
};

export default Data;
