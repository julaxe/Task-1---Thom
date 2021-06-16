import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UpdateProfile from "./UpdateProfile";


function App() {
  return (
    <div>
    <AuthProvider>
      <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard}/>
            <PrivateRoute  path="/update-profile" component={UpdateProfile}/>
            <Route path = "/signup" component={Signup} />
            <Route path = "/login" component={Login} />
            <Route path = "/forgot-password" component={ForgotPassword} />
          </Switch>
      </Router>
    </AuthProvider> 
    </div>
    
  );
}

export default App;
