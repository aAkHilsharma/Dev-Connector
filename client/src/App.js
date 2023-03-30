import { useEffect } from 'react';
import './App.css';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loaduser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loaduser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route
            exact
            path='/dashboard'
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route
            exact
            path='create-profile'
            element={<PrivateRoute component={CreateProfile} />}
          />
          <Route
            exact
            path='edit-profile'
            element={<PrivateRoute component={EditProfile} />}
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
