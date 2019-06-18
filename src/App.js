import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Calendar from './Calendar';
import Four04 from './404/404';

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
          <Switch>
            <Route exact path={`/calendar/:year/:month`} render={routeProps => <Calendar year={routeProps.match.params.year} month={routeProps.match.params.month} {...routeProps}/> } />
            <Route exact path={'/calendar'} render={(routeProps)=><Calendar {...routeProps}/>}/>
            <Route exact path={'/'} render={()=> <Redirect to="/calendar"/>}/>
            <Route component={Four04}/> 
          </Switch>
      </div>)
  };
}

export default App;
