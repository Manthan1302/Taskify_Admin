import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import  admin from "./components/AdminHome";
import Allusers  from "./components/Users";
import allClient  from "./components/Client";
import allAssignment from "./components/Assignment";
import Feedback from "./components/Feedback";
import ClientFeedback from './components/ClientFeedback';
import Orders from './components/Orders';
function App() {
  return (
    <>
       <Router>
        <Switch>
          <Route path="/" exact component={Login} />
           
           <Route path="/ADmIn/adminHome" exact component={admin} />
           <Route path="/ADmIn/allUSers" exact component={Allusers} />
           <Route path="/ADmIn/allClient" exact component={allClient} />
           <Route path="/ADmIn/allassignment" exact component={allAssignment} />
           <Route path="/ADmIn/feedback" exact component={Feedback} />
           <Route path="/ADmIn/clientfeedback" exact component={ClientFeedback} />
           <Route path="/ADmIn/allOrders" exact component={Orders} />

        </Switch>
      </Router>

    </>
  );
}

export default App;
