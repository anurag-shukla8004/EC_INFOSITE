import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="pt-7 pb-5" style={{background:'black'}}>
      <div className="footerContainer max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="mb-4 font-medium text-lg" style={{color:'#fff'}}>Policies</p>
          <ul className="text-black-500 " style={{color:'#fff'}}>
            <li className="my-2 cursor-pointer transition-all">
            Privacy Policy{" "}
            </li>
            <li className="my-2  cursor-pointer transition-all">
            Terms of service{" "}
            </li>
            <li className="my-2  cursor-pointer transition-all">
            Cookie Policy (US){" "}
            </li>
            <li className="my-2  cursor-pointer transition-all">
            Agreement{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="mb-4 font-medium text-lg" style={{color:'#fff'}}>Resources</p>
          <ul className="text-black-500" style={{color:'#fff'}}>
            <li className="my-2 cursor-pointer transition-all">
            EC Infosolutions Blog{" "}
            </li>
            <li className="my-2 cursor-pointer transition-all">
            Partner with EC{" "}
            </li>
            <li className="my-2  cursor-pointer transition-all">
            Get Support{" "}
            </li>
            <li className="my-2  cursor-pointer transition-all">
            Call: +1 (315) 703-3343{" "}
            </li>
          
          </ul>
        </div>

        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start " style={{alignItems:'center', width:'30%'}}>
        <p className=" mb-4 font-medium text-lg" style={{color:'#fff'}}>SIGN UP FOR THE NEWSLETTER</p>
          <p className="mb-4" style={{textAlign:'center', color:'#fff'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur.
          </p>
        </div>

      </div>
      <div className='footerBottom'>
        <div> <p className=" " style={{color:'#fff'}}>© 2022 EC Infosolutions Pvt. Ltd. All rights reserved.</p></div>
         
          <div className="flex mb-8 -mx-2" style={{display:'flex', justifyContent:'center'}}>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              {/* <Facebook className="h-6 w-6" /> */}
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              {/* <Twitter className="h-6 w-6" /> */}
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              {/* <Instagram className="h-6 w-6" /> */}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
