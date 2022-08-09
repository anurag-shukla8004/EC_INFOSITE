import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { parseISO, format } from 'date-fns'
import { idText } from 'typescript';


const FeatureNewsDetails = ({}) => {
  
 const  [blog, setBlog] = useState('')
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
    // console.log('response', response.data.posts.edges);
  
    const check = await res?.data?.posts?.edges;
    setChekapi(check)
  
  
  
    // .then((result) => console.log('hello'));
    // const result = await response.json();
    // console.log('result', result);
   }



 const dataGet = async () => {
const client = new ApolloClient({
    uri: 'https://ecinfosolutions.com/graphql',
    cache: new InMemoryCache(),
  });
  const response = await client.query({
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
  // console.log('response', response.data.posts.edges);

  const result = await response?.data?.posts?.edges;
  setBlog(result)



 
 }

  // console.log('checkblog', chekapi);
  // console.log('blog', blog);


useEffect(() => {
  dataGet();
  CheckdataGet();
}, [])




  return (
    <div className="homeMainContainer" >
      <div className="homeContainer ">
      <div className='newsmainContaier'>
        {
          
           blog && blog.map((blog, idx)=>{
             
            const date = parseISO(blog.node.date)
            // console.log(blog.node.featuredImage.node.sourceUrl)
            let img = blog.node.featuredImage.node.sourceUrl
             return(
               
              
              <div className="newsCardContainer" key={blog.slug}>
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
                {/* <img
        className="w-full"
        src={blog.node.featuredImage?.node.sourceUrl}
        alt={'some'}
      /> */}
    <Image                         
      width={6000}
      height={4500}
      className='blogImg'
      src={blog.node.featuredImage.node.sourceUrl}
      // src={`https://ecinfosolutions.com/graphql${blog.node.featuredImage.node.sourceUrl}`}
     
    />
               </div>
     
    
                {/* src={blog.node.featuredImage.node.sourceUrl} */}
                  </div>
                  <div className='cardLeftText'>
                  {/* <p  dangerouslySetInnerHTML={{ __html: blog.node.date }} /> */}
                  <time >{format(date, 'LLLL	d, yyyy')}</time>
                <h1>{blog.node.title}</h1>
                <p className="blogPara" dangerouslySetInnerHTML={{ __html: blog.node.excerpt }} />
                  </div>
                </div>
             
              </div>
              <div className="cardBottom">
              {/* <Link  href={{ pathname:"/opportunitiesDetailsMenu/", query: { id: d.id } }}>   
                </Link> */}
             <h1 style={{cursor:'pointer'}}>Read more </h1>
              </div>
            </div> 
      
        
             )
           })
        }
   

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



