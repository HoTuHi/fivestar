import './App.css';
import Home from './component/home';
import Profile from './component/Profile';
import NavBar from './component/NavBar'
import {HashRouter, Route, Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">

        <div className="is-fluid ">
            <HashRouter>
                <NavBar/>
                <Switch>
                    <Route path="/profile" component={Profile}></Route>
                    {/*<Route path="/" component={Home}></Route>*/}
                    {/*<Home/>*/}
                    <Route exact path="/" component={Home}/>
                </Switch>

            </HashRouter>

        </div>

    </div>
  );
}

export default App;
