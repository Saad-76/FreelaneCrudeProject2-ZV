import "./App.css";
import CoverPage from "./coverPage/coverPage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import HomeMenu from "./homeMenu/homeMenu";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/coverPage" component={CoverPage} />
          <Route path="/home" component={HomeMenu} />
          
          <Redirect exact to="/coverPage" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
