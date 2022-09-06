import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { tw } from 'twind';

function IndexPage({}) {
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
  return (
    <div>
      <div className={tw(`homeMainContainer mt-20`)}>
        <div className="homeContainer">
          <div className="mobileContainer">
            <div className="mobileImg">
              <img src="cs-4.png"></img>
            </div>
            <div className="mobileTexBox">
              <h1 className="clientDevHeaderText">
                Web & Mobile App Development
              </h1>
              <h3 className="homeTitleText">
                MVP | PRODUCT ENGINEERING | QA & SCALING ON CLOUD
              </h3>
              <p className="clientDevParaText">
                EC Infosolutions offers a range of product development services
                which include strategy, user experience, cloud architecture, web
                development & cross platform mobile app development for iOS,
                Android & Web apps. Our strong engineering team of 55 includes
                AWS Certified Solution Architects & Google Cloud Partners.
              </p>
            </div>
          </div>
          <Link href="/pricing">
            <div className="buildYourQuoteBtn">
              <div style={{ cursor: 'pointer' }}>Get Free Quote</div>
            </div>
          </Link>

          <div>
            {' '}
            <h1
              style={{ textAlign: 'center', margin: '60px 0px' }}
              className="clientDevHeaderText"
            >
              Our Product Development Process
            </h1>
          </div>

          <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
            <div className="agileContainer">
              <h1 className="clientDevHeaderText">Discovery Phase</h1>
              <p className="clientDevParaText">
                In this phase we will have several calls with the client to
                understand their product, technology & end user expectations.
                Based on this exploration and further analysis from our
                engineering teams, we start working on product strategy, system
                architecture, wireframes and timelines that are in sync with our
                clients' expectations.{' '}
              </p>
            </div>
            <div className="aligeImg">
              <img src="app-1.png"></img>
            </div>
          </div>

          <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
            <div className="agileContainer">
              <h1 className="clientDevHeaderText">Engineering Phase</h1>
              <p className="clientDevParaText">
                In this phase our User experience, strategy, and design team
                members work with developers to craft the prototype that will
                produce the web or mobile app required by the client. Whether it
                be mobile app development, web engineering, Industry 4.0, data
                science or other emerging technologies, our AWS certified team
                members are ready. We follow the Agile Development methodology
                and divide our projects into six-week sprints.
              </p>
            </div>
            <div className="aligeImg">
              <img src="app-1-2.png"></img>
            </div>
          </div>

          <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
            <div className="agileContainer">
              <h1 className="clientDevHeaderText">Launch Phase</h1>
              <p className="clientDevParaText">
                In this phase we identify the post launch activities and
                workflows to ensure that the clients' technology assets are
                agile enough to support quick business changes and yet stable
                enough to allow scale of usage patterns. We take pride in
                supporting our clients for years throughout their entire
                technology lifecycles.
              </p>
            </div>
            <div className="aligeImg">
              <img src="app-1-3.png"></img>
            </div>
          </div>

          <div className="mobileContainer" style={{ margin: '30px 0px' }}>
            <div
              className="mobileTexBox"
              style={{ margin: '30px 0px', padding: '0px 50px' }}
            >
              <h1 className="clientDevHeaderText">
                A new approach to Software Engineering
              </h1>
              <p className="clientDevParaText">
                Our product, Freedom Suite includes pre built, boilerplate code
                for dozens of business ready apps such as ecommerce, CRM, order
                management, social networking, etc. This entire library of code
                is available to our clients to help them reduce project delivery
                timelines and technology budgets. Thus our clients can
                effectively leverage our 13 years of experience.
              </p>
            </div>
            <div className="mobileImg">
              <img src="cs-5.png"></img>
            </div>
          </div>

          <div className="AppDevMainContainer">
            <div className="AppDevContainer">
              <h1 className="clientDevHeaderText">Technology & Strategy</h1>
              <p className="clientDevParaText">
                Our consulting is structured around{' '}
              </p>
              <ul className="leaderUl">
                <li>
                  Cutting down your costs and creating a technology framework
                  that will allow you to scale your business operations.
                </li>
                <li>Assessment of your business operational challenges.</li>
                <li>Identification of your risk ratios.</li>
                <li>
                  Addressing issues related to cash flow and unlocking your
                  balance sheet using technology.
                </li>
              </ul>
            </div>

            <div className="AppDevContainer">
              <h1 className="clientDevHeaderText">
                Minimum Viable Product Development
              </h1>
              <ul className="leaderUl">
                <li>
                  Ensure the viability of your product with our MVP development
                  services
                </li>
                <li>
                  Request early adopter feedback at less than 1/3rd of the cost
                  & time required to develop a fully scaled software product
                </li>
                <li>
                  Get a prototype of your product to attract investor attention.
                </li>
              </ul>
            </div>

            <div className="AppDevContainer">
              <h1 className="clientDevHeaderText">Mobile & Desktop Apps</h1>
              <p className="clientDevParaText">
                We provide the following cross-platform mobile application
                development solutions for Android, iOS, and Windows devices:
              </p>
              <ul className="leaderUl">
                <li>Digital Commerce</li>
                <li>Content distribution</li>
                <li>CRM</li>
                <li>ERP</li>
                <li>Point of sale</li>
                <li>Bespoke utility applications</li>
              </ul>
            </div>
          </div>

          <div className="AppDevMainContainer">
            <div className="AppDevContainer">
              <h1 className="clientDevHeaderText">Web & Cloud Apps</h1>
              <p className="clientDevParaText">
                We offer customized software solutions for
              </p>
              <ul className="leaderUl">
                <li>Web portals & eCommerce stores</li>
                <li>Content management software</li>
                <li>Customized web applications </li>
                <li>Order processing</li>
                <li>Inventory management</li>
                <li>Accounting solutions</li>
              </ul>
            </div>

            <div className="AppDevContainer">
              <h1 className="clientDevHeaderText">User Experience Design</h1>
              <ul className="leaderUl">
                <li>Responsive designs for a wide range of users</li>
                <li>Designs that are consistent across different devices</li>
                <li>
                  Include wearable devices, such as the Apple Watch, to mobile
                  devices, such as the iPhone, the high-resolution iMac 5k, etc.
                </li>
              </ul>
            </div>

            <div className="AppDevContainer">
              <h1 className="clientDevHeaderText">Cloud Deployment</h1>
              <p className="clientDevParaText">
                EC Infosolutions is an implementation partner for:
              </p>

              <ul className="leaderUl">
                <li>AWS Cloud</li>
                <li>Google Cloud Platform</li>
                <li>Azure</li>
                <li>Zoho Creator</li>
                <li>Shopify</li>
              </ul>
            </div>
          </div>

          <div className="AppDevMainContainer">
            <div className="AppDevContainer">
              <h1 className="clientDevHeaderText">Analytics & Insights</h1>
              <ul className="leaderUl">
                <li>
                  Measure business KPI by using Analytics tools such as Google
                  Analytics & Glew
                </li>
                <li>
                  Predict business outcomes by incorporating statistical & data
                  science models
                </li>
                <li>Leverage the power of Machine Learning</li>
              </ul>
            </div>

            <div className="AppDevContainer">
              <h1 className="clientDevHeaderText">Internet of Things</h1>
              <ul className="leaderUl">
                <li>
                  Incorporate IoT enabled sensors and relays in your factories
                  and smart devices
                </li>
                <li>
                  Capture PLC data & other device data using AWS IoT Platform
                </li>
                <li>Build tools for smart monitoring & control</li>
              </ul>
            </div>

            <div className="AppDevContainer">
              <h1 className="clientDevHeaderText">Blockchain</h1>
              <p className="clientDevParaText">
                We focus on building the next generation of applications using
                blockchain and smart contract technology & have experience in
                working on both major DLT platforms - IBM Hyperledger &
                Enterprise Ethereum.{' '}
              </p>
            </div>
          </div>

          <div className="AppDevMainContainer">
            <div className="AppDevContainer">
              <h1 className="clientDevHeaderText">AI, ML & Data Science</h1>
              <ul className="leaderUl">
                <li>
                  Use technologies such as automatic speech recognition (ASR),
                </li>
                <li>
                  natural language understanding (NLU) to understand the intent
                  of the text & build the next generation of chat bots,
                  informational bots & productivity bots
                </li>
                <li>Use technology to respond to your users in speech.</li>
              </ul>
            </div>

            <div className="AppDevContainer">
              <h1 className="clientDevHeaderText">Digital Marketing</h1>
              <ul className="leaderUl">
                <li>
                  Solutions to drive traffic to your website, brick-and-mortar
                  stores, etc. to facilitate lead generation.
                </li>
                <li>
                  Consultancy on lead nurturing & how to convert them into
                  paying customers.
                </li>
                <li>Identification & optimization of your sales funnel.</li>
              </ul>
            </div>

            <div className="AppDevContainer">
              <h1 className="clientDevHeaderText">QA & Cyber Security</h1>
              <p className="clientDevParaText">
                We help companies secure their data from external
                vulnerabilities, competitors, and data loss.
              </p>
              <ul className="leaderUl">
                <li>Cybersecurity</li>
                <li>Ethical hacking</li>
                <li>Penetration testing services</li>
                <li>Technical consultancy</li>
              </ul>
            </div>
          </div>

          <div className="mobileContainer" style={{ margin: '30px 0px' }}>
            <div className="mobileImg">
              <img src="Untitled-design.png"></img>
            </div>

            <div className="mobileTexBox">
              <h1 className="clientDevHeaderText">Experience does count.</h1>
              <p className="clientDevParaText">
                Founded in 2007, EC Infosolutions is rich in experience of
                having delivered more than 250 business ready technology
                products. Some of our success stories are:
              </p>
            </div>
          </div>

          <div className="mobileContainer" style={{ margin: '30px 0px' }}>
            <div
              className="mobileTexBox"
              style={{ margin: '30px 0px', padding: '0px 50px' }}
            >
              <h1 className="smallTitileText">DIGITAL COMMERCE APPS</h1>
              <h1 className="clientDevHeaderText">Social selling platform</h1>
              <p className="clientDevParaText">
                We were hired to build a direct selling & social selling
                platform that allows affiliates to place orders on behalf of
                customers, have their own replicated website & tonnes of other
                resources.
              </p>

              <h1 className="clientDevHeaderText">
                Hyperlocal e-commerce for farm inputs suppliers
              </h1>
              <p className="clientDevParaText">
                We were hired to build a hyperlocal ecommerce marketplace with
                integration with their offline inventory and point of sale
                systems.
              </p>
              <h1 className="clientDevHeaderText">
                App for managing ad campaigns
              </h1>
              <p className="clientDevParaText">
                We were hired to build enhancements for a marketing automation
                product that integrated into wordpress and allowed ad review for
                campaigns places on Google & Facebook.
              </p>
              <h1 className="clientDevHeaderText">
                Hyperlocal marketplace for organic food brands
              </h1>
              <p className="clientDevParaText">
                We were hired to build a hyperlocal, omnicommerce marketplace
                for food brands with integrated inventory management &
                programmatic campaign management.
              </p>
            </div>
            <div className="mobileImg">
              <img src="1-1.png"></img>
            </div>
          </div>

          <div className="mobileContainer" style={{ margin: '30px 0px' }}>
            <div className="mobileImg">
              <img src="2.png"></img>
            </div>

            <div className="mobileTexBox">
              <h1 className="smallTitileText">DIGITAL MOBILITY APPS</h1>
              <h1 className="clientDevHeaderText">
                Mobile app for oncology professionals
              </h1>
              <p className="clientDevParaText">
                We were hired to build an informational app for oncology medical
                professionals.This app was built for iOS with a web based
                content management console.
              </p>
              <h1 className="clientDevHeaderText">
                Mobile app for monetisation and distribution of podcasts, videos
                & e-learning content
              </h1>
              <p className="clientDevParaText">
                We were hired to build several podcast & video distribution apps
                to allow users to download or stream audio & video files in the
                form of elearning content, podcasts & audio books. These apps
                were built for Android, iOS with a web based content management
                console.
              </p>
              <h1 className="clientDevHeaderText">
                App for managing networking & knowledge sharing corporate events
              </h1>
              <p className="clientDevParaText">
                We were hired to build several event apps to allow event
                attendees to register, view the session & workshop details, view
                live newsfeed and also share e-visiting card information via QR
                codes. These apps were built for Android, iOS with a web based
                content management console.
              </p>
              <h1 className="clientDevHeaderText">
                App for teaching mindful meditation{' '}
              </h1>
              <p className="clientDevParaText">
                We were hired to build several meditation apps with user
                feedback and analytics built in. These apps were built for
                Android, iOS with a web based content management console.
              </p>
            </div>
          </div>

          <div className="mobileContainer" style={{ margin: '30px 0px' }}>
            <div
              className="mobileTexBox"
              style={{ margin: '30px 0px', padding: '0px 50px' }}
            >
              <h1 className="smallTitileText">
                DIGITAL OPERATIONS MANAGEMENT APPS
              </h1>
              <h1 className="clientDevHeaderText">
                App for sales automation management
              </h1>
              <p className="clientDevParaText">
                We were hired to deploy a sales automation software with modules
                such as quotation management, invoice management, leads &
                followup management for custom workflows.
              </p>
              <h1 className="clientDevHeaderText">
                App for customer complaint management
              </h1>
              <p className="clientDevParaText">
                We were hired to deploy a customer complaint management solution
                with advanced rules for agent management & issue escalation.
              </p>
              <h1 className="clientDevHeaderText">
                Self hosted video conferencing platform
              </h1>
              <p className="clientDevParaText">
                We were hired to deploy a self hosted video conferencing
                platform that could be used by users across varying bandwidths
                and that can be deep linked to other apps.
              </p>
              <h1 className="clientDevHeaderText">eLearning platform</h1>
              <p className="clientDevParaText">
                We were hired to deploy a complete elearning platform with
                document management, live sessions, quiz management, recorded
                video sessions & management of teachers and students.
              </p>
            </div>
            <div className="mobileImg">
              <img src="Copy-of-cs.png"></img>
            </div>
          </div>

          <div className="mobileContainer" style={{ margin: '30px 0px' }}>
            <div className="mobileImg">
              <img src="Untitled-design.png"></img>
            </div>

            <div className="mobileTexBox">
              <h1 className="smallTitileText">INDUSTRY 4.0 APPS</h1>
              <h1 className="clientDevHeaderText">
                Project management app for engineering, procurement &
                construction companies
              </h1>
              <p className="clientDevParaText">
                We were hired to build an a web app that would be used by over
                100 construction managers & engineers to manage construction
                activities of over 70 large scale infrastructure projects in
                real time.
              </p>
              <h1 className="clientDevHeaderText">
                App for scaling design simulations for the aerospace industry
              </h1>
              <p className="clientDevParaText">
                We were hired to build an a web app that would allow automated
                scaling of EC2 instances to initiate thousands of design
                simlulations in real time with out manual intervention.
              </p>
              <h1 className="clientDevHeaderText">
                App for HVAC cooling tower designers
              </h1>
              <p className="clientDevParaText">
                We were hired to build an engineering design tool for cooling
                tower design engineers. The final product included 7 different
                modules that allowed building models for all sorts of cooling
                towers.
              </p>
            </div>
          </div>

          <div className="mobileContainer" style={{ margin: '30px 0px' }}>
            <div
              className="mobileTexBox"
              style={{ margin: '30px 0px', padding: '0px 50px' }}
            >
              <h1 className="smallTitileText">ERP IMPLEMENTATIONS</h1>
              <h1 className="clientDevHeaderText">ERP for manufacturers</h1>
              <p className="clientDevParaText">
                We were hired to customise, implement & deploy a cloud based ERP
                solution for a packaging manufacturer. The modules included
                Purchase, Sales, Accounting, HR & Manufacturing.
              </p>
              <h1 className="clientDevHeaderText">
                ERP for agribusiness management
              </h1>
              <p className="clientDevParaText">
                We were hired to build custom web interfaces and build mobility
                solutions for a full fledged ERP system for all sorts of agri
                businesses.
              </p>
              <h1 className="clientDevHeaderText">ERP for a language school</h1>
              <p className="clientDevParaText">
                We were hired to build automation enhancements for a full
                fledged accounting & ERP system for a language school.
              </p>
            </div>
            <div className="mobileImg">
              <img src="4.png"></img>
            </div>
          </div>

          <div className="mobileContainer" style={{ margin: '30px 0px' }}>
            <div className="mobileImg">
              <img src="5.png"></img>
            </div>

            <div className="mobileTexBox">
              <h1 className="smallTitileText">IOT & SMART DEVICES</h1>
              <h1 className="clientDevHeaderText">
                App for IoT smart metering
              </h1>
              <p className="clientDevParaText">
                We were hired to build apps for data collection from smart
                meters, data visualisation on custom dashboards & analysis of
                smart meter data for actionable & historical analysis.
              </p>
              <h1 className="clientDevHeaderText">
                App for IoT water dispensers
              </h1>
              <p className="clientDevParaText">
                We were hired to build a mobile app to pay and initiate water
                dispensing at dispensers which are integrated with single board
                computers and cloud connectivity.
              </p>
              <h1 className="clientDevHeaderText">App to track and trace </h1>
              <p className="clientDevParaText">
                We built BioTrace for tracing agricultural products using a
                technologies such as RFID & distributed ledger. Built on
                blockchain technology.
              </p>
            </div>
          </div>

          <div className="mobileContainer" style={{ margin: '30px 0px' }}>
            <div
              className="mobileTexBox"
              style={{ margin: '30px 0px', padding: '0px 50px' }}
            >
              <h1 className="smallTitileText">FINTECH APPS</h1>
              <h1 className="clientDevHeaderText">Fiat exchange</h1>
              <p className="clientDevParaText">
                We were hired to build a secure online cryptocurrency exchange
                service that works with FIAT currencies such as USD, SGD, INR,
                etc.
              </p>
              <h1 className="clientDevHeaderText">
                ERC 20 tokens & smart contract platform
              </h1>
              <p className="clientDevParaText">
                We were hired to build a tool to allow clients to create their
                own token or cryptocurrency on the ethereum platform.
              </p>
              <h1 className="clientDevHeaderText">
                Trade finance letter of credit stack
              </h1>
              <p className="clientDevParaText">
                We were hired to build a technology solution that would provide
                a trustless escrow system & can be used by buyers and sellers of
                any trade network. It is based on the Hyperledger platform.
              </p>
              <h1 className="clientDevHeaderText">App for micro loans</h1>
              <p className="clientDevParaText">
                We were hired to build an app to facilitate peer to peer loans
                from family or friends with adjustable interest costs and
                durations.{' '}
              </p>
            </div>
            <div className="mobileImg">
              <img src="Copy-of-cs.png"></img>
            </div>
          </div>

          <div className="mobileContainer" style={{ margin: '30px 0px' }}>
            <div className="mobileImg">
              <img src="6.png"></img>
            </div>
            <div className="mobileTexBox">
              <h1 className="smallTitileText">
                SYSTEM INTEGRATION & INTERFACING
              </h1>
              <h1 className="clientDevHeaderText">
                OpenCart + OrbiPay + Agvance ERP + BlueDart
              </h1>
              <p className="clientDevParaText">
                We were hired to build custom payment gateways, custom shipping
                web hooks and integrated inventory systems of ERP software with
                OpenCart.
              </p>
              <h1 className="clientDevHeaderText">CIN7 + Freedom eCommerce</h1>
              <p className="clientDevParaText">
                We were hired to build an integration of a cloud based warehouse
                management system - CIN7 with our Social Selling Platform.
              </p>
              <h1 className="clientDevHeaderText">
                Google Tag Manager + Magento
              </h1>
              <p className="clientDevParaText">
                We were hired to integrated advanced analytical tools to allow
                tracking of return on ad spend in ecommerce stores.
              </p>
            </div>
          </div>

          <div className="mobileContainer" style={{ marginTop: '100px' }}>
            <div
              className="mobileTexBox"
              style={{ marginLeft: '0px', marginRight: '20px' }}
            >
              <h1 className="clientDevHeaderText">
                Global Delivery & Exceptional Support
              </h1>
              <h3 className="homeTitleText">
                Our global delivery model allows you to
              </h3>
              <p className="clientDevParaText">
                1. Manage growth without worrying about hiring suitable talent
              </p>
              <p className="clientDevParaText">
                2. Cost-efficiency while gaining access to world-class engineers
              </p>
              <p className="clientDevParaText">
                3. Software engineering services at at reduced costs
              </p>
              <p className="clientDevParaText">
                Additionally you can have the option to custom build your
                dedicated engineering team. Our support channels are phone &
                email support with a 1-2 hours response time.
              </p>
            </div>
            <div className="mobileImg">
              <YouTube videoId="KJJeqr8POnE" className="youtube" />
            </div>
          </div>
          <Link href="/pricing">
            <div className="buildYourQuoteBtn">
              <div style={{ cursor: 'pointer' }}>Get Free Quote</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
