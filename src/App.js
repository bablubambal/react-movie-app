import React from 'react';
import './App.scss';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
   <div className='app'>
     
     <Router>
<Header></Header>
<div className="container">
<Switch>
<Route path="/" exact  component={Home}/>
<Route path = "/movie/:imdbId"  component={MovieDetail} />
<Route component={PageNotFound}/>

</Switch>
</div>
<Footer/>
     </Router>
     


   </div>
  );
}

export default App;
