import React from 'react'
import YouTube from "react-youtube";
import {BsPalette,BsGem } from 'react-icons/bs';
import {FaPenNib, FaSwatchbook, FaDiceD20 } from 'react-icons/fa';
import {BiShapeSquare } from 'react-icons/bi';
import {RiPencilRuler2Line } from 'react-icons/ri';




function pytDevPage({}) {
  return (
    <div className='pytDevMainContainer'>
      <div className='pytDevContainer'>

        <div className='djangoContainer'>
          <div className='fixmyreooImg'>
            <img src='Fixmyreoo.png'></img>
          </div>
          <div className='djangoForm'>

            <h1 className='djangoHeadingText'>Managed Amazon Web Services Experts</h1>
            <ul className='djangoList'>
              <li>Complete projects faster with certified developers</li>
              <li>Fix buggy apps & websites with our quick hotfixes</li>
              <li>App development experience of 14 years</li>
              <li>Agile project management with a Dedicated Manager</li>
              <li>Affordable: Pay only for measurable work</li>
              <li>500+ customers in 15 countries globally</li>
              <li>Global Delivery & Exceptional Support</li>
            </ul>
         <form >
  <label >Email</label>
  <input type="email"/>
  <label >Name</label>
  <input type="text" />
  <label >Company Name</label>
  <input type="text"/>
  <label >Mobile phone number</label>
  <input type="tel"/>
  <label >Describe your project requirements</label>
  <textarea></textarea>
  <button >Submit</button>
</form>

          </div>
        </div>


        <div className='djangoContainer' style={{alignItems:'center'}}  >
          <div className='amzMainCard'>
            <div>
                 <div className='amzCard'>
      <h1 className='someIcon'> < BsPalette/></h1>  
      <h1>Amazon EC2</h1>
      <p>Virtual servers in the cloud</p>
            </div>

            <div className='amzCard'>
      <h1 className='someIcon'> < FaPenNib/></h1>  
          
      <h1>AWS Lambda</h1>
      <p>Serverless apps </p>
            </div>
            </div>
         
            <div>
                 <div className='amzCard'>
      <h1 className='someIcon'> < BiShapeSquare/></h1>  
      <h1>Amazon RDS</h1>
      <p>Managed SQL in the cloud</p>
            </div>

            <div className='amzCard'>
      <h1 className='someIcon'> < FaSwatchbook/></h1>  
      <h1>Amazon QuickSight</h1>
      <p>Analytics built for the cloud </p>
            </div>
            </div>

          </div>
          <div className='awzText'>
            
          <h1 className='djangoHeadingText'>Amazon Web Services Tech Stack</h1>
            <p className='djangopara'>Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering over 175 fully featured services from data centers globally. EC is proud to be an AWS Partner and we have been providing expert services to hundreds of clients over the years.</p>
          </div>

          
        </div>
        <h1 className='leaderHeaderText' style={{textAlign:'center', margin:'30px 0px',fontWeight:'500'}}>Example requests</h1>


        <div className='exmReqContainer'>
        <div >
          <h1 className='exmText'>Building an eCommerce Analytics dashboard
</h1>
            <p className='exmpara'>Loading e-commerce data into Amazon QuickSight for business analytics and insights</p>
          </div>
          <div >
          <h1 className='exmText'>Amazon Connect authentication solution</h1>
            <p className='exmpara'>Helping a customer with authentication and authorization for their in-house Amazon Connect solution.</p>
          </div>
        </div>
        
        
        <div className='exmReqContainer'>
        <div >
        <img src='fix.png'></img>
          </div>
          <div >
          <h1 className='leaderHeaderText' style={{textAlign:'center', margin:'30px 0px',fontWeight:'500'}}>How it works</h1>
          </div>
        </div>

        <div className='agileMainContainer' style={{margin:'30px 0px'}}>
          <div className='fixContainer'>
          <h1 className='fixHeaderText'>Request a quote
</h1>
          <p className='fixDevParaText'>We will schedule a no obligations discovery call with you within 24 hours of your enquiry. Before the discovery call you will receive a Non Disclosure Agreement from us. During the discovery call, your Project Manager will understand your project, technology stack, development environment, required changes & timeline. 

</p>
          </div>
          <div className='fixImg'>
            <img src='dp1.png'></img>
          </div>
           </div>

           <div className='agileMainContainer' style={{margin:'30px 0px'}}>
          <div className='fixContainer'>
          <h1 className='fixHeaderText'>Pay for your hotfix
</h1>
          <p className='fixDevParaText'>After the free discovery call, you will receive a proposal from us within the hour. This proposal will include the feasibility of your project requirements, the estimated timeline and the costs involved. If the terms of the proposal are accepted, a deposit of 50% will have to be paid to kickoff the project. 

</p>
          </div>
          <div className='fixImg'>
            <img src='dp2.png'></img>
          </div>
           </div>

           <div className='agileMainContainer' style={{margin:'30px 0px'}}>
          <div className='fixContainer'>
          <h1 className='fixHeaderText'>Expert fixes your code
</h1>
          <p className='fixDevParaText'>After Project Kickoff, you will receive access to our Project Management System. Also meeting cadence will be shared as per your convenience. During project development you will receive regular updates from our team. Within days your issues will see resolution.

</p>
          </div>
          <div className='fixImg'>
            <img src='dp3.png'></img>
          </div>
           </div>

           <div className='agileMainContainer' style={{margin:'30px 0px'}}>
          <div className='fixContainer'>
          <h1 className='fixHeaderText'>Quality check & delivery
</h1>
          <p className='fixDevParaText'>Our QA process includes designing of tests, reporting of defects, regression testing & finally release testing. Our delivery will include deployment on sandbox or production servers, codebase delivery via github.com, architecture diagrams, installation guides and other documentation as required.

</p>
          </div>
          <div className='fixImg'>
            <img src='dp4.png'></img>
          </div>
           </div>


           <div className='askQueMainContainer'>
           <h1 className='askQueTitile'>Frequently asked questions
</h1>

             <div className='askQueCardBox'>

               <div className='askQueCard'>
                 <div className='askQueIcon'>
                 < BsGem/>
                 </div>
                 <div className='askQuetext'>
                <h1>What are repos?</h1>
                <p>A repository or <b>repo</b> for short is cloud based storage where your software codebase & its versions are stored.</p>
                 </div>
               </div>

               <div className='askQueCard'>
                 <div className='askQueIcon'>
  < FaSwatchbook/>
         
                 </div>
                 <div className='askQuetext'>
                <h1>What if you cannot fix my code?</h1>
                <p>In an unlikely event that we cannot fix your code, we provide a 100% money back guarantee.</p>
                 </div>
               </div>

             </div>

             <div className='askQueCardBox'>

<div className='askQueCard'>
  <div className='askQueIcon'>
  < BsGem/>
  </div>
  <div className='askQuetext'>
 <h1>What is a hotfix?
</h1>
 <p>A hotfix is a small piece of code developed to correct a major software bug or fault and released as quickly as possible.

</p>
  </div>
</div>

<div className='askQueCard'>
  <div className='askQueIcon'>
  <FaSwatchbook />

  </div>
  <div className='askQuetext'>
 <h1>How will you fix my code?
</h1>
 <p>Our team of 35 engineers & our experience of 500 projects allows us to solve most code fixes very effectively.</p>
  </div>
</div>

</div>

<div className='askQueCardBox'>

<div className='askQueCard'>
  <div className='askQueIcon'>
  < RiPencilRuler2Line/>

  </div>
  <div className='askQuetext'>
 <h1>What is fixmyrepo?</h1>
 <p>fixmyrepo is an online service provided by EC Infosolutions designed to provide hotfixes for any software project in an affordable, reliable & secure process.</p>
  </div>
</div>

<div className='askQueCard'>
  <div className='askQueIcon'>
  <FaDiceD20 />

  </div>
  <div className='askQuetext'>
 <h1>How do you manage data security?</h1>
 <p>We ensure every team member uses best practices & tools such as Basecamp, GitHub to ensure that your Data is always secure.</p>
  </div>
</div>

</div>

<div className='askQueCardBox'>

<div className='askQueCard'>
  <div className='askQueIcon'>
  < RiPencilRuler2Line/>
  </div>
  <div className='askQuetext'>
 <h1>Can I describe my requirements over phone?
</h1>
 <p>Yes, we can schedule a discovery call over phone or video call. Please fill out the Request a Quote form.

</p>
  </div>
</div>

<div className='askQueCard'>
  <div className='askQueIcon'>
  <FaDiceD20 />

  </div>
  <div className='askQuetext'>
 <h1>How much will it cost?
</h1>
 <p>Our global delivery model allows our services to be affordable without the burden of fixed costs. We charge $25 per hour for measurable work.

</p>
  </div>
</div>

</div>



<div className='mobileContainer' style={{marginTop:'100px'}}>
        <div className='mobileTexBox' style={{marginLeft:'0px', marginRight:'20px'}}>
         <h1 className='clientDevHeaderText'>Global Delivery & Exceptional Support</h1>
         <h3 className='homeTitleText'>Our global delivery model allows you to</h3>
         <p className='clientDevParaText'>1. Manage growth without worrying about hiring suitable talent</p>
         <p className='clientDevParaText'>2. Cost-efficiency while gaining access to world-class engineers</p>
         <p className='clientDevParaText'>3. Software engineering services at at reduced costs</p>
        </div>
        <div className='mobileImg' >
          {/* <img src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg'></img> */}
          <YouTube videoId="KJJeqr8POnE" className='youtube' 
            // opts={opts} onReady={this._onReady} 
            />
        </div>
      </div>




           </div>
           <div className='questionContainer'>
      <div>
          <h2 className='questionTitle'>How to optimize your migrated workloads on AWS?
</h2>
          <p className='questonPara'>Since AWS Server Migration Service (SMS) is an agentless service, it is faster & easier to migrate your virtual-only workloads from Microsoft Azure or on-premises infrastructure to AWS, especially when it is difficult to install an agent.

</p>
        </div>
        <div>
          <h2 className='questionTitle'></h2>
          <p className='questonPara'></p>
        </div>

        <div>
          <h2 className='questionTitle'></h2>
          <p className='questonPara'></p>
        </div>

        <div>
          <h2 className='questionTitle'></h2>
          <p className='questonPara'></p>
        </div>

        <div>
          <h2 className='questionTitle'></h2>
          <p className='questonPara'></p>
        </div>

        <div>
          <h2 className='questionTitle'></h2>
          <p className='questonPara'></p>
        </div>

        <div>
          <h2 className='questionTitle'></h2>
          <p className='questonPara'></p>
        </div>

        <div>
          <h2 className='questionTitle'></h2>
          <p className='questonPara'></p>
        </div>
      </div>

      </div>
    </div>
  )
}

export default pytDevPage
{}

































