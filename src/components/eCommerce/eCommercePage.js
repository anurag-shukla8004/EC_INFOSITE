import React from 'react';
import YouTube from 'react-youtube';

function IndexPage({}) {
  return (
    <div>
      <div className="homeMainContainer">
        <div className="homeContainer">
          <div className="mobileContainer">
            <div className="mobileImg">
              <img src="cs-4.png"></img>
            </div>
            <div className="mobileTexBox">
              <h1 className="clientDevHeaderText">Freedom eCommerce </h1>
              <h3 className="homeTitleText">
                OMNI COMMERCE | SOCIAL SELLING | MARKETPLACES
              </h3>
              <p className="clientDevParaText">
                Take your eCommerce business to the next level with the Freedom
                eCommerce Platform, a highly customizable multistore eCommerce
                platform to fit all your needs in the eCommerce space. Manage
                your virtual marketplace, direct selling, social selling, and
                distributors under this single, yet comprehensive platform.
              </p>
            </div>
          </div>
          <div className="buildYourQuoteBtn">
            <div>Build Your Quote</div>
          </div>

          <h1
            className="leaderHeaderText"
            style={{ textAlign: 'center', margin: '30px 0px' }}
          >
            Your branded iOS & android app
          </h1>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Multi Store & Multi Vendor</h1>
              <ul className="leaderUl">
                <li>
                  Multi-vendor and drop shipping enable you to sell online
                  without having to invest in physical stock.
                </li>
                <li>
                  You can assign each product to a specific vendor for
                  streamlined and automated order processing.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="leaderHeaderText">
                Advanced Product & Stock Management
              </h1>
              <p className="leaderParaText">This tool enables you to:</p>
              <ul className="leaderUl">
                <li>Set product attributes (such as color, size, etc.).</li>
                <li>
                  Configure checkout attributes (for instance gift wrapping).
                </li>

                <li>Manage the overall stock based on these attributes.</li>
              </ul>
            </div>
          </div>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Integrated Discounts Manager</h1>
              <ul className="leaderUl">
                <li>
                  A program with which you can categorize certain groups of
                  customers as "free shipping" and "tax exempt" depending upon
                  their eligibility for the same.
                </li>
                <li>
                  It supports discounts and coupons that can be set either as a
                  fixed value, e.g. $10 off, or percentage, e.g. 20% off.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="leaderHeaderText">
                Affiliate & Rewards Management
              </h1>
              <ul className="leaderUl">
                <li>
                  An inbuilt affiliate manager that supports third-party
                  affiliate programs.
                </li>
                <li>
                  Has a built-in rewards points system to reward your
                  best-performing affiliates.
                </li>
              </ul>
            </div>
          </div>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">
                Support for Downloadable Products
              </h1>

              <ul className="leaderUl">
                <li>Supports all types of downloadable products.</li>
                <li>
                  Enables users to attach license files, user agreements, and
                  configurable download activation such as manual activation or
                  instant activation on payment receipt.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="leaderHeaderText">
                SEO-Friendly with URL rewriting
              </h1>
              <ul className="leaderUl">
                <li>
                  Enables every product, category, and manufacturer page to have
                  its own custom search engine meta tags, page title, and other
                  SEO tags.
                </li>
                <li>
                  Enables vendors to create search engine-friendly URLs with
                  automated URL rewriting.
                </li>
              </ul>
            </div>
          </div>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">
                Advanced configuration for Shipping, Tax, Payments & Customer
                Support
              </h1>
              <ul className="leaderUl">
                <li>
                  Complete flexibility for shipping, tax, and payments
                  integrated with UPS, USPS, and Fedex.
                </li>
                <li>
                  Offers one-click integration with the most popular payment
                  gateways and inbuilt customer service & ticketing.
                </li>
                <li>
                  Enables you to apply taxes as per the zone and product
                  category.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="leaderHeaderText">Mobile Commerce</h1>
              <ul className="leaderUl">
                <li>Completely responsive.</li>
                <li>Can be accessed over mobile operating systems</li>
                <li>HTML5 clients available for most of our modules.</li>
              </ul>
            </div>
          </div>

          <div className="mobileContainer" style={{ margin: '30px 0px' }}>
            <div className="mobileTexBox">
              <h1 className="clientDevHeaderText">
                Freedom eCommerce for Social Selling
              </h1>
              <p className="clientDevParaText">
                Take your eCommerce business to the next level with the Freedom
                eCommerce Social Selling, a highly customizable social selling
                platform which includes modules such as Party Plan & Replicating
                Storefronts. Manage your virtual marketplace, direct selling,
                social selling, and distributors under this single, yet
                comprehensive platform.
              </p>
            </div>
            <div className="mobileImg">
              <img src="cs-5.png"></img>
            </div>
          </div>

          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Party Plan Management</h1>
              <ul className="leaderUl">
                <li>
                  Enables you to plan parties, add party orders, and manage your
                  team & bookings.
                </li>
                <li>Facilitates effective customer opportunity management.</li>
                <li>A highly advanced party plan management solution.</li>
              </ul>
            </div>
            <div>
              <h1 className="leaderHeaderText">Replicating Storefronts</h1>
              <ul className="leaderUl">
                <li>
                  Give your distributors the convenience and technological edge
                  of having their own eCommerce direct selling storefronts
                </li>
                <li>
                  These storefronts can be automatically created and managed
                </li>
              </ul>
            </div>
          </div>
          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Community Management</h1>
              <ul className="leaderUl">
                <li>
                  Manage forums, helpdesks, social groups, and newsletters on
                  one platform.
                </li>
                <li>
                  Bring your customers and distributors on a common online
                  platform without them having to leave your web portal.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="leaderHeaderText">Distributor Management</h1>
              <ul className="leaderUl">
                <li>
                  A highly advanced distributor control panel that enables you
                  to create dashboards & monthly reports, shop for customers,
                  shop for yourself, shop for rewards, as well as enables
                  commission reporting, team management, etc.
                </li>
              </ul>
            </div>
          </div>
          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Deals, Discounts & Vouchers</h1>
              <p className="clientDevParaText">
                Create a loyalty club and offer the following:
              </p>
              <ul className="leaderUl">
                <li>Rewards</li>
                <li>Referral vouchers</li>
                <li>Party plan host rewards</li>
                <li>Gift vouchers</li>
                <li>Combo discounts</li>
                <li>Several other rewards to your distributors</li>
              </ul>
            </div>
            <div>
              <h1 className="leaderHeaderText">
                Distributor Training & Management
              </h1>
              <ul className="leaderUl">
                <li>
                  An inbuilt learning system and quizzes to take your
                  distributors through a training program that is suitable to
                  your organization.
                </li>
                <li>
                  {' '}
                  Also includes an inbuilt mobile app for distributing
                  e-learning content to your distributors and affiliates.
                </li>
              </ul>
            </div>
          </div>
          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Digital Support</h1>
              <p className="clientDevParaText">
                Our IT backoffice can support you through all your business
                functions including:
              </p>
              <ul className="leaderUl">
                <li>Software & database management</li>
                <li>IT infrastructure</li>
                <li>Commission generation</li>
                <li>Distributor acquisition</li>
                <li>Order processing</li>
              </ul>
            </div>
            <div>
              <h1 className="leaderHeaderText">Bonus & Order Processing</h1>
              <ul className="leaderUl">
                <li>
                  A fully customizable commissions and bonus management system
                  for your distributors and customers.
                </li>
                <li>
                  Can be used by your order processing and logistics team to
                  manage all your eCommerce shipments.
                </li>
              </ul>
            </div>
          </div>
          <div className="mobileContainer" style={{ margin: '30px 0px' }}>
            <div className="mobileTexBox">
              <h1 className="clientDevHeaderText">
                Freedom eCommerce for Social Selling
              </h1>
              <p className="clientDevParaText">
                Take your eCommerce business to the next level with the Freedom
                eCommerce Social Selling, a highly customizable social selling
                platform which includes modules such as Party Plan & Replicating
                Storefronts. Manage your virtual marketplace, direct selling,
                social selling, and distributors under this single, yet
                comprehensive platform.
              </p>
            </div>
            <div className="mobileImg">
              <img src="Untitled-design.png"></img>
            </div>
          </div>
          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">Seller Management</h1>
              <ul className="leaderUl">
                <li>
                  Manage multiple vendors and their product listings &
                  inventories.
                </li>
                <li>
                  Set commissionable products with different commission rates.
                </li>
                <li>
                  Promote paid listings among vendors via our powerful vendor
                  management software.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="leaderHeaderText">Aggregated Search</h1>
              <ul className="leaderUl">
                <li>
                  Aggregate products & services from various vendors, compare
                  prices, delivery terms, and promote paid listings.
                </li>
                <li>
                  Make online shopping an effortless activity for your
                  customers.
                </li>
              </ul>
            </div>
          </div>
          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">API Access</h1>
              <ul className="leaderUl">
                <li>
                  Extend your sales channels by collaborating with online
                  partners using our RestAPI.
                </li>
                <li>
                  Expose product & service inventories, variable costs, and
                  variable commissions through a fully customizable interface.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="leaderHeaderText">eCommerce CMS</h1>
              <ul className="leaderUl">
                <li>
                  Allow your vendors to manage their product or service
                  listings.
                </li>
                <li>
                  You can allow them to have their own white-labelled
                  micro-website and mobile apps.
                </li>
                <li>
                  Give your vendors access to a fully integrated content
                  management system for their micro-website.
                </li>
              </ul>
            </div>
          </div>
          <div className="OverviewGoals">
            <div>
              <h1 className="leaderHeaderText">
                Multi channel - Web, Mobile & Retail Sales
              </h1>
              <ul className="leaderUl">
                <li>
                  Your vendors can use the same technology platform to manage
                  their multi-channel business.
                </li>
                <li>
                  You can accept marketplace orders via your web portals, mobile
                  apps, and retail point of sales locations.
                </li>
                <li>
                  These orders can be fulfilled centrally from your back office.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="leaderHeaderText">Vendor Payouts</h1>
              <ul className="leaderUl">
                <li>
                  A fully customizable commissions and bonus management system
                  for your marketplace sales.
                </li>
                <li>Automate automated vendor payments.</li>
                <li></li>
              </ul>
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
          <div className="buildYourQuoteBtn">
            <div>Build Your Quote</div>
          </div>
          <h1
            className="leaderHeaderText"
            style={{ textAlign: 'center', margin: '30px 0px' }}
          >
            Success Stories
          </h1>

          <div className="mobileContainer">
            <div className="successStory">
              <h1>World Organics Ltd </h1>

              <p className="clientDevParaText">
                World Organics Ltd is global organic cosmetics company and we
                are proud of our association with them as their exclusive IT
                partner powering their entire technology stack.
              </p>
            </div>
            <div className="successStory">
              <h1>SnapBikes</h1>

              <p className="clientDevParaText">
                SnapBikes is an online bike rental marketplace startup. Their
                technology stack is powered by Freedom eCommerce Marketplace
                software.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
