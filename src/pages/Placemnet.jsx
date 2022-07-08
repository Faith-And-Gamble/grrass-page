/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import backgrounddivider from '../components/image/bgDowwn.jpg';
import Query from './Query';

function Placement() {
  return (
    <div>
      <section className="inner-header divider parallax layer-overlay overlay-dark-5" style={{ backgroundImage: `url(${backgrounddivider})` }}>
        <div className="container pt-70 pb-50">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <h4 className="title text-white">Placement</h4>
                <ul className="breadcrumb white">
                  <li><a className="text-white" href="index-mp-layout1.html">Home</a></li>
                  <li className="active">Placement Details</li>
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
              <h4 className="widget-title title-dots mt-30"><span>PAY AFTER PLACEMENT</span></h4>
            </div>
            <div className="col-md-3 scrolltofixed-container">
              <div className="list-group scrolltofixed z-index-0">
                <a href="#section-one" className="list-group-item smooth-scroll-to-target">Aarambh – Your Career, Our Mission.</a>

                <a href="#section-two" className="list-group-item smooth-scroll-to-target">How will you land a job? We will help you in that too!</a>

                <a href="#section-three" className="list-group-item smooth-scroll-to-target">So, when do you have to pay? Only after you get placed!</a>

                <a href="#section-four" className="list-group-item smooth-scroll-to-target">
                  Change the pace and the outcome of Your career with our newly launched pay after
                  placement program.
                </a>

                <a href="#section-five" className="list-group-item smooth-scroll-to-target">We will help you in that too!</a>
                <a href="#section-six" className="list-group-item smooth-scroll-to-target">
                  So, when do you have to pay?
                  {' '}
                  <span className="text-theme-colored"> Only after you get placed!</span>
                  {' '}

                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div id="section-one" className="mb-50">
                <h3>Aarambh – Your Career, Our Mission.</h3>
                <hr />
                <p className="mb-20">
                  Have you ever thought about easy our lives would be
                  if we could learn and get trained first and pay when
                  we start to earn? It is now possible with Grras Solution’s
                  new program Aarambh – Your Career, Our Mission.

                </p>
              </div>
              <div id="section-two" className="mb-50">
                <h3>How will you land a job? We will help you in that too!</h3>
                <hr />
                <p className="mb-20">
                  Our Pay After Placement program comes
                  along our Job Oriented program wherein,
                  we provide you with 100% job placement
                  guarantee. Thus,
                  al you have to do is get trained
                  and it is on us to get you placed.

                </p>
              </div>
              <div id="section-three" className="mb-50">
                <h3>So, when do you have to pay? Only after you get placed!</h3>
                <hr />
                <p className="mb-20">
                  This is a ‘NO JOB, NO FEE’ program. Hence,
                  if we fail to find the right job for you to begin your career with,
                  you will not have to pay a single penny to us! This is your cue
                  to start your tech journey with DevOps and Cloud Computing today!

                </p>
              </div>
              <div id="section-four" className="mb-50">
                <h3>
                  Change the pace and the outcome of Your career with our newly launched pay after
                  placement program.
                </h3>
                <hr />
                <p className="mb-20">
                  .Are you now wondering what is the
                  program about? The program is for
                  DevOps and Cloud Computing training
                  wherein you get trained at ZERO UPFRONT FEE.
                  This means that you have to pay
                  zero money initially and get
                  the chance to get trained in this course free of cost!

                </p>
              </div>
              <div id="section-five" className="mb-50">
                <h3>We will help you in that too!</h3>
                <hr />
                <p className="mb-20">
                  Our Pay After Placement program comes along
                  our Job Oriented program wherein, we provide you with 100%
                  job placement guarantee.
                  Thus, al you have to do is get trained and it is on us to get you placed

                </p>
              </div>

              <div id="section-six" className="mb-50">
                <h3>
                  So, when do you have to pay?
                  {' '}
                  <span className="text-theme-colored"> Only after you get placed!</span>
                  {' '}

                </h3>
                <hr />
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
      <Query />

    </div>
  );
}

export default Placement;
