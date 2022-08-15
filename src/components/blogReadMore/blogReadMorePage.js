
import React, { useEffect, useState } from 'react';
import PostBody from './blogPara'

import Image from 'next/image'
import Link from "next/link";
import { useRouter } from 'next/router'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import {CgFileDocument} from 'react-icons/cg';
import {FiFolder} from 'react-icons/fi';
import {AiOutlineTags} from 'react-icons/ai';
import {FaRegComment} from 'react-icons/fa';
import {BiArrowBack } from 'react-icons/bi';


function opportunitiesDetailsNews({}) {
  const router = useRouter();
  const value = router.query;
  const img = value.img
  const id = value.id
  

 
  const  [blog, setBlog] = useState('')
  // const  [id, setId] = useState(value)
  // console.log('id', )
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
  setBlog(result)
 
 
 }



useEffect(() => {
  dataGet();
}, [])
// setImg(blog[id.id].node.featuredImage.node.sourceUrl)
console.log(blog[id])

 

  return (
    
    <div className='opportunitiesDetailsContainer'>
          <div className='opportunitiesDetailsImageContainer'>
               <div className="opportunitiesDetailsImagebox">
   
       <Image
       src={img}
       alt="VPN Illustrasi"
       layout="fill"
       objectFit="cover"
       quality={100}
       width={400}
       height={115}
       layout="responsive"
     /> 

            
            

            {/* <img style={{margin:'150px'}}  src={img}></img> */}
            
            
             
      
          </div>
          <div className="blogBox">
           <h1 className='mainTitle'>{blog[id]?.node.title}</h1>
           <div className='smallBlogBox'>
             <div className='smallBlogInBox'>
             <CgFileDocument/>
            <span className='smallblogText'>{blog[id]?.node.author.node.name}</span>
             </div>
             <div className='smallBlogInBox'>
             <FiFolder/>
            <span className='smallblogText'>BLOG, BUSINESS, DECISIONS, INNOVATION IS LIFE, TECHNOLOGY, TRENDING</span>
             </div>
            
           </div >
           <div className='smallBlogBox'>
             <div className='smallBlogInBox'>
             <AiOutlineTags/>
            <span className='smallblogText'>DIGITAL MARKETING-SOCIAL MEDIA MARKETING-DIGITAL MARKETING 2021-DIGITAL MARKETING TRENDS-SOCIAL MEDIA MARKETING TOOLS-DIGITAL TRENDS 20210</span>
             </div>
             <div className='smallBlogInBox'>
             <FaRegComment/>
            <span className='smallblogText'>0</span>
             </div>
            
           </div>
           <div>

           </div>
           
          </div>
          </div>
       
          <div  className='opportunitiesDetailsTextboxContainer'>
          

          <div className="oppoImageTextContainer">
            <div className='opporDetailsImage'>
            <Image
        
       src={img}
       alt="VPN Illustrasi"
       layout="fill"
       objectFit="cover"
       quality={100}
       width={400}
       height={250}
       layout="responsive"
     /> 
            </div>
            <div className='opporDetailsText'>
            <PostBody content={blog[id]?.node.content} />
  </div>
         
          </div>

          </div>


          <div className='LoginComment'>
            <Link href="/blog">
            <div className='accountButton'>
             <div className='accountButotnLogin'><BiArrowBack/> Prev</div>
            </div>
            </Link>
           

          </div>

        </div>
  )
}

export default opportunitiesDetailsNews
