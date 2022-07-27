
import next from 'next'
import React from 'react'
import Image from 'next/image'

function opportunitiesDetailsNews({}) {
  return (
    <div className='opportunitiesDetailsContainer'>
          <div className='opportunitiesDetailsImageContainer'>
               <div className="opportunitiesDetailsImagebox">
            <Image
              src="/assets/image2.png"
              alt="VPN Illustrasi"
              layout="fill"
              objectFit="cover"
              quality={100}
              width={82}
              height={50}
              layout="responsive"
            />
          </div>
          </div>
       
          <div  className='opportunitiesDetailsTextboxContainer'>
          <div className="opportunitiesDetailsTextbox">
           <h1 className='mainTitle'>Viverra accumsan, sed vestibulum sit turpis neque, sit.</h1>
          </div>
          <div className="opportunitiesDetailsTextbox">
           <h1 className='detailsHeading'>What is Lorem Ipsum?</h1>
           <p className='detailsText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
          </div>

          <div className="oppoImageTextContainer">
            <div className='opporDetailsImage'>
            <Image
              src="/assets/image2.png"
              alt="VPN Illustrasi"
              layout="fill"
              objectFit="cover"
              quality={100}
              width={82}
              height={50}
              layout="responsive"
            />
            </div>
            <div className='opporDetailsText'>
              <h1 className='detailsHeading'>Why do we use it?
</h1>
           <p className='detailsText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum </p>
            </div>
         
          </div>

          <div className="opportunitiesDetailsTextbox">
           <h1 className='detailsHeading'>Where does it come from?
</h1>
           <p className='detailsText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
          </div>
          </div>


          <div className='LoginComment'>
            <h1>Log in or sign up to leave a comment</h1>
            <div className='accountButton'>
             <div className='accountButotnLogin'>Log In</div>
             <div className='accountButotnSignup'>Sign up</div>
            </div>

          </div>

        </div>
  )
}

export default opportunitiesDetailsNews
