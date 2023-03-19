import './App.css';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
