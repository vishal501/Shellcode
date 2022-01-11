import './App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Particle from "./Particle";
import Home from './Home';
import Service from './Service';
import Technology from './Technology';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';

import Devops from './Services/Devops';
import Mobile from './Services/Mobile';
import Website from './Services/Website';
import Social from './Services/Social';
import UXUI from './Services/UXUI';
import SEO from './Services/SEO';

import Python from './Technology/Backend/Python';
import Net from './Technology/Backend/Net';
import Php from './Technology/Backend/Php';
import Java from './Technology/Backend/Java';
import Node from './Technology/Backend/Node';

import ReactNative from './Technology/Frontend/ReactNative';
import Angular from './Technology/Frontend/Angular';
import Vuejs from './Technology/Frontend/Vue';
import Reactjs from './Technology/Frontend/React';
import Ios from './Technology/Frontend/Ios';
import Android from './Technology/Frontend/Android';
import Flutter from './Technology/Frontend/Flutter';
import Xamarin from './Technology/Frontend/Xamarin';


// import  from './Technology/Backend/';

// import TestiMonials from './components/TestiMonials/TestiMonials';

import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect} from "react-router-dom";

function App() {
 
  return (
    <>
    <Particle/>
    <Router>
      
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact/>
          {/* <Home/>
        </Route> */}
        <Route path="/service" component={Service} exact/>
        
          {/* <Service/> */}
          {/* <Route path={"/service/devops"} component={Devops}><Devops/></Route> */}
        {/* </Route> */}
        <Route path="/technology" component={Technology} exact/>
          {/* <Technology/> */}
        {/* </Route> */}
        <Route path="/about" component={About} exact/>
          {/* <About/> */}
        {/* </Route> */}
        <Route path="/blog" component={Blog} exact/>
          {/* <Blog/> */}
        {/* </Route> */}
        <Route path="/projects" component={Projects} exact/>
          {/* <Projects/> */}
        {/* </Route> */}
        {/* <Route path="/service/devops" component={Devops} exact>
          <Devops/>
        </Route> */}
        <Route path="/devops" component={Devops} exact/>
        <Route path="/mobile" component={Mobile} exact/>
        <Route path="/website" component={Website} exact/>
        <Route path="/social" component={Social} exact/>
        <Route path="/uxui" component={UXUI} exact/>
        <Route path="/seo" component={SEO} exact/>

        <Route path="/python" component={Python} exact/>
        <Route path="/.net" component={Net} exact/>
        <Route path="/php" component={Php} exact/>
        <Route path="/java" component={Java} exact/>
        <Route path="/nodejs" component={Node} exact/>

        <Route path="/reactnative" component={ReactNative} exact/>
        <Route path="/angular" component={Angular} exact/>
        <Route path="/vuejs" component={Vuejs} exact/>
        <Route path="/reactjs" component={Reactjs} exact/>
        <Route path="/ios" component={Ios} exact/>
        <Route path="/android" component={Android} exact/>
        <Route path="/flutter" component={Flutter} exact/>
        <Route path="/xamarin" component={Xamarin} exact/>



        
      </Switch>
      
      
      {/* <div>
        
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
         

        </Switch>
      </div> */}
    </Router>
    <Footer/>
    </>
    );
}

export default App;
