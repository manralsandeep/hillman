import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const themeStyles = {
  // Modern Glassmorphism look 
  navWrapper: "bg-[#FFFFFF] backdrop-blur-md border-b border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.03)]",
  logoText: "text-slate-900",
  logoDot: "text-blue-600", 
  
  // Desktop Links
  linkBase: "text-[13px] font-bold uppercase tracking-[0.08em] transition-colors duration-200",
  linkInactive: "text-slate-800 hover:text-slate-900", 
  linkActive: "text-[#4c93b3]", 

  // Mobile Links
  mobileMenuBg: "bg-white border-t border-slate-200",
  mobileLinkBase: "block px-5 py-3 text-[13px] font-bold uppercase tracking-wide transition-colors duration-200",
  mobileLinkInactive: "text-slate-800 hover:text-slate-900",
  mobileLinkActive: "text-[#4c93b3] pl-4", 

  iconColor: "text-slate-900",
};

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact Us' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`sticky top-0 z-100 w-full font-sans transition-all duration-300 ${themeStyles.navWrapper}`}>
      
      {/* 🚀 Yeh inner div (max-w-7xl mx-auto) hi aapke navbar ko badi screens par bikharne se rokta hai */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24"> 
        
          {/* Left Side: Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <span className={`text-3xl font-black tracking-tighter capitalize ${themeStyles.logoText}`}>
                hillman<span className={themeStyles.logoDot}>.</span>
              </span>
            </Link>
          </div>

          {/* Center/Right Side: Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `${themeStyles.linkBase} ${isActive ? themeStyles.linkActive : themeStyles.linkInactive}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            {/* Premium CTA Button */}
            <Link 
              to="/contact" 
              className="ml-6 bg-[#4c93b3] text-white px-6 py-2.5 text-[13px] font-bold uppercase tracking-wide transition-all duration-300 shadow-md hover:shadow-lg rounded-sm"
            >
              Get a Quote
            </Link>
          </div>
          
          {/* Mobile View Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className={`focus:outline-none p-2 ${themeStyles.iconColor}`}
            >
              {isOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={`md:hidden shadow-xl absolute w-full ${themeStyles.mobileMenuBg}`}>
          <div className="pt-2 pb-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `${themeStyles.mobileLinkBase} ${isActive ? themeStyles.mobileLinkActive : themeStyles.mobileLinkInactive}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="px-5 pt-4">
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full bg-[#132c37] text-white px-6 py-3 text-[13px] font-bold uppercase tracking-wide transition-all duration-300 rounded-sm"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




// import React, { useState } from 'react';
// import { NavLink, Link } from 'react-router-dom';

// const themeStyles = {
//   // Modern Glassmorphism look 
//   navWrapper: "bg-[#FFFFFF] backdrop-blur-md border-b border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.03)]",
//   logoText: "text-slate-900",
//   logoDot: "text-blue-600", 
  
//   // Desktop Links
//   linkBase: "text-[13px] font-bold uppercase tracking-[0.08em] transition-colors duration-200",
//   linkInactive: "text-slate-800 hover:text-slate-900", 
//   linkActive: "text-[#4c93b3]", 

//   // Mobile Links
//   mobileMenuBg: "bg-white border-t border-slate-200",
//   mobileLinkBase: "block px-5 py-3 text-[13px] font-bold uppercase tracking-wide transition-colors duration-200",
//   mobileLinkInactive: "text-slate-800  hover:text-slate-900",
//   mobileLinkActive: "text-[#4c93b3]   pl-4", 

//   iconColor: "text-slate-900",
// };

// // Yahan maine "Contact Us" normal link hata diya hai kyunki humne usko main button bana diya hai. 
// // Agar aapko dono jagah chahiye, toh aap isme wapas add kar sakte ho.
// const navLinks = [
//   { path: '/', label: 'Home' },
//   { path: '/about', label: 'About Us' },
//   { path: '/services', label: 'Services' },
//   { path: '/contact', label: 'Contact Us' }
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className={`sticky top-0 z-50 w-full font-sans transition-all duration-300 ${themeStyles.navWrapper}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-24"> 
        
//           {/* Left Side: Logo */}
//           <div className="flex-shrink-0 cursor-pointer">
//             <Link to="/" onClick={() => setIsOpen(false)}>
//               <span className={`text-3xl font-black tracking-tighter capitalize ${themeStyles.logoText}`}>
//                 hillman<span className={themeStyles.logoDot}>.</span>
//               </span>
//             </Link>
//           </div>

//           {/* Center/Right Side: Navigation Links */}
//           <div className="hidden md:flex items-center space-x-10">
//             {navLinks.map((link) => (
//               <NavLink 
//                 key={link.path}
//                 to={link.path}
//                 className={({ isActive }) => 
//                   `${themeStyles.linkBase} ${isActive ? themeStyles.linkActive : themeStyles.linkInactive}`
//                 }
//               >
//                 {link.label}
//               </NavLink>
//             ))}
            
//             {/* Premium CTA Button (Get a Quote / Contact) */}
//             <Link 
//               to="/contact" 
//               className="ml-6 bg-[#4c93b3] text-white px-6 py-2.5 text-[13px] font-bold uppercase tracking-wide  transition-all duration-300 shadow-md hover:shadow-lg rounded-sm"
//             >
//               Get a Quote
//             </Link>
//           </div>
          
//           {/* Mobile View Button */}
//           <div className="md:hidden flex items-center">
//             <button 
//               onClick={toggleMenu}
//               className={`focus:outline-none p-2 ${themeStyles.iconColor}`}
//             >
//               {isOpen ? (
//                 <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className={`md:hidden shadow-xl absolute w-full ${themeStyles.mobileMenuBg}`}>
//           <div className="pt-2 pb-6 space-y-1 flex flex-col">
//             {navLinks.map((link) => (
//               <NavLink 
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) => 
//                   `${themeStyles.mobileLinkBase} ${isActive ? themeStyles.mobileLinkActive : themeStyles.mobileLinkInactive}`
//                 }
//               >
//                 {link.label}
//               </NavLink>
//             ))}
//             <div className="px-5 pt-4">
//               <Link 
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className="block text-center w-full bg-[#132c37] text-white px-6 py-3 text-[13px] font-bold uppercase tracking-wide  transition-all duration-300 rounded-sm"
//               >
//                 Get a Quote
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;