
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-slate-300 border border-slate-600  pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= TOP SECTION: Logo & Socials ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-14 gap-6">
          
          {/* Modern Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/">
              <span className="text-3xl font-black tracking-tighter capitalize text-white">
                hillman<span className="text-[#4c93b3]">.</span>
              </span>
            </Link>
          </div>

          {/* Social Media & Contact Icons */}
          <div className="flex items-center gap-4">
            
            {/* 1. Facebook - Original Blue */}
            <a href="#" className="w-11 h-11 rounded-xl bg-[#151f32] flex items-center justify-center hover:shadow-[0_0_15px_rgba(24,119,242,0.4)] transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"/>
              </svg>
            </a>

            {/* 2. Instagram - Real Gradient */}
            <a href="#" className="w-11 h-11 rounded-xl bg-[#151f32] flex items-center justify-center hover:shadow-[0_0_15px_rgba(225,48,108,0.4)] transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="instaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <path fill="url(#instaGradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>

            {/* 3. Email (LinkedIn hata kar wahan Email lagaya hai) */}
            <a href="mailto:contact@hillman.com" className="w-11 h-11 rounded-xl bg-[#151f32] flex items-center justify-center hover:shadow-[0_0_15px_rgba(234,67,53,0.4)] transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-5 h-5" fill="#EA4335" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-12"></div>

        {/* ================= MIDDLE SECTION: Grid Columns ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Column 1: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white mb-3 tracking-wide">Quick Links</h4>
            <Link to="/" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Home</Link>
            <Link to="/about" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">About Us</Link>
            <Link to="/services" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Services</Link>
            <Link to="/contact" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Contact Us</Link>
          </div>

          {/* Column 2: Our Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white mb-3 tracking-wide">Our Services</h4>
            <Link to="/about" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Ocean Freight</Link>
            <Link to="/about" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Road Transport</Link>
            <Link to="/about" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Customs Clearance</Link>
            <Link to="/about" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Warehousing Solutions</Link>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-white mb-1 tracking-wide">Get In Touch</h4>
            
            {/* Location */}
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="p-2 rounded-lg bg-[#151f32] group-hover:bg-[#4c93b3] transition-colors duration-300">
                <svg className="w-5 h-5 text-[#4c93b3] group-hover:text-white transition-colors duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-[15px] text-slate-400 leading-relaxed mt-1 group-hover:text-slate-300 transition-colors">TF 1, Third floor space center parsvanath city mall sector 12 faridabad</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="p-2 rounded-lg bg-[#151f32] group-hover:bg-[#4c93b3] transition-colors duration-300">
                <svg className="w-5 h-5 text-[#4c93b3] group-hover:text-white transition-colors duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-[15px] text-slate-400 group-hover:text-slate-300 transition-colors">+91 9999338331</p>
            </div>

            {/* Email Contact Detail */}
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="p-2 rounded-lg bg-[#151f32] group-hover:bg-[#4c93b3] transition-colors duration-300">
                <svg className="w-5 h-5 text-[#4c93b3] group-hover:text-white transition-colors duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-[15px] text-slate-400 group-hover:text-slate-300 transition-colors">contact@hillman.com</p>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM SECTION: Copyright ================= */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            Copyright © {new Date().getFullYear()} <span className="text-[#4c93b3] font-semibold">Hillman Logistics</span>. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Designed & Developed by ManralGroup's
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-[#0b1120] text-slate-300 pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* ================= TOP SECTION: Logo & Socials ================= */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-14 gap-6">
          
//           {/* Modern Logo */}
//           <div className="flex-shrink-0 cursor-pointer">
//             <Link to="/">
//               <span className="text-3xl font-black tracking-tighter capitalize text-white">
//                 hillman<span className="text-[#4c93b3]">.</span>
//               </span>
//             </Link>
//           </div>

//           {/* Real Brand Colored Social Media Icons */}
//           <div className="flex items-center gap-4">
            
//             {/* Facebook - Original Blue */}
//             <a href="#" className="w-11 h-11 rounded-xl bg-[#151f32] flex items-center justify-center hover:shadow-[0_0_15px_rgba(24,119,242,0.4)] transition-all duration-300 transform hover:-translate-y-1">
//               <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
//                 <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"/>
//               </svg>
//             </a>

//             {/* Instagram - Real Gradient */}
//             <a href="#" className="w-11 h-11 rounded-xl bg-[#151f32] flex items-center justify-center hover:shadow-[0_0_15px_rgba(225,48,108,0.4)] transition-all duration-300 transform hover:-translate-y-1">
//               <svg className="w-5 h-5" viewBox="0 0 24 24">
//                 <defs>
//                   <linearGradient id="instaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#f09433" />
//                     <stop offset="25%" stopColor="#e6683c" />
//                     <stop offset="50%" stopColor="#dc2743" />
//                     <stop offset="75%" stopColor="#cc2366" />
//                     <stop offset="100%" stopColor="#bc1888" />
//                   </linearGradient>
//                 </defs>
//                 <path fill="url(#instaGradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//               </svg>
//             </a>

//             {/* LinkedIn - Original Blue */}
//             <a href="#" className="w-11 h-11 rounded-xl bg-[#151f32] flex items-center justify-center hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] transition-all duration-300 transform hover:-translate-y-1">
//               <svg className="w-5 h-5" fill="#0A66C2" viewBox="0 0 24 24">
//                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//               </svg>
//             </a>
//           </div>

//         </div>

//         {/* Divider */}
//         <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-12"></div>

//         {/* ================= MIDDLE SECTION: Grid Columns ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
//           {/* Column 1: Quick Links */}
//           <div className="flex flex-col gap-4">
//             <h4 className="text-lg font-bold text-white mb-3 tracking-wide">Quick Links</h4>
//             <Link to="/" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Home</Link>
//             <Link to="/about" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">About Us</Link>
//             <Link to="/services" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Services</Link>
//             <Link to="/contact" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Contact Us</Link>
//           </div>

//           {/* Column 2: Our Services */}
//           <div className="flex flex-col gap-4">
//             <h4 className="text-lg font-bold text-white mb-3 tracking-wide">Our Services</h4>
//             <Link to="/about" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Ocean Freight</Link>
//             <Link to="/about" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Road Transport</Link>
//             <Link to="/about" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Customs Clearance</Link>
//             <Link to="/about" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Warehousing Solutions</Link>
//           </div>

//           {/* Column 3: Get In Touch */}
//           <div className="flex flex-col gap-6">
//             <h4 className="text-lg font-bold text-white mb-1 tracking-wide">Get In Touch</h4>
            
//             {/* Location */}
//             <div className="flex items-start gap-4 group cursor-pointer">
//               <div className="p-2 rounded-lg bg-[#151f32] group-hover:bg-[#4c93b3] transition-colors duration-300">
//                 <svg className="w-5 h-5 text-[#4c93b3] group-hover:text-white transition-colors duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               </div>
//               <p className="text-[15px] text-slate-400 leading-relaxed mt-1 group-hover:text-slate-300 transition-colors">TF 1, Third floor space center parsvanath city mall sector 12 faridabad</p>
//             </div>

//             {/* Phone */}
//             <div className="flex items-center gap-4 group cursor-pointer">
//               <div className="p-2 rounded-lg bg-[#151f32] group-hover:bg-[#4c93b3] transition-colors duration-300">
//                 <svg className="w-5 h-5 text-[#4c93b3] group-hover:text-white transition-colors duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//               </div>
//               <p className="text-[15px] text-slate-400 group-hover:text-slate-300 transition-colors">+91 9999338331</p>
//             </div>

//             {/* Email */}
//             <div className="flex items-center gap-4 group cursor-pointer">
//               <div className="p-2 rounded-lg bg-[#151f32] group-hover:bg-[#4c93b3] transition-colors duration-300">
//                 <svg className="w-5 h-5 text-[#4c93b3] group-hover:text-white transition-colors duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </div>
//               <p className="text-[15px] text-slate-400 group-hover:text-slate-300 transition-colors">contact@hillman.com</p>
//             </div>
//           </div>

//         </div>

//         {/* ================= BOTTOM SECTION: Copyright ================= */}
//         <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-slate-500 text-center md:text-left">
//             Copyright © {new Date().getFullYear()} <span className="text-[#4c93b3] font-semibold">Hillman Logistics</span>. All rights reserved.
//           </p>
//           <p className="text-sm text-slate-500">
//             Designed & Developed for Global Shipping
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// }

// export default Footer;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     // Ekdum modern ultra-dark background, top border hata diya hai
//     <footer className="bg-[#0b1120] text-slate-300 pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* ================= TOP SECTION: Logo & Socials ================= */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-14 gap-6">
          
//           {/* Modern Logo */}
//           <div className="flex-shrink-0 cursor-pointer">
//             <Link to="/">
//               <span className="text-3xl font-black tracking-tighter capitalize text-white">
//                 hillman<span className="text-[#4c93b3]">.</span>
//               </span>
//             </Link>
//           </div>

//           {/* Social Media Icons - Modern subtle hover with glow effect */}
//           <div className="flex items-center gap-4">
//             <a href="#" className="w-11 h-11 rounded-xl bg-[#151f32] flex items-center justify-center hover:bg-[#4c93b3] hover:text-white hover:shadow-[0_0_15px_rgba(76,147,179,0.4)] transition-all duration-300 transform hover:-translate-y-1">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"/></svg>
//             </a>
//             <a href="#" className="w-11 h-11 rounded-xl bg-[#151f32] flex items-center justify-center hover:bg-[#4c93b3] hover:text-white hover:shadow-[0_0_15px_rgba(76,147,179,0.4)] transition-all duration-300 transform hover:-translate-y-1">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
//             </a>
//             <a href="#" className="w-11 h-11 rounded-xl bg-[#151f32] flex items-center justify-center hover:bg-[#4c93b3] hover:text-white hover:shadow-[0_0_15px_rgba(76,147,179,0.4)] transition-all duration-300 transform hover:-translate-y-1">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
//             </a>
//           </div>

//         </div>

//         {/* Divider - thoda aur subtle kar diya */}
//         <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-12"></div>

//         {/* ================= MIDDLE SECTION: Grid Columns ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
//           {/* Column 1: Quick Links */}
//           <div className="flex flex-col gap-4">
//             <h4 className="text-lg font-bold text-white mb-3 tracking-wide">Quick Links</h4>
//             <Link to="/" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Home</Link>
//             <Link to="/about" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">About Us</Link>
//             <Link to="/services" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Services</Link>
//             <Link to="/contact" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Contact Us</Link>
//           </div>

//           {/* Column 2: Our Services (Air Freight hata diya, sabko /about par redirect kiya) */}
//           <div className="flex flex-col gap-4">
//             <h4 className="text-lg font-bold text-white mb-3 tracking-wide">Our Services</h4>
//             <Link to="/about" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Ocean Freight</Link>
//             <Link to="/about" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Road Transport</Link>
//             <Link to="/about" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Customs Clearance</Link>
//             <Link to="/about" className="text-[15px] text-slate-400 hover:text-[#4c93b3] hover:translate-x-1 transition-all duration-300 w-max">Warehousing Solutions</Link>
//           </div>

//           {/* Column 3: Get In Touch */}
//           <div className="flex flex-col gap-6">
//             <h4 className="text-lg font-bold text-white mb-1 tracking-wide">Get In Touch</h4>
            
//             {/* Location */}
//             <div className="flex items-start gap-4 group cursor-pointer">
//               <div className="p-2 rounded-lg bg-[#151f32] group-hover:bg-[#4c93b3] transition-colors duration-300">
//                 <svg className="w-5 h-5 text-[#4c93b3] group-hover:text-white transition-colors duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               </div>
//               <p className="text-[15px] text-slate-400 leading-relaxed mt-1 group-hover:text-slate-300 transition-colors">TF 1, Third floor space center parsvanath city mall sector 12 faridabad</p>
//             </div>

//             {/* Phone */}
//             <div className="flex items-center gap-4 group cursor-pointer">
//               <div className="p-2 rounded-lg bg-[#151f32] group-hover:bg-[#4c93b3] transition-colors duration-300">
//                 <svg className="w-5 h-5 text-[#4c93b3] group-hover:text-white transition-colors duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//               </div>
//               <p className="text-[15px] text-slate-400 group-hover:text-slate-300 transition-colors">+91 9999338331</p>
//             </div>

//             {/* Email */}
//             <div className="flex items-center gap-4 group cursor-pointer">
//               <div className="p-2 rounded-lg bg-[#151f32] group-hover:bg-[#4c93b3] transition-colors duration-300">
//                 <svg className="w-5 h-5 text-[#4c93b3] group-hover:text-white transition-colors duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </div>
//               <p className="text-[15px] text-slate-400 group-hover:text-slate-300 transition-colors">contact@hillman.com</p>
//             </div>
//           </div>

//         </div>

//         {/* ================= BOTTOM SECTION: Copyright ================= */}
//         <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-slate-500 text-center md:text-left">
//             Copyright © {new Date().getFullYear()} <span className="text-[#4c93b3] font-semibold">Hillman Logistics</span>. All rights reserved.
//           </p>
//           <p className="text-sm text-slate-500">
//             Designed & Developed for Global Shipping
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// }

// export default Footer;





// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     // Dark premium background (#0F172A)
//     <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-8 border-t-4 border-[#4c93b3]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* ================= TOP SECTION: Logo & Socials ================= */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          
//           {/* Logo (White text with #4c93b3 dot) */}
//           <div className="flex-shrink-0 cursor-pointer">
//             <Link to="/">
//               <span className="text-3xl font-black tracking-tighter capitalize text-white">
//                 hillman<span className="text-[#4c93b3]">.</span>
//               </span>
//             </Link>
//           </div>

//           {/* Social Media Icons (Modern rounded design) */}
//           <div className="flex items-center gap-4">
//             <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4c93b3] hover:text-white transition-all duration-300">
//               {/* Facebook */}
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"/></svg>
//             </a>
//             <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4c93b3] hover:text-white transition-all duration-300">
//               {/* Instagram */}
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
//             </a>
//             <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4c93b3] hover:text-white transition-all duration-300">
//               {/* LinkedIn */}
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
//             </a>
//           </div>

//         </div>

//         {/* Divider */}
//         <hr className="border-slate-800 mb-12" />

//         {/* ================= MIDDLE SECTION: Grid Columns ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          
//           {/* Column 1: Quick Links */}
//           <div className="flex flex-col gap-4">
//             <h4 className="text-lg font-bold text-white mb-2">Quick Links</h4>
//             <Link to="/" className="text-sm text-slate-400 hover:text-[#4c93b3] transition-colors w-max">Home</Link>
//             <Link to="/about" className="text-sm text-slate-400 hover:text-[#4c93b3] transition-colors w-max">About Us</Link>
//             <Link to="/services" className="text-sm text-slate-400 hover:text-[#4c93b3] transition-colors w-max">Services</Link>
//             <Link to="/track" className="text-sm text-slate-400 hover:text-[#4c93b3] transition-colors w-max">Track Cargo</Link>
//             <Link to="/contact" className="text-sm text-slate-400 hover:text-[#4c93b3] transition-colors w-max">Contact Us</Link>
//           </div>

//           {/* Column 2: Our Services (Replaced Medical with Logistics) */}
//           <div className="flex flex-col gap-4">
//             <h4 className="text-lg font-bold text-white mb-2">Our Services</h4>
//             <Link to="/services/ocean" className="text-sm text-slate-400 hover:text-[#4c93b3] transition-colors w-max">Ocean Freight</Link>
//             <Link to="/services/air" className="text-sm text-slate-400 hover:text-[#4c93b3] transition-colors w-max">Air Freight</Link>
//             <Link to="/services/road" className="text-sm text-slate-400 hover:text-[#4c93b3] transition-colors w-max">Road Transport</Link>
//             <Link to="/services/customs" className="text-sm text-slate-400 hover:text-[#4c93b3] transition-colors w-max">Customs Clearance</Link>
//             <Link to="/services/warehouse" className="text-sm text-slate-400 hover:text-[#4c93b3] transition-colors w-max">Warehousing Solutions</Link>
//           </div>

//           {/* Column 3: Get In Touch */}
//           <div className="flex flex-col gap-5">
//             <h4 className="text-lg font-bold text-white mb-1">Get In Touch</h4>
            
//             {/* Location */}
//             <div className="flex items-start gap-3">
//               <svg className="w-5 h-5 text-[#4c93b3] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//               <p className="text-sm text-slate-400 leading-relaxed">TF 1, Third floor space center parsvanath city mall sector 12 faridabad</p>
//             </div>

//             {/* Phone */}
//             <div className="flex items-center gap-3">
//               <svg className="w-5 h-5 text-[#4c93b3] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//               <p className="text-sm text-slate-400">+91 9999338331</p>
//             </div>

//             {/* Email (Added as requested) */}
//             <div className="flex items-center gap-3">
//               <svg className="w-5 h-5 text-[#4c93b3] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//               <p className="text-sm text-slate-400">contact@hillman.com</p>
//             </div>
//           </div>

//         </div>

//         {/* ================= BOTTOM SECTION: Copyright ================= */}
//         <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-xs text-slate-500 text-center md:text-left">
//             Copyright © {new Date().getFullYear()} <span className="text-[#4c93b3] font-semibold">Hillman Logistics</span>. All rights reserved.
//           </p>
//           <p className="text-xs text-slate-500">
//             Designed & Developed for Global Shipping
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// }

// export default Footer;