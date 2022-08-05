import React from 'react'
import YouTube from "react-youtube";
import Link from 'next/link'


function IndexPage({}) {
  return (
    <div>
        <div className='homeMainContainer'>
    <div className='homeContainer'>
           <div className='mobileContainer' >
        <div className="VocalTexBox" style={{width:'100%'}}><h1 className="clientDevHeaderText">Software Solutions for Manufacturing</h1>
      <h3 className="homeTitleText">Digital transformation solutions for manufacturers </h3><br></br>
      <p className="clientDevParaText"> <b>ERP + CRM:  </b>Cloud based customization & implementation for ERPNext to digitize all your business functions.</p><br></br>
      <p className="clientDevParaText"><b>IoT & Industry 4.0: </b>Build tools for smart device monitoring & control.</p><br></br>
      <p className="clientDevParaText"><b>Predictive data analytics for PLC control systems: </b>Custom machine learning solutions for bringing predictive analytics to your manufacturing business.</p><br></br>
      <p className="clientDevParaText"><b>Digital Marketing: </b> Leverage our digital marketing services to market your products & services to your global customers.</p>
      </div>

      
      
      </div>

      <Link href='/pricing'><div style={{cursor:'pointer'}} className='buildYourQuoteBtn'><div>Get Free Quote</div></div></Link>


      <div className='OverviewGoals'>
        <div> 
          <h1 className='leaderHeaderText'>Cloud ERP for Accounting & Inventory</h1>
         <p className='labCoreParaText'>Manage your accounting, sales & purchase processes including chart of accounts, journals & payments, billing & pricing, multi currency accounting, auto invoicing & banking.<br></br> <br></br>With our inventory system you can manage inventory levels, replenish stock, manage sales orders, manage customers, suppliers, shipments, deliverables, and order fulfillment.</p>
         </div>
         <div className='mobileImg'>
<img src='mf1.png'></img>
</div>
      </div>


      <div className='OverviewGoals'>
      <div className='mobileImg'>
<img src='mf2.png'></img>
</div>
        <div> 
          <h1 className='leaderHeaderText'>Cloud ERP for HR & Payroll</h1>
         <p className='labCoreParaText'>Manage your HR & Payroll processes including recruitment, attendance, leave & expense tracking, employee on-boarding, training & appraisals. Process payroll painlessly with configurable salary structures and personalized payslips. <br></br> <br></br> Get complete visibility on your salary costs, employee lifecycle, new recruitments & employee enrichment.</p>
         </div>
      </div>

      <div className='OverviewGoals'>
        <div> 
          <h1 className='leaderHeaderText'>Cloud ERP for Production</h1>
         <p className='labCoreParaText'>Manage your production processes including the complete production cycles, inventory consumption, capacity planning & sub-contracting.  <br></br> <br></br> Get complete visibility on your production efficiency, production costs & predictive analytics.</p>
         </div>
         <div className='mobileImg'>
<img src='mf3.png'></img>
</div>
      </div>

      <div className='OverviewGoals'>
      <div className='mobileImg'>
<img src='mf4.png'></img>
</div>
        <div> 
          <h1 className='leaderHeaderText'>
Cloud CRM for Sales Automation</h1>
         <p className='labCoreParaText'>Manage your entire pre sales & post sales processes including marketing campaigns, leads, quotations, pro-forma invoices & sales closures.

         <br></br> <br></br> 

         Get complete visibility on your sales team efficiency, sales funnels, revenue predictions & customer lifetime value.</p>
         </div>
      </div>


      <div className='OverviewGoals'>
        <div> 
          <h1 className='leaderHeaderText'>Industry 4.0: Using IoT, AR/VR tools & remote monitoring</h1>
         <p className='leaderParaText'>IoT sensors integrated with business and engineering systems, can provide unmatched advantages to the new age smart factory managers. <br></br><br></br> Managers can remotely monitor machine & productivity efficiencies. They can be alerted in outlier situations using AI & make remote tweaks using IoT relays.  <br></br><br></br> Furthermore, in case of process of breakdown issues, specialists can use remote guided repairs using videos, AR & VR technologies.</p>
         </div>
         <div> 
           <h1 className='leaderHeaderText'>Predictive Analytics for PLC control systems
</h1>
           <p className='leaderParaText'>Traditionally, PC based control systems have been used to collect high frequency (10 hz) data from PLC enabled machines.   <br></br><br></br>  Our big data solutions can be implemented on regular Windows PC's and their data can be pushed to the cloud. <br></br><br></br> This enables engineers to get remote real-time analytics & insights to take better business decisions.</p>
         
         </div>
      </div>
    
      <div className='mobileContainer' style={{marginTop:'100px', alignItems:'flex-start'}}>

      <div className='mobileImg' >
          {/* <img src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg'></img> */}
          <YouTube videoId="KJJeqr8POnE" className='youtube' 
            // opts={opts} onReady={this._onReady} 
            />
        </div>
        <div className='mobileTexBox' style={{marginLeft:'0px', marginLeft:'20px'}}>
         <h1 className='clientDevHeaderText'>Customisation, Pricing & Exceptional Support</h1>
         <p className='clientDevParaText'>Cloud ERP is completely customisable and can be fully integrated with your existing systems. We are available as a Web app and on mobile platforms such iOS & Android platforms & pricing starts at $299/month</p><br></br>
         <p className='clientDevParaText'>With a team of dedicated software experts, we make sure you're supported every step of the way. Our support channels are phone & email support. Our response times are between 1-2 hours.</p>
       
        </div>
       
      </div>

      <Link href='/pricing'><div style={{cursor:'pointer'}} className='buildYourQuoteBtn'><div>Get Free Quote</div></div></Link>

      

    </div>
  </div>
    </div>
  )
}

export default IndexPage
