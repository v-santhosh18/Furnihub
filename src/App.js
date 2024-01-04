import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Scrollview from './components/Scrollview';
import Scroll from './components/Scroll';
import Dailydeal from './components/Dailydeal';
import SubNavbar from './components/SubNavbar';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
    <div>
   <Routes>
   <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  </Routes>
  </div>
  </AuthProvider>
  );
}

export default App;
