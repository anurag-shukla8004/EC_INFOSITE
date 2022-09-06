import Link from 'next/link';
import React from 'react';
import YouTube from 'react-youtube';

function IndexPage({}) {
  return (
    <div>
      <div className="homeMainContainer">
        <div className="homeContainer">
          <div className="mobileContainer">
            <div className="VocalTexBox" style={{ width: '100%' }}>
              <h1 className="clientDevHeaderText">Agritech solutions</h1>
              <h3 className="homeTitleText">
                Digital solutions for your agribusiness{' '}
              </h3>
              <br></br>
              <p className="clientDevParaText">
                {' '}
                <b>LabCore: </b>Operations management software for data
                management of growers, dealers, orders, samples & GIS data.
              </p>
              <br></br>
              <p className="clientDevParaText">
                <b>Freedom CRM for Agribusinesses: </b>Sales automation software
                to manage your complete presales & sales processes.
              </p>
              <br></br>
              <p className="clientDevParaText">
                <b>Data Analytics: </b>Custom machine learning solutions for
                bringing predictive analytics to your farming & agribusiness.
              </p>
              <br></br>
              <p className="clientDevParaText">
                <b>Digital Marketing: </b> Leverage our digital marketing
                services to market your products & services to growers.
              </p>
              <br></br>
            </div>
          </div>

          <Link href="/pricing">
            <div style={{ cursor: 'pointer' }} className="buildYourQuoteBtn">
              <div>Get Free Quote</div>
            </div>
          </Link>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Dealer & Grower management</h1>
              <p className="labCoreParaText">
                Many testing labs are frequently represented by dealers who have
                their own client lists and service requirements. Associates is a
                comprehensive contact management system that allows you and your
                dealers to maintain information about clients and their farms,
                fields, and facilities in a secure manner. You can record
                geospatial information about the location of fields as well as
                display test results and recommendations on a regular grid or
                across different management zones. Integration with Google Maps
                also allows your sampling crew to get exact directions and
                enables your clients to view operations on their fields or
                facilities in real time.<br></br> <br></br>Your agri products
                and services can be registered in LabCore along with
                dealer-specific discount codes, product-specific laboratory
                protocols, and the analytical parameters. You can offer these
                products individually or as packages with special pricing. Also,
                your products can be priced per test, or services can be priced
                per facility or by the acre.
              </p>
            </div>
            <div className="mobileImg">
              <img src="labCore1.png"></img>
            </div>
          </div>

          <div className="OverviewGoals">
            <div className="mobileImg">
              <img src="labCore2.png"></img>
            </div>
            <div>
              <h1 className="leaderHeaderText">
                Soil & water sample management
              </h1>
              <p className="labCoreParaText">
                Samples App is a simplified Lab Information Management System
                (LIMS) system that provides sample registration, update
                tracking, chain of custody logs, and technician-specific views
                of your analytical pipeline. You can now update your clients in
                real time when their samples are collected, processed, and when
                their reports & recommendations are generated. The samples app
                is designed to be flexible and powerful so that you can
                progressively eliminate the need for a paper trail through your
                lab. Built-in order-specific sample statistics allow you to
                identify quality control issues at a glance. As LabCore is
                designed for analytical testing laboratories, there is tight
                integration and seamless communication between all the apps.
              </p>
            </div>
          </div>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Field history</h1>
              <p className="labCoreParaText">
                Keeping good records and remaining abreast with the latest agri
                tech is desirable for any efficient farm operation. Our Field
                History module enables simple data entry to record when and what
                services were provided on any given field. Field History
                provides a calendar view and a list of customizable
                ‘drag-and-drop’ events enable your dealers as well as clients to
                record when fields were planted, what chemicals were applied,
                when they were harvested, timings, amounts of chemical or
                irrigation applications, crop scouting activities, and much
                more. In addition, this app will be integrated with a
                weather-monitoring service that will automatically record
                weather events on a field-specific basis. This will enable the
                easy estimation of yields, the determination of the best time
                for applying chemicals, and the documentation of weather-related
                damage to support insurance claims.
              </p>
            </div>
            <div className="mobileImg">
              <img src="labCore3.png"></img>
            </div>
          </div>

          <div className="OverviewGoals">
            <div className="mobileImg">
              <img src="labCore4.png"></img>
            </div>
            <div>
              <h1 className="leaderHeaderText">
                GIS visualization & precision management
              </h1>
              <p className="labCoreParaText">
                The GIS Visualization module allows the grower to upload
                planting, fertilization, soil test, and yield maps. It also
                provides a simple way to visualize how your soils and management
                practices affect profitability. The Precision Management module
                allows agronomists and their clients to integrate several years
                of yield and soil test data to identify different management
                zones within a field. We use advanced image analysis and machine
                learning technologies to help agronomists identify regions that
                would benefit from profit-boosting investments in drainage,
                conservation tillage, or cover crops.
              </p>
            </div>
          </div>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Inventory management</h1>
              <p className="leaderParaText">
                LabCore also includes tools such as inventory management, a
                meeting minutes application, and a full-featured blog
                application so that you cam use the same platform to simplify
                operations for your business. You can fine-tune access
                privileges for your staff and dealers so that you can
                confidently utilize the latest web technologies to grow your
                business.
              </p>
            </div>
            <div>
              <h1 className="leaderHeaderText">Document management</h1>
              <p className="leaderParaText">
                Articles is a full-featured blog module that allows you to
                create content for your business. You can produce newsletters to
                communicate with clients, as well as create internal protocol
                documents for your technicians, onboarding documents for your
                dealers, and tutorials for your staff. You can control access
                and privacy on every article and delegate authorship
                responsibility among your staff.
              </p>
            </div>
          </div>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">
                Integration with FertiSaver-N
              </h1>
              <p className="leaderParaText">
                Our FertiSaver-N system comprises hardware and web-based
                software that enables soil labs to conduct an organic nitrogen
                soil test and use the results to produce a nitrogen application
                program that provides geospatial recommendations on corn seeding
                rates, nitrogen application in single or split applications, as
                well as associated lime recommendations to allow you to obtain
                the most profitable yields from your fields. LabCore provides a
                simple one-click interface to download data from the
                FertiSaver-N system to produce recommendations within LabCore.
              </p>
            </div>
            <div>
              <h1 className="leaderHeaderText">more features</h1>
              <p className="leaderParaText">
                We offer many more features such as
              </p>
              <ul className="leaderUl">
                <li>crop cycle management </li>
                <li>field location mapping</li>
                <li>disease management SOPs</li>
                <li>fertilizer record management</li>
                <li>tests & results management by location & mobile apps.</li>
              </ul>
            </div>
          </div>

          <div className="mobileContainer" style={{ margin: '30px 0px' }}>
            <div className="mobileTexBox" style={{ height: 'auto' }}>
              <h1 className="clientDevHeaderText">
                Freedom CRM for Agribusinesses
              </h1>
              <p className="clientDevParaText">
                Sales automation software to manage your complete presales &
                sales processes.
              </p>
            </div>
            <div className="mobileImg">
              <img src="Untitled-design.png"></img>
            </div>
          </div>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Presales process management</h1>
              <ul className="leaderUl">
                <li>
                  Automate your entire sales process with Freedom CRM Sales
                  Automation.{' '}
                </li>
                <li>
                  Automate lead generation, lead nurturing, information sharing,
                  order processing, order tracking, inventory management, and
                  everything in between.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="leaderHeaderText">Sales process management</h1>
              <ul className="leaderUl">
                <li>
                  Speed up your sales cycle by creating quotations with the
                  click of a button.
                </li>
                <li>
                  Convert quotations to orders instantly with quote & order
                  management.
                </li>
              </ul>
            </div>
          </div>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Marketing automation</h1>
              <ul className="leaderUl">
                <li>
                  Helps in lead generation & nurturing by creating effective &
                  engaging landing pages.
                </li>
                <li>
                  Automates repetitive content such as social media posts, email
                  marketing, and ad campaigns.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="leaderHeaderText">eCommerce</h1>

              <p className="leaderParaText">
                Selling exclusive merchandise? Easily setup a mobile ready
                ecommerce storefront for your farm products. Users can buy & pay
                for your exclusive goodies online.
              </p>
            </div>
          </div>

          <div className="mobileContainer" style={{ marginTop: '100px' }}>
            <div className="mobileImg">
              <YouTube videoId="KJJeqr8POnE" className="youtube" />
            </div>
            <div
              className="mobileTexBox"
              style={{ marginLeft: '0px', marginLeft: '20px' }}
            >
              <h1 className="clientDevHeaderText">
                Global Delivery & Exceptional Support
              </h1>
              <h3 className="homeTitleText">
                Our apps were developed to be powerful and flexible for a
                majority of enterprises like yours, we recognize the need for
                custom integration. At EC, we can help you deploy a fully
                customized version of LabCore either on popular Cloud services
                or on your own premises. We can also build custom software to
                integrate your specialized equipment with our system, so that
                your technicians do not have to spend time transferring data
                between computers. Our apps have been built with future
                integration in mind. For example, we will be able to help you
                link the Orders app with your accounting system to automate
                routine billing and accounting right from LabCore.
              </h3>
              <p className="clientDevParaText">
                With a team of dedicated software experts, we make sure you're
                supported
              </p>
              <p className="clientDevParaText">
                every step of the way. Our support channels are phone & email
                support. Our
              </p>
              <p className="clientDevParaText">
                response times are between 1-2 hours.
              </p>
            </div>
          </div>

          <div className="questionContainer">
            <div>
              <h2 className="questionTitle">
                What technologies are used in agribusiness?
              </h2>
              <p className="questonPara">
                Here are a few agribusiness/ farming/farm
                management/agricultural management technologies offered by EC
                Infosolutions:
              </p>
              <ul className="questonPara" style={{ listStyle: 'disc' }}>
                <li>
                  LabCore: Agricultural/farming operations management software
                  for data management of growers, dealers, orders, samples & GIS
                  data.
                </li>
                <li>
                  Freedom CRM for Agribusinesses: Sales automation software to
                  manage your complete agriculture marketing - presales & sales
                  processes.
                </li>
                <li>
                  Data Analytics: Custom machine learning solutions for bringing
                  predictive analytics for agricultural development and farm
                  management.
                </li>
                <li>
                  Digital Marketing: Leverage our digital marketing services to
                  market your products & services to growers.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="questionTitle">What are farming technologies?</h2>
              <p className="questonPara">
                Numerous farming technologies have been emerging off-late. Some
                of the most popular ones are:
              </p>
              <ul className="questonPara" style={{ listStyle: 'disc' }}>
                <li>Soil & water management</li>
                <li>Weather tracking</li>
                <li>RFID technology</li>
                <li>Aerial imagery, for instance drone imagery</li>
                <li>GIS & GPS</li>
                <li>Pervasive automation</li>
                <li>Inventory management</li>
                <li>Field history</li>
                <li>Precision management</li>
              </ul>
              <p className="questonPara">
                These are some of the agribusiness - farming technologies that
                have made farming operations more cost & time efficient.
              </p>
            </div>
            <div>
              <h2 className="questionTitle">What is agri technology</h2>
              <p className="questonPara">
                Agri technology, or agricultural technology, is a technology
                that enables the efficient control of the harvesting as well as
                growth of agricultural produce as well as animal products on a
                farm or group of farms. At EC Infosolutions, we offer the
                following agri technologies:
              </p>
              <ul className="questonPara" style={{ listStyle: 'disc' }}>
                <li>
                  LabCore: Agricultural/farming operations management software
                  for data management of growers, dealers, orders, samples & GIS
                  data.
                </li>
                <li>
                  Freedom CRM for Agribusinesses: Sales automation software to
                  manage your complete agriculture marketing - presales & sales
                  processes.
                </li>
                <li>
                  Data Analytics: Custom machine learning solutions for bringing
                  predictive analytics for agricultural development and farm
                  management.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="questionTitle">How to do inventory management?</h2>
              <p className="questonPara">
                Check out our LabCore app for inventory management. It also
                includes tools such as a meeting minutes application,
                full-featured blog application and tools to simplify farming
                operations. You can fine-tune access privileges for your staff
                and dealers so that you can confidently utilize the latest web
                technologies to grow your business. To know more about inventory
                management with LabCore, write to us at
                hello@ecinfosolutions.com
              </p>
            </div>
            <div>
              <h2 className="questionTitle">
                How to do fertilizer record management?
              </h2>
              <p className="questonPara">
                LabCore provides a “Field History” module that allows you to
                maintain sound records of your fields, which include when fields
                were planted, which fertilizers were applied, when they were
                harvested, timings, crop scouting, and more.
              </p>
            </div>
            <div>
              <h2 className="questionTitle">
                How to manage pre sales process in agribusiness?
              </h2>
              <p className="questonPara">
                Check out Freedom CRM for Agribusinesses - Sales automation
                software to manage your complete presales & sales processes.
                Request a free quote from hello@ecinfosolutions.com
              </p>
            </div>
            <div>
              <h2 className="questionTitle">
                How to manage crop cycle in agriculture?
              </h2>
              <p className="questonPara">
                LabCore’s Field History functionality enables farmers to
                efficiently manage their crop cycle. Check it out here -
                Agribusiness
              </p>
              <ul className="questonPara" style={{ listStyle: 'disc' }}>
                <li>Dealer & grower management</li>
                <li>Field history</li>
                <li>GIS visualization & precision management</li>
                <li>agribusiness - Crop cycle management</li>
                <li>Field location mapping</li>
                <li>Disease management SOPs</li>
                <li>IFertilizer record management</li>
                <li>Tests & results management by location & mobile apps.</li>
              </ul>
              <p className="questonPara">
                These and more. Get in touch with us at
                hello@ecinfosolutions.com to know more about LabCore and how we
                can customize it to your business needs.
              </p>
            </div>
            <div>
              <h2 className="questionTitle">
                What is the latest technology in agriculture?
              </h2>
              <p className="questonPara">
                LabCore has everything you need for your agribusiness. It has a
                comprehensive suit of functionalities that facilitate farm
                management, sustainable farming practices, agricultural
                marketing and the establishment & management of integrated
                farming systems, to name a few. To know more about using LabCore
                for your agribusiness, write to us at hello@ecinfosolutions.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
