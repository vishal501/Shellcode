import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
// import Contact from './Contact';
import Service from './Service';
import Technology from './Technology';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';
// import TestiMonials from './components/TestiMonials/TestiMonials';

import { BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";

function App() {
 
  return (
    <Router>
      
      <div>
        
        <Link exact to="/"></Link>
        <Link exact className="main-nav" activeClassName="main-nav-active" to="/service"></Link>
        <Link exact className="main-nav" activeClassName="main-nav-active" to="/technology"></Link>
        <Link exact className="main-nav" activeClassName="main-nav-active" to="/about"></Link>
        <Link exact className="main-nav" activeClassName="main-nav-active" to="/blog"></Link>
        <Link exact className="main-nav" activeClassName="main-nav-active" to="/projects"></Link>
        
        <hr/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/technology" component={Technology} />
          <Route path="/blog" component={Blog} />
          <Route path="/projects" component={Projects} />
          {/* <Route component={NotFound}/> */}

        </Switch>
      </div>
    </Router>
    // <Home/>
    );
}

export default App;
