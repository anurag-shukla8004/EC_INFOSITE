import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Loader from '../loader/index'
import Link from "next/link";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { parseISO, format } from 'date-fns'
import { idText } from 'typescript';


const FeatureNewsDetails = ({}) => {
  
 const  [blog, setBlog] = useState('')
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
            content
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
  console.log(response)
  setBlog(result)

 }

useEffect(() => {
  dataGet();
}, [])


  return (
    <div className="homeMainContainer" >
      <div className="homeContainer ">
        {
          
          blog == '' ? <Loader/> :

      <div className='newsmainContaier'>
        { 
           blog && blog.map((blog, id)=>{
             
            const date = parseISO(blog.node.date)
            // console.log(blog.node.featuredImage.node.sourceUrl)
            let img = blog.node.featuredImage.node.sourceUrl
             return(
               
              <Link   href={{ pathname: "/blogReadMore", query: { id: id, img: blog.node.featuredImage.node.sourceUrl } }}
            >
              <div className="newsCardContainer" key={blog.slug}>
              <div className="cardboxContainer">
                <div className='cardLeft'>
                  <div className='cardLeftImage'>
               
  
               <div style={{height: '97%',backgroundColor: '#000000', overflow:'hidden' }}>
                    {/* <img
               src={blog.node.featuredImage?.node.sourceUrl}
              //  src={`${blog.node.featuredImage?.node.sourceUrl}`}
               quality={100}
               width={82}
               height={50}

              
               /> */}
                {/* <img
        className="w-full"
        src={blog.node.featuredImage?.node.sourceUrl}
        alt={'some'}
      /> */}
    {/* <Image                         
      width={6000}
      height={4500}
      className='blogImg'
      // src={blog.node.featuredImage.node.sourceUrl}
      src={`${blog.node.featuredImage.node.sourceUrl}`}
     
    /> */}
    <img alt="img" src={blog.node.featuredImage.node.sourceUrl} width='60px'
    referrerPolicy="no-referrer"
      height="45px"
      className='blogImg' />
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
            </Link>
        
             )
           })
        }
   
   </div>
}
      </div>
    </div>
  )
}

export default FeatureNewsDetails;











