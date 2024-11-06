// import { useState } from 'react';
// import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from "@/assets/Logo.png";
// import { feConvolveMatrix } from "framer-motion/client";


const Navbar = () => {

  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <img alt="logo" src={Logo} />

            {/* Right side - Menu Toggle */}
           <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
                <p>Inicio</p>
                <p>Requisitos</p>
                <p>Testimonios</p>
                <p>Contacto</p>        
            </div>
            <div className={`${flexBetween} gap-8`}>
                <p>Inicia sesion</p>
                
            </div>
           </div>
          </div>
        </div>  
      </div>
    </nav>
  );
};

export default Navbar;

