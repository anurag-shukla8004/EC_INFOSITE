import React from 'react'
import YouTube from "react-youtube";
import { tw } from 'twind';


function IndexPage({}) {



  return (
    <div>
        <div className={tw(` homeMainContainer mt-20 `)}>
    <div className='homeContainer'>
      <div className='mobileContainer'>
        <div className='mobileImg'>
          <img src='home1.png'></img>
        </div>
        <div className='mobileTexBox'>
         <h1 className={tw(`ecBlueColor font-semibold text-3xl`)}>Web & Mobile App Development</h1>
         <h3 className='homeTitleText'>MVP | PRODUCT ENGINEERING | QA & SCALING ON CLOUD</h3>
         <p className='homeParaText'>EC Infosolutions offers a range of product development services which include strategy, user experience, cloud architecture, web development & cross platform mobile app development for iOS, Android & Web apps. Our strong engineering team of 55 includes AWS Certified Solution Architects & Google Cloud Partners.</p>
        </div>
      </div>
      <div className='buildYourQuoteBtn'><div>Build Your Quote</div></div>

      <div className='newApprochContainer'>
               <div className='newsApproch'>
            <h1 className='homeHeaderText'>A new approach to Software Engineering</h1>
         <p className='homeParaText'>Our platform, Freedom Suite includes pre built, boilerplate code for dozens of business ready apps such as e-commerce, CRM, order management, social networking, etc. This entire library of code is available to our clients to help them reduce project delivery timelines and technology budgets. Thus our clients can effectively leverage our 15 years of experience.</p>
            </div>
      
            </div>
              <div className='servIndusMainContainer'>
          <div className='servicesContainer'>
            <h1 className='homeHeaderText'>A new approach to Software Engineering</h1>
            <p className='homeParaText'>We provide 360 degree services for converting your product ideas into production ready apps such as:</p>
            <ul className={tw(`list-disc p-5`)}>
             <li>Strategy</li>
             <li>MVP development</li>
             <li>Mobile & web apps</li>
             <li>Cloud deployment</li>
             <li>QA & cyber security</li>
            </ul>
            </div>

            <div className='servicesContainer'>
            <h1 className='homeHeaderText'>Industry 4.0 & IoT</h1>
            <p className='homeParaText'>Build the next generation of apps</p>
            <ul className={tw(`list-disc p-5`)}>
             <li>Use IoT enabled sensors and relays in your factories and smart devices</li>
             <li>Capture PLC / SBC & other device data using AWS IoT Platform</li>
             <li>Build tools for smart device monitoring & control</li>
            </ul>
            </div>
              </div>
           

           <div className='agileMainContainer'>
          <div className='agileContainer'>
          <h1 className='homeHeaderText'>Agile software development</h1>
          <p className='homeParaText'>Being agile allows us to focus on features & business value over everything else. In addition to this, you can be assured of predictable timelines, budget & complete transparency.</p>
          </div>
          <div className='aligeImg'>
            <img src='home2.png'></img>
          </div>
           </div>


           <div className='servIndusMainContainer'>
          <div className='servicesContainer'>
            <h1 className='homeHeaderText'>Digital services</h1>
            <p className='homeParaText'>We provide solutions to drive traffic to your business. Our consulting services include:</p>
            <ul className={tw(`list-disc p-5`)}>
             <li>Sales funnel strategy</li>
             <li>UI & UX design</li>
             <li>Digital marketing</li>
             <li>Website management</li>
             <li>Conversion rate optimisation</li>
            </ul>
            </div>

            <div className='servicesContainer'>
            <h1 className='homeHeaderText'>Data science & analytics</h1>
            <ul>
             <li>Predict business outcomes by using statistical & data science models</li>
             <li>Use natural language understanding (NLU) to understand the intent of the text & build the next generation of AI bots</li>
            </ul>
            </div>
              </div>

              <div className='agileMainContainer '>
          <div className='agileContainer'>
          <h1 className='homeHeaderText'>Experience does count</h1>
          <p className='homeParaText'>Founded in 2007, EC Infosolutions is rich in experience of having delivered more than 250 technology products in 18+ countries. What's more, our digital products are being used by over 100,000+ users across the world.</p>
          </div>
          <div className='aligeImg'>
            <img src='home3.png'></img>
          </div>
           </div>

           <div className='mobileContainer' style={{marginTop:'100px'}}>
        <div className='mobileTexBox' style={{marginLeft:'0px', marginRight:'20px'}}>
         <h1 className='homeHeaderText'>Global Delivery & Exceptional Support</h1>
         <h3 className='homeTitleText'>Our global delivery model allows you to</h3>
         <p className='homeParaText'>1. Manage growth without worrying about hiring suitable talent</p>
         <p className='homeParaText'>2. Cost-efficiency while gaining access to world-class engineers</p>
         <p className='homeParaText'>3. Software engineering services at at reduced costs</p>
         <p className='homeParaText'>Additionally you can have the option to custom build your dedicated engineering team. Our support channels are phone & email support with a 1-2 hours response time.</p>
        </div>
        <div className='mobileImg' >
          {/* <img src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg'></img> */}
          <YouTube videoId="KJJeqr8POnE" className='youtube' 
            // opts={opts} onReady={this._onReady} 
            />
        </div>
      </div>
      <div className='buildYourQuoteBtn'><div>Build Your Quote</div></div>
        
    </div>
  </div>
    </div>
  )
}

export default IndexPage

