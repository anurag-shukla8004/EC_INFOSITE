import {useState} from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faHeart,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

function ClientSuccessPage({}) {

  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);
  const [isShown7, setIsShown7] = useState(false);
  const [isShown8, setIsShown8] = useState(false);
  const [isShown9, setIsShown9] = useState(false);
  const [isShown10, setIsShown10] = useState(false);
  const [isShown11, setIsShown11] = useState(false);
  const [isShown12, setIsShown12] = useState(false);
  const [isShown13, setIsShown13] = useState(false);

  const handleClick1 = (event) => {
    // 👇️ toggle visibility
    console.log(event)
    setIsShown1(current => !current);
  };
  const handleClick2= (event) => {
    // 👇️ toggle visibility
    console.log(event)
    setIsShown2(current => !current);
  };
  const handleClick3 = (event) => {
    // 👇️ toggle visibility
    console.log(event)
    setIsShown3(current => !current);
  };
  const handleClick4 = (event) => {
    // 👇️ toggle visibility
    console.log(event)
    setIsShown4(current => !current);
  };
  const handleClick5 = (event) => {
    // 👇️ toggle visibility
    console.log(event)
    setIsShown5(current => !current);
  };
  const handleClick6 = (event) => {
    // 👇️ toggle visibility
    console.log(event)
    setIsShown6(current => !current);
  };
  const handleClick7 = (event) => {
    // 👇️ toggle visibility
    console.log(event)
    setIsShown7(current => !current);
  };
  const handleClick8 = (event) => {
    // 👇️ toggle visibility
    console.log(event)
    setIsShown8(current => !current);
  };
  const handleClick9 = (event) => {
    // 👇️ toggle visibility
    console.log(event)
    setIsShown9(current => !current);
  };
  const handleClick10 = (event) => {
    // 👇️ toggle visibility
    console.log(event)
    setIsShown10(current => !current);
  };
  const handleClick11 = (event) => {
    // 👇️ toggle visibility
    console.log(event)
    setIsShown11(current => !current);
  };
  const handleClick12 = (event) => {
    // 👇️ toggle visibility
    console.log(event)
    setIsShown12(current => !current);
  };
  const handleClick13 = (event) => {
    // 👇️ toggle visibility
    console.log(event)
    setIsShown13(current => !current);
  };
  return (
    <div className='clientMainContainer'>
    <div className='clientContainer'>
    <div className='ourClientContaier'>
    <div className='outClientimg'>
    <img src='./assets/ourClients.png'></img>
    </div>
    </div>
       <div className='ourClientimgText'>
      <h1 className='clientHeaderText'>
      Businesses   <div className='clientSuccesIcon1'><FontAwesomeIcon
        icon={  faHeart
        }
        style={{fontSize: '35px',  color: "#0065cf" }}
      /> 
        </div>  EC Infosolutions & we are thankful.</h1>
     <p className='homeParaText'>For EC, customer engagement means a coming together of ideas, strategies, execution, revenue acquisition, plan Bs, and the overall value creation for customers. We are proud to have numerous success stories, and are very thankful to our customers for them!
Some of our happy customers from different businesses are:
</p>
    </div>

    <div className='divLine'></div>


    <div className='clientModalContainer'>

    <div className='modalContainer' >
    <div className='modalName' onClick={handleClick1}> 

    <div className='clientSuccesIcon'>
    <FontAwesomeIcon
        icon={  faCaretDown
        }
        style={{fontSize: '20px',  color: "#111" }}
      />
    </div>

     Agriculture</div>
     <div className='modalLink' style={{display: isShown1 ? 'flex' : 'none',padding: '15px', flexWrap:'wrap'}}>
    <img className='partnerImg' src='./assets/llc.png'></img>
    <img className='partnerImg' src='./assets/pact.png'></img>
    <img className='partnerImg' src='./assets/soil.png'></img>
    <img className='partnerImg' src='./assets/gmsLab.png'></img>
    <img className='partnerImg' src='./assets/nitrogenPulse.png'></img>
    </div>
    </div>

    <div className='modalContainer' >
    <div className='modalName' onClick={handleClick2}>    <div className='clientSuccesIcon'>
    <FontAwesomeIcon
        icon={  faCaretDown
        }
        style={{fontSize: '20px',  color: "#111" }}
      />
    </div> Education</div>
    <div className='modalLink' style={{display: isShown2 ? 'flex' : 'none',padding: '15px', flexWrap:'wrap'}}>
    <img className='partnerImg' src='./assets/chrysalis.png'></img>
    <img className='partnerImg' src='./assets/cifp.png'></img>
    <img className='partnerImg' src='./assets/hts.png'></img>
    <img className='partnerImg' src='./assets/mit.png'></img>
    <img className='partnerImg' src='./assets/jetking.png'></img>
    <img className='partnerImg' src='./assets/arise.png'></img>
    <img className='partnerImg' src='./assets/ibmr.png'></img>
    <img className='partnerImg' src='./assets/edu.png'></img>
    <img className='partnerImg' src='./assets/studdybuddi.png'></img>
    <img className='partnerImg' src='./assets/ims.png'></img>
    <img className='partnerImg' src='./assets/pai.png'></img>
    <img className='partnerImg' src='./assets/apmp.png'></img>
    </div>
    </div>
    <div className='modalContainer' >
    <div className='modalName'onClick={handleClick3}>    <div className='clientSuccesIcon'>
    <FontAwesomeIcon
        icon={  faCaretDown
        }
        style={{fontSize: '20px',  color: "#111" }}
      />
    </div> Engineering</div>
     <div className='modalLink' style={{display: isShown3 ? 'flex' : 'none',padding: '15px', flexWrap:'wrap'}}>
    <img className='partnerImg' src='./assets/3ddesign.png'></img>
    <img className='partnerImg' src='./assets/ezar.png'></img>
    <img className='partnerImg' src='./assets/digitronics.png'></img>
    <img className='partnerImg' src='./assets/kta.png'></img>
    <img className='partnerImg' src='./assets/lt.png'></img>
    <img className='partnerImg' src='./assets/mahindra.png'></img>
    <img className='partnerImg' src='./assets/tata.png'></img>
    <img className='partnerImg' src='./assets/thermax.png'></img>
    <img className='partnerImg' src='./assets/qpoint.png'></img>
    <img className='partnerImg' src='./assets/trutek.png'></img>
    <img className='partnerImg' src='./assets/ip.png'></img>
    <img className='partnerImg' src='./assets/kirloskar.png'></img>
    <img className='partnerImg' src='./assets/sqe.png'></img>
    <img className='partnerImg' src='./assets/kotkar.png'></img>
    <img className='partnerImg' src='./assets/ee.png'></img>
    </div>
    </div>
    <div className='modalContainer' >
    <div className='modalName'onClick={handleClick4}>    <div className='clientSuccesIcon'>
    <FontAwesomeIcon
        icon={  faCaretDown
        }
        style={{fontSize: '20px',  color: "#111" }}
      />
    </div> Financial Services</div>
    <div className='modalLink' style={{display: isShown4 ? 'flex' : 'none',padding: '15px', flexWrap:'wrap'}}>
    <img className='partnerImg' src='./assets/gws.png'></img>
    <img className='partnerImg' src='./assets/lfs.png'></img>
    <img className='partnerImg' src='./assets/indus.png'></img>
    <img className='partnerImg' src='./assets/naik.png'></img>
    </div>
    </div>
    <div className='modalContainer' >
    <div className='modalName'onClick={handleClick5}>    <div className='clientSuccesIcon'>
    <FontAwesomeIcon
        icon={  faCaretDown
        }
        style={{fontSize: '20px',  color: "#111" }}
      />
    </div> Government</div>
   <div className='modalLink' style={{display: isShown5 ? 'flex' : 'none',padding: '15px', flexWrap:'wrap'}}>
    <img className='partnerImg' src='./assets/gov1.png'></img>
    <img className='partnerImg' src='./assets/gov2.png'></img>
    <img className='partnerImg' src='./assets/gov3.jpeg'></img></div>
    </div>
    <div className='modalContainer' >
    <div className='modalName'onClick={handleClick6}>    <div className='clientSuccesIcon'>
    <FontAwesomeIcon
        icon={  faCaretDown
        }
        style={{fontSize: '20px',  color: "#111" }}
      />
    </div> Healthcare</div>
     <div className='modalLink' style={{display: isShown6 ? 'flex' : 'none',padding: '15px', flexWrap:'wrap'}}>
    <img className='partnerImg' src='./assets/health1.png'></img>
    <img className='partnerImg' src='./assets/health2.png'></img>
    <img className='partnerImg' src='./assets/health3.png'></img>
    <img className='partnerImg' src='./assets/health4.png'></img>
    <img className='partnerImg' src='./assets/health5.png'></img>
    <img className='partnerImg' src='./assets/health6.png'></img>
    <img className='partnerImg' src='./assets/health7.png'></img>
    <img className='partnerImg' src='./assets/health8.png'></img>
    <img className='partnerImg' src='./assets/health9.png'></img>
    <img className='partnerImg' src='./assets/health10.png'></img>
    <img className='partnerImg' src='./assets/health11.png'></img>
    <img className='partnerImg' src='./assets/health12.png'></img>
    <img className='partnerImg' src='./assets/health13.png'></img>
    <img className='partnerImg' src='./assets/health14.png'></img>
    <img className='partnerImg' src='./assets/health15.png'></img></div>
    </div>
    <div className='modalContainer' >
    <div className='modalName'onClick={handleClick7}>    <div className='clientSuccesIcon'>
    <FontAwesomeIcon
        icon={  faCaretDown
        }
        style={{fontSize: '20px',  color: "#111" }}
      />
    </div> Media</div>
       <div className='modalLink' style={{display: isShown7 ? 'flex' : 'none',padding: '15px', flexWrap:'wrap'}}> 
    <img className='partnerImg' src='./assets/md1.png'></img>
    <img className='partnerImg' src='./assets/md2.png'></img>
    <img className='partnerImg' src='./assets/md3.png'></img>
    <img className='partnerImg' src='./assets/md4.png'></img>
    <img className='partnerImg' src='./assets/md5.png'></img>
    <img className='partnerImg' src='./assets/md6.png'></img>
    <img className='partnerImg' src='./assets/md7.png'></img>
    <img className='partnerImg' src='./assets/md8.png'></img>
    <img className='partnerImg' src='./assets/md9.png'></img>
    <img className='partnerImg' src='./assets/md10.png'></img>
    <img className='partnerImg' src='./assets/md11.png'></img>
    <img className='partnerImg' src='./assets/md12.png'></img>
    <img className='partnerImg' src='./assets/md13.png'></img>
    <img className='partnerImg' src='./assets/md14.png'></img>
    </div>
    </div>
    <div className='modalContainer'>
    <div className='modalName' onClick={handleClick8}>    <div className='clientSuccesIcon'>
    <FontAwesomeIcon
        icon={  faCaretDown
        }
        style={{fontSize: '20px',  color: "#111" }}
      />
    </div> Non Profit</div>
     <div className='modalLink' style={{display: isShown8 ? 'flex' : 'none',padding: '15px', flexWrap:'wrap'}}>
     <img className='partnerImg' src='./assets/non1.png'></img>
    <img className='partnerImg' src='./assets/non2.png'></img>
    <img className='partnerImg' src='./assets/non3.png'></img>
    <img className='partnerImg' src='./assets/non4.png'></img>
    </div>
    </div>
    <div className='modalContainer' >
    <div className='modalName'onClick={handleClick9}>   <div className='clientSuccesIcon'>
    <FontAwesomeIcon
        icon={  faCaretDown
        }
        style={{fontSize: '20px',  color: "#111" }}
      />
    </div> Real Estate</div>
         <div className='modalLink' style={{display: isShown9 ? 'flex' : 'none',padding: '15px', flexWrap:'wrap'}}> 
    <img className='partnerImg' src='./assets/re1.png'></img>
    <img className='partnerImg' src='./assets/re2.png'></img>
    <img className='partnerImg' src='./assets/re3.png'></img>
    <img className='partnerImg' src='./assets/re4.png'></img>
    <img className='partnerImg' src='./assets/re5.png'></img>
    <img className='partnerImg' src='./assets/re6.png'></img>
    <img className='partnerImg' src='./assets/re7.png'></img>
    <img className='partnerImg' src='./assets/re8.png'></img>
    <img className='partnerImg' src='./assets/re9.png'></img>
    <img className='partnerImg' src='./assets/re10.png'></img></div>
    </div>
    <div className='modalContainer' >
    <div className='modalName' onClick={handleClick10}>    <div className='clientSuccesIcon'>
    <FontAwesomeIcon
        icon={  faCaretDown
        }
        style={{fontSize: '20px',  color: "#111" }}
      />
    </div> Services</div>
   <div className='modalLink' style={{display: isShown10 ? 'flex' : 'none',padding: '15px', flexWrap:'wrap'}}> 
    <img className='partnerImg' src='./assets/se1.png'></img>
    <img className='partnerImg' src='./assets/se2.png'></img>
    <img className='partnerImg' src='./assets/se3.png'></img>
    <img className='partnerImg' src='./assets/se4.png'></img>
    <img className='partnerImg' src='./assets/se6.png'></img>
    <img className='partnerImg' src='./assets/se7.png'></img>
    <img className='partnerImg' src='./assets/se8.png'></img></div>
    </div>
    <div className='modalContainer' >
    <div className='modalName'onClick={handleClick11}>    <div className='clientSuccesIcon'>
    <FontAwesomeIcon
        icon={  faCaretDown
        }
        style={{fontSize: '20px',  color: "#111" }}
      />
    </div> Shipping & Logistics</div>
      <div className='modalLink' style={{display: isShown11 ? 'flex' : 'none',padding: '15px', flexWrap:'wrap'}}> 
    <img className='partnerImg' src='./assets/sh1.png'></img>
    <img className='partnerImg' src='./assets/sh2.png'></img>
    <img className='partnerImg' src='./assets/sh3.png'></img>
    <img className='partnerImg' src='./assets/sh4.png'></img></div>
    </div>
    <div className='modalContainer' >
    <div className='modalName'onClick={handleClick12}>    <div className='clientSuccesIcon'>
    <FontAwesomeIcon
        icon={  faCaretDown
        }
        style={{fontSize: '20px',  color: "#111" }}
      />
    </div> Software</div>
 <div className='modalLink' style={{display: isShown12 ? 'flex' : 'none',padding: '15px', flexWrap:'wrap'}}> 
    <img className='partnerImg' src='./assets/so1.png'></img>
    <img className='partnerImg' src='./assets/so2.png'></img>
    <img className='partnerImg' src='./assets/so3.png'></img>
    <img className='partnerImg' src='./assets/so4.png'></img>
    <img className='partnerImg' src='./assets/so6.png'></img>
    <img className='partnerImg' src='./assets/so7.png'></img>
    <img className='partnerImg' src='./assets/so8.png'></img>
    <img className='partnerImg' src='./assets/so9.png'></img>
    <img className='partnerImg' src='./assets/so10.png'></img>
    </div>
    </div>
    <div className='modalContainer' >
    <div className='modalName'onClick={handleClick13}>    <div className='clientSuccesIcon'>
    <FontAwesomeIcon
        icon={  faCaretDown
        }
        style={{fontSize: '20px',  color: "#111" }}
      />
    </div> Travel & Hospitality</div>
      <div className='modalLink' style={{display: isShown13 ? 'flex' : 'none',padding: '15px', flexWrap:'wrap'}}> 
    <img className='partnerImg' src='./assets/tr1.png'></img>
    <img className='partnerImg' src='./assets/tr2.png'></img>
    <img className='partnerImg' src='./assets/tr3.png'></img>
    <img className='partnerImg' src='./assets/tr4.png'></img>
    <img className='partnerImg' src='./assets/tr5.png'></img>
    <img className='partnerImg' src='./assets/tr6.png'></img>
    <img className='partnerImg' src='./assets/tr7.png'></img>
    <img className='partnerImg' src='./assets/tr8.png'></img>
    <img className='partnerImg' src='./assets/tr9.png'></img>
    <img className='partnerImg' src='./assets/tr10.png'></img>
    <img className='partnerImg' src='./assets/tr11.png'></img>
    <img className='partnerImg' src='./assets/tr12.png'></img>

    </div>
    </div>


    </div>
    </div>
  </div>
  )
}

export default ClientSuccessPage
{}