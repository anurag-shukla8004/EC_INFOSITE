import { tw } from 'twind';
import { useState } from 'react';
import Button from '@/components/button';
import Link from 'next/link'

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}



const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (



  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-gray-400`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => {
  const [isShown, setIsShown] = useState(true);
  const [isShown2, setIsShown2] = useState(true);
  const [isShown3, setIsShown3] = useState(true);
  const [isShownTech1, setIsShownTech1] = useState(true);
  const [isShownTech2, setIsShownTech2] = useState(true);
  const [isShownTech3, setIsShownTech3] = useState(true);
  const [isShownTech4, setIsShownTech4] = useState(true);

  const handleClick = () => {
    // 👇️ toggle visibility
    setIsShownTech1(true);
    setIsShownTech2(true);
    setIsShownTech3(true);
    setIsShownTech4(true);
    setIsShown3(true);
    setIsShown2(true);
    setIsShown(current => !current);
   
    


  };
  const handleClick2 = () => {
    // 👇️ toggle visibility
    setIsShown(true);
    setIsShownTech1(true);
    setIsShownTech2(true);
    setIsShownTech3(true);
    setIsShownTech4(true);
    setIsShown3(true);
    setIsShown2(current => !current);
    

  };
  const handleClick3 = () => {
    // 👇️ toggle visibility
    setIsShown(true);
    setIsShown2(true);
    setIsShownTech1(true);
    setIsShownTech2(true);
    setIsShownTech3(true);
    setIsShownTech4(true);
    setIsShown3(current => !current);
  };
  const techHandile1 = () => {
    // 👇️ toggle visibility

    setIsShownTech2(true);
    setIsShownTech3(true);
    setIsShownTech4(true);
    setIsShownTech1(current => !current);
  };
  const techHandile2 = () => {
    // 👇️ toggle visibility
    setIsShownTech1(true);
    setIsShownTech3(true);
    setIsShownTech4(true);
    setIsShownTech2(current => !current);
  };
  const techHandile3 = () => {
    // 👇️ toggle visibility
    setIsShownTech1(true);
    setIsShownTech2(true);
    setIsShownTech4(true);
    setIsShownTech3(current => !current);
  };
  const techHandile4 = () => {
    // 👇️ toggle visibility
    setIsShownTech1(true);
    setIsShownTech2(true);
    setIsShownTech3(true);
    setIsShownTech4(current => !current);
  };

  return <>
  <div className='hamMenuContainer'>
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>

       <div>
         <div  onClick={handleClick}>
           <a  className={tw(`selectHamMenu text-gray-500 block px-3 py-2 text-base font-medium`)}>
         ABOUT EC
        </a>
         </div>
         
        <div className='hamMenuList' style={{display: isShown ? 'none' : 'flex'}}>
        <Link href="/#">Leadership</Link>
        <Link href="/#">Client Success</Link>
        <Link href="#">Careers</Link>
        <Link href="#">Partner with EC</Link>
        <Link href="/#">Contact Us</Link>
        </div>
       </div>
        
       <div>
         <div  onClick={handleClick2}>
           <a  className={tw(`selectHamMenu text-gray-500 block px-3 py-2 text-base font-medium`)}>
         TECHNOLOGY SERVICES
        </a>
         </div>
         
        <div className='hamMenuList' style={{display: isShown2 ? 'none' : 'flex'}}>
          
          <div className='techList'  onClick={techHandile1}>
            <a  className={tw(`selectHamMenu text-gray-500 block px-3 py-2 text-sm font-medium`)}>Engineering</a>
            <div className='hamMenuList' style={{display: isShownTech1 ? 'none' : 'flex'}}>
            <Link href="/#">Custom App Development</Link>
      <Link href="/#">Python Developer</Link>
      <Link href="/#">C# Developer</Link>
      <Link href="#">React Native Developer</Link>
      <Link href="#">ReactJS Developer</Link>
        </div>
          </div>
          <div className='techList' onClick={techHandile2}>        <a  className={tw(`selectHamMenu text-gray-500 block px-3 py-2 text-sm font-medium`)}>Platforms</a>
          <div className='hamMenuList' style={{display: isShownTech2 ? 'none' : 'flex'}}>
          <Link href="#">Freedom CTRM</Link>
      <Link href="/#">Freevocal</Link>
      <Link href="#">loT Core</Link>
      <Link href="/#">Lab Core</Link>
      <Link href="/#">Pricing | ROI Calculator</Link>
        </div>
</div>
          <div className='techList' onClick={techHandile3}>        <a  className={tw(`selectHamMenu text-gray-500 block px-3 py-2 text-sm font-medium`)}>Industries</a>
          <div className='hamMenuList' style={{display: isShownTech3 ? 'none' : 'flex'}}>
          <Link href="/#">Agribusinesses</Link>
      <Link href="/#">eCommerce & Retail</Link>
      <Link href="#">ESG</Link>
      <Link href="/#">Manufacturing</Link>
      <Link href="/#">Startups</Link>
        </div>
</div>
          <div className='techList' onClick={techHandile4}>        <a  className={tw(`selectHamMenu text-gray-500 block px-3 py-2 text-sm font-medium`)}>Cloud Patners</a>
          <div className='hamMenuList' style={{display: isShownTech4 ? 'none' : 'flex'}}>
          <Link href="/#">AWS Partner Network</Link>
      <Link href="#">Azure Partner</Link>
      <Link href="/#">Google Cloud Partner</Link>
      <Link href="/#">Shopify Partner</Link>
      <Link href="/#">UI Path Partner</Link>
        </div>
</div>
        
        </div>
       </div>
       <div>
         <div  onClick={handleClick3}>
           <a  className={tw(`selectHamMenu text-gray-500 block px-3 py-2 text-base font-medium`)}>
         CONSULTING SERCIVES
        </a>
         </div>
         
        <div className='hamMenuList' style={{display: isShown3 ? 'none' : 'flex'}}>
        <Link href="/#">Leadership</Link>
        <Link href="/#">Client Success</Link>
        <Link href="#">Careers</Link>
        <Link href="#">Partner with EC</Link>
        <Link href="/#">Contact Us</Link>
        </div>
       </div>
      
    </div>
    <div className={tw(`pt-4 pb-3 border-t border-gray-400`)}>
      <div className={tw(`px-2 space-y-1`)}>

          <a
            className={tw(`block px-3 py-2 text-base font-medium text-gray-500`)}
          >
           SEARCH
          </a>
           <a
           className={tw(`block px-3 py-2 text-base font-medium text-gray-500`)}
         >
          CONSULTING SERVICES
         </a>

      </div>
    </div>
  </div>
  </>
}

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className={tw(`bg-white fixed w-full`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <img className='ecLogoImg'src="ecLogo.png" alt="logo" width={48} height={48} />
            </div>
            <div className={tw(`linkesNav`)}>
              <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                  <a
                    className={tw(` dropdown h-28 text-black-600 flex  hover:text-gray-600 px-3 py-2 text-center rounded-md font-medium text-sm `)}>
                    <div className='dropbtn'>
                       <Link href="#" >ABOUT EC </Link>
                    <img className={tw(`w-3 mx-2`)}src="downArrow.svg" alt="logo" />
                    </div>
                   <div className="dropdown-content">
      
      <Link href="/#">Leadership</Link>
        <Link href="/#">Client Success</Link>
        <Link href="#">Careers</Link>
        <Link href="#">Partner with EC</Link>
        <Link href="/#">Contact Us</Link>
      </div> 
                  </a>
                      
                  <a
                    className={tw(`h-28 text-black-600 flex  hover:text-gray-600 px-3 py-2 text-center rounded-md font-medium text-sm dropdown`)}>
                    <div className='dropbtn'>
                       <Link href="#" >TECHNOLOGY SERVICES </Link>
                    <img className={tw(`w-3 mx-2`)}src="downArrow.svg" alt="logo" />
                    </div>
                    <div className="dropdown-content tech">
      <div style={{display:'flex', justifyContent: 'space-around',
    flexDirection: 'row'}}>

     <div className='menuAdj'>
        <div style={{borderRight: '0.6px solid #c8c8c8'}}>
        <h3 className='TechServTitle'>ENGINEERING</h3>
         <Link href="/customerAppDev">Custom App Development</Link>
      <Link href="/pytDev">Python Developer</Link>
      <Link href="/customerAppDev">C# Developer</Link>
      <Link href="#">React Native Developer</Link>
      <Link href="#">ReactJS Developer</Link>
      </div>
      <div style={{borderRight: '0.6px solid #c8c8c8'}}>
      <h3 className='TechServTitle'>PLATFORM</h3>

         <Link href="#">Freedom CTRM</Link>
      <Link href="/freeVocal">Freevocal</Link>
      <Link href="#">loT Core</Link>
      <Link href="/labCore">Lab Core</Link>
      <Link href="/pricing">Pricing | ROI Calculator</Link>
      </div>
     </div>
     <div className='menuAdj'>
        <div style={{borderRight: '0.6px solid #c8c8c8'}}>
      <h3 className='TechServTitle'>INDUSTRIES</h3>

         <Link href="/labCore">Agribusinesses</Link>
      <Link href="/eCommerce">eCommerce & Retail</Link>
      <Link href="#">ESG</Link>
      <Link href="/manufacturing">Manufacturing</Link>
      <Link href="#">Startups</Link>
      </div>
      <div >
      <h3 className='TechServTitle'>CLOUD PARTNERS</h3>

         <Link href="/awsPartner">AWS Partner Network</Link>
      <Link href="#">Azure Partner</Link>
      <Link href="/googleCloud">Google Cloud Partner</Link>
      <Link href="/shopify">Shopify Partner</Link>
      <Link href="#">UIPath Partner</Link>
      </div>
     </div>
     
      </div>
    </div>     </a>
                  <a
                    className={tw(` h-28 text-black-600 flex  hover:text-gray-600 px-3 py-2 text-center rounded-md font-medium text-sm dropdown`)}>
                    <div className='dropbtn'>
                       <Link href="#" >CONSULTING SERVICES</Link>
                    <img className={tw(`w-3 mx-2`)}src="downArrow.svg" alt="logo" />
                    </div>
                    <div className="dropdown-content consl">
      <Link href="#">AI & Predictive Analytics</Link>
      <Link href="#">BlockChain: dApps | STO | ICO</Link>
      <Link href="#">TechMergers</Link>
      <Link href="/opportunities">Blog</Link>
    </div>
                  </a>
               
              </div>
              
            </div>
          </div>
          <div className={tw(`linksBtn`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              <Button modifier="border-0 mr-2">SEARCH</Button>
              <Button primary>REQUEST A QUOTE</Button>
            </div>
          </div>
          <div className='hamMenu'>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;
