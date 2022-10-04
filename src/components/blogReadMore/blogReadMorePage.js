import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlineTags } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { CgFileDocument } from 'react-icons/cg';
import { FaRegComment } from 'react-icons/fa';
import { FiFolder } from 'react-icons/fi';
import Loader from '../loader';
import PostBody from './blogPara';

function opportunitiesDetailsNews({}) {
  const router = useRouter();
  const value = router.query;

  const id = value.id;

  const [blog, setBlog] = useState('');

  const [blogApiData, setBlogApiData] = useState([]);
  const [blogImage, setBlogImage] = useState('');
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(`https://ecinfosolutions.com/api/blogs/${id}`);

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
  }, [id]);


  console.log('blogRead---->', "https://ecinfosolutions.com"+(blogApiData[0]?.blog_image?.file))

  return (
    <>
      {blogApiData == '' ? (
        <Loader />
      ) : (
       
        <div className="opportunitiesDetailsContainer">
           <NextSeo title={blogApiData[0]?.title} />
          <div className="opportunitiesDetailsImageContainer">
            <div className="opportunitiesDetailsImagebox">
              <img  referrerPolicy="no-referrer" src={"https://ecinfosolutions.com"+(blogApiData[0]?.blog_image?.file)} alt="VPN Illustrasi"></img>
            </div>
            <div className="blogBox">
              <h1 className="mainTitle">{blogApiData[0]?.title}</h1>
              <div className="smallBlogBox">
                <div className="smallBlogInBox">
                  <CgFileDocument />
                  <span className="smallblogText">
                    {blogApiData[0]?.blog_author?.title}
                  </span>
                </div>
                <div className="smallBlogInBox">
                  <FiFolder />
                  <span className="smallblogText">{blogApiData[0]?.tag}</span>
                </div>
              </div>
              <div className="smallBlogBox">
                <div className="smallBlogInBox">
                  <AiOutlineTags />
                  <span className="smallblogText">{blogApiData[0]?.sub_tag}</span>
                </div>
                <div className="smallBlogInBox">
                  <FaRegComment />
                  <span className="smallblogText">0</span>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          <div className="opportunitiesDetailsTextboxContainer">
            <div className="oppoImageTextContainer">
              <div className="opporDetailsImage">
                <img
                 referrerPolicy="no-referrer"
                 src={"https://ecinfosolutions.com"+(blogApiData[0]?.blog_image?.file)} 
                  alt="VPN Illustrasi"
                  layout="fill"
                  quality={100}
                  width={700}
                  height={250}
                  // layout="responsive"
                ></img>
              </div>
            </div>
          </div>

          <div className="opporDetailsText">
            <PostBody content={JSON.parse(blogApiData[0]?.blog_body)[0]?.value} />
          </div>

          <div className="aboutAuthorBox">
            <p className="aboutTheAuthor">About the author</p>

            <h4 className="authorName">{blogApiData[0]?.blog_author?.title}</h4>
          
            <pre
              className="authorPara"
              style={{
                fontFamily: 'jost',
                whiteSpace: 'pre-wrap',
              }}
              dangerouslySetInnerHTML={{
                __html: JSON.parse(blogApiData[0]?.blog_author?.about_author)[0]?.value,
              }}
            />
          </div>

          <div className="LoginComment">
            <Link href="blog">
              <div className="accountButton">
                <div className="accountButotnLogin">
                  <BiArrowBack /> Prev
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default opportunitiesDetailsNews;
