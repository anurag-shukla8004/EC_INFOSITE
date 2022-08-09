import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { parseISO, format } from 'date-fns'
import { idText } from 'typescript';


const FeatureNewsDetails = ({}) => {
  
 const  [chekapi, setChekapi] = useState('')

 const CheckdataGet = async () => {
  const cli = new ApolloClient({
      uri: 'http://eclocalwebsite.local/graphql',
      cache: new InMemoryCache(),
    });
    const res = await cli.query({
      query: gql`
      query NewQuery {
        posts {
          edges {
            node {
              title
              excerpt
              slug
              date
              featuredImage {
                node {
                  sourceUrl
                }
              }
              author {
                node {
                  name
                  firstName
                  lastName
                  avatar {
                    url
                  }
                }
              }
            }
          }
        }
      }
      `,
    })
  
    const check = await res?.data?.posts?.edges;
    setChekapi(check)
  
  
  
 
   }



 




useEffect(() => {
  CheckdataGet();
}, [])




  return (
    <div className="homeMainContainer" >
      <div className="homeContainer ">
      <div className='newsmainContaier'>

      {
          
          chekapi && chekapi.map((blog, idx)=>{
            console.log('blog main',blog.node.featuredImage?.node.sourceUrl)
            return(
             <div className="newsCardContainer" >
             <div className="cardboxContainer">
               <div className='cardLeft'>
                 <div className='cardLeftImage'>
              
 
              <div style={{height: '97%',backgroundColor: '#000000' }}>
                   {/* <img
             //  src={blog.node.featuredImage?.node.sourceUrl}
              src={`${blog.node.featuredImage?.node.sourceUrl}`}
              quality={100}
              width={82}
              height={50}

             
              /> */}

  <Image                         
     width={6000}
     height={4500}
     className='blogImg'
    //  src={blog?.node?.featuredImage?.node.sourceUrl}
    src={`${blog.node.featuredImage?.node.sourceUrl}`}
   /> 

   <h1>hello word</h1>
              </div>
    
   
               {/* src={blog.node.featuredImage.node.sourceUrl} */}
                 </div>
              
               </div>
            
             </div>
            
           </div> 
     
       
            )
          })
       }
      
   </div>
      </div>
    </div>
  );
};

export default FeatureNewsDetails;



