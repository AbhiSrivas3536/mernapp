
import './App.css';

import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,//Switch has been changed to Routes in new version
  Route,
} from "react-router-dom";
import Login from './screens/Login';
// below 3 are to load bootstrap via pkg in aur app

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
//import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';

//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootswatch/dist/darkly/bootstrap.min.css'; // Change 'darkly' to your preferred theme



import Signup from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';



function App() {
  return (
    // use empty tag to use more divs without nesting
    //empty tag replaced with router tag
    //<routes> tells where and how to go </routes>
    <CartProvider>
    <Router>
      <div>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/createuser" element={<Signup/>}/>
                <Route exact path="/myOrder" element={<MyOrder/>}/>
            </Routes>

      </div>
      
    </Router>
    </CartProvider>
    
  );// can remove semi colon alse
}

export default App;
