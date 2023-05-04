import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";
import Home from "./routes/Home";
import Screen from "./routes/Screen";

function App(){
  
    return(
        <Router >
            <Switch>
                <Route path="/movie">
                    <Screen/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;