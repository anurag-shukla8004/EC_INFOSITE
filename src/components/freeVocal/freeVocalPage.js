import Link from 'next/link';
import React from 'react';
import YouTube from 'react-youtube';

function IndexPage({}) {
  return (
    <div>
      <div className="homeMainContainer">
        <div className="homeContainer">
          <div className="mobileContainer">
            <div className="vocalImg">
              <YouTube videoId="_OaOBettt_8" className="youtube2" />
            </div>
            <div className="VocalTexBox">
              <h1 className="clientDevHeaderText">freevocal media apps</h1>
              <h3 className="homeTitleText">
                Build a super app for your community.
              </h3>
              <h3 className="homeTitleText">
                PODCASTS | VIDEOS | EBOOKS | COACHING | COMMUNITY | RELIGIOUS
                GROUPS
              </h3>
              <p className="clientDevParaText">
                With freevocal, you can share your media content with your
                audience and monetize it to create a parallel source of income.
              </p>
            </div>
          </div>

          <Link href="/contactUs">
            <div className="buildYourQuoteBtn">
              <div style={{ cursor: 'pointer' }}>Get Free Quote</div>
            </div>
          </Link>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">
                Your branded iOS & android app
              </h1>
              <ul className="leaderUl">
                <li>
                  With freevocal, you can design your own app that is complete
                  with your personalized Logo & Splash Screen
                </li>
                <li>
                  This app will be available on iTunes App Store & Google Play
                  Store.
                </li>
                <li>
                  It will enable you to always be engaged with your users from
                  across the world.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="leaderHeaderText">
                Secure protection for your media files
              </h1>
              <ul className="leaderUl">
                <li>
                  Your audio & video media collection will be securely encrypted
                  and playable to legitimate users only.
                </li>
                <li>
                  We use AES 256 encryption - one of the highest security
                  standards for protecting your media collection.
                </li>
              </ul>
            </div>
          </div>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Inbuilt user engagement</h1>
              <p className="leaderParaText">
                With our social feature, you can share photos, videos, and other
                updates to your users from your YouTube channel, Facebook Page,
                Instagram Page, and other social media pages.
              </p>
            </div>
            <div>
              <h1 className="leaderHeaderText">In-App purchases management</h1>
              <p className="leaderParaText">
                Our In-App Purchase feature allows your users to instantly
                purchase and download media from your app.
              </p>
            </div>
          </div>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Subscription management</h1>
              <p className="leaderParaText">
                Our subscriptions feature allows your users to sign up for a
                paid subscription plan and access all your media collection from
                the app.
              </p>
            </div>
            <div>
              <h1 className="leaderHeaderText">freevocal console</h1>
              <p className="leaderParaText">
                With freevocal Console, you can manage your app's media
                collection with the click of a button.
              </p>
            </div>
          </div>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Data insights</h1>
              <p className="leaderParaText">
                A module that allows you to understand your user patterns and
                suitably decide your content strategy.
              </p>
            </div>
            <div>
              <h1 className="leaderHeaderText">Extensions</h1>
              <p className="leaderParaText">
                freevocal Extensions are for publishers who wish to add more
                functionality to their freevocal Apps.
              </p>
            </div>
          </div>

          <div className="mobileContainer" style={{ margin: '30px 0px' }}>
            <div className="mobileTexBox">
              <h1 className="clientDevHeaderText">freevocal extensions</h1>
              <p className="clientDevParaText">
                freevocal Extensions are for Publishers who wish to add more
                functionality to their freevocal Apps. These Extensions are plug
                & play software modules that enhance functionality for your
                freevocal App. As of now we have about 8 extensions ready & have
                a pipeline of 20 more extensions which will be ready very soon.
                If you have a request for an extension, please feel free to
                contact us.
              </p>
            </div>
            <div className="mobileImg">
              <img src="Untitled-design.png"></img>
            </div>
          </div>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Audio / Podcasts / Music</h1>
              <p className="leaderParaText">
                Self publish your music, audiobooks, podcasts & other audio
                files through this extension on freevocal.
              </p>
            </div>
            <div>
              <h1 className="leaderHeaderText">Videos</h1>
              <p className="leaderParaText">
                Self publish your videos, tutorials & other video files through
                this extension on freevocal.{' '}
              </p>
            </div>
          </div>
          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Video courses</h1>
              <p className="leaderParaText">
                Self publish your learning content in the form of video
                tutorials & configure drip content to your users through this
                extension on freevocal.{' '}
              </p>
            </div>
            <div>
              <h1 className="leaderHeaderText">Gallery</h1>
              <p className="leaderParaText">
                Self publish your images & PDF files through this extension on
                freevocal.
              </p>
            </div>
          </div>
          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Live Video</h1>
              <p className="leaderParaText">
                Broadcast your live audio - video stream to all your users.
              </p>
            </div>
            <div>
              <h1 className="leaderHeaderText">eBooks</h1>
              <p className="leaderParaText">
                Self publish your EPUB ebooks securely through this extension.
              </p>
            </div>
          </div>
          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">In app purchases</h1>
              <p className="leaderParaText">
                Allow your users to purchase content directly from within your
                freevocalapp with our in app purchase extension. Transaction &
                payment gateway charges are applicable as per the selected plan.
              </p>
            </div>
            <div>
              <h1 className="leaderHeaderText">Microsite</h1>
              <p className="leaderParaText">
                Allow your users to purchase Audio & Video content from your
                personalised micro website. All content purchased by users on
                the micro website will be available on your users freevocal
                apps. Transaction & payment gateway charges are applicable as
                per the selected plan.
              </p>
            </div>
          </div>
          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Subscriptions</h1>
              <p className="leaderParaText">
                Allow your users to purchase Audio & Video content from your
                personalised micro website. All content purchased by users on
                the micro website will be available on your users freevocal
                apps. This content can be sold via annual subscription.
                Transaction & payment gateway charges are applicable as per the
                selected plan.{' '}
              </p>
            </div>
            <div>
              <h1 className="leaderHeaderText">Quizzes</h1>
              <p className="leaderParaText">
                Setup quizzes for your freevocal app users from the console.
                Users will be able to appear for the quiz on their mobile
                devices itself. Quiz results will be shown in the console.{' '}
              </p>
            </div>
          </div>
          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">eCommerce</h1>
              <p className="leaderParaText">
                Selling exclusive merchandise? Easily setup a mobile ready
                ecommerce storefront within your freevocal app. Users can buy &
                pay for your exclusive goodies from the app itself.{' '}
              </p>
            </div>
            <div>
              <h1 className="leaderHeaderText">Tickets</h1>
              <p className="leaderParaText">
                Selling exclusive tickets to your concerts? Easily setup a
                mobile ready ticketing storefront within your freevocal app.
                Users can buy & pay for your exclusive tickets from the app
                itself.{' '}
              </p>
            </div>
          </div>
          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Polls</h1>
              <p className="leaderParaText">
                Selling exclusive merchandise? Easily setup a mobile ready
                ecommerce storefront within your freevocal app. Users can buy &
                pay for your exclusive goodies from the app itself.{' '}
              </p>
            </div>
            <div>
              <h1 className="leaderHeaderText">Google Drive</h1>
              <p className="leaderParaText">
                Share files on Google Drive & have all your users access them
                through their freevocalconsole.{' '}
              </p>
            </div>
          </div>
          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Shared Calendar</h1>
              <p className="leaderParaText">
                Share your event calendar on Google Calendar & have all your
                users access them through their freevocal console.{' '}
              </p>
            </div>
            <div>
              <h1 className="leaderHeaderText">Group Chat</h1>
              <p className="leaderParaText">
                Enterprise chat to allow your freevocalconsole users to
                communicate with each other.{' '}
              </p>
            </div>
          </div>
          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Facebook</h1>
              <p className="leaderParaText">
                Embed your Facebook page stream directly inside your freevocal
                app & keep your app users informed with your latest posts.{' '}
              </p>
            </div>
            <div>
              <h1 className="leaderHeaderText">Twitter</h1>
              <p className="leaderParaText">
                Embed your Twitter feed directly inside your freevocal app &
                keep your app users informed with your latest posts.
              </p>
            </div>
          </div>

          <div className="mobileContainer" style={{ marginTop: '100px' }}>
            <div className="mobileImg">
              <YouTube videoId="KJJeqr8POnE" className="youtube" />
            </div>
            <div
              className="mobileTexBox"
              style={{ marginLeft: '0px', marginLeft: '20px' }}
            >
              <h1 className="clientDevHeaderText">
                Customisation, Pricing & Exceptional Support
              </h1>
              <p className="clientDevParaText">
                freevocal is completely customisable and can be fully integrated
                with your existing systems. We are available iOS & Android
                platforms & pricing starts at $199/month
              </p>
              <br></br>
              <p className="clientDevParaText">
                With a team of dedicated software experts, we make sure you're
                supported every step of the way. Our support channels are phone
                & email support. Our response times are between 1-2 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
