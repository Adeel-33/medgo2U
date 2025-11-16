
import React from "react";

const TermsAndCondition = () => {
  return (
    <>
      <div className="max-w-[1440px] flex flex-col px-4 md:px-0 md:items-center gap-12">

        {/* Main Heading */}
        <h1 className="text-[70px] font-bold text-black max-w-[940px]">
          TERMS OF SERVICE
        </h1>

        {/* Intro Section */}
        <div className="max-w-[940px] flex flex-col gap-3">
          <h1 className="text-[30px] font-semibold text-black">
            Terms of Service for Users
          </h1>

          <p className="font-normal text-[16px] text-black/50 pl-2">
            Please read these terms and conditions (“Terms”) carefully before navigating our platform or availing any services offered by Medgo2U (hereinafter referred to as “we”, “our” or “us”). In the event you do not agree to these Terms, you should not navigate our platform or avail the services offered by us or if you have already booked any service, you should immediately cancel the same service.
          </p>

          <p className="font-normal text-[16px] text-black/50 pl-2">
            These Terms apply to all users (“<span className="text-black font-bold">you</span>”) of our website (http://www.medgo2u.com) (“<span className="text-black font-bold">Platform</span>”). These Terms apply to you whether (i) you are a resident or national of the United Kingdom or not, or (ii) book any consultation with our Platform or not.
          </p>

          <p className="font-normal text-[16px] text-black/50 pl-2">
            By using the Platform, you agree to these Terms and the additional terms as contained in our Privacy Policy and Cookie Policy.
          </p>
        </div>

        {/* Section 1 */}
        <div className="max-w-[940px]">
          <h1 className="text-[22px] font-semibold text-black">1. Emergencies</h1>
          <p className="text-[16px] font-normal text-black/40 pl-2">
            Our Platform should not be used in emergency medical situations such as extreme breathing difficulties, severe bleeding, severe burns or scalds, loss of consciousness, major road accidents or a fall from height or serious head injury which requires immediate attention, heart attack situations. In any of the said events or any other medical condition which requires immediate medical attention, government backed medical services should be used.
          </p>
        </div>

        {/* Section 2 */}
        <div className="max-w-[940px] flex flex-col gap-[30px]">
          <h1 className="text-[22px] font-semibold text-black">2. Who are we?</h1>
          <p className="text-[16px] font-normal text-black/40 pl-2">
            We are an aggregator platform which connects independently verified healthcare professionals (“HCPs”) with our users. All the medical services as described on the Platform are performed by such HCPs and we do not play any role in providing such medical services.
          </p>

          <h1 className="text-[20px] font-semibold text-black">You can use the Platform to:</h1>

          <p className="text-[16px] font-normal text-black/80 pl-2">1. Book an appointment for an online or in person consultation with an HCP via the Platform (“Appointment”);</p>
          <p className="text-[16px] font-normal text-black/80 pl-2">2. Obtain qualified and professional medical advice from the HCP and related administrative services including referrals and sick notes; and</p>
          <p className="text-[16px] font-normal text-black/80 pl-2">3. If agreed with the Practitioner during the Appointment, you may also obtain prescriptions for certain medication(s), (each a “Service” or together the “Services”).</p>
        </div>

        {/* Section 3 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">3. How to contact us?</h1>
          <p className="text-[16px] font-normal text-black/40 pl-2">
            To contact us, please email <span className="font-bold text-black">info@medgo2u.com</span> or telephone our customer service. For other options, please visit Contact Us.
          </p>
          <p className="text-[16px] font-normal text-black/40 pl-2">We may contact you by email to the email address provided in your Account, by written communication to the postal address provided in your Account or by a general notice on the Platform.</p>
        </div>

        {/* Section 4 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">4. Terms and conditions of Appointments</h1>

          <div>
            <h1 className="text-[20px] font-semibold text-black">a) Appointments are subject to availability:</h1>
            <p className="text-[16px] font-normal text-black/80 pl-2">1. you require medical advice, and you are unable to access Platform for whatever reason;</p>
            <p className="text-[16px] font-normal text-black/80 pl-2">2. there are no Appointments available to suit your requirements;</p>
            <p className="text-[16px] font-normal text-black/80 pl-2">3. you miss an Appointment for whatever reason;</p>
            <p className="text-[16px] font-normal text-black/80 pl-2">4. you lose connection to the Platform during an Appointment; and</p>
            <p className="text-[16px] font-normal text-black/80 pl-2">5. your Appointment is cancelled, including as a result of the relevant HCP being unavailable.</p>
          </div>

          <div>
            <h1 className="text-[20px] font-semibold text-black">b) Book an Appointment in Advance:</h1>
            <p className="text-[16px] font-normal text-black/50 pl-2">You can choose to book an appointment in advance, which we refer to as an “Appointment”. You can request an Appointment on your chosen date and time (subject to availability) via the Platform.</p>
          </div>

          <div>
            <h1 className="text-[20px] font-semibold text-black">c) Rescheduling of Appointments:</h1>
            <p className="text-[16px] font-normal text-black/50 pl-2">You may alternatively reschedule the booked Appointment as per the cancellation and rescheduling policy as set out in these Terms;</p>
          </div>

          <div>
            <h1 className="text-[20px] font-semibold text-black">d) Same day Appointments:</h1>
            <p className="text-[16px] font-normal text-black/50 pl-2">If you want a consultation as soon as possible on the same day, you will need to check for any availability via the Platform. The waiting time and all other time estimates provided and/or published on the Platform are based on our system’s best estimates having reviewed live activity and usage statistics. You accept that the waiting time and all other time estimates are provided as guide only and do not guarantee provision of the Services, or that a connection with a HCP will be made within certain parameters, within a given time period. You accept that we will not refund fees based on waiting times or any other time estimates being inaccurate.</p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">5. Safe use of the Services</h1>
          <p className="text-[16px] text-black/50 pl-2">To ensure you are able to use the Platform and Services safely and in accordance with these Terms, you must:</p>
          <p className="text-[16px] text-black/50 pl-2">a) provide full and accurate information about your medical history and current symptoms (to the Practitioner during an Appointment and/or by sharing such information at the chat box available at the Platform). Failure to provide full information may impact on our ability to provide the Services and the ability of the HCP to make a full assessment of your health and care needs.</p>
          <p className="text-[16px] text-black/50 pl-2">b) not use the Services for any inappropriate purposes (including, without limitation, to obtain clinically inappropriate prescriptions);</p>
          <p className="text-[16px] text-black/50 pl-2">c) follow instructions given to you by the HCP;</p>
          <p className="text-[16px] text-black/50 pl-2">d) follow instructions on any medicine or healthcare product recommended by the HCP;</p>
          <p className="text-[16px] text-black/50 pl-2">e) seek further medical advice if you have any concerns about the information given to you by the HCP or if your condition changes; and</p>
          <p className="text-[16px] text-black/50 pl-2">f) seek immediate medical assistance if you suffer adverse or unexpected effects of any treatment, medicine or healthcare product recommended to you by the HCP. Please see Emergencies section above.</p>
          <p className="text-[16px] text-black/50 pl-2">Where we determine that our Services are inappropriate for your individual needs, we may withdraw our Services from you and you should seek appropriate healthcare advice elsewhere.</p>
        </div>

        {/* Section 6 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">6. Prescriptions, Referral Letter and Medical Certificates</h1>
          <h2 className="text-[18px] font-semibold text-black pl-2">a) Contents</h2>
          <p className="text-[16px] text-black/50 pl-2">You understand and accept that each HCP, at their sole discretion, creates prescriptions, referral letter and medical certificates using their own resources based on their own professional judgement and legal obligations. You understand and accept that the content of such items is individual, based on information you provide to the HCP and your presentation at the time of your consultation. As such, the contents of any prescription, referral letter or medical certificate may vary; the precise nature of the content shall be at the sole discretion of the HCP and you agree to hold us and our employees, officers, directors, agents and affiliates harmless from any claim that may arise as a result of the contents of such items. You must not tamper with the content of any such prescriptions, referral letter or sick notes. You understand and accept that there is no guarantee that such prescriptions, referral letter or medical certificates will contain the content you desired, hoped for, expected, were informed of, understood or believed they would contain.</p>

          <h2 className="text-[18px] font-semibold text-black pl-2">b) Lost prescriptions, referral letter or medical certificates</h2>
          <p className="text-[16px] text-black/50 pl-2">If you lose a prescription, referral letter or medical certificate, a copy of the relevant document may be issued, subject to the prescribing HCP agreeing to reissue the document. You understand and accept that there is no guarantee that HCP will agree to re-issue any document. In the event that the HCP re-issues your lost prescription, referral letter or medical certificate, you understand and accept you may be charged in accordance with the current cost for a “Copy”.</p>

          <h2 className="text-[18px] font-semibold text-black pl-2">c) Issuing prescriptions</h2>
          <p className="text-[16px] text-black/50 pl-2">You understand and accept there is no guarantee whatsoever that you will be issued or provided with a prescription for any medication. You understand and accept that the issuing of any prescription is at the sole discretion of HCP, subject to the limitations applied by us from time to time. You accept that we have required our HCPs to not prescribe any medicines or drugs which are prohibited in the United Kingdom and you accept such restriction applicable to the HCPs.</p>

          <h2 className="text-[18px] font-semibold text-black pl-2">d) Contents of prescriptions</h2>
          <p className="text-[16px] text-black/50 pl-2">You understand and agree that we do not play any role in the issuance of prescriptions. All the prescriptions are issued by HCPs as per their expertise, your diagnosis and the information you provide directly to them.</p>
          <p className="text-[16px] text-black/50 pl-2">You agree and acknowledge that we shall not be held liable in the event you experience any adverse health situation as a result of (i) any side effects of the prescribed drug or medicine and (ii) over or underdosage of any prescribed drug or medicine.</p>
        </div>

        {/* Section 7 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">7. Your MedGo2U Account</h1>

          <h2 className="text-[18px] font-semibold text-black pl-2">a) Registration requirements</h2>
          <p className="text-[16px] text-black/50 pl-2">For the purposes of creating an account on the Platform and accessing the Services, you represent and warrant to us that (i) you are at least 18 years of age, and (ii) you have the capacity to accept the terms contained herein.</p>

          <h2 className="text-[18px] font-semibold text-black pl-2">b) Registering an account</h2>
          <p className="text-[16px] text-black/50 pl-2">Registering an account with us is a pre-requisite for availing the Services on our Platform. To register with us you are required to provide accurate and complete information, including your first and last name, email address, postal address, mobile telephone number (you are not permitted to use landline numbers in place of a mobile telephone number) and any other information that we specifically request as per our privacy policy. You must keep your Account details up to date at all times. We reserve the right to terminate any Account which (at any time) does not include a valid email address and mobile telephone number (not a landline) on file as part of that individual’s Account. Both the email address and mobile telephone number must be stored in the profile for your Account.</p>

          <h2 className="text-[18px] font-semibold text-black pl-2">c) Verification of account</h2>
          <p className="text-[16px] text-black/50 pl-2">You may be required to verify your identity in order to use our Services. We may contact you by telephone or email to verify identity or other Account information and may request further information from you, which you agree to provide, in order to ensure you have not fraudulently created your Account. If you do not provide this information in the manner requested within seven (7) Working Days of the request, we reserve the right to suspend, discontinue or deny you access to and use of the Platform and Services until the information is provided to our reasonable satisfaction. We may also conduct electronic identity verification checks based on the information you provide to us and should these checks fail to verify your identity, we reserve the right to suspend, discontinue or deny you access to and use of the Platform and Services until the information is provided to our reasonable satisfaction.</p>

          <h2 className="text-[18px] font-semibold text-black pl-2">d) One account</h2>
          <p className="text-[16px] text-black/80 pl-2">If you use multiple accounts for the Services, this will mean that records of your care may be inaccurate and you may put the safety and quality of your future care at risk.</p>

          <h2 className="text-[18px] font-semibold text-black pl-2">e) Third party information</h2>
          <p className="text-[16px] text-black/50 pl-2">Where you provide any personal health information to the HCP which you have obtained from a third party health service provider, you warrant that such information is provided lawfully and has not been tampered with.</p>

          <h2 className="text-[18px] font-semibold text-black pl-2">f) Keep your log-in details confidential</h2>
          <p className="text-[16px] text-black/50 pl-2">If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat this as confidential. You must not disclose it to any third party. If you know or suspect that anyone other than you knows your user identification code or password, you must promptly Contact Us.</p>

          <h2 className="text-[18px] font-semibold text-black pl-2">g) Unauthorized usage</h2>
          <p className="text-[16px] text-black/50 pl-2">You are solely responsible for all activity that occurs on your Account and you must notify us immediately if you become aware of any unauthorized use of your Account or if your login details are lost or stolen. We shall not be liable for any losses that you incur as a result of any unauthorized use of your Account.</p>

          <h2 className="text-[18px] font-semibold text-black pl-2">h) Right to Monitor</h2>
          <p className="text-[16px] text-black/50 pl-2">We reserve the right to monitor your use of the Platform and/or Services and to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of the provisions of these Terms or if we suspect any unauthorized use or misuse of the Platform and/or Services (including the attempts to contact the HCP outside Platform for any reason whatsoever).</p>

          <h2 className="text-[18px] font-semibold text-black pl-2">i) Right to terminate or deactivate your account</h2>
          <p className="text-[16px] text-black/50 pl-2">We reserve the right to withdraw access to your account as a result of any behavior that is deemed abusive, inappropriate or in contravention of the terms as contained herein.</p>

          <h2 className="text-[18px] font-semibold text-black pl-2">j) Information resources</h2>
          <p className="text-[16px] text-black/50 pl-2">By registering on the Platform and then providing consent to receive information resources and/or marketing communications, you are agreeing to the receipt of offers, promotions, surveys, newsletters and other information regarding medical and health-related topics, which may include links to other related websites.</p>
        </div>

        {/* Section 8 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">8. Payments and commission</h1>
          <p className="text-[16px] text-black/50 pl-2">a) You have to pay the consultation fees of the HCPs on the Platform with whom they wish to book a consultation session. You agree and acknowledge that we do not store any financial information such as your credit card/debit card number, one-time passwords etc. All the financial information you submit on the Platform to make the payments are submitted on the API owned and developed by Stride. You are recommended to read the privacy policy of Stride to understand how they process your financial information.</p>
          <p className="text-[16px] text-black/50 pl-2">b) We levy a non-refundable Platform fee of 9% (Nine Percent) of the total consultation fee paid by you to the HCPs. Platform Fee is over and above the consultation fee charged by the relevant HCP and any kind of fee which may be levied by Stride for facilitating the payments on our Platform. Platform Fee is charged by us for round the clock maintenance of the Platform which enables us to provide you seamless Services.</p>
        </div>

        {/* Section 9 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">9. Dispute Resolution</h1>
          <p className="text-[16px] text-black/50 pl-2">We serve to connect you with HCPs. While we ensure that all the HCPs meet the required legal compliances (including CQC), professional qualifications and checks, we do not employ them directly. As such, we are not responsible for any incidents, injuries, or complications arising from the treatment provided.</p>

          <h2 className="text-[18px] font-semibold text-black pl-2">a) Unforeseen medical complications</h2>
          <p className="text-[16px] text-black/50 pl-2">In the event you experience an issue related to any treatment or consultation provided by a relevant HCP, you have the right to directly reach out to the concerned HCP who provided you the Service by raising a ticket on the Platform. We will facilitate your connection with the concerned HCP. All the HCPs on the Platforms have obtained third party health insurance and in the event you wish to make any monetary claim for erroneous treatment, you can require the HCP to raise a complaint with the insurance provider of the concerned HCP. Once a complaint is successfully raised with the said insurance provider, you will be required by such insurance provider to complete the required procedure for filing the claim.</p>

          <h2 className="text-[18px] font-semibold text-black pl-2">b) Complaint procedure</h2>
          <p className="text-[16px] text-black/50 pl-2">We comply with the following internal dispute resolution procedure to resolve the complaint raised by you:</p>
          <p className="text-[16px] text-black/50 pl-2">I) If you have a reason to believe that you were treated erroneously or the diagnosis was incorrect by the concerned HCP on the Platform, you have the right to raise a complaint with us within 48 (forty-eight) hours from the time when the consultation was marked completed on our Platform (“Complaint”).</p>
          <p className="text-[16px] text-black/50 pl-2">II) You shall also be required to submit the documents (such as pictures, medical reports or written details) to support the Complaint.</p>
          <p className="text-[16px] text-black/50 pl-2">III) Upon the receipt of Complaint, we will review the Complaint and if we, in our reasonable opinion, find that the Complaint is genuine, we issue a full or partial refund at our sole discretion.</p>
          <p className="text-[16px] text-black/50 pl-2">IV) While we will review and assess the Complaints made after the said timeline of 48 (forty-eight) hours, we do not guarantee the issuance of full or partial refund.</p>
        </div>

        {/* Section 10 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">10. Our Rights</h1>
          <p className="text-[16px] text-black/50 pl-2">a) We reserve the right to restrict, suspend, or block any non-registered user’s access without notice if we detect or suspect any misuse, abuse, or malicious activity;</p>
          <p className="text-[16px] text-black/50 pl-2">b) We reserve the right to block the access of any user to the Platform who attempts any of the following activities (i) Attempt to access or probe secure areas of the platform, (ii) Scraping, data mining, or using bots or automation tools, (iii) Introducing or attempt to introduce viruses, malware, or other harmful code, or (iv) Attempting to bypass security or authentication measures;</p>
          <p className="text-[16px] text-black/50 pl-2">c) We reserve the right to monitor usage of the Platform, including for users who are not logged in, and to take appropriate technical or legal action, including blocking IP addresses, rate-limiting access, or reporting to law enforcement in case of suspected malicious behavior; and</p>
          <p className="text-[16px] text-black/50 pl-2">d) We are not responsible for any damage, harm, or loss caused by third-party users, including those who access the Platform without registering. You acknowledge and agree that your use of the Platform is at your own risk;</p>
          <p className="text-[16px] text-black/50 pl-2">e) We have the right to integrate our in-house developed artificial intelligence technology to suggest you one or more HCPs which may best meet your needs. However, such suggestions shall not be deemed to be any binding legal advice and you are advised to use your own judgment and discretion while selecting an HCP; and</p>
          <p className="text-[16px] text-black/50 pl-2">f) We have the right to retain limited access to your chat box or video consultations only for the purpose of ensuring that you do not contact or try to contact the HCP outside the Platform. We shall not have access to the health-related discussions you may have with the HCP either on the chatbox or during video consultations.</p>
        </div>

        {/* Section 11 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">11. Our obligations</h1>
          <p className="text-[16px] text-black/50 pl-2">a) Obtain and maintain a public liability insurance for a sum up to £10,000,000 (Great Britain Pounds Ten Million) for insuring all the users of the Platform against possible risk of any injury or fall which occurs to any user at the time of on-site consultation provided any concerned HCP of the Platform;</p>
          <p className="text-[16px] text-black/50 pl-2">b) Protect the data you share with us. We use the safeguards as listed in paragraph 12 below to protect your data.</p>
          <p className="text-[16px] text-black/50 pl-2">c) Obtain and maintain cyber-attack insurance to insure the Platform against any potential cyber-attack risk and the insured sum shall be decided as per our discretion;</p>
          <p className="text-[16px] text-black/50 pl-2">d) Put in best efforts for the maintenance of the Platform</p>
          <p className="text-[16px] text-black/50 pl-2">e) Onboard only such HCPs who meet the onboarding policy; and</p>
          <p className="text-[16px] text-black/50 pl-2">f) Put in best efforts for providing the Services as per the terms as contained herein.</p>
        </div>

        {/* Section 12 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">12. How do we protect your data</h1>
          <p className="text-[16px] text-black/50 pl-2">We take your data security seriously. We implement a combination of technical, administrative, and organizational measures to protect your personal information from unauthorized access, loss, misuse, alteration, or destruction.</p>
          <p className="text-[16px] text-black/50 pl-2">Our key data protection practices include:</p>
          <p className="text-[16px] text-black/50 pl-2"><strong>(a) Encryption:</strong> All data transmitted between your device and our servers is encrypted using industry-standard Transport Layer Security (TLS).</p>
          <p className="text-[16px] text-black/50 pl-2"><strong>(b) Access Control:</strong> Access to personal data is restricted to authorized personnel only, based on the principle of least privilege. We maintain strict internal policies to prevent unauthorized access</p>
          <p className="text-[16px] text-black/50 pl-2"><strong>(c) Secure Payments:</strong> We use Stripe, a PCI DSS-compliant third-party payment processor, for all financial transactions. MedGo2U does not store or process your payment card details on our servers.</p>
          <p className="text-[16px] text-black/50 pl-2"><strong>(d) Regular Security Testing:</strong> We conduct regular penetration testing, vulnerability scanning, and audits to identify and remediate potential security risks.</p>
          <p className="text-[16px] text-black/50 pl-2"><strong>(e) Data Minimization and Anonymization:</strong> We only collect the data necessary to provide our services and, where appropriate, anonymize or pseudonymize data to reduce privacy risks.</p>
          <p className="text-[16px] text-black/50 pl-2"><strong>(f) Monitoring and Incident Response:</strong> Our systems are monitored for suspicious activity, and we have an incident response plan in place to respond to any security breach promptly and effectively.</p>
          <p className="text-[16px] text-black/50 pl-2"><strong>(g) Compliance:</strong> MedGo2U adheres to applicable data protection laws, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
        </div>

        {/* Section 13 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">13. Appointment cancellations and refund policy</h1>
          <p className="text-[16px] text-black/50 pl-2">The amount of refund eligibility depends on the timing of the cancellation of appointment:</p>
          <div className="text-[16px] text-black/50 pl-2">
            <p>Consultation Type - If cancelled before 48 hours: Online 100% refund; If cancelled before 24 hours: 70% refund; If cancelled before 2 hours: 30% refund. One free rescheduling. In-person: 100% / 70% / 30% same as online. Public Holiday: No refund.</p>
          </div>
          <p className="text-[16px] text-black/50 pl-2">h) All the refunds shall be processed within 5 to 7 working days and shall be processed to the original payment method made for booking.</p>
          <p className="text-[16px] text-black/50 pl-2">i) Any processing, Platform Fee or transaction fees, such as bank or payment gateway fees, are non-refundable.</p>
          <p className="text-[16px] text-black/50 pl-2">j) If the booking was made using a gift card or voucher, the refund will be issued as a new voucher for future use rather than as cash.</p>
          <p className="text-[16px] text-black/50 pl-2">k) In the event of medical emergencies or extreme unforeseen circumstances, refund requests will be reviewed on a case-by-case basis. Supporting documentation may be requested by us at our discretion.</p>
          <p className="text-[16px] text-black/50 pl-2">l) Notwithstanding anything contained herein, if you are not eligible for refund as per the refund policy as stated above, we reserve the right to investigate the case on merits and may issue full or partial refund at our sole discretion.</p>
        </div>

        {/* Section 14 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">14. Amendment to the Terms and Platform</h1>
          <p className="text-[16px] text-black/50 pl-2">Every time you wish to use our Platform, please check these Terms to ensure you understand the Terms that apply at that time. If we make any material changes to these Terms, we will try to give you reasonable notice prior to the change becoming effective. Any change will be effective immediately when the revised Terms are posted on the Platform. You should stop using the Platform if you do not agree to any changes.</p>
          <p className="text-[16px] text-black/50 pl-2">We may update and/or make changes to the Platform and/or the Services from time to time, for example, to reflect changes in your needs and/or our business priorities or any legal or regulatory changes. We will try to give you reasonable notice of any major changes in advance. If you are not happy with the proposed changes, then you may contact us to terminate our contract with you.</p>
        </div>

        {/* Section 15 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">15. Suspension or withdrawal of Platform</h1>
          <p className="text-[16px] text-black/50 pl-2">We do not guarantee that the Platform, or any content on it, will always be available or be uninterrupted. We may suspend or withdraw or restrict the availability of all or any part of the Platform for business and operational reasons, including (without limitation) for technical or security reasons. We will try to give you reasonable notice of any suspension or withdrawal.</p>
          <p className="text-[16px] text-black/50 pl-2">If we need to suspend access to the Platform at any time prior to any Appointment that you have already booked, we will notify you in advance (unless the suspension is due to unforeseen circumstances such as emergency maintenance) and arrange a new Appointment for you as soon as possible.</p>
          <p className="text-[16px] text-black/50 pl-2">We reserve the right to suspend or terminate your access to the Platform at any time, without notice and without us bearing any liability to you. In such circumstances, any Appointments that you have already booked will be cancelled.</p>
        </div>

        {/* Section 16 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">16. Disclaimers</h1>
          <h2 className="text-[18px] font-semibold text-black pl-2">(a) Medical disclaimers</h2>
          <p className="text-[16px] text-black/50 pl-2">We make no representation or warranty as to the content of any treatment response from any HCP. Any views expressed or advice provided by the HCPs are not endorsed by us. You and your HCP are solely responsible for all information provided and/or advice given to you at any time before, during or after the consultation. You should always seek the advice of a doctor or other qualified healthcare provider regarding any medical concerns (and before starting, stopping or modifying any treatment or medication) even if you have already obtained medical advice via or read relevant material on the Platform. We do not guarantee that a video/chat/picture message consultation is the best course of accessing advice or indeed the appropriate course of treatment for your particular healthcare concern or medical issue. You agree to contact your GP immediately should your condition change or your symptoms worsen (if you are not registered with a UK doctor you agree to contact your local walk-in centre or hospital for advice). If you require urgent care, you should contact your nearest emergency services centre immediately.</p>
          <h2 className="text-[18px] font-semibold text-black pl-2">(b) Content Disclaimers</h2>
          <p className="text-[16px] text-black/50 pl-2">Any information on our Platform or in any communications from us (other than advice provided by an HCP during an Appointment) is for general educational and informational purposes only and is not intended to amount to advice on which you should rely. Such information should not be relied upon as a substitute for seeking appropriate individual medical advice or services. Although we make reasonable efforts to update the information on the Platform, we make no representations, warranties or guarantees, whether express or implied, that the content on the Platform is accurate, complete or up to date. We accept no responsibility for any consequences relating directly or indirectly to any action or inaction you take based upon such information.</p>
          <h2 className="text-[18px] font-semibold text-black pl-2">(c) General Disclaimers</h2>
          <p className="text-[16px] text-black/50 pl-2">We make no warranty that the Platform or the Services will meet your requirements or that the Services will be uninterrupted, 100% secure or error-free, or that defects, if any, will be corrected. We are not responsible for transmission errors or any corruption or compromise of data carried over local or interchange telecommunication carriers. We reserve the right to temporarily discontinue the Services on account of occurrence of any force majeure event relevant to our Services.</p>
          <p className="text-[16px] text-black/50 pl-2">We will take all reasonable precautions to protect against failure of our equipment and software and will perform regular back-ups of all data stored. You acknowledge and accept that in the event restoration of data from backup is necessary, it may take several days to complete such restoration of data and resume operation of the Platform and/or the Services, in which circumstances any booked Appointments shall be deemed a disrupted appointment.</p>
          <p className="text-[16px] text-black/50 pl-2">We do not guarantee that the Platform will be secure or free from bugs or viruses. You are responsible for configuring your information technology and computer programmes in order to access the Platform. You should use your own virus protection software.</p>
          <p className="text-[16px] text-black/50 pl-2">We make no representations or warranties about the satisfaction of government regulations requiring disclosure of information on prescription drug products; or any treatment, action or application or preparation of medication based on information offered or provided through the Platform or Services.</p>
          <p className="text-[16px] text-black/50 pl-2">We do not endorse the promotions, products or services of any third parties, nor do we warrant or validate the accuracy of any third-party advertisements, promotions, communications or other materials. We do not assume any responsibility or liability for the accuracy of information contained on any third-party websites.</p>
        </div>

        {/* Section 17 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">17. Our responsibility for loss or damaged suffered by you</h1>
          <p className="text-[16px] text-black/50 pl-2">a) We make no representation or warranty as to the content of any treatment response from any HCP. HCPs are independent contractors and not our employees. Any views expressed or advice provided by HCPs are not endorsed by us. You and your HCP are solely responsible for all information provided and/or advice given via the Platform.</p>
          <p className="text-[16px] text-black/50 pl-2">b) If we fail to comply with these Terms, we are responsible for loss or damage you suffer that is a foreseeable result of our breaking this contract or our failing to use reasonable care and skill, but we are not responsible for any loss or damage that is not foreseeable. Loss or damage is foreseeable if it is obvious that it will happen or if, at the time the contract was made, both we and you knew it might happen. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors, for fraud or fraudulent misrepresentation.</p>
          <p className="text-[16px] text-black/50 pl-2">c) Subject to applicable law, we will not be liable to you for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising in connection with: (i) inability to use the Platform, or (ii) use of or reliance of any content displayed on the Platform.</p>
          <p className="text-[16px] text-black/50 pl-2">d) We only supply the Services for domestic and private use. If you use the Services for any commercial, business or resale purpose we will have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.</p>
        </div>

        {/* Section 18 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">18. Termination of our contract with you and consequences</h1>
          <p className="text-[16px] text-black/50 pl-2">a) Our right to terminate: We may end the contract between us, terminating your right to use the Platform or the Services, if: (i) you do not, within a reasonable time of us asking for it, provide us with information that is necessary for us to provide the Services, for example valid contact details, (ii) you seriously (as determined by us) or repeatedly breach any of these Terms.</p>
          <p className="text-[16px] text-black/50 pl-2">b) If we end the contract in the situations set out in the circumstances above we may deduct or charge you reasonable compensation for the net costs we will incur as a result of your breaking the contract.</p>
          <p className="text-[16px] text-black/50 pl-2">c) We may write to you to let you know that we are going to stop providing the Services. We will try to let you know in advance of our stopping the supply of the Services.</p>
          <p className="text-[16px] text-black/50 pl-2">d) We will advise you of any termination or suspension via the contact email held as part of your Account.</p>
          <p className="text-[16px] text-black/50 pl-2">e) Your right to terminate: You may cancel an appointment and/or cease using the Platform at any time. You may cancel an appointment/ terminate Services via the Platform or by contacting us.</p>
          <p className="text-[16px] text-black/50 pl-2">f) Consequences of termination: On termination of your Account for whatever reason, we have the right to delete all data, files or other information relating to you that we store or control for any reason, subject to UK law concerning the keeping and maintenance of your electronic medical record and relevant data protection laws. Please see our Privacy and Cookies Policy for further information.</p>
        </div>

        {/* Section 19 */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">19. Intellectual Property</h1>
          <p className="text-[16px] text-black/50 pl-2">We are the owner or the licensee of all intellectual property rights in the Platform, and in the material published on it. These works are protected by copyright laws and treaties around the world. All such rights are reserved.</p>
        </div>

        {/* Part B - Healthcare Professionals */}
        <div className="max-w-[940px] flex flex-col gap-5">
          <h1 className="text-[22px] font-semibold text-black">Part B: Terms of Service for Healthcare Professionals</h1>
          <p className="text-[16px] text-black/50 pl-2">Please read these terms and conditions carefully before applying to provide healthcare services on the Platform of Medgo2U (hereinafter referred to as “we”, “our” or “us”). In the event you do not agree to these terms, you should not make the Application for providing healthcare services on the Platform.</p>
          <p className="text-[16px] text-black/50 pl-2">These Terms apply to all the healthcare professionals before and after making the Application (hereinafter referred to as “you”) of our website (http://www.medgo2u.com) (“Platform”). These Terms apply to you whether you are a resident or national of the United Kingdom or not.</p>

          <h2 className="text-[20px] font-semibold text-black">1. Your relationship with us</h2>
          <p className="text-[16px] text-black/50 pl-2">Our Platform enables you to provide healthcare services to the users acting as an independent contractor for us. You agree and acknowledge that you are NOT our employee, and we shall not be liable to comply with the applicable employment laws in respect of you.</p>

          

         


          <h2 className="text-[20px] font-semibold text-black">2. Registration</h2>
          <p className="text-[16px] text-black/50 pl-2">Before you can commence providing your services on the Platform, you will have to make the Application of registration on the Platform and as our onboarding requirement, you shall be required to submit the true copies of the following documents on our Platform (“HCP Information”)</p>
          <p className="text-[16px] text-black/50 pl-2">a) Contact details such as your email address, mobile number and proof of residence;</p>
          <p className="text-[16px] text-black/50 pl-2">b) Demographic details such as age, gender and date of birth;</p>
          <p className="text-[16px] text-black/50 pl-2">c) Professional details such as (i) college or university degree, (ii) valid and active professional license and registration number (wherever applicable);</p>
          <p className="text-[16px] text-black/50 pl-2">d) Your work visa or any other document issued by the Government which evidences your right to work in the United Kingdom;</p>
          <p className="text-[16px] text-black/50 pl-2">e) DBS certificate which conclusively determine non-existence of criminal history, first aid certification, and other qualifications which may be applicable to the relevant discipline of your medical services; and</p>
          <p className="text-[16px] text-black/50 pl-2">f) Proof of valid and subsisting malpractice/professional liability insurance</p>

          <h2 className="text-[20px] font-semibold text-black">3. Our rights</h2>
          <p className="text-[16px] text-black/50 pl-2">We have the following rights in relation to you:</p>
          <p className="text-[16px] text-black/50 pl-2">a) Right to verify the contents and genuineness of the HCP Information. For the purposes of exercising this right, we shall have the right to appoint a third party to verify the genuineness of all or any of the HCP Information at any point of time. Please note that HCP Information is shared with third parties in full compliance of our privacy policy.</p>
          <p className="text-[16px] text-black/50 pl-2">b) Right to carry out randomized audits to verify the validity and subsistence of your professional qualifications and professional liability insurance.</p>
          <p className="text-[16px] text-black/50 pl-2">c) Delist you from the platform if you cease to meet our internal onboarding requirements and the obligations as stated in these Terms (including the failure to meet professional qualifications and hold a subsisting professional liability insurance).</p>

          <h2 className="text-[20px] font-semibold text-black">4. Your obligations</h2>
          <p className="text-[16px] text-black/50 pl-2">You shall be responsible for fulfilling all the following obligations until you continue to provide your services on the Platform:</p>
          <p className="text-[16px] text-black/50 pl-2">a) Meet and continue to meet the eligibility requirements for providing services on the Platform (including the maintenance of a valid professional liability insurance and requisite professional qualifications);</p>
          <p className="text-[16px] text-black/50 pl-2">b) Comply with all the healthcare and other laws applicable to you (including the CQC compliance);</p>
          <p className="text-[16px] text-black/50 pl-2">c) Store the health-related information of the users directly shared with you for not more than 7 (seven) years in case of adults, 25 (twenty five) years for minors and 20 (twenty) years after the last treatment or 8 (eight) years after death in case of mental health patients. The said timelines will be calculated from the date on which the user last consulted you;</p>
          <p className="text-[16px] text-black/50 pl-2">d) Process the health-related information of users only for the purpose of providing the services to them and you shall keep such information confidential;</p>
          <p className="text-[16px] text-black/50 pl-2">e) Maintain adequate professional standards as may be laid down by the relevant regulatory authority;</p>
          <p className="text-[16px] text-black/50 pl-2">f) Fully cooperate with the users and the insurance service provider with whom the professional liability insurance is maintained for the purpose of settlement of dispute raised by the user via Platform;</p>
          <p className="text-[16px] text-black/50 pl-2">g) Pay non-refundable Platform fee of 26% (Twenty Six Percent) out of the total consultation fee paid to you by the relevant user (“Platform Fee”). Platform Fee is charged by us for round the clock maintenance of the Platform which enables you to provide your seamless Services to the users;</p>
          <p className="text-[16px] text-black/50 pl-2">h) Pay the cancellation fee of £20 (Great Britain Pound Twenty) from the amount payable by any user on the next consultation if you cancel any prior consultation or do not show up at the relevant location for such consultation;</p>
          <p className="text-[16px] text-black/50 pl-2">i) Ensure that you do not contact or try to contact any user of the Platform outside the Platform; and</p>
          <p className="text-[16px] text-black/50 pl-2">j) Provide your services to the users to the best of your experience and ability.</p>

          <h2 className="text-[20px] font-semibold text-black">5. Legal Disclaimers</h2>
          <p className="text-[16px] text-black/50 pl-2">a) The Platform serves solely as an intermediary connecting users with you for the purpose of booking consultations and related services. Healthcare Professionals work on the Platform independently and are not employees, agents, or representatives of the Platform.</p>
          <p className="text-[16px] text-black/50 pl-2">b) The Platform does not provide medical advice, diagnosis, or treatment of any kind. All medical consultations and treatments are rendered solely by the healthcare professional selected by the user. The Platform does not supervise, control, or influence the professional judgment or actions of any healthcare provider.</p>
          <p className="text-[16px] text-black/50 pl-2">c) To the fullest extent permitted by law, the Platform shall not be held liable for any injury, harm, adverse outcome, or mistreatment that may occur during or as a result of any consultation, diagnosis, procedure, treatment, or other interaction between the user and the healthcare professional.</p>
          <p className="text-[16px] text-black/50 pl-2">d) In the event of any dispute, disagreement, or claim arising between the user and the healthcare professional, whether related to the consultation, diagnosis, treatment, service quality, or any other matter, the user agrees to resolve such dispute directly with the concerned healthcare professional in accordance with the terms applicable to users. The Platform shall have no obligation, responsibility, or role in mediating, arbitrating, or resolving such disputes. The Platform's role is strictly limited to assisting users in identifying and connecting with healthcare professionals. By using the Platform, the user acknowledges and agrees that any issues arising from the healthcare service must be addressed directly with the healthcare provider concerned or the insurance provider with whom the healthcare professional holds professional indemnity insurance.</p>

          
      

          
          <h2 className="text-[20px] font-semibold text-black">Schedule 1 - Data Processing Agreement (Summary)</h2>
          <p className="text-[16px] text-black/50 pl-2">This section contains definitions and obligations related to data processing between the Data Controller (Medgo2U) and the Data Processor (Healthcare Professional). It outlines responsibilities, confidentiality, security measures, data breach notifications, deletion and return of data, audit and inspection procedures, term and termination, and other data protection obligations in accordance with UK GDPR and related laws.</p>

        </div>

      </div>
    </>
  );
};

export default TermsAndCondition;
