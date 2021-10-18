// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFind from './components/notfind/NotFind';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Switch>
        
        <Route path='/home'>
          <Home></Home>
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
