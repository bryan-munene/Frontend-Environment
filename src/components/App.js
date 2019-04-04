import React, {Component} from'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import '../static/login.css';

class App extends Component {
    render() {
        return (
            <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
              </Switch>
            </div>
          </Router>
        )
    }
}

export default App;
