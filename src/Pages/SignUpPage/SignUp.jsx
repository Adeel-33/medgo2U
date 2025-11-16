import NavLogo from "../../assets/SignupImages/NavLogo.svg";
import fb_icon from "../../assets/SignupImages/fb_icon.svg";
import google_icon from "../../assets/SignupImages/google_icon.svg";
import email_icon from "../../assets/SignupImages/email_icon.svg";
import group from "../../assets/SignupImages/group.svg";
import Trustpilot from "../../assets/SignupImages/Trustpilot_logo.svg";
import stars from "../../assets/SignupImages/stars.svg";
import chechmark from "../../assets/SignupImages/checkmark.svg";
import signupBg from "../../assets/SignupImages/signupBg.png";

import React, { useState } from "react";

const SignUp = () => {
  const accounts = [
    { id: 1, name: "Continue with Google", img: google_icon },
    { id: 2, name: "Continue with Facebook", img: fb_icon },
    { id: 3, name: "Continue with Email", img: email_icon },
  ];

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen bg-white">

      {/* Background Image (Responsive) */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${signupBg})` }}
      ></div>

      {/* Login Section */}
      <div className="
        relative z-10 w-full md:w-[625px] 
        mt-10 md:mt-[106px] mb-10 
        mx-auto md:ml-[82px]
        shadow-lg shadow-black/30 
        bg-white rounded-xl 
        px-5 sm:px-6 md:px-10 
        py-8 md:py-[55px]
      ">
        
        <div className="flex flex-col items-center w-full max-w-[444px] mx-auto gap-6">

          {/* Logo & Heading */}
          <div className="flex flex-col items-center text-center gap-6">
            <img className="w-[180px] sm:w-[200px] md:w-[274px]" src={NavLogo} alt="" />

            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[18px] sm:text-[20px] md:text-[24px] text-[#101828] leading-snug">
                Log in or sign up to{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9B67C6] via-[#00CACD] to-[#13267A]">
                  Medgo2U
                </span>
              </h1>
              <p className="text-[12px] text-black/60">Welcome back! Please enter your details.</p>
            </div>
          </div>

          {/* Inputs */}
          <div className="flex flex-col w-full gap-3">
            <input
              className="w-full h-[45px] px-3 text-[14px] text-black/60 rounded-lg border border-black/20 shadow-sm"
              type="text"
              placeholder="Mobile Number"
            />
            <input
              className="w-full h-[45px] px-3 text-[14px] text-black/60 rounded-lg border border-black/20 shadow-sm"
              type="text"
              placeholder="Email"
            />
            <button className="w-full py-2 text-white font-semibold bg-linear-to-l from-[#9B67C6] via-[#00CACD99]/90 to-[#9775F6B5]/91 rounded-md">
              Continue
            </button>
          </div>

          {/* OR */}
          <h1 className="text-[14px] font-semibold text-[#475467] mt-2">OR</h1>

          {/* Accounts */}
          <div className="w-full flex flex-col gap-3">
            {accounts.map((item) => (
              <div key={item.id} className="h-[45px] flex items-center justify-center gap-2 border border-black/20 rounded-lg bg-white">
                <img className="w-5 h-5" src={item.img} alt="" />
                <button className="text-[14px]">{item.name}</button>
              </div>
            ))}
          </div>

          {/* Consent Section */}
          <div className="flex flex-col gap-4 w-full mt-6">
            <h1 className="font-bold text-[16px] md:text-[18px]">Consent to MedGo2U Terms and Policies</h1>

            <div className="flex gap-3 items-start">
              <input type="checkbox" className="w-5 h-5 border rounded" />
              <p className="text-[13px]">I confirm that I have read, understood, and agree to the following:</p>
            </div>

            <ul className="list-disc pl-5 flex flex-col gap-2 text-[13px] text-black/60">
              <li>Healthcare Professionals Agreement (Including all 100 clauses)</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>

            <div className="flex gap-3 items-start">
              <img className="w-5 h-5" src={chechmark} alt="" />
              <p className="text-[13px]">Please scroll through these agreements before registering.</p>
            </div>

            <div className="flex gap-3 items-start">
              <input type="checkbox" className="w-5 h-5 border rounded" />
              <p className="text-[13px]">I acknowledge this as a legally binding agreement.</p>
            </div>

            <div className="flex gap-3 items-center">
              <input type="checkbox" className="w-5 h-5 border rounded" />
              <p className="text-[14px] font-semibold">[ I Agree & Continue ]</p>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex flex-col items-center gap-1 mt-6">
            <div className="flex gap-1 items-center">
              <p className="text-[13px] font-semibold">Excellent</p>
              <img className="h-[13px] w-[68px]" src={stars} alt="" />
            </div>

            <div className="flex gap-1 items-center">
              <p className="text-[13px] italic">See Our Reviews On</p>
              <img className="h-[25px] w-[70px]" src={Trustpilot} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Image (Desktop Only) */}
      <div className="hidden md:block absolute top-[300px] right-10 w-[500px]">
        <img className="w-full" src={group} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
