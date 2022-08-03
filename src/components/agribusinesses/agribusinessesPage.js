import React, { useEffect, useState } from 'react';



function agribusinessesPage() {

  const [blogApiData, setBlogApiData] = useState([])
const [blogImage, setBlogImage] = useState('')
  useEffect(() => {

    async function getUser() {
      try {
        // ⛔️ TypeError: Failed to fetch
        // 👇️ incorrect or incomplete URL
        const response = await fetch('https://ecinfosolutions.com//wp-json/wp/v2/pages/8426');
    
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log('data===>', data.content.rendered)
          setBlogApiData(data.content.rendered)
        return data;
      } catch (err) {
        console.log(err);
      }
    }
    
    getUser();



    // async function getUser() {
    //   try {
    //     const response = await fetch('http://techmergers.in/opportunities/saleopp/', {
    //       method: 'GET',
    //       headers: {
    //         accept: 'application/json',
    //       },
    //     });
    
    //     if (!response.ok) {
    //       throw new Error(`Error! status: ${response.status}`);
    //     }
    
    //        const data = await response.json();
    //       setBlogApiData(data.results)
    //     return data;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    
    // getUser();

    // const getStaticProps = async () => {
    //   const res = await fetch("http://techmergers.in/opportunities/saleopp/");
    //   const data = await res.json();
    //   setBlogApiData(data.results)
    //   // console.log(data.results)
    // };
    //      getStaticProps()
  }, [])

  return (

    <div>


{/* <style jsx>{`
        p {
          font-size: 20px;
  line-height: 1.7;
  margin-bottom: 20px;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
  margin: 0;
  padding: 0;
  color: #000000;
        }
        h1 {
          color: #0065cf;
  font-size: xx-large;
  font-weight: 600;
  padding: 10px 0px;
  font-family: 'Jost', sans-serif;
        }
        
        div {
          float: none;
    display: block;
    overflow: hidden;
    margin-top: 0!important;
    margin-left: 60px!important;
    margin-right: 60px!important;
    border: 1px solid #000!important;
    border-radius: 5px!important;
    padding: 20px 30px!important;
    box-shadow: rgba(0,0,0,.4) 0 8px 12px 0!important
        }
      `}</style>
   */}
    <div dangerouslySetInnerHTML={{__html: blogApiData}} />

    </div>
   
   
  )
}

export default agribusinessesPage
