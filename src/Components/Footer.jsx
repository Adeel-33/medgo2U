
import cartoon from "../assets/FooterImages/cartoon.svg"
import {Link} from "react-router-dom"
const Footer=()=>{


    return(<>
     
      <div className="max-w-[1440px] flex flex-col px-4 md:items-center ">

      <div className="flex flex-col md:flex-row gap-4 max-w-7xl my-12">


        {/* heading */}
        <div className="max-w-[514px]">
            <h1 className="text-[40px] font-semibold text-[#102379]">Book Healthcare, Your Way Across 14 Specialties, with 
            <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-[#9B67C6] via-[#00CACD] to-[#13267A] " > Live Tracking</span> </h1>
        </div>

        {/* email section */}
        <div className=" flex flex-col gap-4 max-w-[736px]">
         
         <h1 className="text-[20px] font-extrabold text-[#102379] max-w-[351px]">Join the MedGo2U Health Community to Stay Informed, Stay Strong, Stay Home.</h1>
         
         <div className="bg-[#FDF2E1] max-w-[736px] max-h-[210px] rounded-[20px] px-4 py-8 flex relative">


         <div className="flex flex-col h-full md:w-[351px]  gap-4">

            <input className="bg-white rounded-full px-4 py-2 text-black/70" type="text" placeholder="Your Email" />
            <button className="bg-[#F3A391] font-semibold text-black rounded-full py-1 ">Subscribe</button>
            <p className="text-sm text-black/70">By Clicking "Subscribe" you agree to Medgo2U Privacy Policy and consent Medgo2u using your contact data for newslater purposes</p>
         </div>
          
          <div>
            <img className="relative top-[-150px] max-w-[295.01px] max-h-[286px] hidden  md:flex" src={cartoon} alt=""  />
          </div>
         </div>

        </div>

      </div>

      <div className="w-full md:pl-8 md:max-w-7xl flex flex-row flex-wrap gap-[60px]">
      
      {/* section 1 */}
      <div className="flex flex-col gap-4">

        <h1 className="font-bold text-[20px] text-black">About MedGo2U</h1>

        <div  className="flex flex-col gap-2">
              
              <p className="font-normal text-[16px] text-black/60">Careers</p>
              <p className="font-normal text-[16px] text-black/60">Core Values</p>
              <p className="font-normal text-[16px] text-black/60">Our Mission</p>
              <p className="font-normal text-[16px] text-black/60">Our Story</p>
        </div>
      
        
      </div>

      {/* section 2 */}
      <div className="flex flex-col gap-4">

        <h1 className="font-bold text-[20px] text-black">Services</h1>

        <div  className="flex flex-col gap-2">
              
              <p className="font-normal text-[16px] text-black/60">HeathCare</p>
              <p className="font-normal text-[16px] text-black/60">Gift Cards</p>
            
        </div>
      
        
      </div>

        {/* section 3 */}
      <div className="flex flex-col gap-4">

        <h1 className="font-bold text-[20px] text-black">Community</h1>

        <div  className="flex flex-col gap-2">
              
              <p className="font-normal text-[16px] text-black/60">Blog</p>
              <p className="font-normal text-[16px] text-black/60">Become an Affiliate</p>
            
        </div>
      
        
      </div>
      

         {/* section 4 */}
      <div className="flex flex-col gap-4">

        <h1 className="font-bold text-[20px] text-black">Legal</h1>

        <div  className="flex flex-col gap-2">
              
              <Link to="/privacyPolicy" className="font-normal text-[16px] text-black/60">Privacy Policy</Link >
              <Link to="/terms" className="font-normal text-[16px] text-black/60">Terms of Use</Link >
              <p className="font-normal text-[16px] text-black/60">Cookie Policy</p>
            
        </div>
      
        
      </div>
      
         {/* section 5 */}
      <div className="flex flex-col gap-4">

        <h1 className="font-bold text-[20px] text-black">Contact Us</h1>

        <div  className="flex flex-col gap-2">
              
              <Link to="/contact" className="font-normal text-[16px] text-black/60">FAQ</Link>
              <p className="font-normal text-[16px] text-black/60">Coming Soon</p>
              <p className="font-normal text-[16px] text-black/60">info@medgo2u.com</p>
            
        </div>
      
        
      </div>

      </div>

      </div>
    
    </>)
}
export default Footer