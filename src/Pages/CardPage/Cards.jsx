import profile_icon from "../../assets/CardPageImg/CardImg/profile_icon.svg"
import location_icon from "../../assets/CardPageImg/CardImg/location_icon.svg"
import location2_icon from "../../assets/CardPageImg/CardImg/location2_icon.svg"
import vedio_icon from "../../assets/CardPageImg/CardImg/vedio_icon.svg"
import time_icon from "../../assets/CardPageImg/CardImg/time_icon.svg"
import arrow_icon from "../../assets/CardPageImg/CardImg/arrow_icon.svg"
import verified_icon from "../../assets/CardPageImg/CardImg/verified_icon.svg"
import rating_icon from "../../assets/CardPageImg/CardImg/rating_icon.svg"
 import share_icon from "../../assets/CardPageImg/CardImg/share_icon.svg"
 import heart_icon from "../../assets/CardPageImg/CardImg/heart_icon.svg"


import p1 from "../../assets/CardPageImg/CardImg/p1.svg"
import p2 from "../../assets/CardPageImg/CardImg/p2.svg"
import p3 from "../../assets/CardPageImg/CardImg/p3.svg"

import card1 from "../../assets/CardPageImg/CardImg/card1.svg"
import c2 from "../../assets/CardPageImg/CardImg/c2.svg"
import c3 from "../../assets/CardPageImg/CardImg/c3.svg"
import c4 from "../../assets/CardPageImg/CardImg/c4.svg"
import c5 from "../../assets/CardPageImg/CardImg/c5.svg"
import c6 from "../../assets/CardPageImg/CardImg/c6.svg"
import c7 from "../../assets/CardPageImg/CardImg/c7.svg"
import c8 from "../../assets/CardPageImg/CardImg/c8.svg"
import c9 from "../../assets/CardPageImg/CardImg/c9.svg"







const Cards=()=>{

  // card 
  const cards=[
    {
      id:1,
      profession:"Physiotherapist",
      image:card1,
      profileImg:p1,
      backgroundColor:"#D9D9D9",
    },
    {
      id:2,
      profession:"Sports Rehabilitation",
      image:c2,
      profileImg:p2,
      backgroundColor:"#F3F3F3",
    },
    {
      id:3,
      profession:"Occupational Therapist",
      image:c3,
      profileImg:p3,
      backgroundColor:"#F3F3F3",
    },
    {
      id:4,
      profession:"Nurse",
      image:c4,
      profileImg:p1,
      backgroundColor:"#F3F3F3",
    },
    {
      id:5,
      profession:"Podiatrist",
      image:c5,
      profileImg:p2,
      backgroundColor:"",
    },
    {
      id:6,
      profession:"Optician",
      image:c6,
      profileImg:p3,
      backgroundColor:"",
    },
    {
      id:7,
      profession:"Chiropractor",
      image:c7,
      profileImg:p1,
      backgroundColor:"",
    },
     {
      id:8,
      profession:"Osteopath",
      image:c8,
      profileImg:p2,
      backgroundColor:"",
    },
     {
      id:9,
      profession:"Med vet",
      image:c9,
      profileImg:p3,
      backgroundColor:"",
    }

  ]

  return (<>
     <div className="flex flex-wrap gap-[54px] px-4 md:px-0 md:justify-center">
     {cards.map(card=>(

     <div key={card.id} className="flex flex-col gap-8 shadow-lg p-4 rounded-[22.88px]">

     {/* heading */}
     <div className=" min-w-[300px] max-w-[357.99px] flex justify-between ">
        <h1 className="text-[28px] font-semibold text-[#102379]">medgo2u</h1>
        <div className="flex gap-4 ">
            <img className="w-[20.59px]" src={heart_icon} alt="heart" />
            <img className="w-[20.59px]" src={share_icon} alt="share" />
        </div>
     </div>

     <div className="min-w-[300px] max-w-[357.99px] h-[227.61px] bg-[#D9D9D9] rounded-[22.88px] relative">
       <h1 className="font-semibold text-[24px] text-black/70 absolute top-4 left-4 ">{card.profession}</h1>
       <img className="w-[207.33px] min-h-[150px] max-h-[180px] absolute right-4 top-4" src={card.image} alt="card1" />
       <img  className="w-[73px] h-[73px] rounded-full absolute -bottom-8 left-8 border-6 border-white" src={card.profileImg} alt="p1" />
    </div> 

     {/* doctor details */}
     <div className="min-w-[300px] max-w-[359px] flex flex-col gap-4">

     {/* name and rating  */}
     <div className="min-w-[300px] max-w-[359px] flex justify-between items-center ">
        {/* name */}
        <div className="flex gap-1.5 items-center">
            <h1 className="font-semibold text-[20.59px]">Dilani T.</h1>
            <img className="h-[22.88px] w-[22.88px]" src={verified_icon} alt="verified_icon" />
        </div>

         {/* rating */}
        <div className="flex gap-1.5 items-center">
            <img className="w-[13.05px] h-[12.41px]" src={rating_icon} alt="rating_icon" />
            <h1 className="font-[500px]] text-[13.73px] text-black/50">4.9 (10)</h1>
        </div>
     </div>

    {/* dotted line */}

      <div className="min-w-[300px] max-w-[359px] h-0 border-[1.14px]  border-dotted border-black/12"></div>
    
    
    {/* Doctor Details */}
    <div className="flex flex-col gap-2.5 min-w-[300px] max-w-[359px]">

      {/* Users Bookings */}
      <div className=" flex items-center gap-[9.15px]">
        <img className="w-3 h-3" src={profile_icon} alt="profile_icon" />
        <h1 className="font-[400px] text-[14px] text-black/60">22 Bookings</h1>
      </div>

      {/* Person Consultation */}
      <div className=" flex items-center gap-[9.15px]">
        <img className="w-3 h-3" src={location_icon} alt="location_icon" />
        <h1 className="font-[400px] text-[14px] text-black/60">In Person Consultation</h1>
      </div>

      {/* Vedio Consultation */}
      <div className=" flex items-center gap-[9.15px]">
        <img className="w-3 h-3" src={vedio_icon} alt="vedio_icon" />
        <h1 className="font-[400px] text-[14px] text-black/60">Vedio Consultation</h1>
      </div>

      {/* Address And Price */}
      <div className="flex justify-between">
         {/* location */}
          <div className=" flex items-center gap-[5px]">
           <img className="w-3 h-3" src={location2_icon} alt="location2_icon" />
           <h1 className="font-[400px] text-[14px] text-black/60">London</h1>
          </div>

           {/* price */}
          <div className=" flex items-center gap-[5px]">
           <img className="w-3 h-3" src={time_icon} alt="time_icon" />
           <h1 className="font-[400px] text-[14px] text-black/60">Starts from <span className="font-semibold text-black">$55</span></h1>
          </div>

      </div>

      {/* arrow */}
      <div className="flex justify-end">
      <div className="w-8 h-8 border-none rounded-full bg-[#F3A391]  flex items-center justify-center">
        <img className="w-[19..09px] h-[12.15px]" src={arrow_icon} alt="arrow_icon" />
      </div>
      </div>

    </div>

    </div>


    </div>

     ))}
     </div>
  </>)
}
export default Cards;