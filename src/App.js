import React from "react";
import { Switch, Route } from "react-router-dom";
import Counter from "./components/counter";
import Jotto from "./components/jotto/jotto";

class App extends React.Component{
  
  render(){

    return(
      <div>
        <Switch>
          <Route exact path="/jotto" component={Jotto}/>
          <Route exact path="/counter" component={Counter}/>
        </Switch>
      </div>
    )
  }
}

export default App;