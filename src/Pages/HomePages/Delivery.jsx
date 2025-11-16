import comment_icon from "../../assets/HomePage/DeliveryImg/comment_icon.svg";
import delivery_icon from "../../assets/HomePage/DeliveryImg/delivery_icon.svg";
import payment_icon from "../../assets/HomePage/DeliveryImg/payment_icon.svg";
import trust_icon from "../../assets/HomePage/DeliveryImg/trust_icon.svg";

const Delivery = () => {
  return (
    <div className="flex flex-col gap-6 md:items-center px-4">

      <div className="flex flex-col md:flex-row md:items-center md:justify-center 
      gap-6 md:gap-10 w-full max-w-[1100px] mx-auto py-6">

        {/* Payment */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <img src={payment_icon} alt="payment" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="font-semibold text-[18px]">Secure Payment</h1>
            <p className="text-[13px] text-black/40">
              Your money’s protected until the service is complete
            </p>
          </div>
        </div>

        {/* Divider - Hidden on mobile */}
        <div className="hidden md:block h-10 border-l border-dotted border-gray-400"></div>

        {/* Chat Before Booking */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <img src={comment_icon} alt="chat" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="font-semibold text-[18px]">Chat Before You Book</h1>
            <p className="text-[13px] text-black/40">
              Speak directly with trusted healthcare professionals
            </p>
          </div>
        </div>

        {/* Divider - Hidden on mobile */}
        <div className="hidden md:block h-10 border-l border-dotted border-gray-400"></div>

        {/* Trusted Care */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <img src={trust_icon} alt="trust" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="font-semibold text-[18px]">Trusted Care</h1>
            <p className="text-[13px] text-black/40">
              Licensed, background-checked providers
            </p>
          </div>
        </div>

        {/* Divider - Hidden on mobile */}
        <div className="hidden md:block h-10 border-l border-dotted border-gray-400"></div>

        {/* Track Provider */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <img src={delivery_icon} alt="delivery" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="font-semibold text-[18px]">Track Your Provider Live</h1>
            <p className="text-[13px] text-black/40">
              Real-time updates, right to your phone
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Heading */}
      <div className="text-center md:text-left">
        <h1 className="font-semibold text-[24px] md:text-[30px]">
          <span className="font-bold">321,014</span> Appointments booked today
        </h1>
      </div>

    </div>
  );
};

export default Delivery;
