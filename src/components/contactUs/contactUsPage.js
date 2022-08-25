import React, { useState } from 'react'
import axios from 'axios'

function contactUsPage({}) {

  const [values, setValues] = useState({
    email: "",
    name: "",
    company_name: "",
    mobile_number: "",
    project_req: "",
  });

  const { email, name, company_name,  mobile_number, project_req } = values;

  const handleChange = (e) =>{
    setValues({ ...values, [e.target.name]: e.target.value });
  }
    

    const handleSubmit = async (e) => {
      e.preventDefault();
    console.log('enter the input ')

      // await fetch("http://localhost:8000/api/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(values),
      // });

      axios({
        method: 'post',
        url: 'http://e04d-219-91-170-120.ngrok.io/api/inquery/',
        data: values,
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    };

  return (
    <div className='contactUsMainContainer'>
      <div className='contactUsContainer'>
      <div className='topHeadingContainer'>
        <h1>Request a Quote</h1>
        <p>
        For EC, customer engagement means a coming together of ideas, strategies, execution, revenue acquisition, plan Bs, and the overall value creation for customers. We’d love to learn about your vision and requirements.
        </p>
      </div>



      <div className='emailContainer'>
         <div className='fomeContainer'>
         <form action="/send-data-here" method="post" onSubmit={handleSubmit}>
  <label >Email</label>
  <input type="email" id="email" name="email" value={email}  onChange={handleChange} />
  <label >Name</label>
  <input type="text" id="last" name="name" value={name}  onChange={handleChange} />
  <label >Company Name</label>
  <input type="text" id="company_name" name="company_name"  value={company_name}  onChange={handleChange}/>
  <label >Mobile phone number*</label>
  <input type="tel" id="last" name="mobile_number" value={mobile_number}  onChange={handleChange}/>
  <label >Describe your project requirements</label>
  <textarea  name="project_req" value={project_req} onChange={handleChange}></textarea>
  <button type="submit">Request a Quote</button>
</form>
         </div>
         <div className='emailDetails'>
           <div className='details'>
           <h1>Email us:</h1>
           <ul>
             <li>Business: hello@ecinfosolutions.com</li>
             <li>Support: support@ecinfosolutions.com</li>
             <li>Careers: careers@ecinfosolutions.com</li>
           </ul>
           </div>
           <div className='details'>
           <h1>Talk to us:</h1>
           <ul>
             <li>USA: +1 (315) 703-3343</li>
             <li>India: +91 98223 48614</li>
             <li>WhatsApp: +91 99211 93330</li>
           </ul>
           </div> <div className='details'>
           <h1>Social media:</h1>
           <ul>
             <li>facebook | LinkedIn</li>
             
           </ul>
           </div>
          
         </div>
      </div>
            

            <div className='adressContainer'>
             <div className='adressBox'>
               <div className='adress'>
               <h1>EC Infosolutions LLC</h1>
               <h4>16192 Coastal Highway,</h4>
               <h4>Lewes,</h4>
               <h4>DE 19958, USA</h4>
               </div>
               <div className='adress'>
               <h1>EC Infosolutions LLC</h1>
               <h4>14 Oak Ct,</h4>
               <h4>Champaign,</h4>
               <h4>IL 61822, USA</h4>
               </div>
             </div>  
             <div className='adressBox'>
               <div className='adress'>
               <h1>EC Infosolutions Pvt. Ltd</h1>
               <h4>102 Network Savoy,</h4>
               <h4>Baner Balewadi Road,</h4>
               <h4>Pune 411045, India</h4>
               </div>
               <div className='adress'>
               <h1>PR International Pte. Ltd</h1>
               <h4>3791 Jalan Bukit Merah,</h4>
               <h4>05-28 ECentre@Redhill,</h4>
               <h4>Singapore 159471</h4>
               </div>
             </div>               
            </div>


      </div>
    </div>
  )
}

export default contactUsPage
