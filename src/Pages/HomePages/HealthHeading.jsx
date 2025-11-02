import arrow from "../../assets/HomePage/HealthSectionImg/arrow.svg";
import {motion} from "framer-motion"
const HealthHeading = () => {
  return (
    <>
    <div className="relative ">

      {/* Big Heading */}
      <div className="relative flex items-center justify-center mb-6 px-4">
        <h1
          className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px]
          font-extrabold uppercase text-transparent bg-clip-text
          bg-linear-to-r from-sky-400 via-pink-400 to-blue-700
          tracking-widest text-center select-none"
        >
          Health
        </h1>
      </div>

      {/* Spinner */}
         <div className="absolute mx-28 md:mx-0 md:top-34 md:right-[600px] z-10">
      <div className="relative flex items-center justify-center w-[167px] h-[167px]">
        {/* Outer Circle Border */}
        <div className="absolute inset-0 border border-[#F3A391] bg-white rounded-full"></div>

        {/* 🔥 Animated Text Around Circle */}
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute w-[167px] h-[167px]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,        // speed of one full rotation (in seconds)
            ease: "linear",      // smooth, constant speed
            repeat: Infinity,    // infinite loop
          }}
        >
          <defs>
            <path
              id="circlePath"
              d="M100,100 m-68,0 a68,68 0 1,1 136,0 a68,68 0 1,1 -136,0"
            />
          </defs>

          <text
            fill="#454659"
            fontSize="14.5"
            fontWeight="800"
            letterSpacing="1.5px"
          >
            <textPath href="#circlePath" startOffset="0%">
              Browse Providers Vetted HealthCare Pros, Ready for You
            </textPath>
          </text>
        </motion.svg>

        {/* Inner Colored Circle */}
        <div className="absolute bg-[#F3A391] rounded-full w-[93px] h-[93px] flex items-center justify-center">
          <div className="border border-gray-700/10 rounded-full p-6">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>

      
      </div>

    </>
  );
};

export default HealthHeading;
