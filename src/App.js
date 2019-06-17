import React, {Component} from 'react';
// import {Route} from 'react-router-dom';
import './App.css';
import Calendar from './Calendar';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     year: 2019,
  //     month: 6  
  //   };
  //   this.handleYear = this.handleYear.bind(this);
  // }
  // handleYear(changedYear){
  //   this.setState({
  //     year: changedYear
  //   });
  // }

  render (){
    return(
      <div className="App">
          {/* <Route path={`/:year/:month`} component={Calendar} /> */}
          <Calendar />
      </div>)
    
  };
}

export default App;
