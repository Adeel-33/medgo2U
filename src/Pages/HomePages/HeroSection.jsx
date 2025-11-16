import HeroSectionImg from "../../assets/HomePage/NavbarImages/HeroSectionImg.svg";

const HeroSection = () => {
  return (
    <div className="bg-[#F2E4F6] py-10 md:py-14">

      <div className="flex flex-col items-center justify-center gap-6 px-4 md:px-0">
        
        {/* Top Small Heading */}
        <h1 className="text-[#9775F6] font-semibold text-center text-sm md:text-base">
          UK’s #1 Marketplace for Trusted Healthcare Professionals
        </h1>

        {/* Big Heading */}
        <div className="relative max-w-[1098px] flex flex-col items-center justify-center text-center">
          
          <h1 className="
            px-2 md:px-0 
            text-[24px] sm:text-[32px] md:text-[60px]
            font-bold text-[#102379]
            leading-tight
          ">
            Professional HealthCare
          </h1>

          <h1 className="
            px-2 md:px-0
            text-[18px] sm:text-[30px] md:text-[60px]
            font-bold text-[#102379]
            leading-tight
          ">
            In Person, Wherever You Are. Online
          </h1>

          <h1
            className="
              px-2 md:px-0
              text-[20px] sm:text-[32px] md:text-[60px]
              font-bold text-transparent bg-clip-text
              bg-linear-to-r from-sky-400 via-pink-400 to-blue-700
              leading-tight
            "
          >
            When You Need It
          </h1>

        </div>

        {/* Paragraph Section */}
        <div className="flex flex-col items-center max-w-[330px] sm:max-w-[500px] md:max-w-[700px] text-center px-2">
          <p className="text-[#00000099] text-sm sm:text-base leading-relaxed">
            Search → Compare → Chat → Book Trusted Professionals in 14 specialties — 
            from Physiotherapy to
          </p>
          <p className="text-[#00000099] text-sm sm:text-base leading-relaxed">
            Medical and Veterinary care. Track your provider Live, right to your door.
          </p>
        </div>

      </div>

    </div>
  );
};

export default HeroSection;
