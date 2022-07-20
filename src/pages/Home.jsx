/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
// import background from '../components/image/bgDowwn.jpg';
import Query from './Query';
// import Pdf from '../components/course_content.pdf';
import Img2 from '../components/image/banner.jpg';
import Img1 from '../components/image/slider.jpeg';
import 'react-responsive-modal/styles.css';
import MForm from '../components/Includes/ModalForm';
import useWindowDimensions from '../components/Includes/DeviceWidth';

function Home() {
  const { height, width } = useWindowDimensions();
  const res = width > 450 ? '120px' : '0px';
  console.log(height, res);
  const [modalDisplay, setModalDisplay] = useState(false);
  const onOpenModal = () => {
    setModalDisplay(true);
  };

  const onCloseModal = () => {
    setModalDisplay(false);
  };
  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };
  return (
    <div className="main-content">
      <section
        className="divider layer-overlay back"
        data-parallax-ratio="0.0"
        style={{ backgroundImage: `url(${Img2})`, width: '100%' }}
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

              <div className="row" style={{ marginLeft: res }}>
                <ul className="working-process square theme-colored">
                  <li className="col-xs-12 col-sm-2">
                    <a
                      href="/"
                      style={{ pointerEvents: 'none' }}
                      target="_blank"
                    >
                      <i className="fa fa-book" />
                    </a>
                    <h5 className="text-white">Enroll</h5>
                  </li>
                  <li className="col-xs-12 col-sm-2">
                    <a
                      href="/"
                      style={{ pointerEvents: 'none' }}
                      target="_blank"
                    >
                      <i className="fa fa-shield" />
                    </a>
                    <h5 className="text-white">Selection</h5>
                  </li>
                  <li className="col-xs-12 col-sm-2">
                    <a
                      href="/"
                      style={{ pointerEvents: 'none' }}
                      target="_blank"
                    >
                      <i className="fa fa-calendar" />
                    </a>
                    <h5 className="text-white">Training</h5>
                  </li>
                  <li className="col-xs-12 col-sm-2">
                    <a
                      href="/"
                      style={{ pointerEvents: 'none' }}
                      target="_blank"
                    >
                      <i className="fa fa-calendar" />
                    </a>
                    <h5 className="text-white">Start Work</h5>
                  </li>
                  <li className="col-xs-12 col-sm-2">
                    <a
                      href="/"
                      style={{ pointerEvents: 'none' }}
                      target="_blank"
                    >
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
                    DevOps & Cloud Computing 26 weeks classroom training.
                  </span>
                </p>
                {/* <a
                  className="btn btn-colored btn-flat btn-theme-colored ajaxload-popup pb-10"
                  href={Pdf}
                  download="Aarambh course content"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore
                </a> */}
                <button type="button" className="btn btn-colored btn-flat btn-theme-colored ajaxload-popup pb-10" onClick={onOpenModal}>Explore</button>
                <div style={styles}>
                  <Modal open={modalDisplay} onClose={onCloseModal}>
                    <MForm />
                  </Modal>
                </div>
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
                  Welcome To GRRAS..!
                </h3>
                <p className="mb-30">
                  Make the choice that matters! Grras Solutions is a pioneer in
                  its field, ensuring students get the maximum benefit from
                  getting trained and certified with us. We provide world class
                  facilities to students including innovative surroundings and
                  facilities.
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
                      <h6 className="icon-box-title m-0 mb-5">
                        Dedicated Trainers
                      </h6>
                      <hr />
                      <p className="text-gray mb-5">
                        With Grras Solutions, what you get is the assurance of
                        having learnt from the very best in the field. With the
                        right guidance, you can dream big and achieve bigger.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="icon-box p-0">
                      <a
                        className="icon icon-sm pull-left sm-pull-none flip bg-theme-colored mb-sm-15 mb-0 mr-10"
                        href="/"
                      >
                        <i className="fa fa-thumbs-up  text-white font-36" />
                      </a>
                      <h6 className="icon-box-title m-0 mb-5">
                        100% Placement Training
                      </h6>
                      <hr />
                      <p className="text-gray mb-4">
                        We give you 100% placement oriented training with our
                        Pay After Placement program to help you jump right onto
                        the wagon leading to success. No more delays in winning!
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
                      <h6 className="icon-box-title m-0 mb-5">
                        Transparent Terms
                      </h6>
                      <hr />
                      <p className="text-gray mb-2">
                        We help you rise high in your life by giving you
                        transparent terms and conditions. Everything has a glass
                        ceiling and you will have knowledge to everything at all
                        times.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="icon-box p-0">
                      <a
                        className="icon icon-sm pull-left sm-pull-none flip bg-theme-colored mb-sm-15 mb-0 mr-10"
                        href="/"
                      >
                        <i className="fa fa-graduation-cap  text-white font-36" />
                      </a>
                      <h6 className="icon-box-title m-0 mb-5">
                        Hands-on Training
                      </h6>
                      <hr />
                      <p className="text-gray mb-5">
                        Learn by doing and not reading. It is when we do
                        something that we retain it the most and that is our
                        policy at Grras Solutions. Work on live projects for the
                        best understanding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="main-content">
        <section
          className="divider parallax dark"
        // data-bg-img="assets/images/bg/bg4.jpg"
          data-parallax-ratio="0.0"
        >
          <div className="container">

            <div className="row text-center">
              <div
                className="col-md-12 col-md-offset-0.5 wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <img src={Img1} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
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
                        1-year hands-on training via live projects
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Become an expert in DevOps and Cloud Computing
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        100% job placement guarantee
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Interview preparation + soft skills and personality development sessions
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Regular assessments and assignments
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Exposure to real-world working
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Crystal clear norms and conditions.
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
                  Pay after Placement
                </h3>
                <p className="mb-30">
                  Pay only if you get a job with package more than 3 lakhs per
                  annum. Grras Solutions’ Pay After Placement Program help you
                  find the right path to begin your career in DevOps & Cloud
                  Computing. We guide you to success!
                </p>
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="icon-box p-0">
                      <a
                        className="icon icon-sm pull-left sm-pull-none flip bg-theme-colored mb-sm-15 mb-0 mr-10"
                        href="/"
                      >
                        <i className="fa fa-graduation-cap  text-white font-36" />
                      </a>
                      <h6 className="icon-box-title m-0 mb-5">
                        Systematic & Easy Instalments
                      </h6>
                      <hr />
                      <p className="text-gray mb-5">
                        Even when you start paying, your payments will be in a
                        monthly format for a fixed period of time, all of which
                        will be pre-decided and disclosed.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="icon-box p-0 mb-30">
                      <a
                        className="icon icon-sm pull-left sm-pull-none flip bg-theme-colored mb-sm-15 mb-0 mr-10"
                        href="/"
                      >
                        <i className="fa fa-clock-o  text-white font-36" />
                      </a>
                      <h6 className="icon-box-title m-0 mb-5">
                        Job Oriented Program
                      </h6>
                      <hr />
                      <p className="text-gray mb-5">
                        Get 100% placement oriented training by us and stay at
                        ease when it comes to settling down. Our experts will
                        help you find the right job.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="icon-box p-0">
                      <a
                        className="icon icon-sm pull-left sm-pull-none flip bg-theme-colored mb-sm-15 mb-0 mr-10"
                        href="/"
                      >
                        <i className="fa fa-thumbs-up  text-white font-36" />
                      </a>
                      <h6 className="icon-box-title m-0 mb-5">
                        Seasoned Trainer
                      </h6>
                      <hr />
                      <p className="text-gray mb-4">
                        You will be trained by one of the best in the country
                        with 13+ years of training experience in DevOps and
                        Cloud Computing.
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
                      <h6 className="icon-box-title m-0 mb-5">
                        Zero Upfront Fee
                      </h6>
                      <hr />
                      <p className="text-gray mb-2">
                        Your training will begin at zero upfront fee. Thus, you
                        will not be charged anything until you start earning
                        from the job that we help you find.
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
