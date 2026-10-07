import React from 'react';
import Footer from '../components/Footer';
const Home = () => {


  const services = [
    {
      id: 1,
      title: "Custom Clearing",
desc: "Expert handling of all border documentation and regulatory compliance to ensure zero delays for your shipments.",      img: "/Checking.png"
    },
    {
      id: 2,
      title: "Freight Forwarding",
desc: "Optimized global routing and secure ocean transit to deliver your commercial goods exactly when you need them.",      img: "/Containership.png"
    },
    {
      id: 3,
      title: "Transportation",
desc: "Dependable domestic transport and last-mile delivery networks designed to safely connect major ports to your warehouse.",      img: "/Logistics.png"
    },
    {
      id: 4,
      title: "EXIM Consultancy",
desc: "Strategic advisory for new businesses on trade regulations, market entry, and international licensing requirements.",      img: "/Agreement.png"
    }
  ];

  const features = [
    {
      id: 1,
      title: "Affordable Cost",
      icon: "/Coins.png"
    },
    {
      id: 2,
      title: "On-Time Delivery",
      icon: "/Mail sent.png"
    },
    {
      id: 3,
      title: "Trusted Expertise",
      icon: "/Checking.png"
    },
    {
      id: 4,
      title: "Global Reach",
      icon: "/Aroundtheworld.png"
    }
  ];
  return (
    // 🚀 OUTER WRAPPER
    <div className="w-full flex flex-col">
      
      {/* ================= 1. HERO SECTION ================= */}
      <div className="relative w-full h-[85vh] flex items-center justify-center md:justify-start overflow-hidden">
        
        {/* Background Image & Overlay */}
        {/* Isko z-0 kar diya hai taaki yeh sabse peeche rahe */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="/container.jpg" 
            alt="Hillman Shipping Cargo" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120]/95 via-[#0b1120]/70 to-transparent hidden md:block"></div>
          <div className="absolute inset-0 bg-[#0b1120]/75 md:hidden"></div>
        </div>

        {/* Content Section (Text & Button) */}
        {/* 🚀 Fix: Yahan z-10 hata kar sirf relative rakha hai taaki yeh sirf background se upar rahe, navbar se nahi */}
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col items-center md:items-start pt-12 md:pt-0">
          
          <span className="text-[#4c93b3] font-extrabold tracking-widest uppercase mb-4 text-xs md:text-sm">
            Welcome to Hillman Logistics
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] text-center md:text-left tracking-tight">
            Reliable Global <br className="hidden md:block" /> Shipping Solutions
          </h1>
          
          <p className="text-slate-300 text-sm md:text-lg max-w-2xl text-center md:text-left mb-10 leading-relaxed font-medium">
            Streamline your supply chain with our premium ocean freight and logistics services. We deliver your cargo safely, on time, anywhere in the world.
          </p>
          
          <button className="bg-[#4c93b3] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider text-sm transition-none">
            Know More
          </button>
          
        </div>
      </div>


{/* ================= OUR SERVICES SECTION ================= */}
      <div className="w-full bg-[#F8FAFC] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
              Logistics services and solutions
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Regardless of your industry, your commodity, or your key markets, Hillman offers global and local logistics solutions that enable small and large businesses to grow.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-200 hover:shadow-[0_15px_35px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full cursor-pointer"
              >
                {/* Illustration Space - Bada kar diya (h-52) */}
                <div className="h-52 w-full bg-slate-50 overflow-hidden relative border-b border-slate-200 p-4 flex items-center justify-center">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Content - Chhota aur clean */}
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#4c93b3] transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


    {/* ================= ABOUT US SECTION ================= */}
      <div className="w-full bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ================= TOP SECTION (Left: 1 Illustration, Right: Text) ================= */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            
            {/* LEFT SIDE: Single Big Illustration Placeholder */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px]">
              <div className="bg-slate-50 rounded-[2rem] w-full h-full overflow-hidden border border-slate-200 flex items-center justify-center p-8 hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="/About.png" 
                  alt="About Hillman Logistics" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* RIGHT SIDE: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-[#4c93b3] font-bold tracking-widest uppercase text-sm mb-3">
                About Us
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                Global. Reliable. Committed.
              </h3>
              <p className="text-slate-500 text-[15px] md:text-base leading-relaxed mb-6">
                Founded with a visionary approach, Hillman Logistics has grown into a powerhouse of supply chain solutions. With years of trusted excellence and a strong presence across global trade routes, we lead in customs clearance, transportation, and end-to-end import-export operations.
              </p>
              <p className="text-slate-500 text-[15px] md:text-base leading-relaxed mb-8">
                Driven by innovation, integrity, and zero-compromise service, we ensure seamless global logistics tailored to client needs—making Hillman the preferred partner in supply chain management worldwide.
              </p>
              <button className="bg-[#4c93b3] hover:bg-[#3b7894] text-white px-8 py-3.5 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors duration-300 w-max mx-auto lg:mx-0">
                Know More
              </button>
            </div>

          </div>

          {/* ================= BOTTOM SECTION (Icon + Keyword Cards) ================= */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {features.map((item) => (
              <div 
                key={item.id} 
                className="bg-slate-50 rounded-2xl py-8 px-4 border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-[#4c93b3]/30 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group"
              >
                {/* Card Illustration */}
                <div className="w-24 h-24 mb-4 bg-white rounded-full flex items-center justify-center shadow-sm p-4 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Keyword / Title */}
                <h4 className="text-lg font-bold text-slate-700 group-hover:text-[#4c93b3] transition-colors duration-300">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>

        </div>
      </div>
      {/* ================= 2. NEXT SECTION ================= */}
      <Footer/>
    </div>
  );
}

export default Home;