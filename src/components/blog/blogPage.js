import React, { useEffect, useState } from 'react';

import Loader from '../loader/index'
import Link from "next/link";

import { parseISO, format } from 'date-fns'





const FeatureNewsDetails = ({}) => {
  
  
//  const  [blog, setBlog] = useState('')
//  const dataGet = async () => {
// const client = new ApolloClient({
//     uri: 'https://ecinfosolutions.com/graphql',
//     cache: new InMemoryCache(),
//   });
//   const response = await client.query({
//     query: gql`
//     query NewQuery {
//       posts {
//         edges {
//           node {
//             title
//             excerpt
//             content
//             slug
//             date
//             featuredImage {
//               node {
//                 sourceUrl
//               }
//             }
//             author {
//               node {
//                 name
//                 firstName
//                 lastName
//                 avatar {
//                   url
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     `,
//   })


//   const result = await response?.data?.posts?.edges;
//   console.log(response)
//   setBlog(result)

//  }

// useEffect(() => {
//   dataGet();
// }, [])

const [blogApiData, setBlogApiData] = useState([])
const [blogImage, setBlogImage] = useState('')
  useEffect(() => {

    async function getUser() {
      try {
        // ⛔️ TypeError: Failed to fetch
        // 👇️ incorrect or incomplete URL
        const response = await fetch('http://dc7e-219-91-171-109.ngrok.io/api/blogs/');
    
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
    
        const data = await response.json();
          setBlogApiData(data)
        return data;
      } catch (err) {
        console.log(err);
      }
    }
    
    getUser();



  }, [])
 
  console.log(blogApiData)

  return (
    <div className="homeMainContainer" >
     
<div className="homeContainer ">
{
  
  blogApiData == '' ? <Loader/> :

<div className='newsmainContaier'>
{ 
   blogApiData && blogApiData.map((blog, id)=>{
     
    const date = parseISO(blog.created_date)

     return(
       
      <Link key={blog.id}   href={{ pathname: "/blogReadMore", query: { 
         author: blog.author.name,
         aboutAuthor: blog.author.about_author,
         shortDescription: blog.short_description,
         id: id,
         img: blog.blog_image,
         para: blog.blog_body,
         tags: blog.tags,
         title: blog.title 
          } }}
    >
      <div className="newsCardContainer" >
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
<img alt="img" src={blog.blog_image} width='60px'
referrerPolicy="no-referrer"
height="45px"
className='blogImg' />
       </div>


        {/* src={blog.node.featuredImage.node.sourceUrl} */}
          </div>
          <div className='cardLeftText'>
          {/* <p  dangerouslySetInnerHTML={{ __html: blog.node.date }} /> */}
          <time >{format(date, 'LLLL	d, yyyy')}</time>
        <h1>{blog.title}</h1>
        <p className="blogPara" >{blog.short_description}</p>
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












