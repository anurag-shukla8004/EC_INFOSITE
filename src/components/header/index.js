import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { tw } from 'twind';
import Link from 'next/link';
import Loader from '../loader/index'


function IndexPage({}) {
  const [homeApiData, setHomeApiData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(
          'http://dc7e-219-91-171-109.ngrok.io/api/homepage/'
        );

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();
        setHomeApiData(data[0]);
        return data;
      } catch (err) {
        console.log(err);
      }
    }

    getUser();
  }, []);

  console.log(homeApiData);

  return (
    <div>
      <div className={tw(` homeMainContainer mt-20 `)}>
      {
             homeApiData == '' ? <Loader/> :
          
        <div className="homeContainer">
          <div className="mobileContainer">
            <div className="mobileImg">
              <img src={homeApiData.mobile_app_image}></img>
            </div>
            <div className="mobileTexBox">
              <h1
                className={tw(
                  `ecBlueColor font-semibold text-3xl headerMaiText`
                )}
              >
                Web & Mobile App Development
              </h1>
              <div
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: homeApiData.web_and_mobile_app_development,
                }}
              />
            </div>
          </div>
          <Link href="/pricing">
            <div className="buildYourQuoteBtn">
              <div style={{ cursor: 'pointer' }}>Build Your Quote</div>
            </div>
          </Link>

          <div className="newApprochContainer">
            <div className="newsApproch">
              <h1 className="homeHeaderText">
                A new approach to Software Engineering
              </h1>
              <pre
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: homeApiData.a_new_approch_to_software_development,
                }}
              />
            </div>
          </div>
          <div className="servIndusMainContainer">
            <div className="servicesContainer">
              <h1 className="homeHeaderText">
                A new approach to Software Engineering
              </h1>
              <pre
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: homeApiData.app_development_services,
                }}
              />
            </div>

            <div className="servicesContainer">
              <h1 className="homeHeaderText">Industry 4.0 & IoT</h1>
              <pre
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: homeApiData.industry_4_and_iot,
                }}
              />
            </div>
          </div>

          <div className="agileMainContainer">
            <div className="agileContainer">
              <h1 className="homeHeaderText">Agile software development</h1>
              <pre
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: homeApiData.agile_software_development,
                }}
              />
            </div>
            <div className="aligeImg">
              <img src={homeApiData.ssp_image}></img>
            </div>
          </div>

          <div className="servIndusMainContainer">
            <div className="servicesContainer">
              <h1 className="homeHeaderText">Digital services</h1>
              <pre
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: homeApiData.digital_services,
                }}
              />
            </div>

            <div className="servicesContainer">
              <h1 className="homeHeaderText">Data science & analytics</h1>
              <pre
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: homeApiData.data_science_and_analyatics,
                }}
              />
            </div>
          </div>

          <div className="agileMainContainer ">
            <div className="agileContainer">
              <h1 className="homeHeaderText">Experience does count</h1>
              <pre
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: homeApiData.experiance_does_count,
                }}
              />
            </div>
            <div className="aligeImg">
              <img src={homeApiData.ppq_image}></img>
            </div>
          </div>

          <div className="mobileContainer" style={{ marginTop: '100px' }}>
            <div
              className="mobileTexBox"
              style={{ marginLeft: '0px', marginRight: '20px' }}
            >
              <h1 className="homeHeaderText">
                Global Delivery & Exceptional Support
              </h1>
              <pre
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: homeApiData.globle_delivary_and_exceptional_support,
                }}
              />
            </div>
            <div className="mobileImg">
              <YouTube videoId="KJJeqr8POnE" className="youtube" />
            </div>
          </div>
          <Link href="/pricing">
            <div className="buildYourQuoteBtn">
              <div style={{ cursor: 'pointer' }}>Build Your Quote</div>
            </div>
          </Link>
        </div>
}
      </div>
    </div>
  );
}

export default IndexPage;
