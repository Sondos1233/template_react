import './App.css';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './Component/Footer/Footer';
function App() {
  return (
  <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        
      </Switch>
    </Router>
    <Footer/>
  </> 
 );
}

export default App;
