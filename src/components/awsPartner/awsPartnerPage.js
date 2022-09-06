import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiShapeSquare } from 'react-icons/bi';
import { BsGem, BsPalette } from 'react-icons/bs';
import { FaDiceD20, FaPenNib, FaSwatchbook } from 'react-icons/fa';
import { RiPencilRuler2Line } from 'react-icons/ri';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import YouTube from 'react-youtube';

function pytDevPage({}) {
  const [apiData, SetApiData] = useState([]);
  const [values, setValues] = useState({
    email: '',
    name: '',
    company_name: '',
    mobile_number: '',
    project_req: '',
  });
  // Handling the form Data-----
  const { email, name, company_name, mobile_number, project_req } = values;
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    axios({
      method: 'post',
      url: '',
      data: values,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleChang = (value, name) => {
    setValues({
      ...values,
      mobile_number: value,
    });
  };

  // Handling the dynamic content data-----

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('');

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();
        SetApiData(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    }

    getUser();
  }, []);

  return (
    <div className="pytDevMainContainer">
      <div className="pytDevContainer">
        <div className="djangoContainer">
          <div className="fixmyreooImg">
            <img src="Fixmyreoo.png"></img>
          </div>
          <div className="djangoForm">
            <h1 className="djangoHeadingText">
              Managed Amazon Web Services Experts
            </h1>
            <ul className="djangoList">
              <li>Complete projects faster with certified developers</li>
              <li>Fix buggy apps & websites with our quick hotfixes</li>
              <li>App development experience of 14 years</li>
              <li>Agile project management with a Dedicated Manager</li>
              <li>Affordable: Pay only for measurable work</li>
              <li>500+ customers in 15 countries globally</li>
              <li>Global Delivery & Exceptional Support</li>
            </ul>
            <form
              action="/send-data-here"
              method="post"
              onSubmit={handleSubmit}
            >
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              <label>Name</label>
              <input
                type="text"
                id="last"
                name="name"
                value={name}
                onChange={handleChange}
                minlength="3"
                required
              />
              <label>Company Name</label>
              <input
                type="text"
                id="company_name"
                name="company_name"
                value={company_name}
                onChange={handleChange}
                required
              />
              <label>Mobile phone number*</label>
              <PhoneInput
                type="tel"
                id="last"
                name="mobile_number"
                value={mobile_number}
                onChange={(value) => handleChang(value, mobile_number)}
                defaultCountry="IN"
                required
              />

              <label>Describe your project requirements</label>
              <textarea
                name="project_req"
                value={project_req}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <div className="djangoContainer" style={{ alignItems: 'center' }}>
          <div className="amzMainCard">
            <div>
              <div className="amzCard">
                <h1 className="someIcon">
                  {' '}
                  <BsPalette />
                </h1>
                <h1>Amazon EC2</h1>
                <p>Virtual servers in the cloud</p>
              </div>

              <div className="amzCard">
                <h1 className="someIcon">
                  {' '}
                  <FaPenNib />
                </h1>

                <h1>AWS Lambda</h1>
                <p>Serverless apps </p>
              </div>
            </div>

            <div>
              <div className="amzCard">
                <h1 className="someIcon">
                  {' '}
                  <BiShapeSquare />
                </h1>
                <h1>Amazon RDS</h1>
                <p>Managed SQL in the cloud</p>
              </div>

              <div className="amzCard">
                <h1 className="someIcon">
                  {' '}
                  <FaSwatchbook />
                </h1>
                <h1>Amazon QuickSight</h1>
                <p>Analytics built for the cloud </p>
              </div>
            </div>
          </div>
          <div className="awzText">
            <h1 className="djangoHeadingText">
              Amazon Web Services Tech Stack
            </h1>
            <p className="djangopara">
              Amazon Web Services (AWS) is the world’s most comprehensive and
              broadly adopted cloud platform, offering over 175 fully featured
              services from data centers globally. EC is proud to be an AWS
              Partner and we have been providing expert services to hundreds of
              clients over the years.
            </p>
          </div>
        </div>
        <h1
          className="leaderHeaderText"
          style={{ textAlign: 'center', margin: '30px 0px', fontWeight: '500' }}
        >
          Example requests
        </h1>

        <div className="exmReqContainer">
          <div>
            <h1 className="exmText">
              Building an eCommerce Analytics dashboard
            </h1>
            <p className="exmpara">
              Loading e-commerce data into Amazon QuickSight for business
              analytics and insights
            </p>
          </div>
          <div>
            <h1 className="exmText">Amazon Connect authentication solution</h1>
            <p className="exmpara">
              Helping a customer with authentication and authorization for their
              in-house Amazon Connect solution.
            </p>
          </div>
        </div>

        <div className="exmReqContainer">
          <div>
            <img src="fix.png"></img>
          </div>
          <div>
            <h1
              className="leaderHeaderText"
              style={{
                textAlign: 'center',
                margin: '30px 0px',
                fontWeight: '500',
              }}
            >
              How it works
            </h1>
          </div>
        </div>

        <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
          <div className="fixContainer">
            <h1 className="fixHeaderText">Request a quote</h1>
            <p className="fixDevParaText">
              We will schedule a no obligations discovery call with you within
              24 hours of your enquiry. Before the discovery call you will
              receive a Non Disclosure Agreement from us. During the discovery
              call, your Project Manager will understand your project,
              technology stack, development environment, required changes &
              timeline.
            </p>
          </div>
          <div className="fixImg">
            <img src="dp1.png"></img>
          </div>
        </div>

        <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
          <div className="fixContainer">
            <h1 className="fixHeaderText">Pay for your hotfix</h1>
            <p className="fixDevParaText">
              After the free discovery call, you will receive a proposal from us
              within the hour. This proposal will include the feasibility of
              your project requirements, the estimated timeline and the costs
              involved. If the terms of the proposal are accepted, a deposit of
              50% will have to be paid to kickoff the project.
            </p>
          </div>
          <div className="fixImg">
            <img src="dp2.png"></img>
          </div>
        </div>

        <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
          <div className="fixContainer">
            <h1 className="fixHeaderText">Expert fixes your code</h1>
            <p className="fixDevParaText">
              After Project Kickoff, you will receive access to our Project
              Management System. Also meeting cadence will be shared as per your
              convenience. During project development you will receive regular
              updates from our team. Within days your issues will see
              resolution.
            </p>
          </div>
          <div className="fixImg">
            <img src="dp3.png"></img>
          </div>
        </div>

        <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
          <div className="fixContainer">
            <h1 className="fixHeaderText">Quality check & delivery</h1>
            <p className="fixDevParaText">
              Our QA process includes designing of tests, reporting of defects,
              regression testing & finally release testing. Our delivery will
              include deployment on sandbox or production servers, codebase
              delivery via github.com, architecture diagrams, installation
              guides and other documentation as required.
            </p>
          </div>
          <div className="fixImg">
            <img src="dp4.png"></img>
          </div>
        </div>

        <div className="askQueMainContainer">
          <h1 className="askQueTitile">Frequently asked questions</h1>

          <div className="askQueCardBox">
            <div className="askQueCard">
              <div className="askQueIcon">
                <BsGem />
              </div>
              <div className="askQuetext">
                <h1>What are repos?</h1>
                <p>
                  A repository or <b>repo</b> for short is cloud based storage
                  where your software codebase & its versions are stored.
                </p>
              </div>
            </div>

            <div className="askQueCard">
              <div className="askQueIcon">
                <FaSwatchbook />
              </div>
              <div className="askQuetext">
                <h1>What if you cannot fix my code?</h1>
                <p>
                  In an unlikely event that we cannot fix your code, we provide
                  a 100% money back guarantee.
                </p>
              </div>
            </div>
          </div>

          <div className="askQueCardBox">
            <div className="askQueCard">
              <div className="askQueIcon">
                <BsGem />
              </div>
              <div className="askQuetext">
                <h1>What is a hotfix?</h1>
                <p>
                  A hotfix is a small piece of code developed to correct a major
                  software bug or fault and released as quickly as possible.
                </p>
              </div>
            </div>

            <div className="askQueCard">
              <div className="askQueIcon">
                <FaSwatchbook />
              </div>
              <div className="askQuetext">
                <h1>How will you fix my code?</h1>
                <p>
                  Our team of 35 engineers & our experience of 500 projects
                  allows us to solve most code fixes very effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="askQueCardBox">
            <div className="askQueCard">
              <div className="askQueIcon">
                <RiPencilRuler2Line />
              </div>
              <div className="askQuetext">
                <h1>What is fixmyrepo?</h1>
                <p>
                  fixmyrepo is an online service provided by EC Infosolutions
                  designed to provide hotfixes for any software project in an
                  affordable, reliable & secure process.
                </p>
              </div>
            </div>

            <div className="askQueCard">
              <div className="askQueIcon">
                <FaDiceD20 />
              </div>
              <div className="askQuetext">
                <h1>How do you manage data security?</h1>
                <p>
                  We ensure every team member uses best practices & tools such
                  as Basecamp, GitHub to ensure that your Data is always secure.
                </p>
              </div>
            </div>
          </div>

          <div className="askQueCardBox">
            <div className="askQueCard">
              <div className="askQueIcon">
                <RiPencilRuler2Line />
              </div>
              <div className="askQuetext">
                <h1>Can I describe my requirements over phone?</h1>
                <p>
                  Yes, we can schedule a discovery call over phone or video
                  call. Please fill out the Request a Quote form.
                </p>
              </div>
            </div>

            <div className="askQueCard">
              <div className="askQueIcon">
                <FaDiceD20 />
              </div>
              <div className="askQuetext">
                <h1>How much will it cost?</h1>
                <p>
                  Our global delivery model allows our services to be affordable
                  without the burden of fixed costs. We charge $25 per hour for
                  measurable work.
                </p>
              </div>
            </div>
          </div>

          <div className="mobileContainer" style={{ marginTop: '100px' }}>
            <div
              className="mobileTexBox"
              style={{ marginLeft: '0px', marginRight: '20px' }}
            >
              <h1 className="clientDevHeaderText">
                Global Delivery & Exceptional Support
              </h1>
              <h3 className="homeTitleText">
                Our global delivery model allows you to
              </h3>
              <p className="clientDevParaText">
                1. Manage growth without worrying about hiring suitable talent
              </p>
              <p className="clientDevParaText">
                2. Cost-efficiency while gaining access to world-class engineers
              </p>
              <p className="clientDevParaText">
                3. Software engineering services at at reduced costs
              </p>
            </div>
            <div className="mobileImg">
              <YouTube videoId="KJJeqr8POnE" className="youtube" />
            </div>
          </div>
        </div>
        <div className="questionContainer">
          <div>
            <h2 className="questionTitle">
              How to optimize your migrated workloads on AWS?
            </h2>
            <p className="questonPara">
              Since AWS Server Migration Service (SMS) is an agentless service,
              it is faster & easier to migrate your virtual-only workloads from
              Microsoft Azure or on-premises infrastructure to AWS, especially
              when it is difficult to install an agent.
            </p>
          </div>
          <div>
            <h2 className="questionTitle">How does AWS work on AI Solution?</h2>
            <p className="questonPara">
              AI solutions enable AWS to easily address common use cases, which
              include modernizing your contact center, offering personalized
              recommendations to customers, increasing user engagement and
              improving security & safety. To know more, write to us at
              hello@ecinfosolutions.com
            </p>
          </div>

          <div>
            <h2 className="questionTitle">
              What is the lambda function in python?
            </h2>
            <p className="questonPara">
              The Lambada Function in Python is an anonymous function. Just like
              the def keyword is used for defining a normal Python function, the
              lambada keyword can be used to define anonymous Python functions.
              To know more about Python for your business, write to us at
              hello@ecinfosolutions.com
            </p>
          </div>

          <div>
            <h2 className="questionTitle">How does AWS CloudTrail work?</h2>
            <p className="questonPara">
              Any actions by users or on behalf of users by an AWS service is
              captured on CloudTrail. For instance, a call by AWS CloudFormation
              CreateStack is likely to result in additional API calls to
              services required by the AWS CloudFormation template, which
              include Amazon EBS, Amazon RDS, and Amazon EC2. To know more about
              AWS for your business, write to us at hello@ecinfosolutions.com
            </p>
          </div>

          <div>
            <h2 className="questionTitle">What are the services of AWS ?</h2>
            <p className="questonPara">
              Amazon Web Services (AWS) offers a wide set of cloud-based
              products that can be accessed from across the globe. These include
              databases, storage, networking, analytics, developer & management
              tools, mobile, IoT, enterprise & security apps. With these tools,
              organizations can lower IT costs, scale & witness faster growth.
              To know more about AWS for your business, write to us at
              hello@ecinfosolutions.com
            </p>
          </div>

          <div>
            <h2 className="questionTitle">
              What are the benefits of AWS cloud computing?
            </h2>
            <p className="questonPara">
              Here are some of the key benefits of AWS cloud computing:
            </p>
            <ul className="questonPara" style={{ listStyle: 'disc' }}>
              <li>
                Enables you to opt for variable expenditure instead of capital
                expenditure - you can pay only for the computing resources you
                consume instead of investing in a data centre.
              </li>
              <li>Higher economies of scale with lower pay-as-yo-go prices.</li>
              <li>
                Flexibility in terms of accessing the capacity you need, and
                just a few minutes of heads up to scale it up & down.
              </li>
              <li>Higher speed & agility of IT operations.</li>
              <li>
                Enables companies to focus on their core businesses instead of
                having to manage IT infrastructure such as powering, racking &
                stacking.
              </li>
              <li>
                Enables businesses to expand globally in minutes with lower
                latency and better customer experience at a minimal cost.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="questionTitle">
              Who is the authorized partner of Amazon Web Services In pune?
            </h2>
            <p className="questonPara">
              EC Infosolutions Pvt. Ltd. Pune is an authorized Amazon Web
              Services partner in Pune city, India. To know more about AWS for
              your business, write to us at hello@ecinfosolutions.com
            </p>
          </div>

          <div>
            <h2 className="questionTitle">what is amazon ec2</h2>
            <p className="questonPara">
              Amazon EC2, or Amazon Elastic Compute Cloud, is a web-based
              service that offers resizable & secure cloud-based computing
              capacity. The simple web service interface of Amazon EC enables
              you to configure capacity with minimum friction. Also, it gives
              you total control over your computing resources as it allows you
              to run on the proven computing environment of Amazon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pytDevPage;
{
}
