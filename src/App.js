
import './App.css';
import Motor from './motor';
import Hire from './hire';
import Weave from './weave';
import Honey from './honey';
import Barber from './barbering';
import './app.scss';
import {Route,NavLink} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      < div className='up'>
      <h1> Hello world there are alot of busineses in this world
        but below listed five small type busineses are my best choice for those
        with small amount of money to start.Starting a business may be slow initially
        but don't let that  discourage you.without wasting time let's visit each of them
        for more details starting from MOTO PARTS BUSSI.
      </h1>
    
      <div className='img'></div>
      <div className='link'> 
      <NavLink exact activeStyle={{
       color:'gold' 
      }} 
           to="/">Moto Parts</NavLink>
      <NavLink exact activeStyle={{
       color:'gold' }}
              to="/hire">Hire Purchase</NavLink>
      <NavLink exact activeStyle={{
       color:'gold'}}  
             to="/weave">Weaving Clothes</NavLink>
      <NavLink exact activeStyle={{
       color:'gold'}} 
             to="/honey">Honey Business</NavLink>
      <NavLink exact activeStyle={{
       color:'gold'}} 
              to="/barbering">Babering</NavLink>
      </div>
      </div>
        <Route exact path='/'><Motor/></Route>
        <Route exact path='/hire'><Hire/></Route>
        <Route exact path='/weave'><Weave/></Route>
        <Route exact path='/honey'><Honey/></Route>
        <Route exact path='/barbering'><Barber/></Route>
    </div>
  );
}

export default App;
