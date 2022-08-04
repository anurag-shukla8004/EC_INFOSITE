import React, { useEffect, useState } from 'react';
import Image from "next/image";
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



  // .then((result) => console.log('hello'));
  // const result = await response.json();
  // console.log('result', result);
 }
  

  // const client = ...

  // useEffect(() => {
  //   const response = client.query({
  //     query: gql`
  //     query NewQuery {
  //       posts {
  //         edges {
  //           node {
  //             title
  //             uri
  //             excerpt
  //             content
  //           }
  //         }
  //       }
  //     }
  //     `,
  //   }).then((result) => setBlog(result));
  
  // }, [])

  console.log('blog', blog);


useEffect(() => {
  dataGet();
}, [])




  return (
    <div className="homeMainContainer" >
      <div className="homeContainer ">
      <div className='newsmainContaier'>
        {
          
           blog && blog.map((blog, idx)=>{
            const date = parseISO(blog.node.date)
            // console.log(blog.node.featuredImage.node.sourceUrl)
             return(
               
              
              <div className="newsCardContainer">
              <div className="cardboxContainer">
                <div className='cardLeft'>
                  <div className='cardLeftImage'>
               
  
               <div style={{height: '97%',backgroundColor: '#000000' }}>
                    {/* <img
               src={blog?.node.featuredImage?.node.sourceUrl}
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
   
       
       

         
     
   </div>
      </div>
    </div>
  );
};

export default FeatureNewsDetails;



