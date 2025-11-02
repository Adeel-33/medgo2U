
import NavLogo from "../../assets/HomePage/NavbarImages/NavLogo.svg";
import call_icon from "../../assets/CardPageImg/DoctorListImg/call_icon.svg";
import msg_icon from "../../assets/CardPageImg/DoctorListImg/msg_icon.svg";
import correct_icon from "../../assets/CardPageImg/DoctorListImg/correct_icon.svg";
import trustpilot from "../../assets/CardPageImg/DoctorListImg/trustpilot.svg";

const DoctorsList = () => {
  // Doctor data
  const doctors = [
    {
      id: 1,
      name: "Maria M",
      role: "Sport Rehabilitation",
      rating: 4.9,
      avatar: "https://i.pravatar.cc/100?img=32",
      location: "London",
      price: "$68",
      tags: ["In-person consultation", "Video Consultation"],
    },
    {
      id: 2,
      name: "Shamil N.",
      role: "Midwife",
      rating: 4.9,
      avatar: "https://i.pravatar.cc/100?img=12",
      location: "Newport",
      price: "$55",
      tags: ["In-person consultation", "Video Consultation"],
    },
    {
      id: 3,
      name: "Jacob B",
      role: "Med Vet",
      rating: 4.9,
      avatar: "https://i.pravatar.cc/100?img=14",
      location: "Bristol",
      price: "$108",
      tags: ["In-person consultation", "Video Consultation"],
    },
    {
      id: 4,
      name: "Rajesh L",
      role: "Occupational therapist",
      rating: 4.9,
      avatar: "https://i.pravatar.cc/100?img=8",
      location: "Bath",
      price: "£65",
      tags: ["In-person consultation", "Video Consultation"],
    },
    {
      id: 5,
      name: "Maya R",
      role: "Physiotherapist",
      rating: 4.9,
      avatar: "https://i.pravatar.cc/100?img=10",
      location: "Bath",
      price: "$65",
      tags: ["In-person consultation", "Video Consultation"],
    },
  ];

  return (
   
    
    <div className=" bg-[#F4EAF8] max-w-[1281px] rounded-[20px] mx-auto my-8 flex flex-col md:flex-row md:items-start md:gap-8 p-6">

      {/* Header Section */}
    
    
      <div className="w-full md:w-3/5 flex flex-col gap-8 p-8">
        {/* Logo */}
        <img className="w-[294px]" src={NavLogo} alt="logo" />

        {/* Heading */}
        <h1 className="font-semibold text-[30px] md:text-[60px] text-[#13267A] leading-tight">
          Overwhelmed with <br />
          <span
            className="font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#9B67C6_0%,#00CACD_33%,#13267A_66%,#9775F6_100%)]"
          >
            choices?
          </span>
        </h1>

        {/* Paragraph */}
        <div className="font-normal text-[30px] text-[#102379]">
          <p>We're just a call or email away!</p>
          <p>Let us help you find the care you</p>
          <p>need - fast</p>
        </div>

        {/* Location info */}
        <div className="flex gap-[5px] items-center">
          <img className="w-[13.13px] h-[13.13px]" src={correct_icon} alt="correct" />
          <h1 className="font-normal text-[14px]">Available Anywhere in UK</h1>
        </div>

        {/* Call button */}
        <button className="w-[124px] h-[50px] font-medium text-[18px] text-black/80 bg-white rounded-[50px]">
          Call Us
        </button>

        {/* Contact & Reviews Info */}
        <div className="flex flex-wrap gap-5 items-center">
          {/* Trustpilot Section */}
          <div className="flex items-center gap-[5px]">
            <img className="w-[13.13px] h-[13.13px]" src={correct_icon} alt="correct" />
            <h1 className="font-semibold text-[13px] italic">See Our Reviews On</h1>
            <img src={trustpilot} alt="trustpilot" />
          </div>

          {/* Phone */}
          <div className="flex gap-2.5 items-center">
            <img className="w-[13.13px] h-[13.13px]" src={call_icon} alt="call" />
            <h1 className="font-semibold text-[13px] italic">932-3047998</h1>
          </div>

          {/* Email */}
          <div className="flex gap-2.5 items-center">
            <img className="w-[18px] h-[18px]" src={msg_icon} alt="email" />
            <h1 className="font-semibold text-[13px] italic">info@medgo2u.com</h1>
          </div>
        </div>
      </div>

      {/* Doctors List Section */}
    
        <div className="w-full md:w-2/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {doctors.map((d) => (
            <article
              key={d.id}
              className="relative bg-white/70 rounded-[30px] p-5 shadow-md border border-white/40 overflow-hidden flex flex-col justify-between w-full"
            >
              {/* Top: Avatar and Info */}
              <div className="flex items-start gap-[55px]">

                 
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-[18px] font-semibold ">{d.name}</h3>
                    <p className="font-semibold text-[12px] text-black/50 ">{d.role}</p>
                    <span className="text-xs flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.293a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.293c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.293a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.293z" />
                      </svg>
                      <span className="text-xs font-medium">{d.rating}</span>
                    </span>
                        
                  </div>

                   <img
                    src={d.avatar}
                    alt={d.name}
                    className="w-[63px] h-[63px] rounded-[15px] object-cover ring-2 ring-white"
                />
        
              </div>

              {/* Middle: Consultation Options */}
              <div className="mt-4 space-y-2">
                {d.tags.map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-slate-800"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a6 6 0 016 6v3a6 6 0 11-12 0V8a6 6 0 016-6zM8 10a2 2 0 114 0 2 2 0 01-4 0z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="font-[500px] text-[12px] text-black">{t}</span>
                  </div>
                ))}
              </div>

              {/* Bottom: Price and Button */}
              <div className="flex items-center justify-between mt-4">
                <div>

                  <div className="flex gap-2">
                       <p className="text-xs text-slate-500">Starts from:</p>
                       <p className="text-sm font-semibold text-slate-900">{d.price}</p>
                  </div>
                
                  <p className="text-xs text-slate-500">{d.location}</p>
                </div>

                {/* Book Button */}
                <button
                  aria-label={`book ${d.name}`}
                  className="w-10 h-10 rounded-full bg-violet-500 shadow-md flex items-center justify-center ml-3 transform group-hover:scale-105 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>

                </button>

              </div>

            </article>
          ))}

          
        </div>
      {/* </div> */}
    </div>
  );
};

export default DoctorsList;



