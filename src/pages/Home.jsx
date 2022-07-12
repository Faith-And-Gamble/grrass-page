import React from 'react';
// import background from '../components/image/bgDowwn.jpg';
import Query from './Query';
import Pdf from '../components/course_content.pdf';
import Img2 from '../components/image/banner.jpg';
import Img1 from '../components/image/training.jpg';

function Home() {
  return (
    <div className="main-content">
      <section
        className="divider parallax layer-overlay back"
        data-parallax-ratio="0.0"
        style={{ backgroundImage: `url(${Img2})` }}
      >
        <div className="container">
          <div className="row text-center">
            <div
              className="col-md-10 col-md-offset-1 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <p className="text-white" />
              <h2
                className="font-30 text-uppercase text-white mt-0 text-uppercase wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <span className="bharat ">
                  Zero Upfront Fees to Start Your Tech Career.
                </span>
              </h2>
              <p className="text-white">How this Program Work?</p>

              <div className="row" style={{ marginLeft: '120px' }}>
                <ul className="working-process square theme-colored">
                  <li className="col-xs-12 col-sm-2">
                    <a href="/" style={{ pointerEvents: 'none' }} target="_blank">
                      <i className="fa fa-book" />
                    </a>
                    <h5 className="text-white">Enroll</h5>
                  </li>
                  <li className="col-xs-12 col-sm-2">
                    <a href="/" style={{ pointerEvents: 'none' }} target="_blank">
                      <i className="fa fa-shield" />
                    </a>
                    <h5 className="text-white">Selection</h5>
                  </li>
                  <li className="col-xs-12 col-sm-2">
                    <a href="/" style={{ pointerEvents: 'none' }} target="_blank">
                      <i className="fa fa-calendar" />
                    </a>
                    <h5 className="text-white">Training</h5>
                  </li>
                  <li className="col-xs-12 col-sm-2">
                    <a href="/" style={{ pointerEvents: 'none' }} target="_blank">
                      <i className="fa fa-calendar" />
                    </a>
                    <h5 className="text-white">Start Work</h5>
                  </li>
                  <li className="col-xs-12 col-sm-2">
                    <a href="/" style={{ pointerEvents: 'none' }} target="_blank">
                      <i className="fa fa-calendar" />
                    </a>
                    <h5 className="text-white">Pay after Placement</h5>
                  </li>
                </ul>
              </div>
              <div
                className="col-md-10 col-md-offset-1 wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <p className="text-white" />
                <p
                  className="font-20 text-uppercase text-white mt-0 text-uppercase wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  <span className="bharat ">
                    DevOps & Cloud Computing 1 year OFFLINE PROGRAM.
                  </span>
                </p>
                <a
                  className="btn btn-colored btn-flat btn-theme-colored ajaxload-popup pb-10"
                  href={Pdf}
                  download="Aarambh course content"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lighter">
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-md-6">
                <div className="widget">
                  <h5 className="widget-title line-bottom">
                    <b className="text-theme-colored">Enroll</b>
                    {' '}
                    (Who Can Apply)
                  </h5>
                  <ul className="list list-divider list-border">
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        B.Tech
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        M.Tech
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        BCA
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        MCA
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="widget">
                  <h5 className="widget-title line-bottom">
                    <b className="text-theme-colored">Admission</b>
                    {' '}
                    Process
                  </h5>
                  <ul className="list list-divider list-border">
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Attend Expert Session
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        30 Min Program specific competency Test
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Host Personal Interview
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Document Verification & Submission
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="line-bottom line-height-1 mt-0 mt-sm-30">
                  Welcome To GRRASS..!
                </h3>
                <p className="mb-30">
                  A Choice that makes a big difference in your career. Grras
                  Solutions Pvt. Ltd is committed to helping its students to
                  reach their goals and their training experiences, by providing
                  the innovative surroundings and faculties.
                </p>
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="icon-box p-0 mb-30">
                      <a
                        className="icon icon-sm pull-left sm-pull-none flip bg-theme-colored mb-sm-15 mb-0 mr-10"
                        href="/"
                      >
                        <i className="fa fa-clock-o  text-white font-36" />
                      </a>
                      <h4 className="icon-box-title m-0 mb-5">
                        TIME FLEXIBILITY
                      </h4>
                      <p className="text-gray mb-5">
                        With a team of more than 100 + trainers we can provide
                        any time slot and any option
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="icon-box p-0 mb-30">
                      <a
                        className="icon icon-sm pull-left sm-pull-none flip bg-theme-colored mb-sm-15 mb-0 mr-10"
                        href="/"
                      >
                        <i className="fa fa-credit-card text-white font-36" />
                      </a>
                      <h4 className="icon-box-title m-0 mb-5">
                        AFFORDABLE FEES
                      </h4>
                      <p className="text-gray mb-5">
                        We arent cheap , but we provide quality training with
                        justified fees structures.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="icon-box p-0 mb-sm-30">
                      <a
                        className="icon icon-sm pull-left sm-pull-none flip bg-theme-colored mb-sm-15 mb-0 mr-10"
                        href="/"
                      >
                        <i className="fa fa-certificate text-white font-36" />
                      </a>
                      <h4 className="icon-box-title m-0 mb-5">
                        Certified Consultent
                      </h4>
                      <p className="text-gray mb-5">
                        Learning various technologies under the supervision of
                        well trained , expereinced and certified trainers of
                        GRRAS
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="icon-box p-0">
                      <a
                        className="icon icon-sm pull-left sm-pull-none flip bg-theme-colored mb-sm-15 mb-0 mr-10"
                        href="/"
                      >
                        <i className="fa fa-expeditedssl  text-white font-36" />
                      </a>
                      <h4 className="icon-box-title m-0 mb-5">
                        FULL HANDS-ON TRAINING
                      </h4>
                      <p className="text-gray mb-5">
                        Grras focuses on learning modules with practical
                        examples ,live environment and real time projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="divider parallax layer-overlay overlay-dark-6"
        data-bg-img="assets/images/bg/bg4.jpg"
        data-parallax-ratio="0.7"
      >
        <div className="container" style={{ backgroundImage: `url(${Img1})` }}>
          <div className="row text-center">
            <div
              className="col-md-10 col-md-offset-1 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <h2 className="font-36 text-uppercase text-white font-weight-600 mt-0">
                Devops &
                <span className="text-theme-colored">
                  {' '}
                  Cloud Computing 1 Year Offline
                </span>
              </h2>
              <a
                className="btn btn-lg btn-theme-colored mt-20"
                href={Pdf}
                download="Aarambh course content"
                target="_blank"
                rel="noreferrer"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </section>

      <br />
      <section className="bg-lighter">
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-md-6">
                <div className="widget">
                  <h5 className="widget-title line-bottom">
                    <b className="text-theme-colored">Training Highlights</b>
                  </h5>
                  <ul className="list list-divider list-border">
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        6 months hands on practical technical training
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Become and expert in futuristic technologies like Linux,
                        Ansible and Automation, AWS, AZURE, DevOps, Docker and
                        Kubernetes, Jenkins, GIT HUB, terraform, CI-CD pipleine.
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Regular assesment and analysis of candidates.
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Interview preparation
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Exposure of company environment.
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Interview conduction.
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        ISA norms to be started after candidate gets placed.
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Meet our hiring partners
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="line-bottom line-height-1 mt-0 mt-sm-30">
                  Pay after placement and ISA agreement.
                </h3>
                <p className="mb-30">
                  Pay after you get placed. Grras solutions pvt. ltd. provides
                  guidence for Job placement. We will be there with you at
                  everys step of your hiurney.
                </p>
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="icon-box p-0 mb-30">
                      <a
                        className="icon icon-sm pull-left sm-pull-none flip bg-theme-colored mb-sm-15 mb-0 mr-10"
                        href="/"
                      >
                        <i className="fa fa-clock-o  text-white font-36" />
                      </a>
                      <h4 className="icon-box-title m-0 mb-5">
                        TIME FLEXIBILITY
                      </h4>
                      <p className="text-gray mb-5">
                        With a team of more than 100 + trainers we can provide
                        any time slot and any option
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="icon-box p-0 mb-30">
                      <a
                        className="icon icon-sm pull-left sm-pull-none flip bg-theme-colored mb-sm-15 mb-0 mr-10"
                        href="/"
                      >
                        <i className="fa fa-credit-card text-white font-36" />
                      </a>
                      <h4 className="icon-box-title m-0 mb-5">
                        AFFORDABLE FEES
                      </h4>
                      <p className="text-gray mb-5">
                        We are not cheap , but we provide quality training with
                        justified fees structures.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="icon-box p-0 mb-sm-30">
                      <a
                        className="icon icon-sm pull-left sm-pull-none flip bg-theme-colored mb-sm-15 mb-0 mr-10"
                        href="/"
                      >
                        <i className="fa fa-certificate text-white font-36" />
                      </a>
                      <h4 className="icon-box-title m-0 mb-5">
                        Certified Consultent
                      </h4>
                      <p className="text-gray mb-5">
                        Learning various technologies under the supervision of
                        well trained , expereinced and certified trainers of
                        GRRAS
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="icon-box p-0">
                      <a
                        className="icon icon-sm pull-left sm-pull-none flip bg-theme-colored mb-sm-15 mb-0 mr-10"
                        href="/"
                      >
                        <i className="fa fa-expeditedssl  text-white font-36" />
                      </a>
                      <h4 className="icon-box-title m-0 mb-5">
                        FULL HANDS-ON TRAINING
                      </h4>
                      <p className="text-gray mb-5">
                        Grras focuses on learning modules with practical
                        examples ,live environment and real time projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Query />
    </div>
  );
}

export default Home;
