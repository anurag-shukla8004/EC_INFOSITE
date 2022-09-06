import Link from 'next/link';
import React from 'react';

function Index({}) {
  return (
    <div className="leaderMainContainer">
      <div className="leaderContainer">
        <div className="groupPhotoContaier">
          <div className="groupimg">
            <img src="ecGroupPhoto.png"></img>
          </div>
        </div>
        <div className="groupimgText">
          <h4>Welcome to EC Infosolutions</h4>
          <p className="homeParaText">
            EC Infosolutions is a software development company with offices in
            India, USA & Singapore. We offer software solutions and digital
            transformation services to over 250 organisations in 18 countries
            globally.
          </p>
        </div>

        <div className="OverviewGoals">
          <div>
            <h1 className="leaderHeaderText">Overview</h1>
            <p className="leaderParaText">
              We are a 55-member software development company based in Pune,
              India. We provide customised software solutions to clients in 18
              countries, which include India, USA, New Zealand, Australia,
              Canada, UK, Germany, UAE, Japan, the Netherlands, South Korea,
              Singapore, France, Malaysia, and Thailand.
            </p>
          </div>
          <div>
            <h1 className="leaderHeaderText">Goals</h1>
            <ul className="leaderUl">
              <li>
                To be the first-choice technology solutions provider for our
                global customer base.
              </li>
              <li>
                To deliver every project within our customers’ time & budget
                requirements.
              </li>
              <li>
                Delight every customer with our innovative & cutting-edge
                software solutions.
              </li>
            </ul>
          </div>
        </div>

        <div className="leaderShip">
          <h1 className="leaderHeaderText">Leadership</h1>
          <div className="imgDetailsContainer">
            <div className="leaderimg">
              <img src="sushant.png"></img>
            </div>
            <div className="leaderDetails">
              <p className="leaderParaText">
                Sushant is the founder of EC Infosolutions. His experience of 15
                years includes building technology products for over 250
                startups in 18 countries. His interests include analytics,
                machine learning, IoT, server-less computing, etc. He is a
                certified Google Cloud Partner and AWS expert.
              </p>
            </div>
            <div></div>
          </div>

          <div className="imgDetailsContainer">
            <div className="leaderimg">
              <img src="Shreyasee.png"></img>
            </div>
            <div className="leaderDetails">
              <p className="leaderParaText">
                Shreyasee has over 15 years of experience in CRM, eCommerce,
                direct sales, digital marketing, and BPR projects. Her passions
                include reading books on popular science, AI, & keto, practicing
                Yoga, and using organic skincare products. She is a certified
                Google Cloud Practitioner.
              </p>
            </div>
            <div></div>
          </div>

          <div className="imgDetailsContainer">
            <div className="leaderimg">
              <img src="kb.png"></img>
            </div>
            <div className="leaderDetails">
              <p className="leaderParaText">
                Kaustubh brings 20 years of experience in research and
                technology development across biotechnology, instrumentation,
                nanotechnology and informatics. He obtained his Masters and
                Doctoral degrees from The Ohio State University.
              </p>
            </div>
            <div></div>
          </div>
        </div>

        <div className="moreFreedomContainer">
          <h1 className="leaderHeaderText">More Freedom, Less Software</h1>
          <p className="leaderParaText">
            Most businesses have to deal with a large amount of data on a daily
            basis. Hence, it is important for them to use software to manage all
            aspects of their business.
          </p>
          <p className="leaderParaText">
            The purpose of a good software solution is to provide painless data
            acquisition and generate insightful reports quickly. The end result
            of the implementation of an appropriate software solution should be
            the accomplishment of tasks by users within a much lesser time
            frame, thu saving massive amounts of time.
          </p>
          <p className="leaderParaText">
            In most cases, companies opt for off-the-shelf software solutions.
            As these solutions lack customization, users are forced to change
            their business processes to suit them. Sometimes this results in
            users being stuck in what we call a "Software Jailhouse."
          </p>
          <p className="leaderParaText">
            On the other hand, when we deploy a customized software solution for
            your business, we make the extra effort to understand the nature of
            your business and emphasize on customizing roles, workflows,
            processes, and reports for you.
          </p>
          <p className="leaderParaText">
            With our customized software development approach, you can rely on
            us to achieve more freedom, less software.
          </p>
        </div>

        <div className="moreFreedomContainer">
          <h1 className="leaderHeaderText">Software-Defined Businesses</h1>

          <ul className="leaderUl">
            <li>Are you seeing more competitors every day?</li>
            <li>Are you facing pricing pressures in your business?</li>
            <li>Has there been a reduction in demand in your industry?</li>
          </ul>
          <p className="leaderParaText">
            With so many new technologies coming in everyday, from SaaS to IoT,
            it is estimated that 90% of all businesses that exist today will be
            replaced by businesses with different revenue models.
          </p>
          <p className="leaderParaText">
            So how do you remain competitive and grow your business in today's
            day & age?
          </p>
          <p className="leaderParaText">
            The one-word answer to this question is "Innovation."
          </p>
          <p className="leaderParaText">
            At EC Infosolutions, we believe in disrupting existing business
            practices and embracing innovation as a part of our lives. We
            believe in embracing the new every single day!
          </p>
        </div>

        <div className="moreFreedomContainer">
          <h1 className="leaderHeaderText">15 years of experience</h1>
          <p className="leaderParaText">
            Founded in 2007, we have been around for over a decade. In this
            span, our core team has grown organically from a team of 4 to 55
            today. Unlike your next-door software startup, we have bootstrapped
            from Day 1 & have been profitable from our first year. However, the
            most important growth has been in our experience, our skill sets,
            and our agility. We have realized that we exist because of the
            significant value we add to our customers' businesses. We are proud
            to say that our long list of customers validates our existence!
          </p>
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
              <img className="partnerImg" src="BestInSingaporeLogo.png"></img>
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
  );
}

export default Index;
{
}
