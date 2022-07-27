import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";




const newsPage = ({}) => {

  const router = useRouter();
  const query = router.query;
  console.log(query)

  return (
    <div className="NewsDetailsMainContainer">
      <div className="userProfileContainr">
        <div className="image-wrapper">
          <Image
            src="/assets/image 3.png"
            alt="VPN Illustrasi"
            quality={100}
            width={8}
            height={5}
            layout="responsive"
            className="rounded-full"
          />
        </div>
        <div className="text-wrapper">
          <h6>Mika MAtikainen</h6>
          <p>Apr 15, 2020 · 4 min read</p>
        </div>
      </div>

      <div className="updateNews">
        <div className="updateNewsContainer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.  <br></br>Aenean pharetra quis lacus at
          viverra. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui
          molestie, molestie lectus eu, semper lectus.
          <h1>{query.tittle}</h1>
          Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
          dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
          quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Morbi efficitur auctor
          metus, id mollis lorem pellentesque id.  <br></br>Nullam posuere maximus dui et
          fringilla. Duis eu velit tempus erat egestas efficitur. In hac
          habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.
          Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Morbi
          efficitur auctor metus, id mollis lorem pellentesque id. Nullam
          posuere maximus dui et fringilla.
       
        </div>

        <div className="newsBoxImageContainer">
            <div className="newsDetailsImagebox">
              <img
                src={query.blog_image}
                alt="VPN Illustrasi"
                layout="fill"
                objectFit="cover"
                quality={100}
                // width={82}
                // height={50}
                layout="responsive"
              />
               <p style={{textAlign:'center',margin:'20px 0px'}}>
               Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height. 
      
        </p>
            </div>
          </div>

          <div className="updateNewsContainer">
  
          Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. 

In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo. <br></br> <br></br>

Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. 

In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.  <br></br>
A list looks like this:
<br></br>
First item in the list
Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet
Third item in the list
        </div>
      </div>
    </div>
  );
};

export default newsPage;
