/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import postApi from '../service_methods/post_method';
import FaqImage from '../components/image/faq.jpeg';

function FAQ() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    duration_days: '',
    message: '',
  });
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'https://grras.com/store_landing_inquery_api';
    postApi(url, formData);
  };
  function SubmitButton() {
    if (formData.name && formData.email && formData.mobile && formData.duration_days
      && formData.message) {
      return (
        <button
          type="submit"
          className="btn btn-block btn-dark btn-theme-colored btn-sm mt-20 pt-10 pb-10"
          onClick={handleSubmit}
        >
          Apply Now
        </button>
      );
    } else {
      return (
        <button
          type="submit"
          disabled
          className="btn btn-block btn-dark btn-theme-colored btn-sm mt-20 pt-10 pb-10"
          onClick={handleSubmit}
        >
          Apply Now
        </button>
      );
    }
  }
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
                <h4 className="title text-white">FAQ</h4>
                <ul className="breadcrumb white">
                  <li>
                    <a className="text-white" href="/">
                      Home
                    </a>
                  </li>
                  <li className="active">FAQ</li>
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
              <h4 className="widget-title title-dots mt-30"><span>FAQ</span></h4>
            </div>
            <div className="col-md-9">
              <div id="section-one" className="mb-50">
                <h3>Aarambh – Your Career, Our Mission.</h3>
                <p className="mb-20">
                  Have you ever thought about easy our lives would be
                  if we could learn and get trained first and pay when
                  we start to earn? It is now possible with Grras Solution’s
                  new program Aarambh – Your Career, Our Mission.

                </p>
              </div>
              <div id="section-two" className="mb-50">
                <h3>Q1. What does Pay After Placement mean?</h3>
                <p className="mb-20">
                  Pay After Placement is a newly
                  launched training program by Grras Solutions
                  that allows students to become experts in DevOps
                  and Cloud Computing without having to pay anything initially.
                  Once students get a job that is within the promises
                  set by Grras Solutions, the fee will be paid in instalments in a fixed pattern.
                </p>
              </div>
              <div id="section-three" className="mb-50">
                <h3>Q2. Which course is taught?</h3>
                <p className="mb-20">
                  As of now, the program is available for only DevOps and Cloud Computing course.
                </p>
              </div>
              <div id="section-four" className="mb-50">
                <h3>
                  Q3. What is the eligibility criterion for enrolling with this program?
                </h3>
                <p className="mb-20">
                  To be able to enrol with this program, you need to have either
                  of the following qualifications –
                  Btech, Mtech, MCA, BCA. Your passing year should be 2020 or above.
                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3>Q4. What is the batch size?</h3>
                <p className="mb-20">
                  The batch will have no more than 30 students to keep the class
                  size small and compact.
                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3>Q5. Is the program available via online class too?</h3>
                <p className="mb-20">
                  No, for online training, we have another program. Please, contact our team.
                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3>Q6. What is the course duration?</h3>
                <p className="mb-20">
                  The course duration is 6-9 months.
                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3>Q7. Will I be working on live projects?</h3>
                <p className="mb-20">
                  Grras Solutions is a firm believer in
                  learning while doing and our pay after placement is no exception.
                  You will be working on live,
                  real-time projects to gain maximum knowledge and
                  highest opportunity of polishing your skills.
                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3>Q8. What is the enrolment procedure?</h3>
                <p className="mb-20">
                  Our enrolment procedure involves a 30-minute Program specific competency test.
                  This will be followed by a one-on-one interview with one of our founders.
                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3>Q9. Will I get a trial period?</h3>
                <p className="mb-20">
                  Upon getting selected, you will get a 15-day trial. At the end of this period,
                  you can tell us about your decision and then the further steps will be taken.
                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3>Q10. What is ISA?</h3>
                <p className="mb-20">
                  ISA stands for Income Share Agreement,
                  which means that we are entitled to a certain part of your salary each month after
                  you get a job and until the fee is completely paid off.
                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3>Q11. What if is lose my job before paying off the complete fee?</h3>
                <p className="mb-20">
                  Everything you need to know about
                  paying off the fee is mentioned in the ISA and our counsellors
                  will help you in understanding them better face-to-face.
                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3>Q12. What is I want to join this course in online mode?</h3>
                <p className="mb-20">
                  While online mode is not available for PAP program, you can choose our
                  similar program,i.e.,
                  100% Job Oriented Program that is available in the online mode.
                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3>Q13. Will you help me get a job?</h3>
                <p className="mb-20">
                  Yes, we will help you find the right job to help you begin your career journey as
                  soon as possible with the best package and company.
                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3>Q14. How can I get in touch with you?</h3>
                <p className="mb-20">
                  To get in touch with us, you can give us a call or write to us
                  at enquiry@grras.com.
                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3>Q15. Do I really have to pay zero money till I get a job?</h3>
                <p className="mb-20">
                  Yes, there is ZERO UPFRONT FEE
                  for this course till you get a job that matches the standard we promise you.
                </p>
              </div>
              <div id="section-six" className="mb-50">
                <h3>
                  So, when do you have to pay?
                  {' '}
                  <span className="text-theme-colored"> Only after you get placed!</span>
                  {' '}

                </h3>
                <p className="mb-20">
                  This is a
                  {' '}
                  <span className="text-theme-colored">‘NO JOB, NO FEE’</span>
                  {' '}
                  program.
                  Hence, if we fail to find the right job for you to begin your career with,
                  you will not have to pay a single penny to us!
                  This is your cue to start your tech journey with DevOps and Cloud Computing today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default FAQ;
