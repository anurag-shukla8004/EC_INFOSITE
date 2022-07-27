import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";

// import LogoVPN from "";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faSearch,
  faBell,
  faEnvelope,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "sticky top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="mainNav max-w-screen-xl sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
              <Link href='/'>  
              <div style={{cursor:'pointer'}}>
              <div className='logoImage'>
       <img src='/assets/ecLogo.png'>
       </img>
        </div>
            </div>
            </Link>
          
          
          </div>
 <ul className=" menuUl hidden  col-start-4 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to=''
              spy={true}
              smooth={true}
              duration={1000}
              // onSetActive={() => {
              //   setActiveLink("about");
              // }}
              className={
                "navBarLink cursor-pointer  inline-block relative" +
                (activeLink === "about"
                  ? " text-black-500 animation-active "
                  : " text-black-500 hover:text-black-500 a")
              }
            >
                
                <Link href='#'>
                <div className="dropdown">
    <button className="dropbtn">ABOUT EC  <img className='downArrowSvg' src='/assets/down-arrow-svgrepo-com.svg' alt='next' /> </button>
   
    <div className="dropdown-content">
      
    <Link href="/leaderShip">Leadership</Link>
      <Link href="/clientSuccess">Client Success</Link>
      <Link href="#">Careers</Link>
      <Link href="#">Partner with EC</Link>
      <Link href="/contactUs">Contact Us</Link>
    </div>
  </div> 
                  {/* <h4 className='navText'>
                  ABOUT EC 
                  <FontAwesomeIcon
        icon={  faAngleDown
        }
        style={{fontSize: 12,  color: "black", paddingLeft:'5px' }}
      />
                  </h4> */}
              </Link>
                  

           
            </LinkScroll>
         
           <LinkScroll
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              duration={1000}
              // onSetActive={() => {
              //   setActiveLink("feature");
              // }}
              className={
                "navBarLink  cursor-pointer  inline-block relative" +
                (activeLink === "feature"
                ? " text-black-500 animation-active "
                : " text-black-500 hover:text-black-500 a")
              }
            >
              <Link href='#'>
              <div className="dropdown ">
    <button className="dropbtn">TECHNOLOGY SERVICES 
    <img className='downArrowSvg' src='/assets/down-arrow-svgrepo-com.svg' alt='next' /> 
    </button>
    <div className="dropdown-content tech">
      <div style={{display:'flex', justifyContent: 'space-around',
    flexDirection: 'row'}}>

     <div className='menuAdj'>
        <div>
        <h3 className='TechServTitle'>ENGINEERING</h3>
         <Link href="/customerAppDev">Custom App Development</Link>
      <Link href="/pytDev">Python Developer</Link>
      <Link href="/customerAppDev">C# Developer</Link>
      <Link href="#">React Native Developer</Link>
      <Link href="#">ReactJS Developer</Link>
      </div>
      <div>
      <h3 className='TechServTitle'>PLATFORM</h3>

         <Link href="#">Freedom CTRM</Link>
      <Link href="/freeVocal">Freevocal</Link>
      <Link href="#">loT Core</Link>
      <Link href="/labCore">Lab Core</Link>
      <Link href="/pricing">Pricing | ROI Calculator</Link>
      </div>
     </div>
     <div className='menuAdj'>
        <div>
      <h3 className='TechServTitle'>INDUSTRIES</h3>

         <Link href="/labCore">Agribusinesses</Link>
      <Link href="/eCommerce">eCommerce & Retail</Link>
      <Link href="#">ESG</Link>
      <Link href="/manufacturing">Manufacturing</Link>
      <Link href="#">Startups</Link>
      </div>
      <div>
      <h3 className='TechServTitle'>CLOUD PARTNERS</h3>

         <Link href="/awsPartner">AWS Partner Network</Link>
      <Link href="#">Azure Partner</Link>
      <Link href="/googleCloud">Google Cloud Partner</Link>
      <Link href="/shopify">Shopify Partner</Link>
      <Link href="#">UIPath Partner</Link>
      </div>
     </div>
     
      </div>
    </div>
  
  </div> 
                {/* <h4 className='navText'>TECHNOLOGY SERVICES  <FontAwesomeIcon
        icon={  faAngleDown
        }
        style={{fontSize: 12,  color: "black", paddingLeft:'5px' }}
      /></h4> */}
                
              </Link>
              
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              duration={1000}
              // onSetActive={() => {
              //   setActiveLink("pricing");
              // }}
              className={
                " navBarLink cursor-pointer inline-block relative" +
                (activeLink === "pricing"
                ? " text-black-500 animation-active "
                : " text-black-500 hover:text-black-500 a")
              }
            >

<Link href='#'>
<div className="dropdown ">
    <button className="dropbtn">CONSULTING SERVICES 
    <img className='downArrowSvg' src='/assets/down-arrow-svgrepo-com.svg' alt='next' /> 
    </button>
    <div className="dropdown-content consl">
      <Link href="#">AI & Predictive Analytics</Link>
      <Link href="#">BlockChain: dApps | STO | ICO</Link>
      <Link href="#">TechMergers</Link>
      <Link href="/opportunities">Blog</Link>
    </div>
  </div>
  {/* <h4 className='navText'>CONSULTING SERVICES  <FontAwesomeIcon
        icon={  faAngleDown
        }
        style={{fontSize: 12,  color: "black", paddingLeft:'5px' }}
      /></h4> */}

              </Link>
              
            </LinkScroll>
   
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">

          <Link href='signIn'>
               <a className="  sm:mx-2 capitalize tracking-wide hover:text-black-500 cursor-pointer transition-all">
               <img className='searchSvg' src='/assets/search-svgrepo-com.svg' alt='next' /> 


              </a>
           </Link>

        
     

           <Link href='/contactUs'>
               <button className="quote">
                 REQUEST A QUOTE
              </button>
           </Link>
            
          

          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      {/* <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              duration={1000}
              // onSetActive={() => {
              //   setActiveLink("about");
              // }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs " 
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <Link href='/newsDetails'>
                 TECH NEWS
              </Link>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              duration={1000}
              // onSetActive={() => {
              //   setActiveLink("feature");
              // }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs "
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <Link href='/opportunities'>
                OPPORTUNITES
              </Link>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              duration={1000}
              // onSetActive={() => {
              //   setActiveLink("pricing");
              // }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs  " 
             
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <Link href='/opportunitiesDetails'>
               INSIGHTS
              </Link>
            </LinkScroll>
          </ul>
        </div>
      </nav> */}
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
