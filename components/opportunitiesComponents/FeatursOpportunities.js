import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const FeatureNewsDetails = ({}) => {

// const [blogApiData, setBlogApiData] = useState([])
// const [blogImage, setBlogImage] = useState('')
//   useEffect(() => {

//     async function getUser() {
//       try {
//         // ⛔️ TypeError: Failed to fetch
//         // 👇️ incorrect or incomplete URL
//         const response = await fetch('http://techmergers.in/opportunities/saleopp/');
    
//         if (!response.ok) {
//           throw new Error(`Error! status: ${response.status}`);
//         }
    
//         const data = await response.json();
//           setBlogApiData(data.results)
//         return data;
//       } catch (err) {
//         console.log(err);
//       }
//     }
    
//     getUser();



    // async function getUser() {
    //   try {
    //     const response = await fetch('http://techmergers.in/opportunities/saleopp/', {
    //       method: 'GET',
    //       headers: {
    //         accept: 'application/json',
    //       },
    //     });
    
    //     if (!response.ok) {
    //       throw new Error(`Error! status: ${response.status}`);
    //     }
    
    //        const data = await response.json();
    //       setBlogApiData(data.results)
    //     return data;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    
    // getUser();

    // const getStaticProps = async () => {
    //   const res = await fetch("http://techmergers.in/opportunities/saleopp/");
    //   const data = await res.json();
    //   setBlogApiData(data.results)
    //   // console.log(data.results)
    // };
    //      getStaticProps()
  // }, [])

  return (
    <div className="homeMainContainer" >
      <div className="homeContainer ">
   
        {/* blogApiData.map((d, idx)=>{
       

        return (  */}
        <div className='newsmainContaier'>
        <div className="newsCardContainer">
        <div className="cardboxContainer">
          <div className='cardLeft'>
            <div className='cardLeftImage'>
            <img
        //  src={d.image}
  src="/assets/blog1.png"

         alt="VPN Illustrasi"
         quality={100}
        //  width={82}
        //  height={50}
         layout="responsive"
         />
            </div>
            <div className='cardLeftText'>
            <p>May 20, 2021</p>
          <h1>3 Online Industries in Need of Better CRM</h1>
            <p>
            This article elaborates three online industries in the need for better CRM, and the importance of having an efficient software for the same.
            </p>
            </div>
          </div>
       
        </div>
        <div className="cardBottom">
        <button>business</button>
        {/* <Link  href={{ pathname:"/opportunitiesDetailsMenu/", query: { id: d.id } }}>
             
          </Link> */}
       <h1 style={{cursor:'pointer'}}>Read more </h1>
        </div>
      </div> 


      <div className="newsCardContainer">
        <div className="cardboxContainer">
          <div className='cardLeft'>
            <div className='cardLeftImage'>
            <img
        //  src={d.image}
  src="/assets/blog2.png"

         alt="VPN Illustrasi"
         quality={100}
        //  width={82}
        //  height={50}
         layout="responsive"
         />
            </div>
            <div className='cardLeftText'>
            <p>April 23, 2021</p>
          <h1>Digital Marketing Trends in 2021
</h1>
            <p>
            Digital marketing has gained widespread popularity since 2017, but it gained rapid traction in 2020 following the lockdown in different parts of the world due to the outbreak of the... 
            </p>
            </div>
          </div>
       
        </div>
        <div className="cardBottom">
        <button>business</button>
        {/* <Link  href={{ pathname:"/opportunitiesDetailsMenu/", query: { id: d.id } }}>
             
          </Link> */}
       <h1 style={{cursor:'pointer'}}>Read more </h1>
        </div>
      </div> 



      <div className="newsCardContainer">
        <div className="cardboxContainer">
          <div className='cardLeft'>
            <div className='cardLeftImage'>
            <img
        //  src={d.image}
  src="/assets/blog3.png"

         alt="VPN Illustrasi"
         quality={100}
        //  width={82}
        //  height={50}
         layout="responsive"
         />
            </div>
            <div className='cardLeftText'>
            <p>January 27, 2021</p>
          <h1>Delaware Project Seeks to Stimulate Minority Startups</h1>
            <p>
            Delaware Project Seeks to Stimulate Minority Startups Delaware was the first state to approve the constitution back in 1787, and in 2021 it should be one of the first that...
            </p>
            </div>
          </div>
       
        </div>
        <div className="cardBottom">
        <button>business</button>
        {/* <Link  href={{ pathname:"/opportunitiesDetailsMenu/", query: { id: d.id } }}>
             
          </Link> */}
       <h1 style={{cursor:'pointer'}}>Read more </h1>
        </div>
      </div> 




      <div className="newsCardContainer">
        <div className="cardboxContainer">
          <div className='cardLeft'>
            <div className='cardLeftImage'>
            <img
        //  src={d.image}
  src="/assets/blog4.png"

         alt="VPN Illustrasi"
         quality={100}
        //  width={82}
        //  height={50}
         layout="responsive"
         />
            </div>
            <div className='cardLeftText'>
            <p>December 18, 2020</p>
          <h1>Zomato CRM – A Successful Balancing Act of Satisfying Customers & Their Customers</h1>
            <p>
            In this article, we intend to explore how Customer Relationship Management (CRM) works in the field of online food ordering and delivery. For this purpose, we have chosen to... 
            </p>
            </div>
          </div>
       
        </div>
        <div className="cardBottom">
        <button>business</button>
        {/* <Link  href={{ pathname:"/opportunitiesDetailsMenu/", query: { id: d.id } }}>
             
          </Link> */}
       <h1 style={{cursor:'pointer'}}>Read more </h1>
        </div>
      </div> 



      <div className="newsCardContainer">
        <div className="cardboxContainer">
          <div className='cardLeft'>
            <div className='cardLeftImage'>
            <img
        //  src={d.image}
  src="/assets/blog5.png"

         alt="VPN Illustrasi"
         quality={100}
        //  width={82}
        //  height={50}
         layout="responsive"
         />
            </div>
            <div className='cardLeftText'>
            <p>December 18, 2020</p>
          <h1>Swiggy CRM for Business Growth & Customer Satisfaction</h1>
            <p>
            In this article, we will explore the Customer Relationship Management strategies implemented by Swiggy. It is very interesting to see how different highly successful businesses implement different and...
            </p>
            </div>
          </div>
       
        </div>
        <div className="cardBottom">
        <button>business</button>
        {/* <Link  href={{ pathname:"/opportunitiesDetailsMenu/", query: { id: d.id } }}>
             
          </Link> */}
       <h1 style={{cursor:'pointer'}}>Read more </h1>
        </div>
      </div> 


      </div>
      </div>
    </div>
  );
};

export default FeatureNewsDetails;
