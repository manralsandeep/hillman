


import React, { useState } from 'react';
import Footer from '../components/Footer';
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  const contactDetails = [
    {
      id: 1,
      title: "Emergency Call",
      value: "+91 9999338331",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Email Us",
      value: "contact@hillman.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Our Location",
      value: "TF 1, Third floor space center parsvanath city mall sector 12 faridabad",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    // Main Wrapper
    <>
    <div className="w-full bg-[#F8FAFC] flex flex-col items-center py-12 md:py-16 gap-16">
      
      {/* ================= UPPER SECTION ================= */}
      {/* Isko wapas pehle jaisa center mein laaya aur gap fix ki */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-center mb-10 gap-10 lg:gap-16">
        
        {/* Contact Information (Cards) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-[420px]">
            <h2 className="text-4xl font-semibold text-slate-900 mb-6 tracking-tight text-center md:text-left">Get in Touch</h2>

            <div className="flex flex-col gap-4">
              {contactDetails.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center gap-5 py-5 px-6 bg-white border border-slate-200 rounded-2xl"
                >
                  <div className="w-12 h-12 rounded-full bg-[#4c93b3] hover:bg-[#366e87] text-white flex items-center justify-center shrink-0 transition-colors duration-300 cursor-pointer">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">{item.title}</p>
                    <p className="text-[15px] font-bold text-slate-800 leading-snug">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/Contactus.png"
            alt="Contact Us"
            className="w-full max-w-[400px] h-auto object-contain drop-shadow-xl"
          />
        </div>

      </div>

      {/* ================= LOWER SECTION ================= */}
      {/* Neeche wale hisse ko ek chhote container (max-w-5xl) mein daal diya taaki form bada na lage */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT SIDE: Text & Map */}
          <div className="w-full flex flex-col h-full">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#4c93b3] w-max mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4c93b3]"></span>
              <span className="text-xs font-bold uppercase tracking-wider">Contact Us</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-3 leading-tight tracking-tight">
              Connect with our logistics experts today
            </h2>
            <p className="text-sm text-slate-500 mb-5 leading-relaxed">
              From global container shipping to local freight forwarding, Hillman's dedicated support team is ready to streamline your supply chain.
            </p>

            {/* Map height aur choti rakhi hai taaki form ke saath balance rahe */}
            <div className="flex-1 w-full bg-slate-200 rounded-2xl overflow-hidden shadow-inner min-h-[220px]">
              <iframe
                title="Hillman Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.34211100562!2d77.16148386345686!3d28.527582006175945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE: Compact Form */}
          <div className="w-full bg-white rounded-2xl p-6 shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-slate-900 mb-1.5">Send us a Message</h3>
            <p className="text-slate-500 mb-6 text-sm">Fill out the form below to discuss your shipping requirements.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name*" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#4c93b3] focus:bg-white transition-colors text-sm font-medium text-slate-700" 
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name*" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#4c93b3] focus:bg-white transition-colors text-sm font-medium text-slate-700" 
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number*" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#4c93b3] focus:bg-white transition-colors text-sm font-medium text-slate-700" 
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail Address*" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#4c93b3] focus:bg-white transition-colors text-sm font-medium text-slate-700" 
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 flex-grow min-h-[120px]">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Message Here..." 
                  className="w-full h-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#4c93b3] focus:bg-white transition-colors resize-y text-sm font-medium text-slate-700"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-1 w-full sm:w-auto bg-[#4c93b3] text-white font-bold uppercase tracking-wide text-xs py-3.5 px-6 rounded-lg transition-all duration-300 flex justify-center items-center gap-2.5 self-start hover:bg-[#3d7a96]"
              >
                Submit Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>



      
    </div>
    
    <Footer/>
    </>
  );
}

export default Contact;