import {Routes,Route} from "react-router-dom"
import App from "./App.jsx"
import Contact from "./Pages/ContactPages/Contact.jsx"
import PrivacyPolicyHeader from "./Pages/PrivacyPolicyPage/PrivacyPolicyHeader.jsx"
import TermsAndCondition from "./Pages/TermsAndConditionPage/TermsAndCondition.jsx"
import SignUp from "./Pages/SignUpPage/SignUp.jsx"
import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx"

const Layout=()=>{

    return (<>
    
        <Navbar/>

        <Routes>
         
         <Route path="/" element={<App/>}/>

         <Route path="/contact" element={<Contact/>}/>
         <Route path="/privacyPolicy" element={<PrivacyPolicyHeader/>}/>
         <Route path="/terms" element={<TermsAndCondition/>}/>
        <Route path="/signIn" element={<SignUp/>}/>


        </Routes>

        <Footer/>

    </>)
}
export default Layout