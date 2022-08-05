import React from 'react'
import YouTube from "react-youtube";
import Link from 'next/link'


function IndexPage({}) {
  return (
    <div>
        <div className='homeMainContainer'>
    <div className='homeContainer'>
           <div className='mobileContainer' >
        <div className="VocalTexBox" style={{width:'100%'}}><h1 className="clientDevHeaderText">Agritech solutions</h1>
      <h3 className="homeTitleText">Digital solutions for your agribusiness </h3><br></br>
      <p className="clientDevParaText"> <b>LabCore: </b>Operations management software for data management of growers, dealers, orders, samples & GIS data.</p><br></br>
      <p className="clientDevParaText"><b>Freedom CRM for Agribusinesses: </b>Sales automation software to manage your complete presales & sales processes.</p><br></br>
      <p className="clientDevParaText"><b>Data Analytics: </b>Custom machine learning solutions for bringing predictive analytics to your farming & agribusiness.</p><br></br>
      <p className="clientDevParaText"><b>Digital Marketing: </b> Leverage our digital marketing services to market your products & services to growers.</p><br></br>
      </div>

      
      
      </div>

      <Link href='/pricing'><div style={{cursor:'pointer'}} className='buildYourQuoteBtn'><div>Get Free Quote</div></div></Link>


      <div className='OverviewGoals'>
        <div> 
          <h1 className='leaderHeaderText'>Dealer & Grower management</h1>
         <p className='labCoreParaText'>Many testing labs are frequently represented by dealers who have their own client lists and service requirements. Associates is a comprehensive contact management system that allows you and your dealers to maintain information about clients and their farms, fields, and facilities in a secure manner. You can record geospatial information about the location of fields as well as display test results and recommendations on a regular grid or across different management zones. Integration with Google Maps also allows your sampling crew to get exact directions and enables your clients to view operations on their fields or facilities in real time.<br></br> <br></br>Your agri products and services can be registered in LabCore along with dealer-specific discount codes, product-specific laboratory protocols, and the analytical parameters. You can offer these products individually or as packages with special pricing. Also, your products can be priced per test, or services can be priced per facility or by the acre.</p>
         </div>
         <div className='mobileImg'>
<img src='labCore1.png'></img>
</div>
      </div>


      <div className='OverviewGoals'>
      <div className='mobileImg'>
<img src='labCore2.png'></img>
</div>
        <div> 
          <h1 className='leaderHeaderText'>Soil & water sample management</h1>
         <p className='labCoreParaText'>Samples App is a simplified Lab Information Management System (LIMS) system that provides sample registration, update tracking, chain of custody logs, and technician-specific views of your analytical pipeline. You can now update your clients in real time when their samples are collected, processed, and when their reports & recommendations are generated. The samples app is designed to be flexible and powerful so that you can progressively eliminate the need for a paper trail through your lab. Built-in order-specific sample statistics allow you to identify quality control issues at a glance. As LabCore is designed for analytical testing laboratories, there is tight integration and seamless communication between all the apps.</p>
         </div>
      </div>

      <div className='OverviewGoals'>
        <div> 
          <h1 className='leaderHeaderText'>Field history</h1>
         <p className='labCoreParaText'>Keeping good records and remaining abreast with the latest agri tech is desirable for any efficient farm operation. Our Field History module enables simple data entry to record when and what services were provided on any given field. Field History provides a calendar view and a list of customizable ‘drag-and-drop’ events enable your dealers as well as clients to record when fields were planted, what chemicals were applied, when they were harvested, timings, amounts of chemical or irrigation applications, crop scouting activities, and much more. In addition, this app will be integrated with a weather-monitoring service that will automatically record weather events on a field-specific basis. This will enable the easy estimation of yields, the determination of the best time for applying chemicals, and the documentation of weather-related damage to support insurance claims.</p>
         </div>
         <div className='mobileImg'>
<img src='labCore3.png'></img>
</div>
      </div>

      <div className='OverviewGoals'>
      <div className='mobileImg'>
<img src='labCore4.png'></img>
</div>
        <div> 
          <h1 className='leaderHeaderText'>GIS visualization & precision management</h1>
         <p className='labCoreParaText'>The GIS Visualization module allows the grower to upload planting, fertilization, soil test, and yield maps. It also provides a simple way to visualize how your soils and management practices affect profitability.

The Precision Management module allows agronomists and their clients to integrate several years of yield and soil test data to identify different management zones within a field. We use advanced image analysis and machine learning technologies to help agronomists identify regions that would benefit from profit-boosting investments in drainage, conservation tillage, or cover crops.</p>
         </div>
      </div>


      <div className='OverviewGoals'>
        <div> 
          <h1 className='leaderHeaderText'>Inventory management</h1>
         <p className='leaderParaText'>LabCore also includes tools such as inventory management, a meeting minutes application, and a full-featured blog application so that you cam use the same platform to simplify operations for your business. You can fine-tune access privileges for your staff and dealers so that you can confidently utilize the latest web technologies to grow your business.</p>
         </div>
         <div> 
           <h1 className='leaderHeaderText'>Document management</h1>
           <p className='leaderParaText'>Articles is a full-featured blog module that allows you to create content for your business. You can produce newsletters to communicate with clients, as well as create internal protocol documents for your technicians, onboarding documents for your dealers, and tutorials for your staff. You can control access and privacy on every article and delegate authorship responsibility among your staff.</p>
         
         </div>
      </div>


      <div className='OverviewGoals'>
        <div> 
          <h1 className='leaderHeaderText'>Integration with FertiSaver-N</h1>
          <p className='leaderParaText'>Our FertiSaver-N system comprises hardware and web-based software that enables soil labs to conduct an organic nitrogen soil test and use the results to produce a nitrogen application program that provides geospatial recommendations on corn seeding rates, nitrogen application in single or split applications, as well as associated lime recommendations to allow you to obtain the most profitable yields from your fields. LabCore provides a simple one-click interface to download data from the FertiSaver-N system to produce recommendations within LabCore.</p>
         
         </div>
         <div> 
           <h1 className='leaderHeaderText'>more features</h1>
           <p className='leaderParaText'>We offer many more features such as</p>
           <ul className='leaderUl'>
             <li>crop cycle management </li>
             <li>field location mapping</li>
             <li>disease management SOPs</li>
             <li>fertilizer record management</li>
             <li>tests & results management by location & mobile apps.</li>

           
            </ul>
         </div>
      </div>
     

      
      
      <div className='mobileContainer' style={{margin:'30px 0px'}} >
<div className='mobileTexBox' style={{height:'auto'}}>
<h1 className='clientDevHeaderText'>Freedom CRM for Agribusinesses</h1>
<p className='clientDevParaText'>Sales automation software to manage your complete presales & sales processes.</p>
</div> 
<div className='mobileImg'>
<img src='Untitled-design.png'></img>
</div>
</div>

<div className='OverviewGoals'>
        <div> 
          <h1 className='leaderHeaderText'>Presales process management</h1>
          <ul className='leaderUl'>
             <li>Automate your entire sales process with Freedom CRM Sales Automation. </li>
             <li>Automate lead generation, lead nurturing, information sharing, order processing, order tracking, inventory management, and everything in between.</li> 
            </ul>
         
         </div>
         <div> 
           <h1 className='leaderHeaderText'>Sales process management</h1>
           <ul className='leaderUl'>
             <li>Speed up your sales cycle by creating quotations with the click of a button.
</li>
             <li>Convert quotations to orders instantly with quote & order management.</li>

           
            </ul>
         </div>
      </div>


      <div className='OverviewGoals'>
         <div> 
           <h1 className='leaderHeaderText'>Marketing automation</h1>
           <ul className='leaderUl'>
             <li>Helps in lead generation & nurturing by creating effective & engaging landing pages.
</li>
             <li>Automates repetitive content such as social media posts, email marketing, and ad campaigns.</li>

           
            </ul>
         </div>
         <div> 
          <h1 className='leaderHeaderText'>eCommerce</h1>
        
          <p className='leaderParaText'>Selling exclusive merchandise? Easily setup a mobile ready ecommerce storefront for your farm products. Users can buy & pay for your exclusive goodies online.</p>
         </div>
      </div>

 
    
    
      <div className='mobileContainer' style={{marginTop:'100px'}}>
        <div className='mobileTexBox' style={{marginLeft:'0px', marginRight:'20px'}}>
         <h1 className='clientDevHeaderText'>Global Delivery & Exceptional Support</h1>
         <h3 className='homeTitleText'>Our global delivery model allows you to</h3>
         <p className='clientDevParaText'>1. Manage growth without worrying about hiring suitable talent</p>
         <p className='clientDevParaText'>2. Cost-efficiency while gaining access to world-class engineers</p>
         <p className='clientDevParaText'>3. Software engineering services at at reduced costs</p>
         <p className='clientDevParaText'>Additionally you can have the option to custom build your dedicated engineering team. Our support channels are phone & email support with a 1-2 hours response time.</p>
        </div>
        <div className='mobileImg' >
          {/* <img src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg'></img> */}
          <YouTube videoId="KJJeqr8POnE" className='youtube' 
            // opts={opts} onReady={this._onReady} 
            />
        </div>
      </div>



      <div className='questionContainer'>
        <div>
          <h2 className='questionTitle'>How much does an app development cost</h2>
          <p className='questonPara'>The cost of app development for mobile apps, desktop apps & web apps varies largely depending upon various factors, such as the type of project (ecommerce, CRM, EHR, LMS,etc.), features & functionality, backend infrastructure, customization, in-app maintenance, hours required for development & testing, and much more. Check out the cost of app development & ROI calculator on this page, which will help you estimate the cost of your cost of app development within minutes.</p>
        </div>
        <div>
          <h2 className='questionTitle'>How to estimate app development cost</h2>
          <p className='questonPara'>Use the cost of app development & ROI calculator on this page. We need to understand your requirements in terms of the objective of app development, how you intend to engage your customers or generate new leads with this app, the features & integrations you need and more. Once you check all the relevant fields, the EC Infosolutions aap development & ROI calculator should be able to give you a nearly accurate estimate. For a personalized quote, fill in the form provided at the end of the bottom of the ROI calculator. Alternatively, write to us at hello@ecinfosolutions.com</p>
        </div>
        <div>
          <h2 className='questionTitle'>How much does app development cost in india
</h2>
          <p className='questonPara'>In India, app development cost starts at $800 for a standard app.

</p>
        </div>
        <div>
          <h2 className='questionTitle'>Cost of eCommerce features in your app?
</h2>
          <p className='questonPara'>According to a survey by Clutch, the cost of app development ranges from $30,000 to $700,000. However, the cost of building an ecommerce app with basic features can start from $5,000 to $7,000 for Android as well as iOS.

</p>
        </div>
        <div>
          <h2 className='questionTitle'>What is the cost of adding CRM features in your app?
</h2>
          <p className='questonPara'>The cost of adding CRM features in your app can start at around $800 onwards, depending upon the CRM features & functionalities you wish to integrate into your app.

</p>
        </div>
        <div>
          <h2 className='questionTitle'>What is the cost of the IoT features in your app?
</h2>
          <p className='questonPara'>The cost of IoT features in your app varies largely depending upon factors including but not limited to design & features, app size & complexity, hardware, app infrastructure, testing, maintenance, the team involved (man hours required for development). Taking all these into account, the standard pricing of an IoT app can be estimated as follows:

</p>

<ul className='questonPara' style={{listStyle:'disc'}}>
  <li>Standard app - $17,000 onwards
</li>
  <li>Medium-sized app - $23,000 onwards
</li>
  <li>Complex app - $28,000 onwards
</li>
</ul>
        </div>
        <div>
          <h2 className='questionTitle'>How many weeks of customization do you think will be required?
</h2>
          <p className='questonPara'>To be able to answer this question accurately, we will need details about the app you wish to develop/customize. You can request for a personalised quote in the section above, and we shal assist you personally. Alternatively, email us the details of your customization on hello@ecinfosolutions.com

</p>
        </div>
        <div>
          <h2 className='questionTitle'>How much time does it take to develop an app?
</h2>
          <p className='questonPara'>It can take upto 3 to 4 months to develop an app to a point where it’s ready to be released in public. However, this time excludes the time required for ideation, product definition & design stages. In case of medium-sized or complex apps, it can take much longer.

</p>
        </div>
        <div>
          <h2 className='questionTitle'>What is the market share of android and ios apps?
</h2>
          <p className='questonPara'>As of June 2021, Android maintained its position as the leading mobile operating system worldwide, thus controlling the mobile OS market with a share of close to 73%. Google's Android and Apple's iOS jointly possess over 99 percent of the global market share, as reported by Statista.

</p>
        </div>
        <div>
          <h2 className='questionTitle'>What are the categories of apps?
</h2>
          <p className='questonPara'>Apps can be broadly categorized into:

</p>
<ul className='questonPara' style={{listStyle:'disc'}}>
  <li>Native apps: Apps developed to work on a single operating system, for instance Android, Windows & iOS apps.

</li>
  <li>Hybrid apps: Apps developed to work on all platforms together with Angular Mobile Sencha Touch, React Native, Xamarin, Ionic, etc.

</li>
  <li>Web apps: These apps are responsive versions of certain websites designed to work on any mobile device.

</li>
</ul>
        </div>
        <div>
          <h2 className='questionTitle'>What To Include In App Cost?
</h2>
          <p className='questonPara'>Here are a few factors to take into consideration while calculating app cost:

</p>
<ul className='questonPara' style={{listStyle:'disc'}}>
  <li>Type (Mobile Game, Social Networking, Business, Shopping, etc.)


</li>
  <li>Platform (iOS, Windows, Android)


</li>
  <li>Design (Basic, Individual, Custom)


</li>
<li>Number of pages
</li>
<li>Features and infrastructures
</li>
</ul>
        </div>
        <div>
          <h2 className='questionTitle'>Advantages of hiring an app agency?
</h2>
          <p className='questonPara'>Some of the key advantages of hiring an app agency are:

</p>

<ul className='questonPara' style={{listStyle:'disc'}}>
  <li>Clear-cut milestones: Dedicated app agencies with good references & experience lay out well-defined milestones for the app development process and stick to them. You will know exactly how much time it takes and what to expect when.



</li>
  <li>Time to market: A dedicated agency is far more likely to complete your app ahead of the estimated time, as it has a wide variety of services and resources available at the click of a button to finish your job.



</li>
  <li>A variety of resources: App development agencies have a wide variety of resources or experts at their disposal. These include designers, programmers, developers, content creators & the like. This helps save a lot of time.



</li>
<li>Security: Experienced app development agencies give topmost importance to the security of their clients’ data. They maintain utmost care even while sharing information within their team. To safeguard yourself further, you can incorporate a data security clause that covers your project idea, source code & all of your data.

</li>
<li>Budget sensitivity: Since agencies have experience from working with a variety of clients from across the globe, they can clearly estimate the number of hours that will be required to develop a certain website or app and adjust the billing as per the client’s budget.
</li>
<li>Support & maintenance: Dedicated app development agencies can also offer you maintenance & support services once app development is complete, without you having to hire a person or team for the same.
</li>
<li>Concentrate on your core business: Outsourcing your app development work to an agency that specializes in the same gives you time & bandwidth to concentrate on your core business/area of expertise to make your product/service better. After all, your customers buy from you more because they’re happy with your product or service, and less because of how impressive your app is.
</li>
</ul>
        </div>

      </div>
    </div>
  </div>
    </div>
  )
}

export default IndexPage


