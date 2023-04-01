import { Fragment } from 'react';
import './App.css';
import Home from './componant/Home.js/Home';
import Navbars from './componant/Navbars.js/Navbars';

function App() {
  return (
   <Fragment>
    <Navbars/>
    <Home/>
   </Fragment>
  );
}

export default App;
