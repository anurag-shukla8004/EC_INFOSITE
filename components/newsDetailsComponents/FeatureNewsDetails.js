import React,{useState} from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const FeatureNewsDetails = ({}) => {
  const [blogData, setBlogData] = useState([])

  const router = useRouter();
  const query = router.query;
  // setBlogData(query)

  // console.log(blogData)
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className=" newsDetailsImageTextContainer  grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
      <div className=" newsDetailsTextContainer flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="  text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
          A few words about this blog platform, Ghost, and how this site was made.
          </h1>
          <p className="text-black-300 text-1xl mt-4 mb-6">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
          </p>

        </div>
      <div className="newsDetailsImageContainer">
          <div className="newsDetailsImagebox">
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
      </div>
    </div>
  );
};

export default FeatureNewsDetails;
