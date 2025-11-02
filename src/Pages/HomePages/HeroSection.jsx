import HeroSectionImg from "../../assets/HomePage/NavbarImages/HeroSectionImg.svg";
const HeroSection = () => {
  return (
    <div className="bg-[#F2E4F6] py-14">

   
    <div className="flex flex-col items-center justify-center gap-6 px-4 md:px-0">
      <h1 className="text-[#9775F6] text-semibold">UK’s #1 Marketplace for Trusted Healthcare Professionals</h1>

       {/* Big Heading */}
      <div className="relative flex items-center justify-center mb-6 px-4">
        <h1
          className=" px-4 md:p-0 text-[20px]  md:text-[40px] lg:text-[40px]
          font-extrabold  text-transparent bg-clip-text
          bg-linear-to-r from-sky-400 via-pink-400 to-blue-700
          tracking-widest text-center select-none"
        >
          Professional HealthCare In Person,Whereever You Are.Online When You Need It
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-[#00000099]">Search → Compare → Chat → Book Trusted Professionals in 14 specialties — from Physiotherapy to
      </h1>
      <h1 className="text-[#00000099]">Medical and Veterinary care.
Track your provider Live, right to your door</h1>
      </div>
      
      
      
    </div>

     </div>
  );
};

export default HeroSection;
