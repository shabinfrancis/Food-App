import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
