import c1 from "../../assets/ContactImg/c1.svg"
import c2 from "../../assets/ContactImg/c2.svg"
import c3 from "../../assets/ContactImg/c3.svg"
import c4 from "../../assets/ContactImg/c4.svg"
import c5 from "../../assets/ContactImg/c5.svg"
import c6 from "../../assets/ContactImg/c6.svg"
import c7 from "../../assets/ContactImg/c7.svg"
import c8 from "../../assets/ContactImg/c8.svg"
import c9 from "../../assets/ContactImg/c9.svg"
import c10 from "../../assets/ContactImg/c10.svg"
import c11 from "../../assets/ContactImg/c11.svg"
import c12 from "../../assets/ContactImg/c12.svg"

import warning_icon from "../../assets/ContactImg/war.svg"
import doc from "../../assets/ContactImg/doc.svg"
import loc from "../../assets/ContactImg/loc.svg"
import dispute from "../../assets/ContactImg/dispute.svg"

import msg_icon from "../../assets/ContactImg/msg_icon.svg"
import call_icon from "../../assets/ContactImg/call_icon.svg"
import whatsapp_icon from "../../assets/ContactImg/whatsapp_icon.svg"

const Contact = () => {
  const features = [
    {
      id: 1,
      img: c1,
      title: "Find a Healthcare Professional",
      desc: "Use our search or AI Assistant to find the right professional.",
    },
    {
      id: 2,
      img: c2,
      title: "EXPLORE PROFILES & OPTIONS",
      desc: "Check profiles to select a video or in-person consultation.",
    },
    {
      id: 3,
      img: c3,
      title: "BOOK & PAY SECURELY",
      desc: "Book your appointment and pay for it securely online.",
    },
    {
      id: 4,
      img: c4,
      title: "LIVE TRACKING FOR IN-PERSON VISITS",
      desc: "Track their journey to your location in real-time.",
    },
    {
      id: 5,
      img: c5,
      title: "LIVE CHAT SUPPORT",
      desc: "Get assistance or communicate with the provider via chat.",
    },
    {
      id: 6,
      img: c6,
      title: "AFTER YOUR CONSULTATION",
      desc: "Your payment is held 48 hrs. View your summary & leave a review",
    },
  ];

  const about = [
    {
      id: 1,
      img: c7,
      desc: "Verified Credentials & Legal Compliance",
    },
    {
      id: 2,
      img: c8,
      desc: "Governing Body Registration Number verified",
    },
    {
      id: 3,
      img: c9,
      desc: "DBS (Criminal Background) Check completed",
    },
    {
      id: 4,
      img: c10,
      desc: "Professional Qualifications cross-checked",
    },
    {
      id: 5,
      img: c7,
      desc: "Valid Insurance (either personal or through their regulatory body)",
    },
    {
      id: 6,
      img: c11,
      desc: "Healthcare professionals are required to use secure, external documentation systems approved by their governing body to record clinical notes. These notes are not stored by MedGo2U and are securely retained for a minimum of 8 years in compliance with healthcare data laws.”",
    },
    {
      id: 7,
      img: c12,
      desc: "Compliant with GDPR and local health regulations",
    },
  ];

  const actions = [
    {
      id: 1,
      img: doc,
      title: "Healthcare Professional Canceled?",
      desc: "We'll try to connect you with another healthcare or refund you to the original payment source.",
    },
    {
      id: 2,
      img: loc,
      title: "Location Update?",
      desc: "Confirm with your healthcare and then email us at info@medgou.com",
    },
    {
      id: 3,
      img: warning_icon,
      title: "Complaints?",
      desc: "Raise with your healthcare. They are responsible for delivering the service.",
    },
    {
      id: 4,
      img: dispute,
      title: "Disputes?",
      desc: "Talk to the healthcare during the session Inform MedGo2U via email if unresolved",
    },
  ];

   const links = [
    {
      id: 1,
      img: msg_icon,
      title: "info@medgo2u.com",
     
    },
    {
      id: 2,
      img: whatsapp_icon,
      title: "WhatsApp",

    },
    {
      id: 3,
      img: call_icon,
      title: "Phone Number",
    
    },
  
  ];


  return (
    <>
      {/* Heading */}
      <div className="max-w-[1440px] flex flex-col items-center my-8 text-center px-4">
        <h1 className="font-semibold text-[32px] md:text-[60px] text-[#102379]">
          Contact{" "}
          <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-[#9B67C6] via-[#00CACD] to-[#13267A]">
            Us
          </span>
        </h1>

        <h1 className="font-semibold text-[28px] md:text-[60px] text-[#102379]">
          Frequently Asked{" "}
          <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-[#9B67C6] via-[#00CACD] to-[#13267A]">
            Questions
          </span>
        </h1>
      </div>

      {/* How does it work */}
      <div className="max-w-[1440px] flex items-center justify-center my-10 px-4">
        <div className="w-full md:w-[1120px] flex flex-col gap-10">
          <h1 className="text-[28px] md:text-[40px] font-semibold text-black text-center md:text-left">
            1. How Does It Work?
          </h1>

          {/* features */}
          <div className="flex flex-wrap justify-center gap-5 md:gap-[30px]">
            {features.map((fea) => (
              <div
                key={fea.id}
                className="w-[90%] sm:w-[300px] md:w-[351px] h-auto md:h-44 flex flex-col items-center gap-3.5 justify-center text-center"
              >
                <img className="w-12 h-12" src={fea.img} alt="" />
                <h1 className="text-[18px] md:text-[20px] font-semibold text-black">
                  {fea.title}
                </h1>
                <p className="text-[14px] font-normal text-black/50">
                  {fea.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How Do I Know */}
      <div className="max-w-[1440px] flex items-center justify-center my-10 px-4">
        <div className="w-full md:w-[1120px] flex flex-col gap-10">
          <h1 className="text-[28px] md:text-[40px] font-semibold text-black text-center md:text-left">
            2. How Do I Know My Healthcare Professional Is Safe and Practicing
            Within the Law?
          </h1>

          <div className="flex flex-wrap justify-center gap-5 md:gap-[30px]">
            {about.map((ab) => (
              <div
                key={ab.id}
                className="w-[90%] sm:w-[250px] h-auto md:h-[200px] flex flex-col items-center gap-3.5 justify-center text-center"
              >
                <img className="w-12 h-12" src={ab.img} alt="" />
                <p className="text-[15px] md:text-[16px] font-normal text-black">
                  {ab.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Warning */}
      <div className="max-w-[1440px] flex items-center justify-center my-24 px-4">
        <div className="w-full md:w-[1120px] border border-[#9B67C6] rounded-md py-6 px-4 flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5">
            <img src={warning_icon} alt="" className="w-[34px] h-[34px]" />
            <h1 className="font-medium text-[20px] md:text-[24px] text-black">
              Warning :
            </h1>
          </div>

          <p className="font-normal text-[14px] md:text-[16px] text-black/60">
            Note: MedGo2U verifies credentials but does not store or manage
            clinical notes or patient health data. All professionals are
            independently regulated and follow strict confidentiality and
            documentation standards.
          </p>
        </div>
      </div>

     {/* Cancellation Policy */}
      <div className="w-full flex flex-col items-center py-8 bg-white px-4">
  <h1 className="text-[28px] md:text-[40px] font-semibold text-black mb-6 text-center">
    Cancellation Policy
  </h1>

  {/* Make table scrollable horizontally */}
  <div className="w-full overflow-x-auto">
    <div className="min-w-[700px] md:min-w-0 md:w-[1120px] border border-dotted border-gray-300 rounded-lg overflow-hidden mx-auto">
      {/* Header */}
      <div className="grid grid-cols-5 text-center text-[14px] md:text-[20px] font-semibold divide-x divide-dotted divide-gray-300 border-b border-dotted border-gray-300">
        <div className="py-4 bg-gray-50 text-black">Consultation Type</div>
        <div className="py-4 bg-gray-50 text-black">&gt; 48h Cancel</div>
        <div className="py-4 bg-gray-50 text-black">24h Cancel</div>
        <div className="py-4 bg-gray-50 text-black">&lt; 2h Cancel</div>
        <div className="py-4 bg-gray-50 text-black">Reschedule Option</div>
      </div>

      {/* Online Consultation */}
      <div className="grid grid-cols-5 text-center text-[13px] md:text-[18px] divide-x divide-dotted divide-gray-300 border-b border-dotted border-gray-300">
        <div className="py-4 bg-[#F5F2FA] text-black">Online Consultation</div>
        <div className="py-4">100%<br />Refund</div>
        <div className="py-4">70%<br />Refund</div>
        <div className="py-4">30%<br />Refund</div>
        <div className="py-4">1 Free<br />Reschedule</div>
      </div>

      {/* In-Person Consultation */}
      <div className="grid grid-cols-5 text-center text-[13px] md:text-[18px] divide-x divide-dotted divide-gray-300 border-b border-dotted border-gray-300">
        <div className="py-4 bg-[#E7F4F2] text-black">In-Person Consultation</div>
        <div className="py-4">100%<br />Refund</div>
        <div className="py-4">70%<br />Refund</div>
        <div className="py-4">30%<br />Refund</div>
        <div className="py-4">1 Free<br />Reschedule</div>
      </div>

      {/* Holiday Booking */}
      <div className="grid grid-cols-5 text-center text-[13px] md:text-[18px] divide-x divide-dotted divide-gray-300">
        <div className="py-4 bg-[#FDF3E7] text-black">Holiday Booking</div>
        <div className="py-4">No<br />Refund</div>
        <div className="py-4">No<br />Refund</div>
        <div className="py-4">No<br />Refund</div>
        <div className="py-4">1 Free<br />Reschedule</div>
      </div>
    </div>
  </div>
      </div>


      {/* Actions */}
      <div className="max-w-[1440px] flex items-center justify-center my-10 px-4">
        <div className="flex flex-wrap justify-center gap-5 md:gap-[30px]">
          {actions.map((act) => (
            <div
              key={act.id}
              className="bg-[#F9F9F9] rounded-md w-[95%] sm:w-[400px] md:w-[545px] h-auto md:h-[247px] flex flex-col items-center gap-3.5 py-8 px-6 text-center"
            >
              <img className="w-12 h-12" src={act.img} alt="" />
              <h1 className="text-[20px] md:text-[24px] font-semibold text-black">
                {act.title}
              </h1>
              <p className="text-[14px] font-normal text-black/50 md:w-[349px]">
                {act.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* contact links */}
      <div className="max-w-[1440px] flex items-center justify-center my-10 px-4">
        <div className="flex flex-wrap justify-center gap-5 md:gap-[30px]">
          {links.map((link) => (
           <div className="rounded-[20px] w-[352px] h-[116px] p-0.5 bg-linear-to-r from-[#01C4CA] via-[#6C51B9] to-[#9B67C6]">
             <div className="rounded-[20px] w-full h-full bg-white flex flex-col items-center justify-center gap-3.5">
                 <img className="w-[30px] h-[30px]" src={link.img} alt="" />
                 <h1 className="text-[22px] font-normal text-black/80">{link.title}</h1>
             </div>
        </div>

          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
