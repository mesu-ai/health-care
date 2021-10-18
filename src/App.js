// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFind from './components/notfind/NotFind';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Services from './components/services/Services';
import About from './components/about/About';
import Login from './components/login/Login';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header></Header>
      <Switch>
        
        <Route path='/home'>
          <Home></Home>
        </Route>

        <Route path='/services'>
        <Services></Services>
        </Route>

        <Route path='/aboutus'>
          <About></About>
        </Route>
        
        <Route path='/login'>
          <Login></Login>
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
      
    </div>
  );
}

export default App;
