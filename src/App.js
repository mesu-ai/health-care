// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFind from './components/notfind/NotFind';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './components/about/About';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ServiceDetails from './components/servicedetails/ServiceDetails';
import AllServices from './components/services/AllServices';
import AuthPeovider from './contex/AuthPeovider';
import PrivateRoute from './privateroute/PrivateRoute';


function App() {
  return (
    <div className="App">

      <AuthPeovider>

      <BrowserRouter>
      <Header></Header>
      <Switch>
        
        <Route path='/home'>
          <Home></Home>
        </Route>

        <Route path='/services'>
        <AllServices></AllServices>
        </Route>

        <PrivateRoute path='/service/:serviceId'>
          <ServiceDetails></ServiceDetails>
        </PrivateRoute>

        <Route path='/aboutus'>
          <About></About>
        </Route>
        
        <Route path='/login'>
          <Login></Login>
        </Route>

        <Route path='/register'>
          <Register></Register>
        </Route>

        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route path='*'>
          <NotFind></NotFind>
        </Route>

      </Switch>
      <Footer></Footer>
      </BrowserRouter>

      </AuthPeovider>
  


   
    </div>
  );
}

export default App;
