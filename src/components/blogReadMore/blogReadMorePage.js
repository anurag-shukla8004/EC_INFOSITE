
import Link from "next/link";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlineTags } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { CgFileDocument } from 'react-icons/cg';
import { FaRegComment } from 'react-icons/fa';
import { FiFolder } from 'react-icons/fi';
import PostBody from './blogPara';



function opportunitiesDetailsNews({}) {
  const router = useRouter();
  const value = router.query;
  const author =  value.author;
  const aboutAuthor =  value.aboutAuthor;
  const shortDescription = value.short_description;
  const img = value.img;
  const data = value.para;
  const tags =  value.tags;
  const title =  value.title; 
  const  [blog, setBlog] = useState('')

  const [blogApiData, setBlogApiData] = useState([]);
  const [blogImage, setBlogImage] = useState('');
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(
          ''
        );

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();
        setBlogApiData(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    }

    getUser();
  }, []);
 


  return (
    
    <div className='opportunitiesDetailsContainer'>
                  
          <div className='opportunitiesDetailsImageContainer'>
               <div className="opportunitiesDetailsImagebox">
<img 
  src={img}
  alt="VPN Illustrasi"
></img> 
   </div>
          <div className="blogBox">
           <h1 className='mainTitle'>{title}</h1>
           <div className='smallBlogBox'>
             <div className='smallBlogInBox'>
             <CgFileDocument/>
            <span className='smallblogText'>{author}</span>
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
            <img
        
       src={img}
       alt="VPN Illustrasi"
       layout="fill"
       objectFit="cover"
       quality={100}
       width={700}
       height={250}
       layout="responsive"
     ></img> 
            </div>

         
          </div>

          </div>
        

          <div className='opporDetailsText'>
            <PostBody content={data} />
  </div>

  <div className='aboutAuthorBox'>
  <p className='aboutTheAuthor'>About the author</p>

          <h4 className='authorName'>{author}</h4>
          <p className='authorPara'>{aboutAuthor}</p>
           

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
