import './App.css';
import Apply from './Apply';
import Home from './Home' ;
import Navbar from "./Navbar";
import Change from './Change';
import { BrowserRouter as Router } from "react-router-dom";
import {Route,Switch,Link} from 'react-router-dom';

function App() {
  return (
      <Router >
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
             <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/Apply" component={Apply} />
            <Route path="/Change" component={Change} />
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
