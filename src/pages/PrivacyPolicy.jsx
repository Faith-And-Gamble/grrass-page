/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import postApi from '../service_methods/post_method';
import FaqImage from '../components/image/faq.jpeg';

function PrivacyPolicy() {
  return (
    <>
      <section
        className="divider parallax layer-overlay overlay"
        data-parallax-ratio="0.0"
        style={{ backgroundImage: `url(${FaqImage})` }}
      >
        <div className="container pt-70 pb-50">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <h4 className="title text-white">Privacy Policy</h4>
                <ul className="breadcrumb white">
                  <li>
                    <a className="text-white" href="/">
                      Home
                    </a>
                  </li>
                  <li className="active">Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-inherit">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <h4 className="widget-title title-dots mt-30"><span>Privacy Policy for Aarambh</span></h4>
            </div>
            <div className="col-md-9">
              <div id="section-one" className="mb-50">
                <h3 className="mb-20">
                  Privacy Policy for Aarambh
                </h3>
              </div>
              <div id="section-two" className="mb-50">
                <p className="mb-20">
                  At AARAMBH by Grras Solutions, which is accessible at https://aarambh.grras.com,
                  our top priority lies in the privacy of our visitors and students.
                  This paper on Privacy Policy encompasses all necessary details about the types
                  of information that AARAMBH by Grras Solutions collects and records.
                  This document contains details about how we use this information too.
                  If you have any more queries about our Privacy Policy
                  or you need more information, feel free to
                  contact us on the details provided on our website.
                  The details in this Privacy Policy applies to our online activities only.
                  The info is applicable
                  for visitors on our website (https://aarambh.grras.com) with relation to the information they share and/or
                  gather from AARAMBH by Grras Solutions. Information collected
                  through any third parties or via offline means
                  is not related to this set of policy.
                </p>
              </div>
              <div id="section-three" className="mb-50">
                <h3 className="mb-20">
                  Consent
                </h3>
              </div>
              <div id="section-four" className="mb-50">

                <p className="mb-20">
                  By using our website (https://aarambh.grras.com), you hereby consent to terms of our Privacy Policy.
                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3 className="mb-20">
                  Information we collect
                </h3>
              </div>
              <div id="section-five" className="mb-50">
                <p className="mb-20">
                  The reason why your details are requested and required by AARAMBH by
                  Grras Solutions
                  will be mentioned at the time your personal information is requested.
                  When you begin register with us, a point may come where we ask for your
                  personal contact details such as your name, contact number, email address,
                  and home address. Personal identifiable information may include your name,
                  but is not limited to it. (Personal Information).
                  Under the circumstance that you decide to contact us directly,
                  there are additional chances that we receive more information about you.
                  This additional information includes slots mentioned above, along with
                  any message you might want to give us.

                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3 className="mb-20">
                  How do we use your information?
                </h3>
              </div>
              <div id="section-five" className="mb-50">
                <p className="mb-20">
                  Your information we collect is used in different ways
                  mentioned here, but is not limited to these:
                  <li>Providing insights to operate and maintain our website</li>
                  <li>
                    Using the info to improve, personalize, and expand our
                    website for enhanced customer experience

                  </li>
                  <li>
                    To understand and analyse how visitors use our website
                    To develop new features, products, services and functionality

                  </li>
                  <li>
                    To communicate with customers about our updates
                    and other related news.
                    This can be done directly or through our partners

                  </li>
                  <li>
                    To get more information about marketing and
                    promotional aspects of our website

                  </li>
                  <li>To send you emails containing updates</li>
                  <li>To find and prevent frauds</li>

                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3 className="mb-20">
                  Log Files
                </h3>
              </div>
              <div id="section-five" className="mb-50">
                <p className="mb-20">
                  A standard procedure followed by AARAMBH by Grras Solutions
                  for utilizing log files. Log files comprises visitor information who
                  visit our website. This is an aspect of every company’s
                  hosting services analytics.
                  These log files encompass a lot of things including browser type,
                  internet protocol (IP) addresses,
                  date and time stamp, referring pages, Internet Service Provider (ISP),
                  and probable number of clicks.
                  None of this information is associated to anything personally identifiable.
                  This information collected
                  servers a lot of purposes including gathering demographic information,
                  tracking visitors’ movement on our website,
                  administering the website and analysing trends for future use.
                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3 className="mb-20">
                  Cookies and Web Beacons
                </h3>
              </div>
              <div id="section-five" className="mb-50">
                <p className="mb-20">
                  As most other websites, AARAMBH by Grras Solutions uses (cookies).
                  These cookies serve the purpose of storing a lot of information
                  including the visitors’ preferences as well as the necessary information
                  about other website pages visited by them. With this information,
                  AARAMBH by Grras Solutions strives to optimize the UX by customizing our
                  web page content on the basis of our visitors prior browser history,
                  along with similar information.
                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3 className="mb-20">
                  Advertising Partners Privacy Policies
                </h3>
              </div>
              <div id="section-five" className="mb-50">
                <p className="mb-20">
                  Technologies such as Web Beacons,
                  JavaScript and Cookies are being employed by third-party ad networks
                  and ad servers in their corresponding advertisements, which you
                  may find on AARAMBH by Grras Solutions. when this happens, your IP address reaches
                  them directly. These technologies serve a somewhat similar function of helping
                  them observe and estimate the effectiveness of their ads and marketing campaigns.
                  Additionally, they also re-evaluate and customize their content
                  for better reach and effect.
                  AARAMBH by Grras Solutions has access to any data the third-party might be
                  receiving with these technologies.

                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3 className="mb-20">
                  Third Party Privacy Policies
                </h3>
              </div>
              <div id="section-five" className="mb-50">
                <p className="mb-20">
                  The Privacy Policy as stated here has
                  no application or association to any other website,
                  third-party or advertiser. Thus, if you have any queries, you are advised
                  to consult the Privacy Policies of the third-party in question. Furthermore,
                  if you wish to opt out of certain options or wish to know more
                  about why your datasetis
                  collected by them, as well as how they use it, connecting with
                  them would be much better.
                  If you wish to control information giveaway, you can resort to disabling
                  cookies through your browser options. To access more detailed information abouz
                  cookie management, you should go through the particular websites’ browser options.

                </p>
              </div>
              <div id="section-six" className="mb-50">
                <h3 className="mb-20">
                  CCPA Privacy Rights (Do Not Sell My Personal Information)
                </h3>
              </div>
              <div id="section-seven" className="mb-50">
                <p className="mb-20">
                  Under the CCPA, consumers have the following rights:
                  <li>
                    request the business that is collecting your personal information to disclose
                    the categories and to give you the reasons for collecting them.

                  </li>
                  <li>
                    request the business to erase any piece of information which you are
                    uncomfortable share.

                  </li>
                  <li>
                    If that particular business is in the field of selling data, as the consumer,
                    you can request them to not do it.

                  </li>
                  <li>After you make your request, we will have one month to take action.</li>

                </p>
              </div>
              <div id="section-eight" className="mb-50">
                <h3 className="mb-20">
                  GDPR Data Protection Rights
                </h3>
              </div>
              <div id="section-six" className="mb-50">
                <p className="mb-20">
                  The purpose of these details is to ensure that you are aware
                  of the rights you hold as a visitor to our website. Here are some rights you have:
                  <li>
                    The right to rectification: If any information that we have
                    is incorrect or incomplete, you have the right to request for
                    the information to be corrected and / or completed.

                  </li>
                  <li>
                    The right to restrict processing: Under specific conditions,
                    you have the right to request to stop the processing of the
                    data that we have on you.

                  </li>
                  <li>
                    The right to data portability: Under certain conditions,
                    you the right to request to either transfer the information
                    that we have accumulated
                    about you to you or to any third- party organization directly.

                  </li>
                  <li>
                    The right to access: You have the right to request that we give you a
                    copy of the personal data we have of you. We can charge a small
                    fee for the same from you.

                  </li>
                  <li>
                    The right to erasure: Under specific circumstances, you have
                    the right to ask us to erase your personal data we have.

                  </li>
                  <li>
                    The right to object to processing: Under certain circumstances,
                    you have the right to object us regarding the processing
                    f your personal data with us.

                  </li>
                  We will have 30 days once you make your request with regards to either these points or any other. If you wish to implement any, please feel free to contact us through the contact details provided on our website (https://aarambh.grras.com).

                </p>
              </div>
              <div id="section-six" className="mb-50">
                <h3 className="mb-20">
                  Childrens Information
                </h3>
              </div>
              <div id="section-six" className="mb-50">
                <p className="mb-20">
                  Children are the world’s future and we believe in adding a layer of protection.
                  To help us do the same, we encourage and request all the parents out there,
                  as well as the guardians, to observe, take participation and even guide the online
                  activities their wards are indulging in.
                  AARAMBH by Grras Solutions does not knowingly intend to collect any piece
                  of personal information from any minor (anyone below the age of 13).
                  If you have suspicions
                  about your ward having provided us any such information (knowingly or by mistake),
                  we request you immediately contact us about the same.
                  Once we have the necessary information,
                  we guarantee you our sincere efforts (if found) to
                  remove any such information promptly.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default PrivacyPolicy;
