import SignUp from './components/SingUp';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';


function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <BrowserRouter>
          <PrivateRoute exact path="/" component={Home} />
          <PublicRoute path="/signup" component={SignUp} />
          <PublicRoute path="/login" component={Login} />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;


