import { useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';

function Index({}) {
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

  const [ApiData, setApiData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('');

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();
        setBlogApiData(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    }

    getUser();
  }, []);

  const handleClick1 = (event) => {
    // 👇️ toggle visibility
    console.log(event);
    setIsShown1((current) => !current);
  };
  const handleClick2 = (event) => {
    // 👇️ toggle visibility
    console.log(event);
    setIsShown2((current) => !current);
  };
  const handleClick3 = (event) => {
    // 👇️ toggle visibility
    console.log(event);
    setIsShown3((current) => !current);
  };
  const handleClick4 = (event) => {
    // 👇️ toggle visibility
    console.log(event);
    setIsShown4((current) => !current);
  };
  const handleClick5 = (event) => {
    // 👇️ toggle visibility
    console.log(event);
    setIsShown5((current) => !current);
  };
  const handleClick6 = (event) => {
    // 👇️ toggle visibility
    console.log(event);
    setIsShown6((current) => !current);
  };
  const handleClick7 = (event) => {
    // 👇️ toggle visibility
    console.log(event);
    setIsShown7((current) => !current);
  };
  const handleClick8 = (event) => {
    // 👇️ toggle visibility
    console.log(event);
    setIsShown8((current) => !current);
  };
  const handleClick9 = (event) => {
    // 👇️ toggle visibility
    console.log(event);
    setIsShown9((current) => !current);
  };
  const handleClick10 = (event) => {
    // 👇️ toggle visibility
    console.log(event);
    setIsShown10((current) => !current);
  };
  const handleClick11 = (event) => {
    // 👇️ toggle visibility
    console.log(event);
    setIsShown11((current) => !current);
  };
  const handleClick12 = (event) => {
    // 👇️ toggle visibility
    console.log(event);
    setIsShown12((current) => !current);
  };
  const handleClick13 = (event) => {
    // 👇️ toggle visibility
    console.log(event);
    setIsShown13((current) => !current);
  };
  return (
    <div className="clientMainContainer">
      <div className="clientContainer">
        <div className="ourClientContaier">
          <div className="outClientimg">
            <img src="ourClients.png"></img>
          </div>
        </div>
        <div className="ourClientimgText">
          <h1 className="clientHeaderText">
            Businesses&nbsp;
            <FaHeart style />
            &nbsp;EC Infosolutions & we are thankful.
          </h1>
          <p className="homeParaText">
            For EC, customer engagement means a coming together of ideas,
            strategies, execution, revenue acquisition, plan Bs, and the overall
            value creation for customers. We are proud to have numerous success
            stories, and are very thankful to our customers for them! Some of
            our happy customers from different businesses are:
          </p>
        </div>

        <div className="divLine"></div>

        <div className="clientModalContainer">
          <div className="modalContainer">
            <div className="modalName" onClick={handleClick1}>
              {' '}
              &nbsp;
              <AiFillCaretDown />
              &nbsp; Agriculture
            </div>
            <div
              className="modalLink"
              style={{
                display: isShown1 ? 'flex' : 'none',
                padding: '15px',
                flexWrap: 'wrap',
              }}
            >
              <img className="partnerImg" src="llc.png"></img>
              <img className="partnerImg" src="pact.png"></img>
              <img className="partnerImg" src="soil.png"></img>
              <img className="partnerImg" src="gmsLab.png"></img>
              <img className="partnerImg" src="nitrogenPulse.png"></img>
            </div>
          </div>

          <div className="modalContainer">
            <div className="modalName" onClick={handleClick2}>
              {' '}
              &nbsp;
              <AiFillCaretDown />
              &nbsp; Education
            </div>
            <div
              className="modalLink"
              style={{
                display: isShown2 ? 'flex' : 'none',
                padding: '15px',
                flexWrap: 'wrap',
              }}
            >
              <img className="partnerImg" src="chrysalis.png"></img>
              <img className="partnerImg" src="cifp.png"></img>
              <img className="partnerImg" src="hts.png"></img>
              <img className="partnerImg" src="mit.png"></img>
              <img className="partnerImg" src="jetking.png"></img>
              <img className="partnerImg" src="arise.png"></img>
              <img className="partnerImg" src="ibmr.png"></img>
              <img className="partnerImg" src="edu.png"></img>
              <img className="partnerImg" src="studdybuddi.png"></img>
              <img className="partnerImg" src="ims.png"></img>
              <img className="partnerImg" src="pai.png"></img>
              <img className="partnerImg" src="apmp.png"></img>
            </div>
          </div>
          <div className="modalContainer">
            <div className="modalName" onClick={handleClick3}>
              {' '}
              &nbsp;
              <AiFillCaretDown />
              &nbsp; Engineering
            </div>
            <div
              className="modalLink"
              style={{
                display: isShown3 ? 'flex' : 'none',
                padding: '15px',
                flexWrap: 'wrap',
              }}
            >
              <img className="partnerImg" src="3ddesign.png"></img>
              <img className="partnerImg" src="ezar.png"></img>
              <img className="partnerImg" src="digitronics.png"></img>
              <img className="partnerImg" src="kta.png"></img>
              <img className="partnerImg" src="lt.png"></img>
              <img className="partnerImg" src="mahindra.png"></img>
              <img className="partnerImg" src="tata.png"></img>
              <img className="partnerImg" src="thermax.png"></img>
              <img className="partnerImg" src="qpoint.png"></img>
              <img className="partnerImg" src="trutek.png"></img>
              <img className="partnerImg" src="ip.png"></img>
              <img className="partnerImg" src="kirloskar.png"></img>
              <img className="partnerImg" src="sqe.png"></img>
              <img className="partnerImg" src="kotkar.png"></img>
              <img className="partnerImg" src="ee.png"></img>
            </div>
          </div>
          <div className="modalContainer">
            <div className="modalName" onClick={handleClick4}>
              &nbsp;
              <AiFillCaretDown />
              &nbsp; Financial Services
            </div>
            <div
              className="modalLink"
              style={{
                display: isShown4 ? 'flex' : 'none',
                padding: '15px',
                flexWrap: 'wrap',
              }}
            >
              <img className="partnerImg" src="gws.png"></img>
              <img className="partnerImg" src="lfs.png"></img>
              <img className="partnerImg" src="indus.png"></img>
              <img className="partnerImg" src="naik.png"></img>
            </div>
          </div>
          <div className="modalContainer">
            <div className="modalName" onClick={handleClick5}>
              {' '}
              &nbsp;
              <AiFillCaretDown />
              &nbsp; Government
            </div>
            <div
              className="modalLink"
              style={{
                display: isShown5 ? 'flex' : 'none',
                padding: '15px',
                flexWrap: 'wrap',
              }}
            >
              <img className="partnerImg" src="gov1.png"></img>
              <img className="partnerImg" src="gov2.png"></img>
              <img className="partnerImg" src="gov3.jpeg"></img>
            </div>
          </div>
          <div className="modalContainer">
            <div className="modalName" onClick={handleClick6}>
              {' '}
              &nbsp;
              <AiFillCaretDown />
              &nbsp; Healthcare
            </div>
            <div
              className="modalLink"
              style={{
                display: isShown6 ? 'flex' : 'none',
                padding: '15px',
                flexWrap: 'wrap',
              }}
            >
              <img className="partnerImg" src="health1.png"></img>
              <img className="partnerImg" src="health2.png"></img>
              <img className="partnerImg" src="health3.png"></img>
              <img className="partnerImg" src="health4.png"></img>
              <img className="partnerImg" src="health5.png"></img>
              <img className="partnerImg" src="health6.png"></img>
              <img className="partnerImg" src="health7.png"></img>
              <img className="partnerImg" src="health8.png"></img>
              <img className="partnerImg" src="health9.png"></img>
              <img className="partnerImg" src="health10.png"></img>
              <img className="partnerImg" src="health11.png"></img>
              <img className="partnerImg" src="health12.png"></img>
              <img className="partnerImg" src="health13.png"></img>
              <img className="partnerImg" src="health14.png"></img>
              <img className="partnerImg" src="health15.png"></img>
            </div>
          </div>
          <div className="modalContainer">
            <div className="modalName" onClick={handleClick7}>
              {' '}
              &nbsp;
              <AiFillCaretDown />
              &nbsp; Media
            </div>
            <div
              className="modalLink"
              style={{
                display: isShown7 ? 'flex' : 'none',
                padding: '15px',
                flexWrap: 'wrap',
              }}
            >
              <img className="partnerImg" src="md1.png"></img>
              <img className="partnerImg" src="md2.png"></img>
              <img className="partnerImg" src="md3.png"></img>
              <img className="partnerImg" src="md4.png"></img>
              <img className="partnerImg" src="md5.png"></img>
              <img className="partnerImg" src="md6.png"></img>
              <img className="partnerImg" src="md7.png"></img>
              <img className="partnerImg" src="md8.png"></img>
              <img className="partnerImg" src="md9.png"></img>
              <img className="partnerImg" src="md10.png"></img>
              <img className="partnerImg" src="md11.png"></img>
              <img className="partnerImg" src="md12.png"></img>
              <img className="partnerImg" src="md13.png"></img>
              <img className="partnerImg" src="md14.png"></img>
            </div>
          </div>
          <div className="modalContainer">
            <div className="modalName" onClick={handleClick8}>
              {' '}
              &nbsp;
              <AiFillCaretDown />
              &nbsp; Non Profit
            </div>
            <div
              className="modalLink"
              style={{
                display: isShown8 ? 'flex' : 'none',
                padding: '15px',
                flexWrap: 'wrap',
              }}
            >
              <img className="partnerImg" src="non1.png"></img>
              <img className="partnerImg" src="non2.png"></img>
              <img className="partnerImg" src="non3.png"></img>
              <img className="partnerImg" src="non4.png"></img>
            </div>
          </div>
          <div className="modalContainer">
            <div className="modalName" onClick={handleClick9}>
              {' '}
              &nbsp;
              <AiFillCaretDown />
              &nbsp; Real Estate
            </div>
            <div
              className="modalLink"
              style={{
                display: isShown9 ? 'flex' : 'none',
                padding: '15px',
                flexWrap: 'wrap',
              }}
            >
              <img className="partnerImg" src="re1.png"></img>
              <img className="partnerImg" src="re2.png"></img>
              <img className="partnerImg" src="re3.png"></img>
              <img className="partnerImg" src="re4.png"></img>
              <img className="partnerImg" src="re5.png"></img>
              <img className="partnerImg" src="re6.png"></img>
              <img className="partnerImg" src="re7.png"></img>
              <img className="partnerImg" src="re8.png"></img>
              <img className="partnerImg" src="re9.png"></img>
              <img className="partnerImg" src="re10.png"></img>
            </div>
          </div>
          <div className="modalContainer">
            <div className="modalName" onClick={handleClick10}>
              {' '}
              &nbsp;
              <AiFillCaretDown />
              &nbsp; Services
            </div>
            <div
              className="modalLink"
              style={{
                display: isShown10 ? 'flex' : 'none',
                padding: '15px',
                flexWrap: 'wrap',
              }}
            >
              <img className="partnerImg" src="se1.png"></img>
              <img className="partnerImg" src="se2.png"></img>
              <img className="partnerImg" src="se3.png"></img>
              <img className="partnerImg" src="se4.png"></img>
              <img className="partnerImg" src="se6.png"></img>
              <img className="partnerImg" src="se7.png"></img>
              <img className="partnerImg" src="se8.png"></img>
            </div>
          </div>
          <div className="modalContainer">
            <div className="modalName" onClick={handleClick11}>
              {' '}
              &nbsp;
              <AiFillCaretDown />
              &nbsp; Shipping & Logistics
            </div>
            <div
              className="modalLink"
              style={{
                display: isShown11 ? 'flex' : 'none',
                padding: '15px',
                flexWrap: 'wrap',
              }}
            >
              <img className="partnerImg" src="sh1.png"></img>
              <img className="partnerImg" src="sh2.png"></img>
              <img className="partnerImg" src="sh3.png"></img>
              <img className="partnerImg" src="sh4.png"></img>
            </div>
          </div>
          <div className="modalContainer">
            <div className="modalName" onClick={handleClick12}>
              {' '}
              &nbsp;
              <AiFillCaretDown />
              &nbsp; Software
            </div>
            <div
              className="modalLink"
              style={{
                display: isShown12 ? 'flex' : 'none',
                padding: '15px',
                flexWrap: 'wrap',
              }}
            >
              <img className="partnerImg" src="so1.png"></img>
              <img className="partnerImg" src="so2.png"></img>
              <img className="partnerImg" src="so3.png"></img>
              <img className="partnerImg" src="so4.png"></img>
              <img className="partnerImg" src="so6.png"></img>
              <img className="partnerImg" src="so7.png"></img>
              <img className="partnerImg" src="so8.png"></img>
              <img className="partnerImg" src="so9.png"></img>
              <img className="partnerImg" src="so10.png"></img>
            </div>
          </div>
          <div className="modalContainer">
            <div className="modalName" onClick={handleClick13}>
              {' '}
              &nbsp;
              <AiFillCaretDown />
              &nbsp; Travel & Hospitality
            </div>
            <div
              className="modalLink"
              style={{
                display: isShown13 ? 'flex' : 'none',
                padding: '15px',
                flexWrap: 'wrap',
              }}
            >
              <img className="partnerImg" src="tr1.png"></img>
              <img className="partnerImg" src="tr2.png"></img>
              <img className="partnerImg" src="tr3.png"></img>
              <img className="partnerImg" src="tr4.png"></img>
              <img className="partnerImg" src="tr5.png"></img>
              <img className="partnerImg" src="tr6.png"></img>
              <img className="partnerImg" src="tr7.png"></img>
              <img className="partnerImg" src="tr8.png"></img>
              <img className="partnerImg" src="tr9.png"></img>
              <img className="partnerImg" src="tr10.png"></img>
              <img className="partnerImg" src="tr11.png"></img>
              <img className="partnerImg" src="tr12.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
{
}
