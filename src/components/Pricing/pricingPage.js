import React,{useState,useEffect} from 'react'
import Link from "next/link";


function pricingPage({}) {

  const [value,onChange]=useState(1);
  useEffect(()=>{
    const ele = document.querySelector('.buble');
  if (ele) {
    ele.style.left = `${Number(value / 4)}px`;
  }
})

  return (
    <div className='pytDevMainContainer'>
    <div className='pytDevContainer'>

      <div className='priceHeadingContainer'>
        <h1 className='priceHeading'>Cost of App Development & ROI Calculator</h1>
      </div>

      <div className='platformContainer'>
        <div className='platform' >
        <label for="cars">Web Platform</label>
<select name="cars" id="cars">
  <option value="volvo">Select the Item...</option>
  <option value="saab">Not Required</option>
  <option value="mercedes">Informationl website</option>
  <option value="audi">Progressive web app</option>
  <option value="audi">Custom web app with single tenant</option>
  <option value="audi">Custom web app with single tenant</option>
</select>
        </div>
        <div className='platform' >
        <label for="cars">Mobile App Platform (Native iOS & Android)</label>
<select name="cars" id="cars">
  <option value="volvo">Select the Item...</option>
  <option value="saab">Not Required</option>
  <option value="mercedes">Informationl website</option>
  <option value="mercedes">App integrated with custom backend web services</option>
  <option value="mercedes">Podcasts & video distribution app</option>
  <option value="audi">
Field data collection app
</option>
  <option value="audi">Corporate events app for workshops & networking</option>
  <option value="audi">
Employee communication app
</option>
</select>
        </div>
      </div>

<div className='radioListMainContainer'>

    <div className='radioListContainer'>
    <h1 className='radioListHeading'> Do you need UX design services for your app?</h1>
    <div>
        <label className="container">Theme based web ux
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Theme based mobile ux
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">High level wireframes for web app
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">High level wireframes for mobile app
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
    </div>
  
    </div>

    <div className='radioListContainer'>
    <h1 className='radioListHeading'> How do you want to authenticate & engage users? (Please select the relevant web or mobile app in the first dropdown)</h1>
    <div>
        <label className="container">Email authentication
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Social authentication
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">SSO / OAuth 2.0 authentication
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">User profile management
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>

<label className="container">User segmentation
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">User activity analytics
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Subscription management
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
    </div>
  
    </div>

    <div className='radioListContainer'>
    <h1 className='radioListHeading'> Do you need eCommerce features in your app?</h1>
    <div>
        <label className="container">Basic (Shopify)
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Open source e-commerce (OpenCart, WooCommerce, Magento)
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Social selling platform (Freedom eCommerce)
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Marketplace platform (Freedom eCommerce)
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Loyalty Points
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
    </div>
  
    </div>

    <div className='radioListContainer'>
    <h1 className='radioListHeading'> Which mobile device features do you need in your app (Please select the relevant mobile app in the first dropdown)</h1>
    <div>
        <label className="container">Device camera integration
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">GPS integration
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Bluetooth integration
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Gyroscope integration
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Accelerometer integration
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">In app purchase
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Push notifications
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">In app chat

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
    </div>
  
    </div>

    <div className='radioListContainer'>
    <h1 className='radioListHeading'> Do you need CRM features in your app?</h1>
    <div>
        <label className="container">Freedom CRM Sales automation
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Freedom CRM Service automation
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Freedom CRM Marketing automation
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
    </div>
  
    </div>

    <div className='radioListContainer'>
    <h1 className='radioListHeading'> Do you need Map / GIS features in your app?</h1>
    <div>
        <label className="container">Google maps integration
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">On demand platform (with customers, suppliers & super admin)
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Leaflet.js & GIS integration
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
    </div>
  
    </div>

    <div className='radioListContainer'>
    <h1 className='radioListHeading'> Do you need Industry 4.0 / IoT features in your app?</h1>
    <div>
        <label className="container">Smart metering integration
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Arduino / ESP32 integration
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Thingsboard dashboard integration

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">CNC machine data analytics

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Custom IoT projects
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
    </div>
  
    </div>

    <div className='radioListContainer'>
    <h1 className='radioListHeading'> Do you need ERP software features in your app?</h1>
    <div>
        <label className="container">ERPNext integration

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">ERPNext integration

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Tally integration

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">CIN7 integration

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Agvance integration
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">ERP for manufacturers
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">ERP for agri-businesses
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
    </div>
  
    </div>

    <div className='radioListContainer'>
    <h1 className='radioListHeading'> Do you need Artificial Intelligent / Machine Learning features in your app?</h1>
    <div>
        <label className="container">Custom NLP

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Custom NLU

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Alexa skills

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Chatbots
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Robotic process automation

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Custom ML models

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
    </div>
  
    </div>

    <div className='radioListContainer'>
    <h1 className='radioListHeading'> Do you need FinTech / Blockchain features in your app?</h1>
    <div>
        <label className="container">ERC20 token creation

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">FIAT exchanger

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Custom fintech

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Track & trace solution

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
    </div>
  
    </div>

    <div className='radioListContainer'>
    <h1 className='radioListHeading'> Do you need these additional business fuctions in your app?

</h1>
    <div>
        <label className="container">eLearning platform

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Web based engineering design software

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Law firm management app

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>

    </div>
  
    </div>

    <div className='radioListContainer'>
    <h1 className='radioListHeading'> Do you need Healthcare features in your app?

</h1>
    <div>
        <label className="container">HealthKit integration

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Telehealth integration

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">HIPAA compliance

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Meditation videos

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>

    </div>
  
    </div>

    <div className='radioListContainer'>
    <h1 className='radioListHeading'> Which security features do you need in your app?

</h1>
    <div>
        <label className="container">Basic security SSL / TLS

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">DDoS protection

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Malware cleanup

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Penetration tests

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
    </div>
  
    </div>

    <div className='radioListContainer'>
    <h1 className='radioListHeading'> Which digital marketing services do you need?

</h1>
    <div>
        <label className="container">Conversion rate optimization

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Content writing services

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Email automation funnels

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Paid marketing services

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Social media marketing


  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
    </div>
  
    </div>

    <div className='radioListContainer'>
    <h1 className='radioListHeading'> What is the level of support that you will need?

</h1>
    <div>
        <label className="container">Email support

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">WhatsApp support

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
<label className="container">Developer support

  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
    </div>
    
  
    </div>
 
    <div className="slider-parent">
    <h1 className='radioListHeading'> How many weeks of customization do you think will be required?
</h1>
    <input 
type="range"
min="0" 
max="15"
value={value}
onChange={({ target: { value: radius } }) => {
onChange(radius);
}}
      />
      <div className="buble"> 
      {value}
      </div>
</div>


        <h1 className='priceHeading'>ROI Calculator</h1>

        <div className='priceMainTotalBox'>
        <h2>Productivity Savings</h2>
        <div className='priceTotalBox'>
        <p>Annual Saving</p>
        <h3>0 USD</h3>
        </div>
        </div>

        <div className="slider-parent">
    <h1 className='radioListHeading'> How many daily jobs will be automated as a result of your app?
</h1>
    <input 
type="range"
min="0" 
max="20"
value={value}
onChange={({ target: { value: radius } }) => {
onChange(radius);
}}
      />
      <div className="buble"> 
      {value}
      </div>
</div>

<div className="slider-parent">
    <h1 className='radioListHeading'> How many hours per day are required to complete a job?
</h1>
    <input 
type="range"
min="0" 
max="8"
value={value}
onChange={({ target: { value: radius } }) => {
onChange(radius);
}}
      />
      <div className="buble"> 
      {value}
      </div>
</div>

<div className="slider-parent">
    <h1 className='radioListHeading'>What are the hourly wages (in USD) of competant team members skilled to complete these jobs?
</h1>
    <input 
type="range"
min="0" 
max="75"
value={value}
onChange={({ target: { value: radius } }) => {
onChange(radius);
}}
      />
      <div className="buble"> 
      {value}
      </div>
</div>

<div className='priceMainTotalBox'>
        <h2>Software Licensing Revenue</h2>
        <div className='priceTotalBox'>
        <p>Licensing revenue</p>
        <h3>0 USD</h3>
        </div>
        </div>

        <div className="slider-parent">
    <h1 className='radioListHeading'>Estimated number of monthly average users (MAU) to complete these jobs?
</h1>
    <input 
type="range"
min="0" 
max="1000"
value={value}
onChange={({ target: { value: radius } }) => {
onChange(radius);
}}
      />
      <div className="buble"> 
      {value}
      </div>
</div>

<div className="slider-parent">
    <h1 className='radioListHeading'>Software as a service margins in USD / month
</h1>
    <input 
type="range"
min="0" 
max="500"
value={value}
onChange={({ target: { value: radius } }) => {
onChange(radius);
}}
      />
      <div className="buble"> 
      {value}
      </div>
</div>

<div className='priceMainTotalBox'>
        <h2>Transactional Margins</h2>
        <div className='priceTotalBox'>
        <p>Transactional revenue</p>
        <h3>0 USD</h3>
        </div>
        </div>

        <div className="slider-parent">
    <h1 className='radioListHeading'>Estimated number of daily transactions
</h1>
    <input 
type="range"
min="0" 
max="100"
value={value}
onChange={({ target: { value: radius } }) => {
onChange(radius);
}}
      />
      <div className="buble"> 
      {value}
      </div>
</div>

<div className="slider-parent">
    <h1 className='radioListHeading'>Average transaction margin (USD)
</h1>
    <input 
type="range"
min="0" 
max="100"
value={value}
onChange={({ target: { value: radius } }) => {
onChange(radius);
}}
      />
      <div className="buble"> 
      {value}
      </div>
</div>

<div className='priceMainTotal'>
   
        <div className='priceTotal'>
        <p>Est. Setup Costs

</p>
        <h3>0 USD</h3>
        </div>

        <div className='priceTotal'>
        <p>Est. Customization Costs

</p>
        <h3>0 USD</h3>
        </div>

        <div className='priceTotal'>
        <p>Est. Monthly Costs

</p>
        <h3>29 USD</h3>
        </div>
        <div className='priceTotal'>
        <p>Est Total Costs (1 year)

</p>
        <h3>348 USD</h3>
        </div>

        <div className='priceTotal'>
        <p>Est. Productivity Savings + Transactional Margins + Software Licensing Revenue

</p>
        <h3>0 USD</h3>
        </div>
        <div className='priceTotal'>
        <p>Est. Return on Investment

</p>
        <h3>0 % Annualized ROI</h3>
        </div>
        </div>

        <h1 className='priceHeading'>Request for a personalized quote</h1>

        <div className='reqForm'>
  <form action="/action_page.php">

    <input type="text" id="fname" name="firstname" placeholder="Your name "/>


    <input type="email" id="lname" name="lastname" placeholder="Your email"/>


    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <textarea rows="4" cols="50" placeholder="Your app reaquirement"></textarea>
  
    <input type="submit" value="GET PERSONALISED QUOTE"/>
  </form>
</div>

<div className='moreFreedomContainer'>

         <div className='partnerShips'>
           <Link href=''>
           <img className='partnerImg' src='GoogleCloud.png'>
           </img>
           </Link>
           <Link href=''>
           <img className='partnerImg' src='AWS.png'>
           </img>
           </Link>
           <Link href=''>
           <img className='partnerImg' src='Shopify.png'>
           </img>
           </Link>
           <Link href=''>
           <img className='partnerImg' src='BNI.png'>
           </img>
           </Link>
           <Link href=''>
           <img className='partnerImg' src='zoho.png'>
           </img>
           </Link>
           <Link href=''>
           <img className='partnerImg' src='nasscom.png'>
           </img>
           </Link>
           <Link href=''>
           <img className='partnerImg' src='soil.png'>
           </img>
           </Link>
           <Link href=''>
           <img className='partnerImg' src='mccia.png'>
           </img>
           </Link>
           <Link href=''>
           <img className='partnerImg' src='clutch.png'>
           </img>
           </Link>
           <Link href=''>
           <img className='partnerImg' src='BestInSingaporeLogo.png'>
           </img>
           </Link>
           <Link href=''>
           <img className='partnerImg' src='Top-in-Singapore-Award.png'>
           </img>
           </Link>
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

export default pricingPage
