import next from 'next'
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";

function opportunitiesDetailsNews({}) {

const [Data, setData] = useState([])
// const [id, setId] = useState('')
const [blogImage, setBlogImage] = useState('')

  const router = useRouter();
  const query = router.query;
  // const id = query.id
  console.log('idddd',query.id)

  useEffect(() => {

    async function getUser() {
      try {
        // ⛔️ TypeError: Failed to fetch
        // 👇️ incorrect or incomplete URL
        const response = await fetch(`http://techmergers.in/opportunities/saleopp/${query.id}`);
    
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
    
        const data = await response.json();
          setData(data)
          console.log('oppor data',data)
        return data;
      } catch (err) {
        console.log(err);
      }
    }
    if(query.id !== undefined){
      getUser();
    }
    
  }, [query.id])


  return (
   <div className='opporDetailsMainContainer'>
     <div className='opporDetailsContainer'>
       <div className='opporTopContainer'>
          <h1 className='opporMainTitle'>{Data.title}</h1>
          <div className='ImageTitleBox'>
          <div className='opporImage'>
            <img
         src={Data.image}
        //  src="/assets/image2.png"

         alt="VPN Illustrasi"
         quality={100}
         width={100}
         height={80}
         layout="responsive"
         />
            </div>
            <div>
              <h1 className='mainCompanyTitle'>Company Name</h1>
              <h3 className='mainCompanyName'>{Data.organization_name}</h3>
            </div>
          </div>
       </div>
       <div className='opporBottomContainer'>

         <div className='opporBottomleft'>
           <div>
              <h1 className='opporTitleText'>Description</h1>
           <h2 className='opporText'>ads</h2>
           </div>

           <div>
              <h1 className='opporTitleText'>What does your Business do</h1>
           <h2 className='opporText'>{Data.what_does_your_business_do}</h2>
           </div>
           
           <div>
              <h1 className='opporTitleText'>how does your business make money</h1>
           <h2 className='opporText'>{Data.how_does_your_business_make_money}</h2>
           </div>
           
           <div>
              <h1 className='opporTitleText'>why do you seeking investment</h1>
           <h2 className='opporText'>{Data.why_do_you_seeking_investment}</h2>
           </div>
           
           <div>
              <h1 className='opporTitleText'>Inventory</h1>
           <h2 className='opporText'>{Data.inventory}</h2>
           </div>
           
           <div>
              <h1 className='opporTitleText'>Asset including digitalaseets</h1>
           <h2 className='opporText'>{Data.asset_including_digital_aseets}</h2>
           </div>

         </div>
         <div className='opporBottomright'>
           <div className='opporCompanyDetails'>
             <h1>COMPANY DETAILS</h1>
              <div className='oppordetailsBox'>
                  <h1 className='opporTitleText'>Company Size</h1>
           <h2 className='opporText'>{Data.company_size}</h2>
              </div>

              <div className='oppordetailsBox'>
                  <h1 className='opporTitleText'>Established In</h1>
           <h2 className='opporText'>{Data.establish_in}</h2>
              </div>

              <div className='oppordetailsBox'>
                  <h1 className='opporTitleText'>Industry</h1>
           <h2 className='opporText'>{Data.industry}</h2>
              </div>

              <div className='oppordetailsBox'>
                  <h1 className='opporTitleText'>Address</h1>
           <h2 className='opporText'>{Data.location}</h2>
              </div>
           </div>
           <div className='opporOrganisationDetails'>
<h1>ORGANISATION DETAILS</h1>
           <div className='oppordetailsBox'>
                  <h1 className='opporTitleText'>Revenue Size</h1>
           <h2 className='opporText'>{Data.revenue}</h2>
              </div>

              <div className='oppordetailsBox'>
                  <h1 className='opporTitleText'>Current Debt In</h1>
           <h2 className='opporText'>{Data.current_debt}</h2>
              </div>

              <div className='oppordetailsBox'>
                  <h1 className='opporTitleText'>Ownership</h1>
           <h2 className='opporText'>{Data.ownership}</h2>
              </div>

              <div className='oppordetailsBox'>
                  <h1 className='opporTitleText'>Asking Price</h1>
           <h2 className='opporText'>{Data.asking_prize}</h2>
              </div>

              <div className='oppordetailsBox'>
                  <h1 className='opporTitleText'>Legal Entity</h1>
           <h2 className='opporText'>{Data.legal_entity}</h2>
              </div>

              <div className='oppordetailsBox'>
                  <h1 className='opporTitleText'>Sale</h1>
           <h2 className='opporText'>{Data.sale}</h2>
              </div>

              <div className='oppordetailsBox'>
                  <h1 className='opporTitleText'>Reported Sales</h1>
           <h2 className='opporText'>{Data.reported_sales}</h2>
              </div>

              <div className='oppordetailsBox'>
                  <h1 className='opporTitleText'>Run Rate Sale</h1>
           <h2 className='opporText'>{Data.run_rate_sale}</h2>
              </div>

              <div className='oppordetailsBox'>
                  <h1 className='opporTitleText'>Gross Margin</h1>
           <h2 className='opporText'>{Data.gross_margin}</h2>
              </div>

              <div className='oppordetailsBox'>
                  <h1 className='opporTitleText'>Net Margin</h1>
           <h2 className='opporText'>{Data.net_margin}</h2>
              </div>

           </div>
         </div>
         
       </div>
     </div>
   </div>
  )
}

export default opportunitiesDetailsNews
