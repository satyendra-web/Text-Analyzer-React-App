import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <>  <Router>

  <Navbar title="SpaceX"/>
  <div className="container">  
 <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
          <Textform/>

          </Route>
        </Switch>   </div>
 </Router>

  {/* <About/> */}
    </>
    
  );
}

export default App;
