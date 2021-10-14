import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Hire from './components/Hire';
import Reviews from './components/Reviews';
import Sightings from './components/Sightings';

function App() {
  return (
    
    <Router>
    <div className="App">
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/sightings">
    <Sightings />
    </Route>
    <Route path="/hire">
    <Hire />
    </Route>
    <Route path="/reviews">
    <Reviews />
    </Route>

    </div>
    </Router>
  );
}

export default App;
