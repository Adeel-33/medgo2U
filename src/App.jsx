import './App.css'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import HeroSection from './Pages/HomePages/HeroSection'
import Delivery from './Pages/HomePages/Delivery'
import HealthHeading from './Pages/HomePages/HealthHeading'

import Cards from "./Pages/CardPage/Cards"
import DoctorsList from "./Pages/CardPage/DoctorsList"
import Heading2 from './Pages/CardPage/Heading2'
import Navbar2 from './Pages/CardPage/Navbar2'

const App=()=>{
 return(
  <>
     {/* HomePage Components */}
     <Navbar/>
     <HeroSection/>
     <SearchBar/>
     <Delivery/>
     <HealthHeading/>

     {/* CardPage Components */}
     <Heading2/>
     <Navbar2></Navbar2>
     <Cards/>
     <DoctorsList/>
  </>
 )
}
export default App
