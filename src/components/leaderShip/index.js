import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Loader from '../loader/index';

function Index({}) {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(' http://43.205.94.230:8000/api/leadership/');
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const data = await response.json();
        setApiData(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    }

    getUser();
  }, []);

  // console.log(JSON.parse(apiData[0]))

  return (
    <>
      {apiData == '' ? (
        <Loader />
      ) : (
        <div className="leaderMainContainer">
          <div className="leaderContainer">
            <div className="groupPhotoContaier">
              <div className="groupimg">
                <img src={apiData[0]?.ec_family_photo}></img>
              </div>
            </div>
            <div className="groupimgText">
              <pre
                className="groundImgPre"
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.welcome_quote)[0].value,
                }}
              />
            </div>

            <div className="OverviewGoals">
              <div>
                <pre
                  className="OverviewGoalsPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.overview)[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  className="OverviewGoalsPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.goals)[0].value,
                  }}
                />
              </div>
            </div>

            <div className="leaderShip">
              <h1 className="leaderHeaderText">Leadership</h1>

              <div className="imgDetailsContainer">
                <div className="leaderimg">
                  <img src={apiData[0]?.leaders[0]?.image}></img>
                </div>
                <div className="leaderDetails">
                  <pre
                    className="leaderParaText"
                    style={{
                      fontFamily: 'jost',
                      whiteSpace: 'pre-wrap',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: JSON.parse(apiData[0]?.leaders[0]?.about_leader)[0]
                        .value,
                    }}
                  />
                </div>
              </div>

              <div className="imgDetailsContainer">
                <div className="leaderimg">
                  <img src={apiData[0]?.leaders[1]?.image}></img>
                </div>
                <div className="leaderDetails">
                  <pre
                    className="leaderParaText"
                    style={{
                      fontFamily: 'jost',
                      whiteSpace: 'pre-wrap',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: JSON.parse(apiData[0]?.leaders[1]?.about_leader)[0]
                        .value,
                    }}
                  />
                </div>
              </div>

              <div className="imgDetailsContainer">
                <div className="leaderimg">
                  <img src={apiData[0]?.leaders[2]?.image}></img>
                </div>
                <div className="leaderDetails">
                  <pre
                    className="leaderParaText"
                    style={{
                      fontFamily: 'jost',
                      whiteSpace: 'pre-wrap',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: JSON.parse(apiData[0]?.leaders[2]?.about_leader)[0]
                        .value,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="moreFreedomContainer">
              <pre
                className="moreFreedomPre"
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.more_info_less_software)[0]
                    .value,
                }}
              />
            </div>

            <div className="moreFreedomContainer">
              <pre
                className="moreFreedomPre"
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.software_defined_business)[0]
                    .value,
                }}
              />
            </div>

            <div className="moreFreedomContainer">
              <pre
                className="moreFreedomPre"
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.fifteen_years_of_experiance)[0]
                    .value,
                }}
              />
            </div>

            <div className="moreFreedomContainer">
              <h1 className="leaderHeaderText">Partnerships & affiliations</h1>
              <div className="partnerShips">
                <Link href="">
                  <img className="partnerImg" src="GoogleCloud.png"></img>
                </Link>
                <Link href="">
                  <img className="partnerImg" src="AWS.png"></img>
                </Link>
                <Link href="">
                  <img className="partnerImg" src="Shopify.png"></img>
                </Link>
                <Link href="">
                  <img className="partnerImg" src="BNI.png"></img>
                </Link>
                <Link href="">
                  <img className="partnerImg" src="zoho.png"></img>
                </Link>
                <Link href="">
                  <img className="partnerImg" src="nasscom.png"></img>
                </Link>
                <Link href="">
                  <img className="partnerImg" src="soil.png"></img>
                </Link>
                <Link href="">
                  <img className="partnerImg" src="mccia.png"></img>
                </Link>
                <Link href="">
                  <img className="partnerImg" src="clutch.png"></img>
                </Link>
                <Link href="">
                  <img
                    className="partnerImg"
                    src="BestInSingaporeLogo.png"
                  ></img>
                </Link>
                <Link href="">
                  <img
                    className="partnerImg"
                    src="Top-in-Singapore-Award.png"
                  ></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
{
}
