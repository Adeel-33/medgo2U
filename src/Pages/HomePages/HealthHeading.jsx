import arrow from "../../assets/HomePage/HealthSectionImg/arrow.svg";
import { motion } from "framer-motion";

const HealthHeading = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full">

        {/* Big Heading */}
        <div className="relative flex items-center justify-center mb-6 px-4">
          <h1
            className="text-[45px] sm:text-[90px] md:text-[140px] lg:text-[200px]
            font-extrabold uppercase text-transparent bg-clip-text
            bg-linear-to-r from-sky-400 via-pink-400 to-blue-700
            tracking-widest text-center select-none leading-none"
          >
            Health
          </h1>
        </div>

        {/* Spinner */}
        <div className="
          absolute 
          top-[70%] sm:top-[65%] md:top-[60%] lg:top-[55%]
          left-1/2 -translate-x-1/2 
          z-10
        ">
          <div className="relative flex items-center justify-center w-[140px] h-[140px] sm:w-40 sm:h-40 md:w-[167px] md:h-[167px]">

            {/* Outer Circle Border */}
            <div className="absolute inset-0 border border-[#F3A391] bg-white rounded-full"></div>

            {/* Rotating Text */}
            <motion.svg
              viewBox="0 0 200 200"
              className="absolute w-full h-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
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
                fontSize="12px"
                className="sm:text-[13px] md:text-[14.5px]"
                fontWeight="800"
                letterSpacing="1.5px"
              >
                <textPath href="#circlePath" startOffset="0%">
                  Browse Providers Vetted HealthCare Pros, Ready for You
                </textPath>
              </text>
            </motion.svg>

            {/* Inner Solid Circle */}
            <div className="absolute bg-[#F3A391] rounded-full
              w-[70px] h-[70px] sm:w-20 sm:h-20 md:w-[93px] md:h-[93px]
              flex items-center justify-center"
            >
              <div className="border border-gray-700/10 rounded-full p-4 md:p-6">
                <img src={arrow} alt="arrow" className="w-5 h-5 md:w-auto md:h-auto" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default HealthHeading;
