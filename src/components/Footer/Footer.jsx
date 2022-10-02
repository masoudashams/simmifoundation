import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";


const Footer = () => {
  return (
    <footer className="bg-[#252525] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        
      </div>
      <ItemsContainer />
      <div
        className="grid  justify-content grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10
      text-center  text-gray-400 text-sm pb-8 m-auto" 
      >
       
        <div className="flex m-auto ">
        <img className=" h-16 mx-w-[1240px] m-auto" src="../logo.png" alt="" />
        <img className=" h-16 mx-w-[1240px] m-auto" src="../logo2.png" alt="logo2" />
        </div>
        
     
        <span>Our Registration number : 085953/2020</span>
       <span className="mt-0">Niti Aayog (Govt. Of India ) Unique Id : HR/2020/0258148</span>
      
     
        <span >Copyright ©2022 All rights reserved | Simmi Foundation </span>
       
        </div>
      
   
    </footer>
  );
};

export default Footer;
