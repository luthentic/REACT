import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
// component must be capital
// array and object must deep copy reference data type

export default App;
