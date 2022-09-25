import Navbar from './components/Navbar/Navbar'
// import Paths from './Paths/Paths'
import HeroSection from './components/Home/HeroSection'
import Cards from './components/Home/Cards'
import './index.css'
import {Route, Switch} from "react-router-dom";
import Partners from './components/Home/Partners';


function App() {
  return (
  //  <>
   
  //  <Switch>
    // <Route path="/" />
  //  </Switch>
    <div>
      <Navbar />
      <HeroSection />
      <Cards />
      <Partners />
     </div>
  //  </>

   
  );
}

export default App
