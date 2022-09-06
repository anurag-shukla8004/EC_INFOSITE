import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  FaBolt,
  FaBuilding,
  FaCar,
  FaIndustry,
  FaLaptop,
  FaLeaf,
  FaMedkit,
  FaMoneyBill,
  FaPhoneVolume,
  FaUniversity
} from 'react-icons/fa';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function googleCloudPage({}) {
  const [values, setValues] = useState({
    email: '',
    name: '',
    company_name: '',
    mobile_number: '',
    project_req: '',
  });

  const { email, name, company_name, mobile_number, project_req } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    axios({
      method: 'post',
      url: 'http://e04d-219-91-170-120.ngrok.io/api/inquery/',
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

  return (
    <div style={{ marginTop: '100px' }}>
      <div className="glImg">
        <img src="glCloud1.png"></img>
      </div>
      <div className="homeMainContainer">
        <div className="homeContainer">
          <div className="gl">
            <ul className="glUl">
              <li>
                Use Google Workspace for business email, video conferencing,
                cloud storage, and file sharing.
              </li>
              <li>
                Get all the tools your team needs to collaborate and increase
                productivity.
              </li>
            </ul>
          </div>

          <div className="gl">
            <h1 className="glHeding">
              GOOGLE WORKSPACE (FORMERLY GOOGLE APPS FOR BUSINESS)
            </h1>
            <div className="glBox">
              <div className="glTextBox">
                <p className="glSmallPara">
                  Google Workspace has been a very powerful, yet
                  straight-forward tool to run any business.
                  <br></br>
                  <br></br>
                  EC Infosolutions is a Google-authorized partner for providing
                  Google Workspace services in Pune & Mumbai. With Google
                  Workspace, your organization will get customized email
                  addresses (with Gmail for business), video conferencing, cloud
                  storage, calendar, mobile email via Android for work, and IM
                  access. It is easy to setup, use, & manage, and enables you to
                  work smoother, smarter, and concentrate on tasks that matter
                  the most to your business.
                  <br></br>
                  <br></br>
                  Google Workspace for business enables you to innovate more
                  rapidly with the following features:
                </p>
                <ul className="glUl">
                  <li>Gmail for Business storage</li>
                  <li>A quick setup guide</li>
                  <li>Custom email address</li>
                  <li>Business controls</li>
                  <li>Data loss prevention</li>
                  <li>
                    Google Workspace applications include email, integrated IM &
                    voice, video chat, and calendar
                  </li>
                  <li>Advanced drive administrator controls</li>
                  <li>
                    View and generate reports using your own reporting system
                  </li>
                  <li>
                    A complete and secure user authentication system for all
                    applications
                  </li>
                  <li>
                    Automatically enforces Secure Socket Layer (SSL) connections
                  </li>
                  <li>Can be setup in every mobile device</li>
                  <li>
                    Support: Email and phone support available locally in India
                    with a
                  </li>
                </ul>
              </div>
              <div className="glFormBox">
                <div className="glfomeContainer">
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
                    <button type="submit">Request a Quote</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="gl">
            <h1 className="glHeding">G SUITE FEATURES</h1>
            <div className="glBox">
              <div className="glCard">
                <h1 className="glCardHeading">Gmail for Business</h1>
                <ul className="glCardUl">
                  <li>Google-powered search</li>
                  <li>More than 30GB of storage</li>
                  <li>Offline support</li>
                  <li>Conventional email addresses</li>
                  <li>
                    Google-hosted email for your domain: get
                    name@yourbusiness.com
                  </li>
                  <li>Save time with smart reply</li>
                  <li>Phishing protection</li>
                  <li>Spam protection</li>
                </ul>
              </div>
              <div className="glCard">
                <h1 className="glCardHeading">Google Hangouts & Calendar</h1>
                <ul className="glCardUl">
                  <li>
                    Saves time by setting reminders, creating events, scheduling
                    work details & and meeting details, birth dates, and any
                    other special dates,
                  </li>
                  <li>Use Hangouts to keep in touch with your team</li>
                  <li>
                    Message contacts, start free video or voice calls, and start
                    a conversation with one person or a group
                  </li>
                </ul>
              </div>
              <div className="glCard">
                <h1 className="glCardHeading">Google Drive & Docs</h1>
                <ul className="glCardUl">
                  <li>
                    Create, share, and work on documents with images, tables,
                    equations, drawings, links, and lots more
                  </li>
                  <li>
                    With Google Drive for Business, only pay for the storage
                    used by employees. It comes with Google Docs, Sheets, &
                    Slides, and works seamlessly
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link href="/pricing">
            <div className="glbuildYourQuoteBtn">
              <div style={{ cursor: 'pointer' }}>Cloud Services Order Form</div>
            </div>
          </Link>

          {/* <Link href='/pricing'> <div className="glbuildYourQuoteBtn">
            <div>Cloud Services Order Form</div>
          </div></Link> */}

          <div className="gl">
            <div className="glBox">
              <div className="glbusiness">
                <h1 className="glBusiHeading">Business Starter</h1>
                <div className="glbusiParaBox">
                  <p className="glBusiPara">Custom and secure business email</p>
                  <div className="glLine"></div>
                  <p className="glBusiPara">100 participant video meetings</p>
                  <div className="glLine"></div>
                  <p className="glBusiPara">30 GB cloud storage per user</p>
                  <div className="glLine"></div>
                  <p className="glBusiPara">Security and management controls</p>
                  <div className="glLine"></div>

                  <p className="glBusiPara">Standard Support</p>
                  <div className="glLine"></div>
                </div>
              </div>

              <div className="glbusiness">
                <h1 className="glBusiHeading">Business Standard</h1>
                <div className="glbusiParaBox">
                  <p className="glBusiPara">Custom and secure business email</p>
                  <div className="glLine"></div>

                  <p className="glBusiPara">
                    150 participant video meetings + recording
                  </p>
                  <div className="glLine"></div>

                  <p className="glBusiPara">2 TB cloud storage per user</p>
                  <div className="glLine"></div>

                  <p className="glBusiPara">Security and management controls</p>
                  <div className="glLine"></div>

                  <p className="glBusiPara">
                    Standard Support (paid upgrade to Enhanced Support)
                  </p>
                  <div className="glLine"></div>
                </div>
              </div>

              <div className="glbusiness">
                <h1 className="glBusiHeading">Business Plus</h1>
                <div className="glbusiParaBox">
                  <p className="glBusiPara">
                    Custom and secure business email + eDiscovery, retention
                  </p>
                  <div className="glLine"></div>

                  <p className="glBusiPara">
                    250 participant video meetings + recording, attendance
                    tracking
                  </p>
                  <div className="glLine"></div>

                  <p className="glBusiPara">5 TB cloud storage per user</p>
                  <div className="glLine"></div>

                  <p className="glBusiPara">
                    Enhanced security and management controls, including Vault
                    and advanced endpoint management
                  </p>
                  <div className="glLine"></div>

                  <p className="glBusiPara">
                    Standard Support (paid upgrade to Enhanced Support)
                  </p>
                  <div className="glLine"></div>
                </div>
              </div>

              <div className="glbusiness">
                <h1 className="glBusiHeading">Enterprise</h1>
                <div className="glbusiParaBox">
                  <p className="glBusiPara">
                    Custom and secure business email + eDiscovery, retention,
                    S/MIME encryption
                  </p>
                  <div className="glLine"></div>

                  <p className="glBusiPara">
                    250 participant video meetings + recording, attendance
                    tracking, noise cancellation, in-domain live streaming
                  </p>
                  <div className="glLine"></div>

                  <p className="glBusiPara">As much storage as you need</p>
                  <div className="glLine"></div>

                  <p className="glBusiPara">
                    Advanced security, management, and compliance controls,
                    including Vault, DLP, data regions, and enterprise endpoint
                    management
                  </p>
                  <div className="glLine"></div>

                  <p className="glBusiPara">
                    Enhanced Support (paid upgrade to Premium Support)
                  </p>
                  <div className="glLine"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="gl">
            <h1 className="glHeding">INDUSTRIES WE SERVE:</h1>
            <div className="glBox">
              <div className="glservebox">
                <div className="glServeMainBox">
                  <FaCar
                    style={{
                      fontSize: 25,
                      color: '0065cd',
                      paddingLeft: '5px',
                    }}
                  />
                  <h1 className="blueText">Automobiles</h1>
                </div>
                <div className="glLine"></div>
                <div className="glServeMainBox">
                  <FaUniversity
                    style={{
                      fontSize: 25,
                      color: '0065cd',
                      paddingLeft: '5px',
                    }}
                  />
                  <h1 className="blueText">Automobiles</h1>
                </div>
                <div className="glLine"></div>
                <div className="glServeMainBox">
                  <FaBuilding
                    style={{
                      fontSize: 25,
                      color: '0065cd',
                      paddingLeft: '5px',
                    }}
                  />
                  <h1 className="blueText">Automobiles</h1>
                </div>
                <div className="glLine"></div>
              </div>

              <div className="glservebox">
                <div className="glServeMainBox">
                  <FaMoneyBill
                    style={{
                      fontSize: 25,
                      color: '0065cd',
                      paddingLeft: '5px',
                    }}
                  />
                  <h1 className="blueText">Automobiles</h1>
                </div>
                <div className="glLine"></div>
                <div className="glServeMainBox">
                  <FaPhoneVolume
                    style={{
                      fontSize: 25,
                      color: '0065cd',
                      paddingLeft: '5px',
                    }}
                  />
                  <h1 className="blueText">Automobiles</h1>
                </div>
                <div className="glLine"></div>
                <div className="glServeMainBox">
                  <FaLaptop
                    style={{
                      fontSize: 25,
                      color: '0065cd',
                      paddingLeft: '5px',
                    }}
                  />
                  <h1 className="blueText">Automobiles</h1>
                </div>
                <div className="glLine"></div>
              </div>

              <div className="glservebox">
                <div className="glServeMainBox">
                  <FaIndustry
                    style={{
                      fontSize: 25,
                      color: '0065cd',
                      paddingLeft: '5px',
                    }}
                  />
                  <h1 className="blueText">Automobiles</h1>
                </div>
                <div className="glLine"></div>
                <div className="glServeMainBox">
                  <FaLeaf
                    style={{
                      fontSize: 25,
                      color: '0065cd',
                      paddingLeft: '5px',
                    }}
                  />
                  <h1 className="blueText">Automobiles</h1>
                </div>
                <div className="glLine"></div>
                <div className="glServeMainBox">
                  <FaMedkit
                    style={{
                      fontSize: 25,
                      color: '0065cd',
                      paddingLeft: '5px',
                    }}
                  />
                  <h1 className="blueText">Automobiles</h1>
                </div>
                <div className="glLine"></div>
              </div>

              <div className="glservebox">
                <div className="glServeMainBox">
                  <FaBolt
                    style={{
                      fontSize: 25,
                      color: '0065cd',
                      paddingLeft: '5px',
                    }}
                  />
                  <h1 className="blueText">Automobiles</h1>
                </div>
                <div className="glLine"></div>
                <div className="glServeMainBox">
                  <FaBuilding
                    style={{
                      fontSize: 25,
                      color: '0065cd',
                      paddingLeft: '5px',
                    }}
                  />
                  <h1 className="blueText">Automobiles</h1>
                </div>

                <div className="glLine"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glBenifitMainContainer">
        <div className="homeMainContainer">
          <div className="glhomeContainer">
            <div className="gl">
              <h1 className="glHeding">BENEFITS OF GOOGLE WORKSPACE</h1>
              <div className="glBenifitMainBox">
                <div className="glBox">
                  <div className="glBenifitBox">
                    <img src="glb1.png"></img>
                    <h1 className="glBenifitHeading">Data Security</h1>
                    <p className="glSmallPara">
                      {' '}
                      Google Workspace allows users to store, access, manage and
                      share their data files. It protects business data even if
                      it is lost.
                    </p>
                  </div>
                  <div className="glBenifitBox">
                    <img src="glb2.png"></img>
                    <h1 className="glBenifitHeading">Secure sharing</h1>
                    <p className="glSmallPara">
                      Google documents and data files can be shared with anyone
                      easily. Enabling view-only access allows you to protect
                      the accessibility of another person.
                    </p>
                  </div>
                  <div className="glBenifitBox">
                    <img src="glb3.png"></img>
                    <h1 className="glBenifitHeading">Unlimited storehouse</h1>
                    <p className="glSmallPara">
                      Google Workspace provides unlimited storehouse for your
                      applications, data, files, docs, media, and other. This
                      will help an end user to store everything they require.
                    </p>
                  </div>
                </div>
                <div className="glBox">
                  <div className="glBenifitBox">
                    <img src="glb4.png"></img>
                    <h1 className="glBenifitHeading">Affordable Plan</h1>
                    <p className="glSmallPara">
                      G Suite monthly and yearly subscription are very
                      affordable for mid and large scale organizations, users
                      can use aspects such as limitless data storage, secure
                      data protection, eDiscovery potential, and other.
                    </p>
                  </div>
                  <div className="glBenifitBox">
                    <img src="glb5.png"></img>
                    <h1 className="glBenifitHeading">
                      Custom Business Email ID
                    </h1>
                    <p className="glSmallPara">
                      user will be able to use a custom email address at a
                      domain (name@yourcompany.com). Insead of name@gmail.com.
                    </p>
                  </div>
                  <div className="glBenifitBox">
                    <img src="glb6.png"></img>
                    <h1 className="glBenifitHeading">
                      Integration with CRM platform
                    </h1>
                    <p className="glSmallPara">
                      G Suite is well matched & compatible with CRM integration.
                      This feature is useful for creating report where
                      organizations can track leads and other data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="homeMainContainer">
        <div className="homeContainer">
          <div className="gl">
            <div className="glBox">
              <div className="glTextBox">
                <div>
                  <h2 className="questionTitle">How Much G Suite Cost?</h2>
                  <p className="questonPara">
                    G Suite has been a very powerful, yet straight-forward tool
                    to run any business. Google G Suite pricing starts from $10
                    per user per month. in a different way, around $120* a year
                    if you’re a business owner. In return, you get 1 TB per user
                    of online storehouse—or limitless storage if there are five
                    or more in your corporation.
                  </p>
                </div>
                <div>
                  <h2 className="questionTitle">What is Google Workspace?</h2>
                  <p className="questonPara">
                    Google Workspace is a collection that Google has created and
                    marketed to include cloud computing, productivity, and
                    collaboration tools. It was originally launched as Google
                    Apps for Your Domain in 2006. In 2016, it was rebranded as G
                    Suite.
                  </p>
                </div>
                <div>
                  <h2 className="questionTitle">
                    How do you Log into Google Cloud?
                  </h2>
                  <p className="questonPara">
                    1. Go to the Cloud Console Users Page. Go to the Users Page.
                    2. Click on Add user. 3. Enter your email address and
                    password. 4. Save. Click Save.
                  </p>
                </div>
                <div>
                  <h2 className="questionTitle">
                    How Much Storage Space is Available to G suite?
                  </h2>
                  <p className="questonPara">
                    Each user receives G Suite Basic and Business
                    Starter.Storage of 30 GBGoogle Drive, Gmail and Google
                    Photos can be used. Administrators can allow users to buy
                    additional storage.
                  </p>
                </div>
                <div>
                  <h2 className="questionTitle">
                    How to Configure G Suite in Outlook?
                  </h2>
                  <p className="questonPara">
                    1.On your computer, log into the Google Web App. 2. In the
                    top right, and click Settings. 3. Clack Forwarding and
                    POP/IMAP tab. 4. In the “IMAP Access” section, activate
                    IMAP. 5. Save Changes.
                  </p>
                </div>
                <div>
                  <h2 className="questionTitle">What is G Suite Basic?</h2>
                  <p className="questonPara">
                    G Suite Basic edition is a suite of collaborative
                    productivity application that offers your work pro email,
                    shared calendars, virtual information editing and storage,
                    video conference, and others.
                  </p>
                </div>
                <div>
                  <h2 className="questionTitle">
                    What is Included in G Suite?
                  </h2>
                  <p className="questonPara">
                    The standard G Suite tools include Gmail, Drive, Docs,
                    Sheets, Slides, Forms, Calendar, Google+, Sites, Hangouts.
                  </p>
                </div>
                <div>
                  <h2 className="questionTitle">
                    How Many Users G Suite Basic?
                  </h2>
                  <p className="questonPara">
                    g suite basic and corporate can add 50 person in a call,
                    while Enterprise can, in addition to adding 100 users,
                    record gathering and save them to Drive. Moreover,
                    Enterprise-users can dial-in from a phone
                  </p>
                </div>
                <div>
                  <h2 className="questionTitle">
                    Who is Google cloud partner in pune?
                  </h2>
                  <p className="questonPara">
                    EC Infosolutions is a Google-authorized partner for
                    providing G Suite services in Pune & Mumbai. With G Suite,
                    your organization will get customized email addresses (with
                    Gmail for business), video conferencing, cloud storage,
                    calendar, mobile email via Android for work, and IM access.
                    It is easy to setup, use, & manage, and enables you to work
                    smoother, smarter, and concentrate on tasks that matter the
                    most to your business.
                  </p>
                </div>
                <div>
                  <h2 className="questionTitle">
                    How do i Access My Google Business Email?
                  </h2>
                  <p className="questonPara">
                    to access google business email, visit any web browser, go
                    to admin.google.com. starting from the sign in page- enter
                    your correct email id and password for your admin account.
                  </p>
                </div>
              </div>
              <div className="glFormBox">
                <div className="glfomeContainer">
                  <form action="/send-data-here" method="post">
                    <label>Email</label>
                    <input type="email" id="email" name="email" />
                    <label>Name</label>
                    <input type="text" id="last" name="last" />
                    <label>Company Name</label>
                    <input type="text" id="companyName" name="companyName" />
                    <label>Mobile phone number*</label>
                    <input type="tel" id="last" name="last" />
                    <label>Describe your project requirements</label>
                    <textarea></textarea>
                    <button type="submit">Request a Quote</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default googleCloudPage;
{
}
