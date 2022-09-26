import Navbar from './components/Navbar/Navbar'
// import Paths from './Paths/Paths'
import HeroSection from './components/Home/HeroSection'
import Cards from './components/Home/Cards'
import './index.css'
import {Route, Switch} from "react-router-dom";
import Partners from './components/Home/Partners';
import Create from './components/Create/Create';
import Paths from './Paths/Paths';

function App() {
  return (
    <div>
      <Navbar />
      <Paths />     
     </div>


   
  );
}

export default App
