import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/password-generator", label: "PassWord Generator" },
    { path: "/currency-convertor", label: "Currency Convertor" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/github", label: "Github" },
    { path: "/user", label: "User" },
  ];

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="src/assets/react.svg"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none"
            >
              ☰
            </button>
          </div>
          <div className={`lg:flex ${isMobileMenuOpen ? 'block' : 'hidden'} justify-between items-center w-full lg:w-auto lg:order-1`}>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                      ${isActive ? "text-blue-700" : "text-gray-800"}
                      hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-300 lg:p-0`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}





























// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// NavLink
// import { useState } from "react";
// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpent] = useState(false);
  
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpent((prev) => !prev);
//   }

//   return (
//       <header className="shadow sticky z-50 top-0">
//           <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//               <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                   <Link to="/" className="flex items-center">
//                       <img
//                           src="src/assets/react.svg"
//                           className="mr-3 h-12"
//                           alt="Logo"
//                       />
//                   </Link>
//                   <div className="flex items-center lg:order-2">
//                       <Link
//                           to="#"
//                           className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                       >
//                           Log in
//                       </Link>
//                       <Link
//                           to="#"
//                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                       >
//                           Get started
//                       </Link>
//                   </div>
//                   <div className="lg:hidden flex items-center">
//                     <button
//                         onClick={toggleMobileMenu}
//                         className="text-gray-800 focus:outline-none"
//                     > ☰
//                     </button>
//                   </div>
//                   <div className={`lg:flex ${isMobileMenuOpen ? 'block' : 'hidden'} justify-between items-center w-full lg:w-auto lg:order-1`}>
//                     <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                     {['/', '/password-generator', '/currency-convertor', '/about', '/contact', '/github', '/user'].map((path, index) => {
//                               const labels = ["Home", "PassWord Generator", "Currency Convertor", "About", "Contact", "Github", "User"];
//                               return (
//                                   <li key={index}>
//                                       <NavLink
//                                           to={path}
//                                           className={({ isActive }) =>
//                                               `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
//                                               ${isActive ? "text-blue-700" : "text-gray-800"}
//                                               hover:bg-gray-50
//                                               lg:hover:bg-transparent lg:border-0 hover:text-gray-300 lg:p-0`
//                                           }
//                                       >
//                                           {labels[index]}
//                                       </NavLink>
//                                   </li>
//                               );
//                           })}
//                     </ul>
//                   </div>
//                   <div
//                       className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//                       id="mobile-menu-2"
//                   >
//                       <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                           <li>
//                               <NavLink
//                                   to='/'
//                                   className={({isActive}) =>
//                                       `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
//                                       ${isActive ? 
//                                         "text-blue-700" : 
//                                         "text-grey-800"}
//                                       hover:bg-gray-50
//                                       lg:hover:bg-transparent lg:border-0 hover:text-grey-300 lg:p-0`
//                                   }
//                               >
//                                   Home
//                               </NavLink>
//                           </li>
//                           <li>
//                               <NavLink
//                                   to='/password-generator'
//                                   className={({isActive}) =>
//                                       `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
//                                       ${isActive ? 
//                                         "text-blue-700" : 
//                                         "text-grey-800"}
//                                       hover:bg-gray-50
//                                       lg:hover:bg-transparent lg:border-0 hover:text-grey-300 lg:p-0`
//                                   }
//                               >
//                                   PassWord Generator
//                               </NavLink>
//                           </li>
//                           <li>
//                               <NavLink
//                                   to='/currency-convertor'
//                                   className={({isActive}) =>
//                                       `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
//                                       ${isActive ? 
//                                         "text-blue-700" : 
//                                         "text-grey-800"}
//                                       hover:bg-gray-50
//                                       lg:hover:bg-transparent lg:border-0 hover:text-grey-300 lg:p-0`
//                                   }
//                               >
//                                   Currency Convertor
//                               </NavLink>
//                           </li>
//                           <li>
//                               <NavLink
//                                   to='/about'
//                                   className={({isActive}) =>
//                                       `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
//                                       ${isActive ? 
//                                         "text-blue-700" : 
//                                         "text-grey-800"}
//                                       hover:bg-gray-50
//                                       lg:hover:bg-transparent lg:border-0 hover:text-grey-300 lg:p-0`
//                                   }
//                               >
//                                   About
//                               </NavLink>
//                           </li>
//                           <li>
//                               <NavLink
//                                   to='/contact'
//                                   className={({isActive}) =>
//                                       `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
//                                       ${isActive ? 
//                                         "text-blue-700" : 
//                                         "text-grey-800"}
//                                       hover:bg-gray-50
//                                       lg:hover:bg-transparent lg:border-0 hover:text-grey-300 lg:p-0`
//                                   }
//                               >
//                                   Contact
//                               </NavLink>
//                           </li>
//                           <li>
//                               <NavLink
//                                   to='/github'
//                                   className={({isActive}) =>
//                                       `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
//                                       ${isActive ? 
//                                         "text-blue-700" : 
//                                         "text-grey-800"}
//                                       hover:bg-gray-50
//                                       lg:hover:bg-transparent lg:border-0 hover:text-grey-300 lg:p-0`
//                                   }
//                               >
//                                   Github
//                               </NavLink>
//                           </li>
//                           <li>
//                               <NavLink
//                                   to='/user'
//                                   className={({isActive}) =>
//                                       `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
//                                       ${isActive ? 
//                                         "text-blue-700" : 
//                                         "text-grey-800"}
//                                       hover:bg-gray-50
//                                       lg:hover:bg-transparent lg:border-0 hover:text-grey-300 lg:p-0`
//                                   }
//                               >
//                                   User
//                               </NavLink>
//                           </li>
                          
//                       </ul>
//                   </div>
//               </div>
//           </nav>
//       </header>
//   );
// }

