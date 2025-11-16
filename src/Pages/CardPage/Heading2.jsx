const Heading2 = () => {
  return (
    <>
      <div className="
        pl-4 sm:pl-10 md:pl-20 
        mt-16 sm:mt-20 md:mt-24 
        mb-4
      ">
        <h1 className="
          text-[#102379] 
          font-semibold 
          text-[34px] sm:text-[50px] md:text-[60px]
        ">
          Discover Verified
        </h1>

        <h1 className="
          text-[#102379] 
          font-bold 
          text-[40px] sm:text-[60px] md:text-[70px] leading-tight
        ">
          HealthCare{" "}
          <span
            className="
              text-transparent  
              bg-clip-text 
              bg-linear-to-r 
              from-[#9B67C6] via-[#00CACD] to-[#13267A]
            "
          >
            Providers
          </span>
        </h1>
      </div>
    </>
  );
};

export default Heading2;
