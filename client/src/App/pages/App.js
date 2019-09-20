import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './Home';
import Talk from './Talk';
import Assignedtalks from './assignedtalks';
import Talklist from './talklist';
import Attendlist from './attendlist';
import AssignedTalksList from './assignedtalkslist';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/talk' component={Talk}/>
          <Route path='/assignedtalks' component={Assignedtalks}/>
          <Route path='/talklist' component={Talklist}/>
          <Route path='/attendlist' component={Attendlist}/>
          <Route path='/assignedtalkslist' component={AssignedTalksList}/>
          <Route path='/talklist/:talkId' component={Talklist}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;